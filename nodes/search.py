"""Embedding Search: the pack's one node.

Everything lives in the on-node widget (frontend/widgets/EmbeddingSearch.vue): the model, which
input folders are indexed and searched, the query, the results grid and the picked result. Typing
a query searches live through the pack's routes, without queueing anything.

Queued, the node searches again (with the connected `image` / `text` as the query when wired,
which is how it works mid-graph), shows the results on the node, and outputs the picked result,
or the top hit when nothing is picked:

- image: the file when it's an image; for a text file, a same-named image beside it, else blank
- text:  the file's text; for an image, a same-named .txt caption beside it, else ""
"""

from __future__ import annotations

import os

import numpy as np
import torch
from comfy_api.latest import io

from . import _index as ix
from . import _runtime as rt
from ._zenkit import CATEGORY, node_id
from ._zenkit.io_types import widget_type

SearchType = widget_type(
    "EmbeddingSearch",
    dict,
    doc="On-node search state: {model, folders, query, kind, top_k, dim, selected, similar}.",
)

DEFAULT_STATE = {
    "model": "",
    "folders": [],
    "query": "",
    "kind": "all",
    "top_k": 24,
    "dim": 768,
    "selected": None,
    "similar": [],
    "combine": "mean",
    "detail": rt.DEFAULT_DETAIL,
}

COMBINE = ("mean", "any", "joint")
#: Images per query: separately embedded (mean / any) or in one sequence (joint, ~280 tokens each
#: against an 8192-token context).
MAX_QUERY_IMAGES = 64
MAX_JOINT_IMAGES = 16


def _state(raw) -> dict:
    s = {**DEFAULT_STATE, **(raw if isinstance(raw, dict) else {})}
    names = rt.model_names()
    if s["model"] not in names:
        if not names:
            raise FileNotFoundError(
                "No EmbeddingGemma 2 model in models/text_encoders. Download "
                "embeddinggemma_2_bf16.safetensors from huggingface.co/nynxz/embeddinggemma-2 "
                "into models/text_encoders/ and restart ComfyUI."
            )
        s["model"] = names[0]
    s["folders"] = list(
        dict.fromkeys(ix.normalize_folder(f) for f in s["folders"] if isinstance(f, str))
    )
    sim = s["similar"]
    s["similar"] = (
        [sim] if isinstance(sim, str) and sim else [r for r in (sim or []) if isinstance(r, str)]
    )
    if s["detail"] not in rt.DETAILS:
        s["detail"] = rt.DEFAULT_DETAIL
    if s["combine"] not in COMBINE:
        s["combine"] = "mean"
    s["top_k"] = max(1, min(int(s["top_k"] or 24), 500))
    s["dim"] = int(s["dim"]) if int(s["dim"] or 768) in (768, 512, 256, 128) else 768
    return s


def _sidecar(path: str, exts) -> str | None:
    stem = os.path.splitext(path)[0]
    for ext in exts:
        for cand in (stem + ext, stem + ext.upper()):
            if os.path.isfile(cand):
                return cand
    return None


def _encode_query(s: dict, image, text: str):
    """The query embedding(s). joint: everything in one sequence (one vector). mean / any: each
    image on its own, plus the text as its own vector, combined later by `ix.search`."""
    loaded = rt.load(s["model"])
    images = [image[i] for i in range(int(image.shape[0]))] if image is not None else []
    if s["combine"] == "joint":
        return rt.encode_queries(
            loaded,
            [rt.Query(text=text, images=images[:MAX_JOINT_IMAGES] or None, detail=s["detail"])],
        )
    queries = [rt.Query(images=[im], detail=s["detail"]) for im in images[:MAX_QUERY_IMAGES]]
    if text.strip():
        queries.append(rt.Query(text=text))
    out = [rt.encode_queries(loaded, queries[i : i + 8]) for i in range(0, len(queries), 8)]
    return np.concatenate(out)


def _blank() -> torch.Tensor:
    return torch.zeros((1, 64, 64, 3), dtype=torch.float32)


class EmbeddingSearch(io.ComfyNode):
    @classmethod
    def define_schema(cls) -> io.Schema:
        return io.Schema(
            node_id=node_id("Search"),
            display_name="Embedding Search",
            category=CATEGORY,
            description="Search indexed input folders with EmbeddingGemma 2 (text and images) and output the picked result.",
            is_output_node=True,
            inputs=[
                SearchType.Input("search", default=dict(DEFAULT_STATE)),
                io.Image.Input(
                    "image",
                    optional=True,
                    tooltip="Query image(s). A batch, or an image plus text, is combined as set in the node settings (mean / any / joint).",
                ),
                io.String.Input(
                    "text",
                    optional=True,
                    force_input=True,
                    tooltip="Query text; replaces the text typed on the node.",
                ),
            ],
            outputs=[
                io.Image.Output(display_name="image"),
                io.String.Output(display_name="text"),
            ],
        )

    @classmethod
    def fingerprint_inputs(cls, search=None, **_kwargs):
        try:
            s = _state(search)
        except FileNotFoundError:
            return None
        parts = [ix.fingerprint(s["model"], s["folders"])]
        if s["selected"]:
            try:
                parts.append(str(os.path.getmtime(ix.ref_path(s["selected"]))))
            except (OSError, ValueError):
                parts.append("-")
        return "|".join(parts)

    @classmethod
    def execute(cls, search=None, image=None, text=None) -> io.NodeOutput:
        s = _state(search)
        hits: list[dict] = []
        # Wired inputs ARE the query: the text typed on the node and the similar-to set only apply
        # when nothing is wired (the node hides them then, so they must not leak in unseen).
        wired = image is not None or text is not None
        if wired:
            query_text = text if isinstance(text, str) else ""
            has_img = image is not None
            if has_img or query_text.strip():
                q = _encode_query(s, image, query_text)
                source = (
                    "image+text"
                    if has_img and query_text.strip()
                    else ("image" if has_img else "text")
                )
            else:
                q, source = None, "none"  # an empty wired text
        elif s["similar"]:
            q = ix.similar_embeddings(rt.load(s["model"]), s["similar"], s["detail"])
            source, query_text = "similar", ""
        elif s["query"].strip():
            query_text = s["query"]
            q = _encode_query(s, None, query_text)
            source = "text"
        else:
            q, source, query_text = None, "none", ""
        if q is not None:
            hits = ix.search(
                s["model"],
                s["folders"],
                q,
                top_k=s["top_k"],
                kind=s["kind"],
                dim=s["dim"],
                exclude=s["similar"] if source == "similar" else (),
                combine=s["combine"],
            )

        pick = s["selected"]
        if pick:
            try:
                ix.ref_path(pick)
            except (ValueError, FileNotFoundError):
                pick = None
        if not pick and hits:
            pick = hits[0]["ref"]

        ui = {
            "qe_results": [
                {
                    "hits": hits,
                    "query": query_text or "",
                    "source": source,
                    "picked": pick,
                    "auto": pick is not None and pick != s["selected"],
                }
            ]
        }
        if not pick:
            return io.NodeOutput(_blank(), "", ui=ui)

        path = ix.ref_path(pick)
        if ix.kind_of(path) == "image":
            img = rt.read_image(path)[None]
            cap = _sidecar(path, (".txt", ".caption"))
            out_text = rt.read_text(cap) if cap else ""
        else:
            out_text = rt.read_text(path, limit_chars=1_000_000)
            side = _sidecar(path, sorted(rt.IMAGE_EXTS))
            img = rt.read_image(side)[None] if side else _blank()
        return io.NodeOutput(img, out_text, ui=ui)
