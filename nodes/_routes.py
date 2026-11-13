"""HTTP routes behind the on-node search UI (all under /embeddingquery/).

GET  models                      {"models": [name]}
GET  folders?model=              {"folders": [{path, images, texts, status}], "job": {...}}
POST index   {model, folders, full?}   queue folders for (re)indexing
POST index/cancel                stop the running job, drop the queue
POST index/delete {model, folder}
GET  job                         the indexing job's state (also pushed as `embeddingquery.index`)
POST search  {model, folders, text?, similar?: [ref], combine?, top_k?, kind?, dim?}   {"hits", "ms"}
GET  thumb?ref=&size=            JPEG thumbnail of an input image
GET  file?ref=                   the file itself
GET  text?ref=                   {"text"} (first 4000 chars)

Folder keys are "input", "input/<sub>", "output", "output/<sub>"; a file ref is "<folder>/<name>".
Symlinked folders inside a root are allowed on purpose: linking a library into input/ is how you
make it searchable.
"""

from __future__ import annotations

import asyncio
import io
import os
import threading
import time
import urllib.parse
from collections import OrderedDict

from aiohttp import web
from PIL import Image, ImageOps

from . import _index as ix
from . import _runtime as rt
from ._zenkit.jobs import Job
from ._zenkit.server import request_allowed, route, routes, send

EVENT = "embeddingquery.index"


# ----- indexing worker -------------------------------------------------------------------------


class Indexer:
    def __init__(self):
        self.lock = threading.Lock()
        self.queue: list[tuple[str, str, bool]] = []
        self.thread: threading.Thread | None = None
        self.stop = False
        self.state = {
            "running": False,
            "folder": None,
            "done": 0,
            "total": 0,
            "queued": [],
            "error": None,
            "finished": None,
        }

    def snapshot(self) -> dict:
        with self.lock:
            return {**self.state, "queued": [f for _, f, _ in self.queue]}

    def _push(self, **kw):
        with self.lock:
            self.state.update(kw)
        send(EVENT, self.snapshot())

    def enqueue(self, model: str, folders: list[str], full: bool) -> None:
        with self.lock:
            current = self.state["folder"] if self.state["running"] else None
            for f in folders:
                if f != current and all(q[1] != f for q in self.queue):
                    self.queue.append((model, f, full))
            self.stop = False
            if self.thread is None or not self.thread.is_alive():
                self.thread = threading.Thread(
                    target=self._run, name="embeddingquery-index", daemon=True
                )
                self.thread.start()
        send(EVENT, self.snapshot())

    def cancel(self) -> None:
        with self.lock:
            self.queue.clear()
            self.stop = True
        send(EVENT, self.snapshot())

    def _run(self):
        while True:
            with self.lock:
                if not self.queue:
                    self.state.update(running=False, folder=None)
                    break
                model, folder, full = self.queue.pop(0)
                self.state.update(running=True, folder=folder, done=0, total=0, error=None)
            send(EVENT, self.snapshot())
            label = folder
            job = Job(f"Index {label}")
            try:
                loaded = rt.load(model)
                last = [0.0]

                def progress(done, total, name, job=job, last=last):
                    job.total = total
                    job.update(current=done, message=name)
                    now = time.monotonic()
                    if now - last[0] > 0.25 or done == total:
                        last[0] = now
                        self._push(done=done, total=total)

                idx = ix.build(
                    loaded, folder, full=full, progress=progress, should_stop=lambda: self.stop
                )
                job.done()
                print(
                    f"{rt.LOG} indexed {label}: {len(idx.items)} files ({len(idx.failed)} failed)"
                )
            except Exception as e:  # noqa: BLE001 — report and carry on with the queue
                job.fail(str(e))
                print(f"{rt.LOG} indexing {label} failed: {e}")
                self._push(error=f"{label}: {e}")
            self._push(finished=time.time())
        send(EVENT, self.snapshot())


INDEXER = Indexer()


# ----- thumbnails ------------------------------------------------------------------------------

_THUMBS: OrderedDict[tuple, bytes] = OrderedDict()
_THUMBS_MAX = 2000


def _thumb(path: str, size: int) -> bytes:
    st = os.stat(path)
    key = (path, st.st_mtime, st.st_size, size)
    if key in _THUMBS:
        _THUMBS.move_to_end(key)
        return _THUMBS[key]
    with Image.open(path) as im:
        im = ImageOps.exif_transpose(im)
        im.draft("RGB", (size * 2, size * 2))
        im = im.convert("RGB")
        im.thumbnail((size, size), Image.Resampling.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=82)
    data = buf.getvalue()
    _THUMBS[key] = data
    if len(_THUMBS) > _THUMBS_MAX:
        _THUMBS.popitem(last=False)
    return data


_IMAGE_TYPES = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".bmp": "image/bmp",
    ".tif": "image/tiff",
    ".tiff": "image/tiff",
}


def _media_type(name: str) -> str:
    """Every indexed text kind (.txt/.md/.json/.yaml/.csv/.caption) as plain UTF-8 text, so the
    browser shows it instead of offering a download."""
    ext = os.path.splitext(name)[1].lower()
    return _IMAGE_TYPES.get(ext, "text/plain; charset=utf-8")


def _bad(msg: str, status: int = 400):
    return web.json_response({"error": msg}, status=status)


if routes is not None:

    @routes.get(route("models"))
    async def models(_request):
        return web.json_response({"models": rt.model_names()})

    @routes.get(route("folders"))
    async def folders(request):
        model = request.query.get("model", "")

        def work():
            rows = ix.scan_tree()
            for r in rows:
                try:
                    r["status"] = (
                        ix.status(model, r["path"]) if model else {"state": "none", "indexed": 0}
                    )
                except (OSError, ValueError) as e:
                    r["status"] = {"state": "none", "indexed": 0, "error": str(e)}
            return rows

        rows = await asyncio.to_thread(work)
        return web.json_response({"folders": rows, "job": INDEXER.snapshot()})

    @routes.get(route("job"))
    async def job(_request):
        return web.json_response(INDEXER.snapshot())

    @routes.post(route("index"))
    async def index(request):
        if (denied := request_allowed(request)) is not None:
            return denied
        body = await request.json()
        model = body.get("model")
        folders_ = [ix.normalize_folder(str(f)) for f in body.get("folders") or []]
        if model not in rt.model_names():
            return _bad(f"unknown model {model!r}")
        try:
            for f in folders_:
                ix.folder_abs(f)
        except ValueError as e:
            return _bad(str(e))
        INDEXER.enqueue(model, list(folders_), bool(body.get("full")))
        return web.json_response(INDEXER.snapshot())

    @routes.post(route("index/cancel"))
    async def index_cancel(request):
        if (denied := request_allowed(request)) is not None:
            return denied
        INDEXER.cancel()
        return web.json_response(INDEXER.snapshot())

    @routes.post(route("index/delete"))
    async def index_delete(request):
        if (denied := request_allowed(request)) is not None:
            return denied
        body = await request.json()
        ix.delete_index(
            str(body.get("model", "")), ix.normalize_folder(str(body.get("folder", "")))
        )
        return web.json_response({"ok": True})

    @routes.post(route("search"))
    async def search(request):
        if (denied := request_allowed(request)) is not None:
            return denied
        body = await request.json()
        model = body.get("model")
        if model not in rt.model_names():
            return _bad(f"unknown model {model!r}")
        folders_ = [ix.normalize_folder(str(f)) for f in body.get("folders") or []]
        top_k = max(1, min(int(body.get("top_k", 24)), 500))
        kind = body.get("kind", "all")
        dim = int(body.get("dim", 768))
        text = str(body.get("text") or "")
        similar = body.get("similar") or []
        similar = [similar] if isinstance(similar, str) else [str(r) for r in similar]
        combine = body.get("combine", "mean")

        def work():
            t = time.perf_counter()
            if similar:
                q = ix.stored_embeddings(model, similar)
            else:
                if not text.strip():
                    return {"hits": [], "ms": 0}
                if not rt.wait_for_idle_queue(timeout=20):
                    raise TimeoutError(
                        "a prompt is running; search when it finishes, or queue the node"
                    )
                q = rt.encode_queries(rt.load(model), [rt.Query(text=text)])[0]
            hits = ix.search(
                model,
                folders_,
                q,
                top_k=top_k,
                kind=kind,
                dim=dim,
                exclude=similar,
                combine=combine,
            )
            return {"hits": hits, "ms": round((time.perf_counter() - t) * 1000)}

        try:
            return web.json_response(await asyncio.to_thread(work))
        except TimeoutError as e:
            return _bad(str(e), 409)
        except (LookupError, FileNotFoundError, ValueError) as e:
            return _bad(str(e))

    def _ref_path(request):
        return ix.ref_path(request.query.get("ref", ""))

    @routes.get(route("thumb"))
    async def thumb(request):
        try:
            path = _ref_path(request)
            size = max(32, min(int(request.query.get("size", 256)), 1024))
            if ix.kind_of(path) != "image":
                return _bad("not an image")
            data = await asyncio.to_thread(_thumb, path, size)
        except (ValueError, FileNotFoundError, OSError) as e:
            return _bad(str(e), 404)
        return web.Response(
            body=data, content_type="image/jpeg", headers={"Cache-Control": "max-age=3600"}
        )

    @routes.get(route("file"))
    async def file(request):
        try:
            path = _ref_path(request)
        except (ValueError, FileNotFoundError) as e:
            return _bad(str(e), 404)
        # Shown in a tab, never downloaded: an explicit type (Python's table lacks .webp on some
        # systems, which made it application/octet-stream) and an inline disposition with the
        # real name (else a save would be called "file", after the route).
        name = os.path.basename(path)
        quoted = urllib.parse.quote(name)
        return web.FileResponse(
            path,
            headers={
                "Content-Type": _media_type(name),
                "Content-Disposition": f"inline; filename*=UTF-8''{quoted}",
            },
        )

    @routes.get(route("text"))
    async def text(request):
        try:
            path = _ref_path(request)
            body = await asyncio.to_thread(rt.read_text, path, 4000)
        except (ValueError, FileNotFoundError, OSError) as e:
            return _bad(str(e), 404)
        return web.json_response({"text": body})
