"""V3 node registry: modules under `nodes/` not starting with `_` are autodiscovered; the routes
module is listed in pack.json. `_zenkit` is vendored by `zenkit-nodekit sync`."""

from ._zenkit import comfy_entrypoint

__all__ = ["comfy_entrypoint"]
