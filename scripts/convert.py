"""Convert google/embeddinggemma-2 into one ComfyUI text_encoders file.

    python scripts/convert.py <hf_dir> <ComfyUI>/models/text_encoders/embeddinggemma_2_bf16.safetensors

<hf_dir> holds the Hugging Face download (model.safetensors + tokenizer.json). The output keeps the
text and vision towers (audio is dropped, ~440M parameters), stays in the checkpoint's bf16, and
embeds tokenizer.json as a uint8 `tokenizer_json` tensor, the way ComfyUI's Gemma 4 files do.
Key names are left as Hugging Face's; the loader maps them.
"""

import os
import sys

import torch
from safetensors.torch import load_file, save_file


def main(src: str, dst: str) -> None:
    sd = load_file(os.path.join(src, "model.safetensors"))
    out = {
        k: v.contiguous()
        for k, v in sd.items()
        if not k.startswith(("audio_tower.", "embed_audio."))
    }
    with open(os.path.join(src, "tokenizer.json"), "rb") as f:
        out["tokenizer_json"] = torch.frombuffer(bytearray(f.read()), dtype=torch.uint8)
    save_file(out, dst, metadata={"source": "google/embeddinggemma-2", "parts": "text+vision"})
    print(f"wrote {dst}: {len(out)} tensors, {os.path.getsize(dst) / 1e9:.2f} GB")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
