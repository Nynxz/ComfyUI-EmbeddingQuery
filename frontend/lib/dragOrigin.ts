// Whether the drag in progress started inside one of this pack's search views, so dragging a
// result card around (or out onto a loader) isn't mistaken for dropping a query image on the
// node. One pair of document listeners for the page, registered on first import.

let fromSearch = false;

if (typeof document !== "undefined") {
  document.addEventListener(
    "dragstart",
    (e) => (fromSearch = !!(e.target as HTMLElement | null)?.closest?.(".qe")),
    true,
  );
  document.addEventListener("dragend", () => (fromSearch = false), true);
  document.addEventListener("drop", () => setTimeout(() => (fromSearch = false)), true);
}

export const dragStartedInSearch = () => fromSearch;
