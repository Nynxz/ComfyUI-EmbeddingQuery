"""Per-folder embedding indexes over ComfyUI's input and output directories.

A *folder* key is a root plus a relative path: "input", "input/poses", "output", "output/2026-11".
Its index covers the supported files directly inside it, not its subfolders, so nested folders
never double-count and each can be searched or skipped on its own. A file's ref is
"<folder>/<name>", which is also the media-ref form nodekit uses.

Indexes live outside both roots, in `<user>/embeddingquery/indexes/<model>/<id>.{json,npy}`:

    json  {version, folder, model, dim, updated, items: [{name, kind, size, mtime}], failed: [..]}
    npy   float16 [len(items), 768], L2-normalised, row i = items[i]

Re-indexing is incremental: rows of files whose size and mtime are unchanged are kept.
"""

from __future__ import annotations

import hashlib
import json
import os
import threading
import time
from dataclasses import dataclass, field

import folder_paths
import numpy as np

from . import _runtime as rt

VERSION = 1
SKIP_DIRS = {"__pycache__", "node_modules"}
MAX_DEPTH = 8
SAVE_EVERY = 32  # files embedded between partial saves, so a cancelled run keeps its work


ROOTS = {
    "input": folder_paths.get_input_directory,
    "output": folder_paths.get_output_directory,
}


def root_dir(root: str) -> str:
    return os.path.realpath(ROOTS[root]())


def normalize_folder(folder: str) -> str:
    """Folder keys from before output/ was a root were relative to input/ ("" = input/)."""
    folder = folder.strip("/")
    root = folder.split("/", 1)[0]
    if root in ROOTS:
        return folder
    return f"input/{folder}" if folder else "input"


def folder_abs(folder: str) -> str:
    """Folder key -> absolute path, refusing anything outside its root."""
    root_name, _, rel = folder.partition("/")
    if root_name not in ROOTS:
        raise ValueError(f"not an input/ or output/ folder: {folder!r}")
    root = root_dir(root_name)
    lexical = os.path.normpath(os.path.join(root, rel)) if rel else root
    path = os.path.realpath(lexical)
    # symlinked folders inside a root are fine (that's how a library is linked in); `..` is not
    if (lexical == root or lexical.startswith(root + os.sep)) and os.path.isdir(path):
        return path
    raise ValueError(f"not a folder under {root_name}/: {folder!r}")


def kind_of(name: str) -> str | None:
    ext = os.path.splitext(name)[1].lower()
    if ext in rt.IMAGE_EXTS:
        return "image"
    if ext in rt.TEXT_EXTS:
        return "text"
    return None


def list_files(folder: str) -> dict[str, tuple[str, int, float]]:
    """name -> (kind, size, mtime) for the supported files directly in `folder`."""
    out = {}
    with os.scandir(folder_abs(folder)) as it:
        for e in it:
            if e.name.startswith(".") or not e.is_file():
                continue
            k = kind_of(e.name)
            if k:
                st = e.stat()
                out[e.name] = (k, st.st_size, round(st.st_mtime, 3))
    return out


def scan_tree() -> list[dict]:
    """Every folder under input/ and output/ that holds supported files (or has a descendant that
    does): [{path, images, texts}], parents before children. Both roots are always listed."""
    seen: set[str] = set()
    rows: list[dict] = []

    def walk(abs_path: str, rel: str, depth: int) -> bool:
        real = os.path.realpath(abs_path)
        if real in seen or depth > MAX_DEPTH:
            return False
        seen.add(real)
        images = texts = 0
        subdirs = []
        try:
            with os.scandir(abs_path) as it:
                for e in it:
                    if e.name.startswith("."):
                        continue
                    try:
                        if e.is_dir():
                            if e.name not in SKIP_DIRS:
                                subdirs.append(e.name)
                        elif e.is_file():
                            k = kind_of(e.name)
                            images += k == "image"
                            texts += k == "text"
                    except OSError:
                        continue
        except OSError:
            return False
        row = {"path": rel, "images": images, "texts": texts}
        at = len(rows)
        rows.append(row)
        any_child = False
        for d in sorted(subdirs, key=str.lower):
            any_child |= walk(os.path.join(abs_path, d), f"{rel}/{d}", depth + 1)
        if not (images or texts or any_child) and depth > 0:
            rows.pop(at)
            return False
        return True

    for name in ROOTS:
        walk(root_dir(name), name, 0)
    return rows


# ----- index files -----------------------------------------------------------------------------


def index_dir(model: str) -> str:
    return os.path.join(
        folder_paths.get_user_directory(), "embeddingquery", "indexes", rt.model_tag(model)
    )


def _paths(model: str, folder: str) -> tuple[str, str]:
    h = hashlib.sha1(folder.encode("utf-8")).hexdigest()[:16]
    base = os.path.join(index_dir(model), h)
    return base + ".json", base + ".npy"


@dataclass
class Index:
    folder: str
    model: str
    items: list[dict] = field(default_factory=list)
    emb: np.ndarray = field(default_factory=lambda: np.zeros((0, 768), np.float16))
    failed: list[str] = field(default_factory=list)
    updated: float = 0.0


_LOADED: dict[tuple[str, str], tuple[float, Index]] = {}
_LOADED_LOCK = threading.Lock()


def _migrate_legacy(model: str, folder: str) -> None:
    """Indexes written before output/ was a root were keyed relative to input/ ("" = input/).
    Move one to its new key the first time it's asked for."""
    if folder != "input" and not folder.startswith("input/"):
        return
    old_meta, old_emb = _paths(model, folder[len("input/") :] if "/" in folder else "")
    new_meta, new_emb = _paths(model, folder)
    if not os.path.exists(old_meta) or os.path.exists(new_meta):
        return
    try:
        with open(old_meta, encoding="utf-8") as f:
            meta = json.load(f)
        meta["folder"] = folder
        os.replace(old_emb, new_emb)
        with open(new_meta + ".tmp", "w", encoding="utf-8") as f:
            json.dump(meta, f, ensure_ascii=False)
        os.replace(new_meta + ".tmp", new_meta)
        os.remove(old_meta)
    except (OSError, ValueError) as e:
        print(f"{rt.LOG} could not migrate the index of {folder!r}: {e}")


def read_index(model: str, folder: str) -> Index | None:
    meta_p, emb_p = _paths(model, folder)
    if not os.path.exists(meta_p):
        _migrate_legacy(model, folder)
    try:
        mtime = os.path.getmtime(meta_p)
    except OSError:
        return None
    key = (model, folder)
    with _LOADED_LOCK:
        hit = _LOADED.get(key)
        if hit and hit[0] == mtime:
            return hit[1]
    try:
        with open(meta_p, encoding="utf-8") as f:
            meta = json.load(f)
        emb = np.load(emb_p)
    except (OSError, ValueError) as e:
        print(f"{rt.LOG} unreadable index for {folder!r}: {e}")
        return None
    if meta.get("version") != VERSION or len(meta["items"]) != len(emb):
        return None
    idx = Index(folder, model, meta["items"], emb, meta.get("failed", []), meta.get("updated", 0))
    with _LOADED_LOCK:
        _LOADED[key] = (mtime, idx)
    return idx


def write_index(idx: Index) -> None:
    meta_p, emb_p = _paths(idx.model, idx.folder)
    os.makedirs(os.path.dirname(meta_p), exist_ok=True)
    idx.updated = time.time()
    # npy first, json last: the json's mtime is what readers key on
    tmp = emb_p + ".tmp.npy"
    np.save(tmp, idx.emb.astype(np.float16))
    os.replace(tmp, emb_p)
    meta = {
        "version": VERSION,
        "folder": idx.folder,
        "model": idx.model,
        "dim": int(idx.emb.shape[1]) if idx.emb.ndim == 2 else 768,
        "updated": idx.updated,
        "items": idx.items,
        "failed": idx.failed,
    }
    with open(meta_p + ".tmp", "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False)
    os.replace(meta_p + ".tmp", meta_p)


def delete_index(model: str, folder: str) -> None:
    for p in _paths(model, folder):
        if os.path.exists(p):
            os.remove(p)
    with _LOADED_LOCK:
        _LOADED.pop((model, folder), None)


def status(model: str, folder: str, files: dict | None = None) -> dict:
    """{state: none|ready|stale, indexed, new, changed, removed, failed, updated}."""
    idx = read_index(model, folder)
    if idx is None:
        return {"state": "none", "indexed": 0}
    files = list_files(folder) if files is None else files
    known = {it["name"]: it for it in idx.items}
    failed = set(idx.failed)
    new = changed = 0
    for name, (_, size, mtime) in files.items():
        it = known.get(name)
        if it is None:
            new += name not in failed
        elif it["size"] != size or it["mtime"] != mtime:
            changed += 1
    removed = sum(1 for n in known if n not in files)
    stale = new or changed or removed
    return {
        "state": "stale" if stale else "ready",
        "indexed": len(idx.items),
        "new": new,
        "changed": changed,
        "removed": removed,
        "failed": len(idx.failed),
        "updated": idx.updated,
    }


def build(
    loaded: rt.Loaded,
    folder: str,
    full: bool = False,
    progress=None,
    should_stop=lambda: False,
    batch: int = 16,
) -> Index:
    """(Re)index one folder. `progress(done, total, name)`; `should_stop()` ends early, keeping the
    rows embedded so far."""
    files = list_files(folder)
    old = None if full else read_index(loaded.name, folder)
    keep_items, keep_rows = [], []
    if old is not None:
        for row, it in enumerate(old.items):
            f = files.get(it["name"])
            if f and f[1] == it["size"] and f[2] == it["mtime"]:
                keep_items.append(it)
                keep_rows.append(row)
    kept = {it["name"] for it in keep_items}
    todo = sorted(n for n in files if n not in kept)
    base = folder_abs(folder)

    items = list(keep_items)
    rows = [old.emb[keep_rows].astype(np.float32)] if old is not None and keep_rows else []
    failed: list[str] = []
    since_save = 0

    def snapshot() -> Index:
        emb = np.concatenate(rows) if rows else np.zeros((0, 768), np.float32)
        return Index(folder, loaded.name, list(items), emb.astype(np.float16), list(failed))

    total = len(todo)
    if progress:
        progress(0, total, "")
    for s in range(0, total, batch):
        if should_stop():
            break
        if not rt.wait_for_idle_queue(should_stop=should_stop):
            break
        names = todo[s : s + batch]
        kinds = [files[n][0] for n in names]
        vecs = rt.encode_files(loaded, [os.path.join(base, n) for n in names], kinds)
        ok = np.isfinite(vecs).all(axis=1)
        for n, good in zip(names, ok, strict=True):
            if good:
                k, size, mtime = files[n]
                items.append({"name": n, "kind": k, "size": size, "mtime": mtime})
            else:
                failed.append(n)
        rows.append(vecs[ok])
        since_save += len(names)
        if since_save >= SAVE_EVERY:
            write_index(snapshot())
            since_save = 0
        if progress:
            progress(min(s + batch, total), total, names[-1])
    idx = snapshot()
    write_index(idx)
    return idx


# ----- search ----------------------------------------------------------------------------------


def _truncate(m: np.ndarray, dim: int) -> np.ndarray:
    m = m[..., :dim].astype(np.float32)
    n = np.linalg.norm(m, axis=-1, keepdims=True)
    return m / np.maximum(n, 1e-12)


def search(
    model: str,
    folders: list[str],
    query: np.ndarray,
    top_k: int = 24,
    kind: str = "all",
    dim: int = 768,
    exclude=(),
    combine: str = "mean",
) -> list[dict]:
    """Rank the files of `folders` against `query`: one embedding [768] or several [m, 768].
    Several are combined with `combine`:

    - "mean": their normalised centroid, i.e. what the queries have in common
    - "any":  each file's best match among them, i.e. like any one of them (OR)

    Hits: {ref, folder, name, kind, score}; `ref` is "<folder>/<name>"."""
    queries = _truncate(np.atleast_2d(query), dim)
    if combine == "any" and len(queries) > 1:
        q = queries.T  # [dim, m] -> max over queries below
    else:
        q = _truncate(queries.mean(axis=0, keepdims=True), dim)[0]
    exclude = {exclude} if isinstance(exclude, str) else set(exclude or ())
    hits: list[tuple[float, str, dict]] = []
    for folder in folders:
        idx = read_index(model, folder)
        if idx is None or not len(idx.items):
            continue
        scores = _truncate(idx.emb, dim) @ q
        if scores.ndim == 2:
            scores = scores.max(axis=1)
        for row in np.argsort(-scores)[: top_k * 2 + 1]:
            it = idx.items[row]
            if kind != "all" and it["kind"] != kind:
                continue
            ref = ref_of(folder, it["name"])
            if ref in exclude:
                continue
            hits.append((float(scores[row]), folder, it))
    hits.sort(key=lambda h: -h[0])
    return [
        {
            "ref": ref_of(f, it["name"]),
            "folder": f,
            "name": it["name"],
            "kind": it["kind"],
            "score": round(s, 4),
        }
        for s, f, it in hits[:top_k]
    ]


def ref_of(folder: str, name: str) -> str:
    return f"{folder}/{name}"


def split_ref(ref: str) -> tuple[str, str]:
    folder, _, name = ref.rpartition("/")
    if folder.split("/", 1)[0] not in ROOTS:
        raise ValueError(f"not an input/ or output/ file: {ref!r}")
    return folder, name


def stored_embeddings(model: str, refs: list[str]) -> np.ndarray:
    """[m, 768] for the indexed refs among `refs`; raises LookupError when none is indexed."""
    rows = [v for r in refs if (v := stored_embedding(model, r)) is not None]
    if not rows:
        raise LookupError("none of the similar-to files is indexed")
    return np.stack(rows)


def stored_embedding(model: str, ref: str) -> np.ndarray | None:
    folder, name = split_ref(ref)
    idx = read_index(model, folder)
    if idx is None:
        return None
    for row, it in enumerate(idx.items):
        if it["name"] == name:
            return idx.emb[row].astype(np.float32)
    return None


def ref_path(ref: str) -> str:
    folder, name = split_ref(ref)
    if "/" in name or name in ("", ".", ".."):
        raise ValueError(f"bad file name in {ref!r}")
    path = os.path.join(folder_abs(folder), name)
    if not os.path.isfile(path):
        raise FileNotFoundError(f"{ref} no longer exists")
    return path


def fingerprint(model: str, folders: list[str]) -> str:
    """Changes whenever any of these folders' indexes is rewritten (for node cache invalidation)."""
    parts = []
    for f in folders:
        meta_p, _ = _paths(model, f)
        try:
            parts.append(f"{f}:{os.path.getmtime(meta_p)}")
        except OSError:
            parts.append(f"{f}:-")
    return "|".join(parts)
