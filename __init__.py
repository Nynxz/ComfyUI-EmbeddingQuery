"""ComfyUI-EmbeddingQuery entry point (V3).

Semantic search over folders in ComfyUI's input directory with EmbeddingGemma 2 (text and images
in one embedding space), on one node with an on-node Vue UI.
"""

from .nodes import comfy_entrypoint  # noqa: F401

WEB_DIRECTORY = "./web"
