// Wheel scrolling for a scroll area inside a node body (the FusionGrid pattern from NynxzNodes).
//
// The graph canvas forwards every wheel event to itself from a CAPTURE listener on an ancestor, so
// it zooms instead of scrolling us, and nothing we listen for locally is early enough to stop it.
// Its one opt-out is `data-capture-wheel="true"` on an element that CONTAINS
// document.activeElement: deliberately focus-gated, so hovering has to arm it. On pointerenter the
// scroller takes focus (only if it can actually scroll, and never out of a text field mid-typing);
// on pointerleave it hands focus back. It also re-arms on pointermove: content under a resting
// pointer can change (a "find similar" click re-renders the results, and the focused card goes with
// them), and no new pointerenter would follow. Canvas gestures (ctrl/meta+wheel, horizontal pan) are exempt
// on the canvas's side, so they still reach the canvas. On a frontend older than the opt-out this
// is inert, not broken.
//
//   <div class="list" v-bind="wheelScroll" />   // tabindex, data-capture-wheel, enter/leave

const prevFocus = new WeakMap<HTMLElement, HTMLElement | null>();

function isTyping(el: Element | null): boolean {
  const t = el as HTMLElement | null;
  return (
    !!t &&
    (t.isContentEditable || t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT")
  );
}

function arm(e: PointerEvent) {
  if (e.buttons) return; // mid-drag (a selection, a resize): leave focus where it is
  armEl(e.currentTarget as HTMLElement);
}

/** Re-arm after the content under a resting pointer changed (no pointer event will follow). */
export function rearmIfHovered(el: HTMLElement | null | undefined) {
  if (el && el.matches(":hover")) armEl(el);
}

function armEl(el: HTMLElement) {
  // Nothing to scroll: stay unarmed, so the wheel over a short list still zooms the canvas.
  // Re-evaluated on every enter, so it tracks the content.
  if (el.scrollHeight <= el.clientHeight) return;
  const active = document.activeElement as HTMLElement | null;
  if (el.contains(active)) return; // already armed, or a control inside owns focus
  // Never pull focus out of someone else's text field mid-keystroke. This node's own search box is
  // fine: moving onto the results means you're done typing for now.
  const ownNode = el.closest(".zen-widget");
  if (isTyping(active) && !(ownNode && ownNode.contains(active))) return;
  if (!prevFocus.has(el)) prevFocus.set(el, isTyping(active) ? null : active);
  el.focus({ preventScroll: true });
}

/** Undo only the focus we took: if a real control inside took it since, leave it alone. */
function disarm(e: PointerEvent) {
  const el = e.currentTarget as HTMLElement;
  if (document.activeElement !== el) return;
  const prev = prevFocus.get(el);
  if (prev && prev !== document.body && document.contains(prev)) prev.focus({ preventScroll: true });
  else el.blur();
  prevFocus.delete(el);
}

export const wheelScroll = {
  tabindex: "-1",
  "data-capture-wheel": "true",
  onPointerenter: arm,
  onPointermove: arm, // cheap: returns at once while armed
  onPointerleave: disarm,
};
