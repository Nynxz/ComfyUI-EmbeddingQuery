<template>
  <ZenWidget
    ref="rootEl"
    fill
    :gap="6"
    pad="2px"
    class="qe"
    v-bind="wheel.attrs"
  >
    <!-- query -->
    <div class="qe-query">
      <div v-if="linkedQuery" class="qe-linked">
        <i class="mdi mdi-link-variant" />
        <span>Query from the {{ linkedQuery }} input · queue to search</span>
      </div>
      <div v-else-if="state.similar.length" class="qe-similar" :title="state.similar.join('\n')">
        <span class="qe-sim-stack">
          <template v-for="r in state.similar.slice(0, 4)" :key="r">
            <img v-if="isImageRef(r)" :src="thumbUrl(r, 64)" />
            <i v-else class="mdi mdi-text-box-outline" />
          </template>
        </span>
        <span v-if="state.similar.length === 1">Similar to <b>{{ baseName(state.similar[0]) }}</b></span>
        <span v-else>
          Similar to <b>{{ state.similar.length }} files</b>
          <span class="qe-muted"> · {{ COMBINE_LABEL[state.combine] }}</span>
        </span>
        <ZenIconButton sm icon="mdi mdi-close" title="Back to text search" @click="set({ similar: [] })" />
      </div>
      <ZenInput
        v-else
        class="qe-input"
        sm
        :model-value="state.query"
        placeholder="Search images and text…"
        @update:model-value="set({ query: String($event) })"
      />
      <ZenToggleGroup
        sm
        collapse
        :model-value="state.kind"
        :options="KIND_OPTS"
        @update:model-value="set({ kind: $event as Kind })"
      />
    </div>

    <!-- folders -->
    <div class="qe-folders" :class="{ open: foldersOpen }">
      <div class="qe-fhead">
        <button class="qe-fhead-main" @click="toggleFolders">
          <i class="mdi" :class="foldersOpen ? 'mdi-chevron-down' : 'mdi-chevron-right'" />
          <i class="mdi mdi-folder-search-outline" />
          <span class="qe-fhead-text">{{ folderSummary }}</span>
          <span v-if="needsIndex" class="qe-pill warn" :title="`${needsIndex} searched folder(s) need indexing`">
            {{ needsIndex }} to index
          </span>
        </button>
        <ZenIconButton
          v-if="needsIndex && !job.running"
          sm
          icon="mdi mdi-database-sync-outline"
          title="Index the searched folders that need it"
          @click="indexSearched"
        />
        <ZenIconButton
          v-if="job.running"
          sm
          danger
          icon="mdi mdi-stop-circle-outline"
          title="Stop indexing"
          @click="cancelIndex"
        />
        <ZenIconButton sm icon="mdi mdi-refresh" title="Rescan folders" @click="refreshFolders" />
      </div>

      <div v-if="job.running" class="qe-job">
        <div class="qe-job-bar"><div :style="{ width: jobPct + '%' }" /></div>
        <span>
          Indexing <b>{{ job.folder ?? "" }}</b>
          {{ job.total ? `${job.done}/${job.total}` : "…" }}
          <template v-if="job.queued.length"> · {{ job.queued.length }} queued</template>
        </span>
      </div>
      <div v-else-if="job.error" class="qe-job err">
        <i class="mdi mdi-alert-circle-outline" /> {{ job.error }}
      </div>

      <div v-if="foldersOpen" class="qe-frows">
        <div v-if="!models.length" class="qe-hint">
          No model found. Download
          <a href="https://huggingface.co/nynxz/embeddinggemma-2/blob/main/text_encoders/embeddinggemma_2_bf16.safetensors" target="_blank" rel="noopener">embeddinggemma_2_bf16.safetensors</a>
          into <code>models/text_encoders/</code> and restart ComfyUI.
        </div>
        <div
          v-for="row in visibleFolders"
          :key="row.path"
          class="qe-frow"
          :class="{ off: !isOn(row.path), busy: job.running && job.folder === row.path }"
          :style="{ paddingLeft: `${4 + folderDepth(row.path) * 12}px` }"
        >
          <button
            v-if="hasChildren(row.path)"
            class="qe-chev"
            :title="isCollapsed(row.path) ? 'Show subfolders' : 'Hide subfolders'"
            @click="toggleCollapsed(row.path)"
          >
            <i class="mdi" :class="isCollapsed(row.path) ? 'mdi-chevron-right' : 'mdi-chevron-down'" />
          </button>
          <span v-else class="qe-chev" />
          <ZenDot
            :model-value="isOn(row.path)"
            :title="isOn(row.path) ? 'Searched: click to leave out' : 'Not searched: click to include (indexes it if needed)'"
            @update:model-value="setOn(row.path, $event)"
          />
          <i
            v-if="isRoot(row.path)"
            class="mdi qe-froot"
            :class="row.path === 'output' ? 'mdi-image-multiple-outline' : 'mdi-tray-arrow-down'"
          />
          <span class="qe-fname" :class="{ root: isRoot(row.path) }" :title="row.path + '/'">{{
            folderLabel(row.path)
          }}</span>
          <span class="qe-fcount">
            <template v-if="row.images"><i class="mdi mdi-image-outline" />{{ row.images }}</template>
            <template v-if="row.texts"><i class="mdi mdi-text-box-outline" />{{ row.texts }}</template>
          </span>
          <!-- the pill is the shortcut for the obvious action (index / update); the rest is in ⋯ -->
          <button
            v-if="pillText(row)"
            class="qe-pill"
            :class="[pillClass(row), { act: pillActs(row) }]"
            :title="pillTitle(row) + (pillActs(row) ? '\nClick to ' + (row.status.state === 'stale' ? 'update' : 'index') : '')"
            :disabled="!pillActs(row)"
            @click="indexFolders([row.path])"
          >
            {{ pillText(row) }}
          </button>
          <ZenIconButton
            v-if="row.images + row.texts"
            sm
            class="qe-more"
            icon="mdi mdi-dots-horizontal"
            :active="menu.open && menu.path === row.path"
            title="Index options"
            @click="openMenu(row, $event)"
          />
          <span v-else class="qe-more-gap" />
        </div>
        <ZenPopover v-model:open="menu.open" :anchor="menu.anchor ?? undefined" placement="bottom-end">
          <template v-if="menuRow">
            <ZenMenuItem
              v-if="menuRow.status.state !== 'ready'"
              icon="mdi mdi-database-plus-outline"
              :disabled="isQueued(menuRow.path)"
              @select="menuDo(() => indexFolders([menuRow!.path]))"
            >
              {{ menuRow.status.state === "stale" ? `Update (${pillText(menuRow)})` : "Index folder" }}
            </ZenMenuItem>
            <ZenMenuItem
              v-if="menuRow.status.state !== 'none'"
              icon="mdi mdi-database-refresh-outline"
              :disabled="isQueued(menuRow.path)"
              @select="menuDo(() => indexFolders([menuRow!.path], true))"
            >
              Rebuild from scratch
            </ZenMenuItem>
            <template v-if="menuRow.status.state !== 'none'">
              <ZenMenuSeparator />
              <ZenMenuItem
                icon="mdi mdi-trash-can-outline"
                danger
                :disabled="isQueued(menuRow.path)"
                @select="menuDo(() => removeIndex(menuRow!.path))"
              >
                Delete index
              </ZenMenuItem>
            </template>
          </template>
        </ZenPopover>
      </div>
    </div>

    <!-- results -->
    <div ref="resultsEl" class="qe-results">
      <div class="qe-scroll">
      <div v-if="hits.length" class="qe-grid" :style="{ gridTemplateColumns: `repeat(${cols}, 1fr)` }">
        <button
          v-for="h in hits"
          :key="h.ref"
          class="qe-hit"
          :class="{ picked: h.ref === state.selected, auto: h.ref === autoPick }"
          :title="`${h.ref}\nscore ${h.score.toFixed(3)}`"
          @click="pick(h.ref)"
        >
          <img v-if="h.kind === 'image'" :src="thumbUrl(h.ref, thumbSize)" loading="lazy" draggable="false" />
          <div v-else class="qe-text">
            <i class="mdi mdi-text-box-outline" />
            <span class="qe-snip">{{ snippets[h.ref] ?? "" }}</span>
          </div>
          <span class="qe-score">{{ h.score.toFixed(2) }}</span>
          <span v-if="h.ref === state.selected" class="qe-check"><i class="mdi mdi-check" /></span>
          <span class="qe-name">{{ h.name }}</span>
          <span class="qe-acts">
            <span
              v-if="!linkedQuery"
              class="qe-act"
              role="button"
              :title="state.similar.includes(h.ref) ? 'Remove from the similar-to set' : 'Find similar (shift-click: add to the set)'"
              :class="{ on: state.similar.includes(h.ref) }"
              @click.stop="toggleSimilar(h.ref, $event.shiftKey)"
            ><i class="mdi mdi-image-search-outline" /></span>
            <a class="qe-act" :href="fileUrl(h.ref)" target="_blank" title="Open file" @click.stop
              ><i class="mdi mdi-open-in-new"
            /></a>
          </span>
        </button>
      </div>
      <ZenEmpty v-else :icon="emptyIcon" :title="emptyTitle" />
      </div>
    </div>

    <!-- status -->
    <div class="qe-status">
      <span v-if="error" class="qe-err" :title="error"><i class="mdi mdi-alert-circle-outline" /> {{ error }}</span>
      <span v-else-if="searching" class="qe-muted"><i class="mdi mdi-loading mdi-spin" /> Searching…</span>
      <span v-else-if="hits.length" class="qe-muted">
        {{ hits.length }} results<template v-if="ms != null"> · {{ ms }} ms</template>
      </span>
      <span class="qe-spacer" />
      <template v-if="state.selected">
        <span class="qe-picked" :title="state.selected"><i class="mdi mdi-pin" /> {{ baseName(state.selected) }}</span>
        <ZenIconButton sm icon="mdi mdi-pin-off-outline" title="Unpick: output the top result" @click="set({ selected: null })" />
      </template>
      <span v-else-if="hits.length" class="qe-muted" title="Click a result to pin it as the output">output: top result</span>
      <ZenIconButton sm icon="mdi mdi-magnify-minus-outline" title="Smaller thumbnails" :disabled="zoom <= ZOOM_MIN" @click="setZoom(zoom - ZOOM_STEP)" />
      <ZenIconButton sm icon="mdi mdi-magnify-plus-outline" title="Larger thumbnails" :disabled="zoom >= ZOOM_MAX" @click="setZoom(zoom + ZOOM_STEP)" />
      <ZenNumber
        class="qe-topk"
        sm
        :model-value="state.top_k"
        :min="1"
        :max="200"
        :step="1"
        :precision="0"
        title="How many results"
        @update:model-value="set({ top_k: Math.round($event) })"
      />
      <!-- controlled (v-model:open): an uncontrolled ZenPopover never emits update:open -->
      <ZenPopover v-model:open="settingsOpen" placement="top-end" role="dialog">
        <template #trigger>
          <ZenIconButton
            sm
            icon="mdi mdi-cog-outline"
            :active="settingsOpen"
            title="Model and ranking settings"
            @click="settingsOpen = !settingsOpen"
          />
        </template>
        <div class="qe-settings">
          <label class="qe-set-row">
            <span>Model</span>
            <ZenSelect
              sm
              :model-value="state.model"
              :options="models.map((m) => ({ value: m, label: m }))"
              placeholder="No model found"
              @update:model-value="setModel(String($event))"
            />
          </label>
          <label class="qe-set-row">
            <span>Several queries</span>
            <ZenSelect
              sm
              :model-value="state.combine"
              :options="COMBINE_OPTS"
              @update:model-value="set({ combine: $event as Combine })"
            />
          </label>
          <label class="qe-set-row">
            <span>Ranking dims</span>
            <ZenSelect
              sm
              :model-value="String(state.dim)"
              :options="DIM_OPTS"
              @update:model-value="set({ dim: Number($event) })"
            />
          </label>
          <p class="qe-set-hint">
            <b>Several queries</b> (an image batch, image + text, or a shift-clicked similar-to set):
            <b>mean</b> finds what they have in common, <b>any</b> finds things like any one of
            them, <b>joint</b> lets the model read them together (wired inputs only, up to 16
            images).
          </p>
          <p class="qe-set-hint">
            768 is the most accurate. Smaller sizes (Matryoshka) rank slightly faster and looser; the
            indexes stay the same.
          </p>
        </div>
      </ZenPopover>
    </div>
  </ZenWidget>
</template>

<script lang="ts">
import type { NodeDef, WidgetOptions } from "@/framework";

export const widgetOptions: WidgetOptions = {
  fill: true,
  minHeight: 300,
  minWidth: 340,
};

// After a run, the node's `ui` output comes back through the widget callback, wrapped so the
// component can tell it from its own value writes.
export const nodeDef: Omit<NodeDef, "widgets"> = {
  is: "embeddingquery.Search",
  minSize: [420, 520],
  output: {
    widget: "search",
    from: (o) => ({ __qeRun: ((o.qe_results as unknown[]) ?? [])[0] ?? null }),
  },
};
</script>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { api } from "@comfy/api";
import {
  useWheelClaim,
  ZenDot,
  ZenEmpty,
  ZenIconButton,
  ZenInput,
  ZenMenuItem,
  ZenMenuSeparator,
  ZenNumber,
  ZenPopover,
  ZenSelect,
  ZenToggleGroup,
  ZenWidget,
} from "@nynxz/zenkit-ui";

import {
  cancelIndex as apiCancel,
  deleteIndex,
  fileUrl,
  folderDepth,
  folderLabel,
  isRoot,
  normalizeFolder,
  parentFolder,
  JOB_EVENT,
  listFolders,
  listModels,
  search,
  startIndex,
  textOf,
  thumbUrl,
  type FolderRow,
  type Hit,
  type JobState,
  type Combine,
  type Kind,
  type RunResult,
  type SearchState,
} from "@/lib/api";

interface DOMWidget {
  value: unknown;
  callback?: (v: unknown) => void;
}
interface NodeLike {
  inputs?: { name: string; link?: number | null }[];
  properties?: Record<string, unknown>;
  size?: [number, number];
  onConnectionsChange?: (...args: unknown[]) => void;
  isInputConnected?: (slot: number) => boolean;
  graph?: { setDirtyCanvas?: (a: boolean, b: boolean) => void };
}

const props = defineProps<{ widget?: DOMWidget; node?: NodeLike }>();

const KIND_OPTS = [
  { value: "all", icon: "mdi mdi-shape-outline", title: "Images and text" },
  { value: "image", icon: "mdi mdi-image-outline", title: "Images only" },
  { value: "text", icon: "mdi mdi-text-box-outline", title: "Text files only" },
];
const COMBINE_LABEL: Record<Combine, string> = { mean: "in common", any: "any of them", joint: "together" };
const COMBINE_OPTS = [
  { value: "mean", label: "Mean (in common)" },
  { value: "any", label: "Any (OR)" },
  { value: "joint", label: "Joint (together)" },
];
const DIM_OPTS = ["768", "512", "256", "128"].map((d) => ({ value: d, label: d }));
const IMAGE_EXT = /\.(png|jpe?g|webp|bmp|gif|tiff?)$/i;

const rootEl = ref<{ el: HTMLElement | null } | null>(null);
const wheel = useWheelClaim();

// ----- state (the widget value) -------------------------------------------------------------

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
};
function toState(v: unknown): SearchState {
  const o = v && typeof v === "object" ? (v as Partial<SearchState>) : {};
  return {
    ...DEFAULTS,
    ...o,
    similar: typeof o.similar === "string" ? [o.similar] : Array.isArray(o.similar) ? o.similar.filter((r) => typeof r === "string") : [],
    combine: ["mean", "any", "joint"].includes(o.combine as string) ? (o.combine as Combine) : "mean",
    folders: Array.isArray(o.folders)
      ? [...new Set(o.folders.filter((f) => typeof f === "string").map(normalizeFolder))]
      : [],
  };
}
const state = reactive<SearchState>(toState(props.widget?.value));

function set(patch: Partial<SearchState>) {
  Object.assign(state, patch);
  const value = JSON.parse(JSON.stringify(state)) as SearchState;
  const w = props.widget;
  if (!w) return;
  // eslint-disable-next-line vue/no-mutating-props -- the host widget object; its value IS the node state
  w.value = value;
  try {
    ownWrite = true;
    w.callback?.(value);
  } finally {
    ownWrite = false;
  }
  props.node?.graph?.setDirtyCanvas?.(true, false);
}
let ownWrite = false;

// ----- run results (from the node's ui output) ----------------------------------------------

const hits = ref<Hit[]>([]);
const ms = ref<number | null>(null);
const autoPick = ref<string | null>(null);
const searching = ref(false);
const error = ref("");

function onRun(r: RunResult | null) {
  if (!r) return;
  hits.value = r.hits ?? [];
  ms.value = null;
  error.value = "";
  autoPick.value = r.auto ? r.picked : null;
}

// ----- folders and indexing -----------------------------------------------------------------

const models = ref<string[]>([]);
const settingsOpen = ref(false);
const folderRows = ref<FolderRow[]>([]);
const job = ref<JobState>({ running: false, folder: null, done: 0, total: 0, queued: [], error: null, finished: null });
// Open while there's nothing to search yet; afterwards the results get the room unless the user
// opened the list on this node (remembered in its properties).
const savedOpen = props.node?.properties?.qeFoldersOpen;
const foldersOpen = ref(typeof savedOpen === "boolean" ? savedOpen : !state.folders.length);
const collapsed = ref<Set<string>>(new Set((props.node?.properties?.qeCollapsed as string[]) ?? []));

function toggleFolders() {
  foldersOpen.value = !foldersOpen.value;
  if (props.node?.properties) props.node.properties.qeFoldersOpen = foldersOpen.value;
}
const hasChildren = (p: string) => folderRows.value.some((r) => r.path !== p && parentOf(r.path) === p);
const parentOf = parentFolder;
const isCollapsed = (p: string) => collapsed.value.has(p);
function toggleCollapsed(p: string) {
  const next = new Set(collapsed.value);
  if (next.has(p)) next.delete(p);
  else next.add(p);
  collapsed.value = next;
  if (props.node?.properties) props.node.properties.qeCollapsed = [...next];
}
const visibleFolders = computed(() =>
  folderRows.value.filter((r) => {
    for (let p = parentOf(r.path); p !== null; p = parentOf(p)) if (collapsed.value.has(p)) return false;
    return true;
  }),
);

const isOn = (p: string) => state.folders.includes(p);
function setOn(p: string, on: boolean) {
  const folders = on ? [...new Set([...state.folders, p])] : state.folders.filter((f) => f !== p);
  set({ folders });
  const row = folderRows.value.find((r) => r.path === p);
  if (on && row && row.status.state !== "ready" && row.images + row.texts) void indexFolders([p]);
}
const isQueued = (p: string) => (job.value.running && job.value.folder === p) || job.value.queued.includes(p);

const needsIndex = computed(
  () =>
    folderRows.value.filter(
      (r) => isOn(r.path) && r.status.state !== "ready" && r.images + r.texts > 0 && !isQueued(r.path),
    ).length,
);
const folderSummary = computed(() => {
  const on = state.folders.length;
  if (!folderRows.value.length) return "Folders";
  if (!on) return "No folders searched: pick some";
  const files = folderRows.value
    .filter((r) => isOn(r.path))
    .reduce((n, r) => n + (r.status.indexed || 0), 0);
  return `${on} folder${on === 1 ? "" : "s"} · ${files} indexed files`;
});
const jobPct = computed(() => (job.value.total ? (100 * job.value.done) / job.value.total : 0));

// one shared ⋯ menu, anchored to the row button that opened it
const menu = reactive<{ open: boolean; path: string; anchor: HTMLElement | null }>({
  open: false,
  path: "",
  anchor: null,
});
const menuRow = computed(() => folderRows.value.find((r) => r.path === menu.path) ?? null);
function openMenu(row: FolderRow, e: MouseEvent) {
  const same = menu.open && menu.path === row.path;
  menu.path = row.path;
  menu.anchor = e.currentTarget as HTMLElement;
  menu.open = !same;
}
function menuDo(fn: () => unknown) {
  menu.open = false;
  void fn();
}
/** The pill indexes / updates on click when there's something to do and nothing queued. */
const pillActs = (r: FolderRow) => r.status.state !== "ready" && r.images + r.texts > 0 && !isQueued(r.path);

function pillClass(r: FolderRow) {
  if (isQueued(r.path)) return "info";
  return { ready: "ok", stale: "warn", none: "" }[r.status.state];
}
function pillText(r: FolderRow) {
  if (job.value.running && job.value.folder === r.path)
    return job.value.total ? `${Math.round(jobPct.value)}%` : "…";
  if (job.value.queued.includes(r.path)) return "queued";
  const s = r.status;
  if (s.state === "ready") return "indexed";
  if (s.state === "stale") return `+${(s.new ?? 0) + (s.changed ?? 0)}${s.removed ? ` −${s.removed}` : ""}`;
  return r.images + r.texts ? "no index" : "";
}
function pillTitle(r: FolderRow) {
  const s = r.status;
  if (s.state === "none") return "Not indexed";
  const when = s.updated ? new Date(s.updated * 1000).toLocaleString() : "";
  const parts = [`${s.indexed} files indexed ${when}`];
  if (s.state === "stale") parts.push(`${s.new ?? 0} new, ${s.changed ?? 0} changed, ${s.removed ?? 0} removed`);
  if (s.failed) parts.push(`${s.failed} could not be read`);
  return parts.join("\n");
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
  try {
    job.value = await startIndex(state.model, paths, full);
  } catch (e) {
    error.value = String((e as Error).message ?? e);
  }
}
function indexSearched() {
  void indexFolders(
    folderRows.value
      .filter((r) => isOn(r.path) && r.status.state !== "ready" && r.images + r.texts > 0)
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
  // a folder finished (or everything did): its status changed
  if ((prev.folder && prev.folder !== job.value.folder) || (prev.running && !job.value.running)) {
    void refreshFolders().then(() => liveSearch());
  }
}

// ----- live search ---------------------------------------------------------------------------

const linked = ref<{ text: boolean; image: boolean }>({ text: false, image: false });
const linkedQuery = computed(() =>
  linked.value.image && linked.value.text ? "image + text" : linked.value.image ? "image" : linked.value.text ? "text" : "",
);
function readLinks() {
  const node = props.node;
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
  inflight = new AbortController();
  searching.value = true;
  try {
    const r = await search(state, inflight.signal);
    hits.value = r.hits;
    ms.value = r.ms;
    autoPick.value = null;
    error.value = "";
  } catch (e) {
    if ((e as Error).name !== "AbortError") error.value = String((e as Error).message ?? e);
  } finally {
    searching.value = false;
  }
}
watch(
  () => [state.query, state.kind, state.top_k, state.dim, state.folders.join("\n"), state.similar.join("\n"), state.combine, state.model],
  (now, before) => liveSearch(now[0] !== before?.[0] ? 350 : 0),
);

function pick(ref: string) {
  set({ selected: state.selected === ref ? null : ref });
}
/** Click: search like this file. Shift-click: add it to (or drop it from) the similar-to set. */
function toggleSimilar(ref: string, add: boolean) {
  const has = state.similar.includes(ref);
  if (add) set({ similar: has ? state.similar.filter((r) => r !== ref) : [...state.similar, ref] });
  else set({ similar: has && state.similar.length === 1 ? [] : [ref] });
}

// text snippets, loaded once per visible text hit
const snippets = reactive<Record<string, string>>({});
watch(hits, (list) => {
  for (const h of list)
    if (h.kind === "text" && !(h.ref in snippets)) {
      snippets[h.ref] = "";
      void textOf(h.ref).then((t) => (snippets[h.ref] = t.slice(0, 240)));
    }
});

// The grid's column count comes from the results box's own width and the zoom (target cell size),
// measured with a ResizeObserver: under Vue nodes the node doesn't call onResize on DOM resizes.
const ZOOM_MIN = 56;
const ZOOM_MAX = 240;
const ZOOM_STEP = 24;
const GAP = 5;
const resultsEl = ref<HTMLElement | null>(null);
const boxWidth = ref(400);
const zoom = ref(clampZoom(Number(props.node?.properties?.qeZoom ?? 104)));
function clampZoom(z: number) {
  return Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, Number.isFinite(z) ? z : 104));
}
function setZoom(z: number) {
  zoom.value = clampZoom(z);
  if (props.node?.properties) props.node.properties.qeZoom = zoom.value;
}
const cols = computed(() => Math.max(1, Math.floor((boxWidth.value - 8 + GAP) / (zoom.value + GAP))));
const cell = computed(() => (boxWidth.value - 8 - GAP * (cols.value - 1)) / cols.value);
const thumbSize = computed(() => (cell.value > 150 ? 384 : cell.value > 90 ? 256 : 160));
let ro: ResizeObserver | null = null;

const isImageRef = (r: string) => IMAGE_EXT.test(r);
const baseName = (r: string) => r.split("/").pop() ?? r;

const emptyIcon = computed(() =>
  !state.folders.length ? "mdi mdi-folder-plus-outline" : "mdi mdi-magnify",
);
const emptyTitle = computed(() => {
  if (!models.value.length) return "No model";
  if (!state.folders.length) return "Pick folders to search";
  if (linkedQuery.value) return "Queue the node to search";
  if (!state.query.trim()) return "Type to search";
  return searching.value ? "Searching…" : "Nothing found";
});

// ----- host wiring ---------------------------------------------------------------------------

onMounted(() => {
  const w = props.widget;
  if (w) {
    const prev = w.callback;
    // eslint-disable-next-line vue/no-mutating-props -- the host widget object
    w.callback = function (this: unknown, v: unknown) {
      if (v && typeof v === "object" && "__qeRun" in (v as object)) {
        onRun((v as { __qeRun: RunResult | null }).__qeRun);
        return; // a run result is not a value: never persist it
      }
      if (prev) prev.call(this, v);
      if (!ownWrite) Object.assign(state, toState(v)); // e.g. workflow load / undo
    };
  }
  const node = props.node;
  if (node) {
    const prevConn = node.onConnectionsChange;
    node.onConnectionsChange = function (this: unknown, ...args: unknown[]) {
      prevConn?.apply(this, args);
      readLinks();
    };
  }
  wheel.el.value = rootEl.value?.el ?? null;
  if (resultsEl.value && typeof ResizeObserver !== "undefined") {
    ro = new ResizeObserver(() => (boxWidth.value = resultsEl.value?.clientWidth ?? boxWidth.value));
    ro.observe(resultsEl.value);
    boxWidth.value = resultsEl.value.clientWidth || boxWidth.value;
  }
  readLinks();
  api.addEventListener(JOB_EVENT, onJobEvent);
  void refreshFolders().then(() => liveSearch());
});
onBeforeUnmount(() => {
  api.removeEventListener(JOB_EVENT, onJobEvent);
  ro?.disconnect();
  inflight?.abort();
  if (timer) clearTimeout(timer);
});
</script>

<style scoped>
.qe {
  font-size: 11px;
  color: var(--zen-text);
}
.qe-query {
  display: flex;
  gap: 4px;
  align-items: center;
}
.qe-input {
  flex: 1;
  min-width: 0;
}
.qe-similar,
.qe-linked {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  padding: 0 2px 0 4px;
  border-radius: var(--zen-radius);
  background: color-mix(in srgb, var(--zen-accent) 14%, transparent);
  overflow: hidden;
  white-space: nowrap;
}
.qe-linked {
  background: var(--zen-surface-2);
  color: var(--zen-muted);
  padding: 0 8px;
}
.qe-similar > .qe-sim-stack {
  display: inline-flex;
  flex: none;
}
.qe-sim-stack > * {
  width: 18px;
  height: 18px;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 0 0 0 1px var(--zen-surface);
  display: grid;
  place-items: center;
  background: var(--zen-surface-2);
}
.qe-sim-stack > * + * {
  margin-left: -6px;
}
.qe-similar span,
.qe-linked span {
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

/* folders */
.qe-folders {
  border: 1px solid var(--zen-border);
  border-radius: var(--zen-radius);
  background: var(--zen-surface);
  flex: none;
}
.qe-fhead {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
}
.qe-fhead-main {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  height: 24px;
  padding: 0 4px;
  border: 0;
  background: none;
  color: var(--zen-text);
  font: inherit;
  cursor: pointer;
  border-radius: var(--zen-radius);
}
.qe-fhead-main:hover {
  background: color-mix(in srgb, var(--zen-text) 6%, transparent);
}
.qe-fhead-text {
  flex: 1;
  min-width: 0;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}
.qe-job {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 8px 5px;
  color: var(--zen-muted);
  white-space: nowrap;
}
.qe-job.err {
  color: var(--zen-danger);
  white-space: normal;
}
.qe-job-bar {
  flex: 0 0 80px;
  height: 4px;
  border-radius: 2px;
  background: var(--zen-surface-2);
  overflow: hidden;
}
.qe-job-bar > div {
  height: 100%;
  background: var(--zen-accent);
  transition: width 0.25s ease;
}
.qe-frows {
  max-height: 190px;
  overflow-y: auto;
  border-top: 1px solid var(--zen-border);
  padding: 2px 0;
}
.qe-settings {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  padding: 8px;
  font-size: 11px;
  color: var(--zen-text);
}
.qe-set-row {
  display: grid;
  grid-template-columns: 84px 1fr;
  align-items: center;
  gap: 8px;
  color: var(--zen-muted);
}
.qe-set-row > :last-child {
  min-width: 0;
}
.qe-set-hint {
  margin: 0;
  color: var(--zen-muted);
  line-height: 1.4;
}
.qe-frow {
  display: flex;
  align-items: center;
  gap: 5px;
  height: 26px;
  padding-right: 4px;
}
.qe-frow:hover {
  background: color-mix(in srgb, var(--zen-text) 5%, transparent);
}
.qe-frow.off .qe-fname {
  color: var(--zen-muted);
}
.qe-chev {
  flex: none;
  width: 14px;
  height: 18px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--zen-muted);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.qe-fname {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.qe-fname.root {
  font-weight: 600;
}
.qe-froot {
  color: var(--zen-muted);
  font-size: 13px;
}
.qe-fcount {
  display: inline-flex;
  gap: 6px;
  color: var(--zen-muted);
  font-variant-numeric: tabular-nums;
}
.qe-fcount .mdi {
  margin-right: 1px;
}
.qe-more,
.qe-more-gap {
  flex: none;
  width: 24px;
}
.qe-more {
  opacity: 0.55;
}
.qe-frow:hover .qe-more,
.qe-more[aria-pressed="true"] {
  opacity: 1;
}
.qe-pill {
  flex: none;
  border: 0;
  font-family: inherit;
  line-height: 15px;
  padding: 1px 6px;
  border-radius: 9px;
  font-size: 10px;
  font-weight: 600;
  color: var(--zen-muted);
  background: var(--zen-surface-2);
  white-space: nowrap;
}
.qe-pill:disabled {
  cursor: default;
}
.qe-pill.act {
  cursor: pointer;
}
.qe-pill.act:hover {
  filter: brightness(1.25);
  box-shadow: 0 0 0 1px currentColor;
}
.qe-pill.ok {
  color: var(--zen-ok);
  background: color-mix(in srgb, var(--zen-ok) 14%, transparent);
}
.qe-pill.warn {
  color: var(--zen-warn);
  background: color-mix(in srgb, var(--zen-warn) 14%, transparent);
}
.qe-pill.info {
  color: var(--zen-info);
  background: color-mix(in srgb, var(--zen-info) 14%, transparent);
}
.qe-hint {
  padding: 6px 8px;
  color: var(--zen-muted);
}

/* results */
/* The scroller is absolutely positioned so it adds nothing to the body's intrinsic height. Under
   Vue nodes the widget row is sized to content; an in-flow grid of results would grow the node
   instead of scrolling. The node's size alone decides how much of the grid shows. */
.qe-results {
  position: relative;
  flex: 1 1 0;
  min-height: 90px;
}
.qe-scroll {
  position: absolute;
  inset: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;
  border-radius: var(--zen-radius);
}
.qe-scroll > .zen-empty,
.qe-scroll > :not(.qe-grid) {
  height: 100%;
}
.qe-grid {
  display: grid;
  gap: 5px;
}
.qe-hit {
  position: relative;
  aspect-ratio: 1;
  padding: 0;
  border: 1px solid var(--zen-border);
  border-radius: var(--zen-radius);
  background: var(--zen-surface);
  overflow: hidden;
  cursor: pointer;
  color: var(--zen-text);
  font: inherit;
}
.qe-hit img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.qe-hit:hover {
  border-color: color-mix(in srgb, var(--zen-accent) 55%, var(--zen-border));
}
/* Selection rings are drawn INSIDE the card, over the image: an outer ring (box-shadow) spills
   into the grid gap and is clipped by the scroller on the edge rows. */
.qe-hit::after {
  content: "";
  position: absolute;
  inset: -1px; /* over the card's own 1px border, so the ring is one solid edge */
  border-radius: inherit;
  pointer-events: none;
  z-index: 1;
}
.qe-hit.picked::after {
  box-shadow: inset 0 0 0 2px var(--zen-accent);
}
.qe-hit.auto::after {
  border: 2px dashed var(--zen-accent);
}
.qe-score,
.qe-check,
.qe-name,
.qe-acts {
  z-index: 2;
}
.qe-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  height: 100%;
  padding: 6px 6px 18px;
  text-align: left;
  background: var(--zen-surface-2);
}
.qe-text .mdi {
  color: var(--zen-muted);
  font-size: 14px;
}
.qe-snip {
  font-size: 10px;
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  color: var(--zen-text);
  white-space: pre-wrap;
  word-break: break-word;
}
.qe-score {
  position: absolute;
  top: 4px;
  left: 4px;
  padding: 0 4px;
  border-radius: 4px;
  font-size: 9.5px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  background: rgb(0 0 0 / 0.6);
  color: #fff;
}
.qe-check {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--zen-accent);
  color: var(--zen-accent-text, #fff);
  font-size: 12px;
}
.qe-name {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 4px 2px;
  font-size: 9.5px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
  background: linear-gradient(transparent, rgb(0 0 0 / 0.7));
  opacity: 0;
  transition: opacity 0.12s;
}
.qe-acts {
  position: absolute;
  right: 3px;
  bottom: 3px;
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity 0.12s;
}
.qe-hit:hover .qe-name,
.qe-hit:hover .qe-acts {
  opacity: 1;
}
.qe-hit:hover .qe-name {
  right: 44px;
}
.qe-act {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  background: rgb(0 0 0 / 0.65);
  color: #fff;
  font-size: 12px;
  text-decoration: none;
}
.qe-act.on {
  background: var(--zen-accent);
}
.qe-act:hover {
  background: var(--zen-accent);
}

/* status */
.qe-status {
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 24px;
  flex: none;
}
.qe-spacer {
  flex: 1;
}
.qe-status > * {
  flex: none;
}
.qe-status > .qe-muted,
.qe-status > .qe-err,
.qe-status > .qe-picked {
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.qe-status > .qe-spacer {
  flex: 1 1 0;
}
.qe-muted {
  color: var(--zen-muted);
  white-space: nowrap;
}
.qe-err {
  color: var(--zen-danger);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
.qe-picked {
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--zen-accent);
  font-weight: 600;
}
.qe-topk {
  width: 76px;
}
</style>
