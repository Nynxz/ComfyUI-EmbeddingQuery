// The search state and its side effects, shared by every view of one node: the node body and, when
// ZenKit is installed, its pop-out panel. Keyed on the widget, created once, so two views never run
// two live searches or two job listeners; each view only renders.
//
// What persists where:
// - the widget value (`state`): the search itself, saved in the workflow and sent with the prompt
// - node.properties: view preferences (folder list open, collapsed folders, zoom, fit, popped out)
// - nothing else: results, folder listing and job progress are fetched or pushed live

import { computed, effectScope, reactive, ref, watch, type Ref } from "vue";
import { api } from "@comfy/api";

import {
  cancelIndex as apiCancel,
  deleteIndex,
  JOB_EVENT,
  listFolders,
  listModels,
  normalizeFolder,
  parentFolder,
  search,
  startIndex,
  type Combine,
  type FolderRow,
  type Hit,
  type JobState,
  type RunResult,
  type SearchState,
} from "@/lib/api";

export interface DOMWidget {
  value: unknown;
  callback?: (v: unknown) => void;
}
export interface NodeLike {
  id?: number | string;
  inputs?: { name: string; link?: number | null }[];
  properties?: Record<string, unknown>;
  size?: [number, number];
  onConnectionsChange?: (...args: unknown[]) => void;
  onRemoved?: (...args: unknown[]) => void;
  isInputConnected?: (slot: number) => boolean;
  graph?: { id?: string; setDirtyCanvas?: (a: boolean, b: boolean) => void; change?: () => void };
}

const DEFAULTS: SearchState = {
  model: "",
  folders: [],
  query: "",
  kind: "all",
  top_k: 24,
  dim: 768,
  selected: null,
  similar: [],
  combine: "mean",
  detail: 280,
};

export function toState(v: unknown): SearchState {
  const o = v && typeof v === "object" ? (v as Partial<SearchState>) : {};
  return {
    ...DEFAULTS,
    ...o,
    similar:
      typeof o.similar === "string"
        ? [o.similar]
        : Array.isArray(o.similar)
          ? o.similar.filter((r) => typeof r === "string")
          : [],
    combine: ["mean", "any", "joint"].includes(o.combine as string) ? (o.combine as Combine) : "mean",
    detail: [280, 140, 70].includes(Number(o.detail)) ? Number(o.detail) : 280,
    folders: Array.isArray(o.folders)
      ? [...new Set(o.folders.filter((f) => typeof f === "string").map(normalizeFolder))]
      : [],
  };
}

/** A folder row's state for this node. `detail`: indexed at another image detail. A row with
 *  subfolders stands for its whole subtree: `partial` when only some of it is indexed. */
export type RowState = "none" | "ready" | "stale" | "detail" | "partial" | "empty";

export type Fit = "cover" | "contain";

const ZOOM_MIN = 56;
const ZOOM_MAX = 240;
export const ZOOM = { min: ZOOM_MIN, max: ZOOM_MAX, step: 24 };

function createStore(widget: DOMWidget | undefined, node: NodeLike | undefined) {
  const props = node?.properties;
  const prop = <T>(key: string, fallback: T): T => (props?.[key] as T | undefined) ?? fallback;
  const saveProp = (key: string, value: unknown) => {
    if (node) (node.properties ??= {})[key] = value;
  };

  // ----- the widget value ---------------------------------------------------------------------

  const state = reactive<SearchState>(toState(widget?.value));
  let ownWrite = false;
  function set(patch: Partial<SearchState>) {
    Object.assign(state, patch);
    const value = JSON.parse(JSON.stringify(state)) as SearchState;
    if (!widget) return;
    widget.value = value;
    try {
      ownWrite = true;
      widget.callback?.(value);
    } finally {
      ownWrite = false;
    }
    node?.graph?.setDirtyCanvas?.(true, false);
  }

  // ----- results ------------------------------------------------------------------------------

  const hits = ref<Hit[]>([]);
  const ms = ref<number | null>(null);
  const autoPick = ref<string | null>(null);
  const searching = ref(false);
  const error = ref("");

  /** Bumped per run result, so views can tell a new run from a refresh of the same search. */
  const runCount = ref(0);
  function onRun(r: RunResult | null) {
    if (!r) return;
    runCount.value++;
    hits.value = r.hits ?? [];
    ms.value = null;
    error.value = "";
    autoPick.value = r.auto ? r.picked : null;
  }

  // ----- folders and indexing -----------------------------------------------------------------

  const models = ref<string[]>([]);
  const folderRows = ref<FolderRow[]>([]);
  const job = ref<JobState>({ running: false, folder: null, done: 0, total: 0, queued: [], error: null, finished: null });
  const savedOpen = prop<unknown>("qeFoldersOpen", undefined);
  // Open while there's nothing to search yet; afterwards the results get the room.
  const foldersOpen = ref(typeof savedOpen === "boolean" ? savedOpen : !state.folders.length);
  const collapsed = ref<Set<string>>(new Set(prop<string[]>("qeCollapsed", [])));

  function toggleFolders() {
    foldersOpen.value = !foldersOpen.value;
    saveProp("qeFoldersOpen", foldersOpen.value);
  }
  const hasFiles = (r: FolderRow) => r.images + r.texts > 0;
  const rowOf = (p: string) => folderRows.value.find((r) => r.path === p);
  const hasChildren = (p: string) => folderRows.value.some((r) => r.path !== p && parentFolder(r.path) === p);
  /** The subfolders (any depth) of `p` that hold files. */
  const filedBelow = (p: string) => folderRows.value.filter((r) => r.path.startsWith(p + "/") && hasFiles(r));
  /** What a row stands for: the folder itself (if it has files) and every filed subfolder. Turning
   *  on, indexing or rebuilding `input` covers everything under it; each folder still has its own
   *  index, so nothing is embedded twice. */
  const targets = (r: FolderRow) => [...(hasFiles(r) ? [r] : []), ...filedBelow(r.path)];
  /** A row that sums a subtree (it has filed subfolders), as opposed to a single leaf folder. */
  const isTree = (r: FolderRow) => filedBelow(r.path).length > 0;

  const isCollapsed = (p: string) => collapsed.value.has(p);
  function toggleCollapsed(p: string) {
    const next = new Set(collapsed.value);
    if (next.has(p)) next.delete(p);
    else next.add(p);
    collapsed.value = next;
    saveProp("qeCollapsed", [...next]);
  }
  const visibleFolders = computed(() =>
    folderRows.value.filter((r) => {
      for (let p = parentFolder(r.path); p !== null; p = parentFolder(p)) if (collapsed.value.has(p)) return false;
      return true;
    }),
  );

  /** A row is "on" when its whole subtree is searched; `partlyOn` when only some of it is. */
  function isOn(p: string) {
    const r = rowOf(p);
    if (!r) return state.folders.includes(p);
    const t = targets(r);
    return t.length > 0 && t.every((x) => state.folders.includes(x.path));
  }
  function partlyOn(p: string) {
    const r = rowOf(p);
    return !!r && !isOn(p) && targets(r).some((x) => state.folders.includes(x.path));
  }
  function setOn(p: string, on: boolean) {
    const r = rowOf(p);
    const paths = r ? targets(r).map((x) => x.path) : [p];
    const folders = on
      ? [...new Set([...state.folders, ...paths])]
      : state.folders.filter((f) => !paths.includes(f));
    set({ folders });
    if (on) {
      const todo = paths.filter((x) => {
        const row = rowOf(x);
        return row && hasFiles(row) && ownState(row) !== "ready";
      });
      if (todo.length) void indexFolders(todo);
    }
  }
  const isQueued = (p: string) => (job.value.running && job.value.folder === p) || job.value.queued.includes(p);

  function ownState(r: FolderRow): RowState {
    const s = r.status.state;
    if (s !== "none" && (r.status.detail ?? 280) !== state.detail) return "detail";
    return s;
  }
  function rowState(r: FolderRow): RowState {
    if (!isTree(r)) return hasFiles(r) ? ownState(r) : "empty";
    const t = targets(r);
    const ready = t.filter((x) => ownState(x) === "ready").length;
    if (ready === t.length) return "ready";
    if (t.every((x) => ownState(x) === "none")) return "none";
    return "partial";
  }
  const needsWork = (r: FolderRow) => targets(r).filter((x) => ownState(x) !== "ready" && !isQueued(x.path));
  const anyQueued = (r: FolderRow) => targets(r).some((x) => isQueued(x.path));

  const needsIndex = computed(
    () => folderRows.value.filter((r) => hasFiles(r) && state.folders.includes(r.path) && ownState(r) !== "ready" && !isQueued(r.path)).length,
  );
  const folderSummary = computed(() => {
    const on = state.folders.length;
    if (!folderRows.value.length) return "Folders";
    if (!on) return "No folders searched: pick some";
    const files = folderRows.value
      .filter((r) => state.folders.includes(r.path))
      .reduce((n, r) => n + (r.status.indexed || 0), 0);
    return `${on} folder${on === 1 ? "" : "s"} · ${files} indexed files`;
  });
  const jobPct = computed(() => (job.value.total ? (100 * job.value.done) / job.value.total : 0));

  /** Counts for a row: its subtree's totals (`summed` when subfolders contribute). */
  function counts(r: FolderRow) {
    const t = targets(r);
    return {
      images: t.reduce((n, x) => n + x.images, 0),
      texts: t.reduce((n, x) => n + x.texts, 0),
      summed: isTree(r),
      own: r.images + r.texts,
    };
  }

  const pillActs = (r: FolderRow) => needsWork(r).length > 0 && !anyQueued(r);
  function pillClass(r: FolderRow) {
    if (anyQueued(r)) return "info";
    return { ready: "ok", stale: "warn", detail: "warn", partial: "warn", none: "", empty: "" }[rowState(r)];
  }
  function pillText(r: FolderRow) {
    if (job.value.running && job.value.folder === r.path) return job.value.total ? `${Math.round(jobPct.value)}%` : "…";
    if (anyQueued(r)) return "queued";
    const s = r.status;
    const st = rowState(r);
    if (st === "partial") {
      const t = targets(r);
      return `${t.filter((x) => ownState(x) === "ready").length}/${t.length}`;
    }
    if (st === "detail") return `detail ${s.detail ?? 280}`;
    if (st === "ready") return "indexed";
    if (st === "stale") return `+${(s.new ?? 0) + (s.changed ?? 0)}${s.removed ? ` −${s.removed}` : ""}`;
    if (st === "none") return "no index";
    return "";
  }
  /** Steady states read as an icon (✓, no index, queued); states with something to say keep text. */
  function pillIcon(r: FolderRow): string | null {
    if (job.value.running && job.value.folder === r.path) return null;
    if (anyQueued(r)) return "mdi-clock-outline";
    const st = rowState(r);
    if (st === "ready") return "mdi-check-circle";
    if (st === "none") return "mdi-database-off-outline";
    return null;
  }
  function pillTitle(r: FolderRow) {
    if (isTree(r)) {
      const t = targets(r);
      const ready = t.filter((x) => ownState(x) === "ready").length;
      return `${ready} of ${t.length} folders indexed (this one and its subfolders)`;
    }
    if (!hasFiles(r)) return "No images or text files here";
    const s = r.status;
    if (s.state === "none") return "Not indexed";
    const when = s.updated ? new Date(s.updated * 1000).toLocaleString() : "";
    const parts = [`${s.indexed} files indexed ${when}, image detail ${s.detail ?? 280}`];
    if (ownState(r) === "detail") parts.push(`This node uses detail ${state.detail}: rebuild to match`);
    if (s.state === "stale") parts.push(`${s.new ?? 0} new, ${s.changed ?? 0} changed, ${s.removed ?? 0} removed`);
    if (s.failed) parts.push(`${s.failed} could not be read`);
    return parts.join("\n");
  }
  /** What clicking the pill does, for its tooltip. */
  function pillAction(r: FolderRow) {
    if (isTree(r)) return `index ${needsWork(r).length} folder${needsWork(r).length === 1 ? "" : "s"}`;
    return { stale: "update", detail: "rebuild", none: "index", ready: "", partial: "", empty: "" }[rowState(r)];
  }

  async function refreshFolders() {
    try {
      models.value = await listModels();
      if (!models.value.includes(state.model) && models.value.length) set({ model: models.value[0] });
      if (!state.model) return;
      const d = await listFolders(state.model);
      folderRows.value = d.folders;
      job.value = d.job;
    } catch (e) {
      error.value = String((e as Error).message ?? e);
    }
  }
  async function indexFolders(paths: string[], full = false) {
    if (!paths.length) return;
    try {
      job.value = await startIndex(state.model, paths, full, state.detail);
    } catch (e) {
      error.value = String((e as Error).message ?? e);
    }
  }
  /** Index what a row stands for: the folder, or a container's subfolders that need it. */
  const indexRow = (r: FolderRow, full = false) =>
    indexFolders((full ? targets(r) : needsWork(r)).map((x) => x.path), full);
  function indexSearched() {
    void indexFolders(
      folderRows.value
        .filter((r) => hasFiles(r) && state.folders.includes(r.path) && ownState(r) !== "ready")
        .map((r) => r.path),
    );
  }
  async function cancelIndex() {
    job.value = await apiCancel();
  }
  async function removeIndex(p: string) {
    await deleteIndex(state.model, p);
    await refreshFolders();
  }
  function setModel(m: string) {
    set({ model: m, selected: null, similar: [] });
    hits.value = [];
    void refreshFolders();
  }

  function onJobEvent(e: Event) {
    const prev = job.value;
    job.value = (e as CustomEvent<JobState>).detail;
    if ((prev.folder && prev.folder !== job.value.folder) || (prev.running && !job.value.running)) {
      void refreshFolders().then(() => liveSearch());
    }
  }

  // ----- live search --------------------------------------------------------------------------

  const linked = ref<{ text: boolean; image: boolean }>({ text: false, image: false });
  const linkedQuery = computed(() =>
    linked.value.image && linked.value.text ? "image + text" : linked.value.image ? "image" : linked.value.text ? "text" : "",
  );
  function readLinks() {
    const ins = node?.inputs ?? [];
    const on = (name: string) => {
      const slot = ins.findIndex((i) => i.name === name);
      if (slot < 0) return false;
      return node?.isInputConnected ? node.isInputConnected(slot) : ins[slot].link != null;
    };
    const was = linkedQuery.value;
    linked.value = { text: on("text"), image: on("image") };
    if (linkedQuery.value !== was) {
      // results from the on-node query no longer describe what a run will search
      hits.value = [];
      ms.value = null;
      autoPick.value = null;
      if (!linkedQuery.value) liveSearch();
    }
  }

  let timer: ReturnType<typeof setTimeout> | null = null;
  let inflight: AbortController | null = null;
  function liveSearch(delay = 0) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(runLive, delay);
  }
  async function runLive() {
    const similar = state.similar.length > 0;
    if (linkedQuery.value) return; // wired inputs are the query: only a queued run searches
    if (!state.model || !state.folders.length || (!state.query.trim() && !similar)) {
      if (!similar && !state.query.trim()) hits.value = [];
      return;
    }
    inflight?.abort();
    const mine = (inflight = new AbortController());
    searching.value = true;
    try {
      const r = await search(state, mine.signal);
      hits.value = r.hits;
      ms.value = r.ms;
      autoPick.value = null;
      error.value = "";
    } catch (e) {
      if ((e as Error).name !== "AbortError") error.value = String((e as Error).message ?? e);
    } finally {
      // only the latest request clears the flag: a superseded one finishing (aborted) mustn't
      // flip it off while its replacement is still running
      if (inflight === mine) searching.value = false;
    }
  }

  function pick(ref: string) {
    set({ selected: state.selected === ref ? null : ref });
  }
  /** Click: search like this file. Shift-click: add it to (or drop it from) the similar-to set. */
  function toggleSimilar(ref: string, add: boolean) {
    const has = state.similar.includes(ref);
    if (add) set({ similar: has ? state.similar.filter((r) => r !== ref) : [...state.similar, ref] });
    else set({ similar: has && state.similar.length === 1 ? [] : [ref] });
  }

  // ----- view preferences (node.properties) ---------------------------------------------------

  const clampZoom = (z: number) => Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, Number.isFinite(z) ? z : 104));
  const zoom = ref(clampZoom(Number(prop("qeZoom", 104))));
  function setZoom(z: number) {
    zoom.value = clampZoom(z);
    saveProp("qeZoom", zoom.value);
  }
  const fit = ref<Fit>(prop<string>("qeFit", "cover") === "contain" ? "contain" : "cover");
  function setFit(f: Fit) {
    fit.value = f === "contain" ? "contain" : "cover";
    saveProp("qeFit", fit.value);
  }

  /** True while a ZenKit panel shows this node's search (the node body steps aside). */
  const panelOpen = ref(false);

  // ----- wiring (once per node) ---------------------------------------------------------------

  const scope = effectScope(true);
  scope.run(() => {
    watch(
      () => [state.query, state.kind, state.top_k, state.dim, state.folders.join("\n"), state.similar.join("\n"), state.combine, state.model, state.detail],
      (now, before) => liveSearch(now[0] !== before?.[0] ? 350 : 0),
    );
  });
  if (widget) {
    const prev = widget.callback;
    widget.callback = function (this: unknown, v: unknown) {
      if (v && typeof v === "object" && "__qeRun" in (v as object)) {
        onRun((v as { __qeRun: RunResult | null }).__qeRun);
        return; // a run result is not a value: never persist it
      }
      if (prev) prev.call(this, v);
      if (!ownWrite) Object.assign(state, toState(v)); // workflow load, undo
    };
  }
  if (node) {
    const prevConn = node.onConnectionsChange;
    node.onConnectionsChange = function (this: unknown, ...args: unknown[]) {
      prevConn?.apply(this, args);
      readLinks();
    };
  }
  api.addEventListener(JOB_EVENT, onJobEvent);
  readLinks();
  void refreshFolders().then(() => liveSearch());

  function dispose() {
    scope.stop();
    api.removeEventListener(JOB_EVENT, onJobEvent);
    inflight?.abort();
    if (timer) clearTimeout(timer);
  }

  return {
    widget,
    node,
    state,
    set,
    hits,
    runCount,
    ms,
    autoPick,
    searching,
    error,
    models,
    folderRows,
    job,
    foldersOpen,
    toggleFolders,
    hasChildren,
    isCollapsed,
    toggleCollapsed,
    visibleFolders,
    isOn,
    setOn,
    isQueued,
    isTree,
    hasFiles,
    partlyOn,
    counts,
    needsIndex,
    folderSummary,
    jobPct,
    rowState,
    ownState,
    needsWork,
    pillActs,
    pillClass,
    pillText,
    pillIcon,
    pillTitle,
    pillAction,
    refreshFolders,
    indexFolders,
    indexRow,
    indexSearched,
    cancelIndex,
    removeIndex,
    setModel,
    linked,
    linkedQuery,
    liveSearch,
    pick,
    toggleSimilar,
    zoom,
    setZoom,
    fit,
    setFit,
    panelOpen,
    rowOf,
    saveProp,
    dispose,
  };
}

export type SearchStore = ReturnType<typeof createStore>;

const stores = new WeakMap<object, SearchStore>();

/** The node's one store. Views of the same widget (node body, pop-out panel) share it. */
export function useSearchStore(widget: DOMWidget | undefined, node: NodeLike | undefined): SearchStore {
  const key = (widget ?? node ?? {}) as object;
  let store = stores.get(key);
  if (!store) {
    store = createStore(widget, node);
    stores.set(key, store);
    if (node) {
      const prevRemoved = node.onRemoved;
      node.onRemoved = function (this: unknown, ...args: unknown[]) {
        stores.get(key)?.dispose();
        stores.delete(key);
        return prevRemoved?.apply(this, args);
      };
    }
  }
  return store;
}

export type { Ref };
