"""Loading EmbeddingGemma 2 and encoding with it.

The model lives in ComfyUI's `text_encoders` folder, normally as the single file from
huggingface.co/nynxz/embeddinggemma-2 (text + vision, bf16, tokenizer embedded; made by
`scripts/convert.py`). Google's raw `model.safetensors` with its `tokenizer.json` beside it also
loads. It is wrapped in a `ModelPatcher`, so
ComfyUI's model management loads and offloads it like any other model.

Everything that touches the model goes through `encode_*` under `MODEL_LOCK`. Routes (live search,
indexing) run off the prompt thread, so they call `wait_for_idle_queue()` first: the model is only
used from a route while no prompt is executing.
"""

from __future__ import annotations

import os
import threading
import time
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass

import comfy.model_management as mm
import comfy.model_patcher
import comfy.ops
import comfy.utils
import folder_paths
import numpy as np
import torch
from PIL import Image, ImageOps

from . import _egemma2 as eg

LOG = "[EmbeddingQuery]"
MODEL_FOLDER = "text_encoders"
MODEL_LOCK = threading.RLock()
# Queries waiting for the model. Indexing yields to them between batches, so typing a search while
# a folder indexes answers after at most one batch instead of after the whole folder.
_query_waiters = 0
_waiters_lock = threading.Lock()

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".bmp", ".gif", ".tif", ".tiff"}
TEXT_EXTS = {".txt", ".md", ".json", ".caption", ".csv", ".yaml", ".yml"}

#: Text documents are cut to this many tokens (the model's context is 8192).
MAX_TEXT_TOKENS = 2048


def model_names() -> list[str]:
    names = folder_paths.get_filename_list(MODEL_FOLDER)
    return sorted(n for n in names if "embeddinggemma" in n.lower() and n.endswith(".safetensors"))


def model_tag(name: str) -> str:
    """Filesystem-safe id for a model, used to keep indexes of different models apart."""
    base = name.replace("\\", "/")
    if base.endswith("/model.safetensors"):
        base = base[: -len("/model.safetensors")]
    base = os.path.splitext(base)[0]
    return "".join(c if c.isalnum() or c in "-_." else "_" for c in base)


class _Tokenizer:
    def __init__(self, data: bytes):
        from tokenizers import Tokenizer

        self.tok = Tokenizer.from_str(data.decode("utf-8"))

    def ids(self, text: str, limit: int | None = None) -> list[int]:
        ids = self.tok.encode(text, add_special_tokens=False).ids
        return ids[:limit] if limit else ids


@dataclass
class Loaded:
    name: str
    patcher: comfy.model_patcher.ModelPatcher
    tokenizer: _Tokenizer

    @property
    def model(self) -> eg.EmbeddingGemma2:
        return self.patcher.model  # type: ignore[return-value]


_CACHE: dict[str, Loaded] = {}


def load(name: str) -> Loaded:
    with MODEL_LOCK:
        if name in _CACHE:
            return _CACHE[name]
        path = folder_paths.get_full_path(MODEL_FOLDER, name)
        if not path:
            raise FileNotFoundError(f"EmbeddingGemma 2 model not found: {name}")
        sd = comfy.utils.load_torch_file(path, safe_load=True)
        tok_bytes = _tokenizer_bytes(sd, path)
        sd = eg.convert_state_dict(sd)
        has_vision = any(k.startswith("vision_model.") for k in sd)

        load_device = mm.text_encoder_device()
        offload_device = mm.text_encoder_offload_device()
        # fp16 overflows in this model (NaNs); bf16 where the device has it, else fp32.
        dtype = torch.bfloat16 if mm.should_use_bf16(load_device) else torch.float32
        model = eg.EmbeddingGemma2(
            device=offload_device, dtype=dtype, operations=comfy.ops.manual_cast, vision=has_vision
        )
        missing, unexpected = model.load_state_dict(sd, strict=False)
        missing = [k for k in missing if not k.endswith(("_max", "_min"))]
        if missing or unexpected:
            print(f"{LOG} {name}: missing {missing[:8]}, unexpected {unexpected[:8]}")
        model.eval()
        patcher = comfy.model_patcher.ModelPatcher(
            model, load_device=load_device, offload_device=offload_device
        )
        loaded = Loaded(name, patcher, _Tokenizer(tok_bytes))
        _CACHE.clear()  # one embedding model at a time
        _CACHE[name] = loaded
        print(f"{LOG} loaded {name} ({'text+vision' if has_vision else 'text'}, {dtype})")
        return loaded


def _tokenizer_bytes(sd: dict, path: str) -> bytes:
    t = sd.pop("tokenizer_json", None)
    if t is not None:
        return bytes(t.to(torch.uint8).tolist())
    side = os.path.join(os.path.dirname(path), "tokenizer.json")
    if os.path.isfile(side):
        with open(side, "rb") as f:
            return f.read()
    raise FileNotFoundError(
        f"No tokenizer for {os.path.basename(path)}: put tokenizer.json beside it, "
        "or use embeddinggemma_2_bf16.safetensors from huggingface.co/nynxz/embeddinggemma-2."
    )


# ----- inputs ----------------------------------------------------------------------------------


def read_image(path: str) -> torch.Tensor:
    """File -> [H, W, 3] float in [0, 1]."""
    with Image.open(path) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
            bg = Image.new("RGB", im.size, (255, 255, 255))
            bg.paste(im.convert("RGBA"), mask=im.convert("RGBA").split()[-1])
            im = bg
        arr = np.asarray(im.convert("RGB"), dtype=np.float32) / 255.0
    return torch.from_numpy(arr)


def read_text(path: str, limit_chars: int = 64_000) -> str:
    with open(path, encoding="utf-8", errors="replace") as f:
        return f.read(limit_chars)


@dataclass
class Query:
    """What to embed: text, images, or both (one interleaved sequence: images, then the text)."""

    text: str = ""
    images: list[torch.Tensor] | None = None  # [H, W, C] each
    prefix: str = eg.QUERY_PREFIX
    detail: int = 280  # image soft tokens; match the index being searched


# ----- encoding --------------------------------------------------------------------------------


def _device(loaded: Loaded):
    mm.load_models_gpu([loaded.patcher], force_full_load=True)
    return loaded.patcher.load_device


@torch.inference_mode()
def encode_queries(loaded: Loaded, queries: list[Query]) -> np.ndarray:
    global _query_waiters
    with _waiters_lock:
        _query_waiters += 1
    try:
        with MODEL_LOCK:
            return _encode_queries(loaded, queries)
    finally:
        with _waiters_lock:
            _query_waiters -= 1


def _encode_queries(loaded: Loaded, queries: list[Query]) -> np.ndarray:
    device = _device(loaded)
    seqs = []
    for q in queries:
        text = q.text.strip()
        text_ids = loaded.tokenizer.ids(q.prefix + text, MAX_TEXT_TOKENS) if text else []
        if q.images:
            soft = loaded.model.embed_images(
                [eg.prepare_image(i, q.detail) for i in q.images], device
            )
            seq: list = [eg.BOS]
            for s in soft:
                seq += [eg.BOI, s, eg.EOI]
            seqs.append([*seq, *text_ids, eg.EOS])
        else:
            seqs.append(eg.text_sequence(text_ids))
    return loaded.model(seqs, device).cpu().numpy()


DETAILS = (280, 140, 70)  # image soft tokens: the model's default, then 2x / 4x fewer
DEFAULT_DETAIL = 280
_PREP_POOL = ThreadPoolExecutor(
    max_workers=min(8, os.cpu_count() or 4), thread_name_prefix="eq-prep"
)


def _prepare_one(loaded: Loaded, path: str, kind: str, detail: int):
    """CPU side of embedding one file: an image tensor sized to the token budget, or text token
    ids. None when the file can't be read (it's recorded as failed)."""
    try:
        if kind == "image":
            return eg.prepare_image(read_image(path), detail)
        ids = loaded.tokenizer.ids(eg.DOCUMENT_PREFIX + read_text(path), MAX_TEXT_TOKENS)
        return eg.text_sequence(ids)
    except Exception as e:  # noqa: BLE001 — one bad file must not stop an index
        print(f"{LOG} skipped {path}: {e}")
        return None


class PreparedBatch:
    """A batch being decoded on the thread pool; `result()` waits for all of it, in order. The
    caller waits, not a pool task, so batches queued ahead can never deadlock the pool."""

    def __init__(self, futures):
        self.futures = futures

    def result(self) -> list:
        return [f.result() for f in self.futures]


def prepare_files(
    loaded: Loaded, paths: list[str], kinds: list[str], detail: int = DEFAULT_DETAIL
) -> PreparedBatch:
    """Decode and size a batch on a thread pool (PIL releases the GIL while decoding), so the next
    batch can be prepared while the model runs this one."""
    return PreparedBatch(
        [
            _PREP_POOL.submit(_prepare_one, loaded, p, k, detail)
            for p, k in zip(paths, kinds, strict=True)
        ]
    )


@torch.inference_mode()
def encode_prepared(loaded: Loaded, prepared: list) -> np.ndarray:
    """Embed a prepared batch (images as-is, texts with the document prefix). Files that couldn't
    be prepared come back as NaN rows, which the index records as failed."""
    while _query_waiters:  # let waiting searches go first
        time.sleep(0.02)
    with MODEL_LOCK:
        device = _device(loaded)
        out = np.full((len(prepared), eg.EMBEDDING_DIM), np.nan, dtype=np.float32)
        img_idx = [i for i, x in enumerate(prepared) if isinstance(x, torch.Tensor)]
        text_idx = [i for i, x in enumerate(prepared) if isinstance(x, list)]
        if img_idx:
            soft = loaded.model.embed_images([prepared[i] for i in img_idx], device)
            out[img_idx] = loaded.model([eg.image_sequence(s) for s in soft], device).cpu().numpy()
        if text_idx:
            # similar lengths together keeps padding small
            order = sorted(text_idx, key=lambda i: len(prepared[i]))
            for s in range(0, len(order), 8):
                chunk = order[s : s + 8]
                out[chunk] = loaded.model([prepared[i] for i in chunk], device).cpu().numpy()
        return out


def encode_files(
    loaded: Loaded, paths: list[str], kinds: list[str], detail: int = DEFAULT_DETAIL
) -> np.ndarray:
    return encode_prepared(loaded, prepare_files(loaded, paths, kinds, detail).result())


def index_batch_size(loaded: Loaded) -> int:
    """Files per model call while indexing: bigger on a GPU, where the model is cheap per item."""
    return 32 if loaded.patcher.load_device.type == "cuda" else 16


# ----- sharing the GPU with the prompt queue -----------------------------------------------------


def queue_busy() -> bool:
    try:
        from server import PromptServer

        q = PromptServer.instance.prompt_queue
        return bool(q.currently_running) or q.get_tasks_remaining() > 0
    except Exception:  # noqa: BLE001 — outside ComfyUI there is no queue
        return False


def wait_for_idle_queue(timeout: float | None = None, should_stop=lambda: False) -> bool:
    """Block until no prompt is running or queued. False on timeout or stop."""
    start = time.monotonic()
    while queue_busy():
        if should_stop() or (timeout is not None and time.monotonic() - start > timeout):
            return False
        time.sleep(0.5)
    return True
