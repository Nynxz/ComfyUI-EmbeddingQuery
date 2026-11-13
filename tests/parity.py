"""Parity vs transformers' EmbeddingGemma2Model (CPU, fp32).

Usage: COMFY_ROOT=<ComfyUI> CUDA_VISIBLE_DEVICES= python tests/parity.py <hf_dir> <ref.npz> <ref.json> <gallery_dir>
"""

import json
import os
import sys
import time

sys.argv, args = [sys.argv[0], "--cpu"], sys.argv[1:]
sys.path.insert(0, os.environ["COMFY_ROOT"])  # your ComfyUI checkout
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "nodes"))
import comfy.options

comfy.options.enable_args_parsing()
import _egemma2 as eg
import numpy as np
import torch
from PIL import Image
from safetensors.torch import load_file
from tokenizers import Tokenizer

hf, ref_npz, ref_json, gallery = args
torch.set_grad_enabled(False)
m = eg.EmbeddingGemma2(dtype=torch.float32)
sd = eg.convert_state_dict(load_file(f"{hf}/model.safetensors"))
missing, unexpected = m.load_state_dict({k: v.float() for k, v in sd.items()}, strict=False)
print(
    "missing",
    [k for k in missing if not k.endswith(("_max", "_min"))][:10],
    "unexpected",
    unexpected[:10],
)
tok = Tokenizer.from_file(f"{hf}/tokenizer.json")
ref = np.load(ref_npz)
meta = json.load(open(ref_json))
cos = lambda a, b: float(np.dot(a, b) / np.linalg.norm(a) / np.linalg.norm(b))
t = time.time()
seqs = [eg.text_sequence(tok.encode(x, add_special_tokens=False).ids) for x in meta["texts"]]
print("ids0", seqs[0])
e = m(seqs, "cpu").numpy()
for k in range(len(seqs)):
    print(f"text{k} cos", cos(e[k], ref[f"txt{k}"]))
for i in meta["ids"]:
    im = (
        torch.from_numpy(np.asarray(Image.open(f"{gallery}/img/{i}.webp").convert("RGB"))).float()
        / 255
    )
    px = eg.prepare_image(im)
    print("prepared", tuple(px.shape))
    soft = m.embed_images([px], "cpu")[0]
    v = m([eg.image_sequence(soft)], "cpu")[0].numpy()
    print(f"img {i} cos", cos(v, ref["img_" + i]), "tokens", soft.shape)
print("secs", time.time() - t)
