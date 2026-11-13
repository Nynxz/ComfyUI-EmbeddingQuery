"""EmbeddingGemma 2 on ComfyUI's native Gemma 4 parts.

EmbeddingGemma 2 (google/embeddinggemma-2) is a Gemma 4 derivative turned into an encoder. Almost
every piece already exists in `comfy.text_encoders.gemma4`, so this module only assembles them and
patches the four places where the embedding model differs from the causal LM:

1. **Bidirectional attention.** Every layer attends both ways. Sliding layers use a *symmetric*
   window, ``|q - k| <= 512``. `TransformerBlockGemma4` already masks the past side once the sequence
   is longer than its window (``q - k >= window``), so the block is built with window 513 and the
   future side is added to the mask passed in.
2. **Global layers** use head_dim 512 with ONE kv head and plain (non-proportional) RoPE, where
   `Gemma4Attention` would otherwise get the sliding layers' kv count. Those layers' attention is
   rebuilt after the block is constructed.
3. **Projection-only per-layer inputs (PLE):** no `embed_tokens_per_layer` table (it would be
   3.2B parameters), only the projection of the input embeddings.
4. **Embedding head:** final norm, then a 512 -> 768 projection per token, then mean pooling over
   every token (bos/eos and image markers included) and L2 normalisation.

The vision tower and its projector are ComfyUI's `Gemma4VisionEncoder` / `Gemma4MultiModalProjector`
unchanged. Audio is not loaded.

Validated against `transformers`' EmbeddingGemma2Model (see tests/test_parity.py).
"""

from __future__ import annotations

from dataclasses import dataclass

import comfy.ops
import torch
import torch.nn as nn
import torchvision.transforms.functional as TVF
from comfy.text_encoders.gemma4 import (
    GEMMA4_VISION_CONFIG,
    Gemma4Attention,
    Gemma4Config,
    Gemma4MultiModalProjector,
    Gemma4VisionEncoder,
    TransformerBlockGemma4,
    _get_aspect_ratio_preserving_size,
)
from comfy.text_encoders.llama import RMSNorm, _make_scaled_embedding

# Token ids (config.json / tokenizer_config.json of google/embeddinggemma-2).
BOS, EOS, PAD = 2, 1, 0
BOI, EOI, IMAGE_TOKEN = 255999, 258882, 258880

# Task prefixes (config_sentence_transformers.json). Images take no prefix.
QUERY_PREFIX = "task: search result | query: "
DOCUMENT_PREFIX = "title: none | text: "

SLIDING_RADIUS = 512
EMBEDDING_DIM = 768
MRL_DIMS = (768, 512, 256, 128)
IMAGE_SOFT_TOKENS = 280


@dataclass
class EmbeddingGemma2Config(Gemma4Config):
    hidden_size: int = 512
    intermediate_size: int = 2048
    num_hidden_layers: int = 24
    num_attention_heads: int = 4
    num_key_value_heads: int = 2
    hidden_size_per_layer_input: int = 512
    num_kv_shared_layers: int = 0
    use_double_wide_mlp: bool = False
    partial_rotary_factor: float = 1.0  # "default" rope on global layers, not proportional
    final_logit_softcapping: float = 0.0
    embedding_dim: int = EMBEDDING_DIM
    num_global_key_value_heads: int = 1
    # A radius of 512 => the block masks q - k >= 513 (see the module docstring).
    sliding_attention = [SLIDING_RADIUS + 1] * 5 + [False]
    vision_config = GEMMA4_VISION_CONFIG
    audio_config = None


class EncoderBlock(TransformerBlockGemma4):
    def __init__(self, config, index, device=None, dtype=None, ops=None):
        super().__init__(config, index=index, device=device, dtype=dtype, ops=ops)
        if not self.sliding_attention:
            self.self_attn = Gemma4Attention(
                config,
                head_dim=config.global_head_dim,
                num_kv_heads=config.num_global_key_value_heads,
                device=device,
                dtype=dtype,
                ops=ops,
            )


def _rope(inv_freq, positions, dtype):
    """Rotation matrices [1, 1, S, d/2, 2, 2] in the layout `apply_rope_split_half1` takes."""
    freqs = positions[:, None].float() * inv_freq[None, :].float().to(positions.device)
    cos, sin = freqs.cos(), freqs.sin()
    mat = torch.stack((torch.stack((cos, -sin), dim=-1), torch.stack((sin, cos), dim=-1)), dim=-2)
    return mat[None, None].to(dtype)


class TextEncoder(nn.Module):
    """The bidirectional text tower; key names follow the HF checkpoint minus `language_model.`."""

    def __init__(self, config, device=None, dtype=None, ops=None):
        super().__init__()
        self.config = config
        self.embed_tokens = _make_scaled_embedding(
            ops, config.vocab_size, config.hidden_size, config.hidden_size**0.5, device, dtype
        )
        self.layers = nn.ModuleList(
            EncoderBlock(config, i, device=device, dtype=dtype, ops=ops)
            for i in range(config.num_hidden_layers)
        )
        self.norm = RMSNorm(config.hidden_size, eps=config.rms_norm_eps, device=device, dtype=dtype)
        n, hpl = config.num_hidden_layers, config.hidden_size_per_layer_input
        self.per_layer_model_projection = ops.Linear(
            config.hidden_size, n * hpl, bias=False, device=device, dtype=dtype
        )
        self.per_layer_projection_norm = RMSNorm(
            hpl, eps=config.rms_norm_eps, device=device, dtype=dtype
        )
        self.embedding_projection = ops.Linear(
            config.hidden_size, config.embedding_dim, bias=False, device=device, dtype=dtype
        )
        g = config.global_head_dim
        self.register_buffer(
            "_global_inv",
            1.0 / (config.rope_theta[0] ** (torch.arange(0, g, 2).float() / g)),
            persistent=False,
        )
        s = config.head_dim
        self.register_buffer(
            "_sliding_inv",
            1.0 / (config.rope_theta[1] ** (torch.arange(0, s, 2).float() / s)),
            persistent=False,
        )

    def forward(self, x, attention_mask):
        """x: input embeddings [B, S, H]; attention_mask: [B, S] (1 = token) -> tokens [B, S, D]."""
        cfg = self.config
        batch, seq, _ = x.shape
        positions = torch.arange(seq, device=x.device)
        freqs = [
            _rope(self._global_inv, positions, x.dtype),
            _rope(self._sliding_inv, positions, x.dtype),
        ]

        min_val = torch.finfo(x.dtype).min
        keys_off = attention_mask[:, None, None, :].to(torch.bool).logical_not()
        mask = torch.zeros((batch, 1, seq, seq), dtype=x.dtype, device=x.device)
        mask.masked_fill_(keys_off.expand(-1, -1, seq, -1), min_val)
        sliding_mask = mask
        if seq > SLIDING_RADIUS + 1:
            # future side of the symmetric window; the block adds the past side itself
            future = torch.ones((seq, seq), dtype=torch.bool, device=x.device).triu_(
                SLIDING_RADIUS + 1
            )
            sliding_mask = mask.masked_fill(future, min_val)

        hpl = cfg.hidden_size_per_layer_input
        ple = self.per_layer_model_projection(x) * (cfg.hidden_size**-0.5)
        ple = self.per_layer_projection_norm(ple.reshape(batch, seq, cfg.num_hidden_layers, hpl))

        for i, layer in enumerate(self.layers):
            x, _, _ = layer(
                x.clone() if i == 0 else x,  # the block writes its output into its input buffer
                attention_mask=sliding_mask if layer.sliding_attention else mask,
                freqs_cis=freqs,
                per_layer_input=ple[:, :, i, :],
            )
        return self.embedding_projection(self.norm(x))


class EmbeddingGemma2(nn.Module):
    """Text + vision encoder. State-dict keys: `model.*`, `vision_model.*`, `multi_modal_projector.*`."""

    def __init__(self, device=None, dtype=None, operations=None, vision=True):
        super().__init__()
        ops = operations or comfy.ops.manual_cast
        self.config = config = EmbeddingGemma2Config()
        self.dtype = dtype
        self.model = TextEncoder(config, device=device, dtype=dtype, ops=ops)
        self.vision_model = None
        self.multi_modal_projector = None
        if vision:
            self.vision_model = Gemma4VisionEncoder(
                config.vision_config, dtype=dtype, device=device, ops=ops
            )
            self.multi_modal_projector = Gemma4MultiModalProjector(
                config, dtype=dtype, device=device, ops=ops
            )

    # ----- inputs -> embeddings ------------------------------------------------------------

    def embed_images(self, pixels: list[torch.Tensor], device) -> list[torch.Tensor]:
        """[C, H, W] in [0, 1], already sized by `prepare_image` -> soft tokens [n, H] each.
        Images of equal size are run through the tower together."""
        if self.vision_model is None:
            raise ValueError("this EmbeddingGemma 2 checkpoint has no vision tower")
        out: list[torch.Tensor | None] = [None] * len(pixels)
        groups: dict[tuple, list[int]] = {}
        for i, p in enumerate(pixels):
            groups.setdefault(tuple(p.shape), []).append(i)
        for idx in groups.values():
            batch = torch.stack([pixels[i] for i in idx]).to(device, torch.float32)
            feats = self.multi_modal_projector(self.vision_model(batch))
            for j, i in enumerate(idx):
                out[i] = feats[j]
        return out  # type: ignore[return-value]

    def forward(self, sequences: list[list], device, dim: int = EMBEDDING_DIM) -> torch.Tensor:
        """Encode sequences, each a list of token ids (int) and image soft-token tensors [n, H],
        into L2-normalised embeddings [B, dim] (float32)."""
        dtype = self.model.embed_tokens.weight.dtype if self.dtype is None else self.dtype
        rows, lengths = [], []
        for seq in sequences:
            parts, ids = [], []
            for item in seq:
                if isinstance(item, int):
                    ids.append(item)
                    continue
                if ids:
                    parts.append(self._embed_ids(ids, device, dtype))
                    ids = []
                parts.append(item.to(device, dtype))
            if ids:
                parts.append(self._embed_ids(ids, device, dtype))
            row = torch.cat(parts, dim=0)
            rows.append(row)
            lengths.append(row.shape[0])
        longest = max(lengths)
        x = torch.zeros((len(rows), longest, rows[0].shape[-1]), device=device, dtype=dtype)
        attn = torch.zeros((len(rows), longest), device=device, dtype=torch.long)
        for i, row in enumerate(rows):
            x[i, : row.shape[0]] = row
            attn[i, : row.shape[0]] = 1
        tokens = self.model(x, attn).float()
        keep = attn.unsqueeze(-1).float()
        pooled = (tokens * keep).sum(1) / keep.sum(1)
        return nn.functional.normalize(pooled[:, :dim], dim=-1)

    def _embed_ids(self, ids, device, dtype):
        t = torch.tensor(ids, device=device, dtype=torch.long)
        return self.model.embed_tokens(t, out_dtype=dtype)


def prepare_image(image: torch.Tensor, max_soft_tokens: int = IMAGE_SOFT_TOKENS) -> torch.Tensor:
    """[H, W, C] float in [0, 1] (ComfyUI layout) -> [3, h, w] resized to the patch budget, the way
    ComfyUI's Gemma 4 tokenizer does it (uint8 -> bicubic antialias -> /255)."""
    chw = image[..., :3].movedim(-1, 0)
    h, w = chw.shape[1], chw.shape[2]
    th, tw = _get_aspect_ratio_preserving_size(h, w, 16, max_soft_tokens * 9, 3)
    u8 = (chw.clamp(0, 1) * 255).round().to(torch.uint8)
    if (th, tw) != (h, w):
        u8 = TVF.resize(u8, [th, tw], interpolation=TVF.InterpolationMode.BICUBIC, antialias=True)
    return u8.float() / 255.0


def image_sequence(soft_tokens: torch.Tensor, text_ids: list[int] | None = None) -> list:
    """<bos><|image> soft tokens <image|> [text ids] <eos>: an image, optionally with text after it."""
    return [BOS, BOI, soft_tokens, EOI, *(text_ids or []), EOS]


def text_sequence(ids: list[int]) -> list:
    return [BOS, *ids, EOS]


# ----- checkpoint keys ---------------------------------------------------------------------


def convert_state_dict(sd: dict) -> dict:
    """HF `google/embeddinggemma-2` keys -> this module's keys. Already-converted keys pass through;
    audio weights are dropped."""
    out = {}
    for k, v in sd.items():
        if k.startswith(("audio_tower.", "embed_audio.")):
            continue
        if k.startswith("language_model."):
            k = "model." + k[len("language_model.") :]
            k = k.replace("model.ple.", "model.").replace(".ple_block.", ".")
        elif k.startswith("vision_tower."):
            k = "vision_model." + k[len("vision_tower.") :]
        elif k.startswith("embed_vision."):
            k = "multi_modal_projector." + k[len("embed_vision.") :]
        out[k] = v
    return out


def is_embeddinggemma2(sd_keys) -> bool:
    keys = set(sd_keys)
    return (
        "language_model.embedding_projection.weight" in keys
        or "model.embedding_projection.weight" in keys
    ) and any(".ple." in k or "per_layer_model_projection" in k for k in keys)


__all__ = [
    "DOCUMENT_PREFIX",
    "EMBEDDING_DIM",
    "MRL_DIMS",
    "QUERY_PREFIX",
    "EmbeddingGemma2",
    "convert_state_dict",
    "image_sequence",
    "is_embeddinggemma2",
    "prepare_image",
    "text_sequence",
]
