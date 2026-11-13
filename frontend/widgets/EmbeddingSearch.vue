<template>
  <ZenWidget
    ref="rootEl"
    fill
    :gap="6"
    pad="2px"
    class="qe"
    :class="{ 'qe-panel': panel, dropping }"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
  >
    <!-- popped out: the node body steps aside for the ZenKit panel -->
    <div v-if="poppedHere" class="qe-popped">
      <i class="mdi mdi-open-in-app" />
      <span>Open in a window</span>
      <ZenButton sm icon="mdi mdi-eye-outline" @click="popOut(true)">Show it</ZenButton>
    </div>
    <template v-else>
    <div v-if="dropping" class="qe-dropmask">
      <i class="mdi mdi-image-search-outline" /><span>Drop to search by this image</span>
      <small>shift: add to the similar-to set</small>
    </div>

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
        :model-value="state.query"
        placeholder="Search images and text… or drop an image"
        @update:model-value="set({ query: String($event) })"
      />
      <ZenToggleGroup
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

      <!-- v-bind wheelScroll: wheel scrolls the list instead of zooming the canvas (lib/wheelScroll.ts) -->
      <div v-if="foldersOpen" class="qe-frows" v-bind="wheelScroll">
        <div v-if="!models.length" class="qe-hint">
          No model found. Download
          <a href="https://huggingface.co/nynxz/embeddinggemma-2/blob/main/text_encoders/embeddinggemma_2_bf16.safetensors" target="_blank" rel="noopener">embeddinggemma_2_bf16.safetensors</a>
          into <code>models/text_encoders/</code> and restart ComfyUI.
        </div>
        <div
          v-for="row in visibleFolders"
          :key="row.path"
          class="qe-frow"
          :class="{ off: !isOn(row.path) && !partlyOn(row.path), busy: job.running && job.folder === row.path }"
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
            :class="{ 'qe-partly': partlyOn(row.path) }"
            :model-value="isOn(row.path)"
            :title="dotTitle(row)"
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
          <!-- fixed-width, right-aligned counts so the columns line up whatever the numbers are -->
          <span class="qe-fcount" :class="{ summed: counts(row).summed }" :title="countTitle(row)">
            <span v-if="counts(row).texts" class="qe-cnt"
              ><i class="mdi mdi-text-box-outline" />{{ counts(row).texts }}</span
            >
            <span v-if="counts(row).images" class="qe-cnt"
              ><i class="mdi mdi-image-outline" />{{ counts(row).images }}</span
            >
          </span>
          <!-- the pill is the shortcut for the obvious action (index / update); the rest is in ⋯ -->
          <span class="qe-state">
            <button
              v-if="pillText(row)"
              class="qe-pill"
              :class="[pillClass(row), { act: pillActs(row), icon: !!pillIcon(row) }]"
              :title="pillTitle(row) + (pillActs(row) ? '\nClick to ' + pillAction(row) : '')"
              :disabled="!pillActs(row)"
              @click="indexRow(row)"
            >
              <i v-if="pillIcon(row)" class="mdi" :class="pillIcon(row)" />
              <template v-else>{{ pillText(row) }}</template>
            </button>
          </span>
          <ZenIconButton
            v-if="counts(row).images + counts(row).texts"
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
            <template v-if="isTree(menuRow)">
              <ZenMenuItem
                v-if="needsWork(menuRow).length"
                icon="mdi mdi-database-plus-outline"
                @select="menuDo(() => indexRow(menuRow!))"
              >
                Index {{ needsWork(menuRow).length }} folder{{ needsWork(menuRow).length === 1 ? "" : "s" }} here
              </ZenMenuItem>
              <ZenMenuItem icon="mdi mdi-database-refresh-outline" @select="menuDo(() => indexRow(menuRow!, true))">
                Rebuild all from scratch
              </ZenMenuItem>
            </template>
            <template v-else>
              <ZenMenuItem
                v-if="rowState(menuRow) !== 'ready'"
                icon="mdi mdi-database-plus-outline"
                :disabled="isQueued(menuRow.path)"
                @select="menuDo(() => indexRow(menuRow!))"
              >
                {{ menuIndexLabel(menuRow) }}
              </ZenMenuItem>
              <ZenMenuItem
                v-if="menuRow.status.state !== 'none' && rowState(menuRow) !== 'detail'"
                icon="mdi mdi-database-refresh-outline"
                :disabled="isQueued(menuRow.path)"
                @select="menuDo(() => indexRow(menuRow!, true))"
              >
                Rebuild from scratch
              </ZenMenuItem>
            </template>
            <template v-if="menuRow.status.state !== 'none'">
              <ZenMenuSeparator />
              <ZenMenuItem
                icon="mdi mdi-trash-can-outline"
                danger
                :disabled="isQueued(menuRow.path)"
                @select="menuDo(() => removeIndex(menuRow!.path))"
              >
                {{ isTree(menuRow) ? "Delete this folder's own index" : "Delete index" }}
              </ZenMenuItem>
            </template>
          </template>
        </ZenPopover>
      </div>
    </div>

    <!-- results -->
    <div ref="resultsEl" class="qe-results">
      <div ref="scrollEl" class="qe-scroll" v-bind="wheelScroll">
        <div
          v-if="hits.length"
          class="qe-grid"
          :class="'fit-' + fit"
          :style="{ gridTemplateColumns: `repeat(${cols}, 1fr)` }"
        >
          <button
            v-for="h in hits"
            :key="h.ref"
            class="qe-hit"
            :class="{ picked: h.ref === state.selected, auto: !state.selected && h.ref === autoPick }"
            :title="hitTitle(h)"
            :draggable="h.kind === 'image'"
            @dragstart="onDragStart($event, h)"
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
                ><i class="mdi mdi-image-search-outline"
              /></span>
              <a class="qe-act" :href="fileUrl(h.ref)" target="_blank" rel="noopener" title="Open in a new tab" @click.stop
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
      <ZenIconButton sm icon="mdi mdi-magnify-minus-outline" title="Smaller thumbnails" :disabled="zoom <= ZOOM.min" @click="setZoom(zoom - ZOOM.step)" />
      <ZenIconButton sm icon="mdi mdi-magnify-plus-outline" title="Larger thumbnails" :disabled="zoom >= ZOOM.max" @click="setZoom(zoom + ZOOM.step)" />
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
            title="Settings: model, thumbnails, ranking"
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
            <span>Thumbnails</span>
            <ZenSelect
              sm
              :model-value="fit"
              :options="FIT_OPTS"
              @update:model-value="setFit($event as Fit)"
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
            <span>Image detail</span>
            <ZenSelect
              sm
              :model-value="String(state.detail)"
              :options="DETAIL_OPTS"
              @update:model-value="set({ detail: Number($event) })"
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
            <b>Image detail</b>: tokens per image when indexing and for image queries. Lower is
            faster to index but matches less precisely. Folders indexed at another detail show it
            on their pill; click to rebuild.
          </p>
          <p class="qe-set-hint">
            768 is the most accurate. Smaller sizes (Matryoshka) rank slightly faster and looser; the
            indexes stay the same.
          </p>
        </div>
      </ZenPopover>
    </div>
    </template>
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
// store can tell it from its own value writes.
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
// A view of one node's search. The state and its side effects (live search, run results, job
// progress) live in lib/searchStore.ts, shared with the pop-out panel when ZenKit is installed:
// the panel mounts this same component with `panel: true`.
import { computed, getCurrentInstance, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { api } from "@comfy/api";
import {
  ZenButton,
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
  addNodeHeaderButton,
  hasMediaDrop,
  hasZenPanels,
  openZenPanel,
  readMediaDrop,
  setMediaDragData,
  type NodeHeaderButtonHandle,
  type ZenPanelHandle,
} from "@/framework";
import { rearmIfHovered, wheelScroll } from "@/lib/wheelScroll";
import { dragStartedInSearch } from "@/lib/dragOrigin";
import { useSearchStore, ZOOM, type DOMWidget, type Fit, type NodeLike } from "@/lib/searchStore";
import {
  fileUrl,
  folderDepth,
  folderLabel,
  isRoot,
  textOf,
  thumbUrl,
  type Combine,
  type FolderRow,
  type Hit,
  type Kind,
} from "@/lib/api";

const props = defineProps<{ widget?: DOMWidget; node?: NodeLike; panel?: boolean }>();

const store = useSearchStore(props.widget, props.node);
const {
  state,
  set,
  hits,
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
  partlyOn,
  setOn,
  isQueued,
  isTree,
  counts,
  needsIndex,
  folderSummary,
  jobPct,
  rowState,
  needsWork,
  pillActs,
  pillClass,
  pillText,
  pillIcon,
  pillTitle,
  pillAction,
  refreshFolders,
  indexRow,
  indexSearched,
  cancelIndex,
  removeIndex,
  setModel,
  linkedQuery,
  pick,
  toggleSimilar,
  zoom,
  setZoom,
  fit,
  setFit,
  panelOpen,
} = store;

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
const DETAIL_OPTS = [
  { value: "280", label: "High (280)" },
  { value: "140", label: "Medium (140, ~2x faster)" },
  { value: "70", label: "Fast (70, ~4x faster)" },
];
const FIT_OPTS = [
  { value: "cover", label: "Fill the card (crop)" },
  { value: "contain", label: "Whole image" },
];
const DIM_OPTS = ["768", "512", "256", "128"].map((d) => ({ value: d, label: d }));
const IMAGE_EXT = /\.(png|jpe?g|webp|bmp|gif|tiff?)$/i;
const isImageRef = (r: string) => IMAGE_EXT.test(r);
const baseName = (r: string) => r.split("/").pop() ?? r;

const rootEl = ref<{ el: HTMLElement | null } | null>(null);
const settingsOpen = ref(false);

// ----- folder rows ---------------------------------------------------------------------------

function dotTitle(row: FolderRow) {
  const tree = isTree(row) ? " (with its subfolders)" : "";
  if (isOn(row.path)) return `Searched${tree}: click to leave out`;
  if (partlyOn(row.path)) return "Some subfolders are searched: click to include all of them";
  return `Not searched: click to include${tree} (indexes what needs it)`;
}
function countTitle(row: FolderRow) {
  const c = counts(row);
  const total = `${c.images} images, ${c.texts} text files`;
  if (!c.summed) return total;
  return `${total} in this folder and its subfolders (${c.own} here)`;
}
function menuIndexLabel(row: FolderRow) {
  const st = rowState(row);
  if (st === "stale") return `Update (${pillText(row)})`;
  if (st === "detail") return `Rebuild at detail ${state.detail}`;
  return "Index folder";
}

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

// ----- results grid --------------------------------------------------------------------------

function hitTitle(h: Hit) {
  const auto = !state.selected && h.ref === autoPick.value ? "\nOutput of the last run (top result, nothing pinned)" : "";
  const drag = h.kind === "image" ? "\nDrag onto a Load Image node (or the canvas) to use it" : "";
  return `${h.ref}\nscore ${h.score.toFixed(3)}${auto}${drag}`;
}

// New results: back to the top when they answer a NEW query (text, similar-to set, kind, folders,
// settings) or a new run; a refresh of the same search (an index finishing) keeps the scroll. And
// under a resting pointer, keep the wheel on the grid (see lib/wheelScroll.ts).
const scrollEl = ref<HTMLElement | null>(null);
const queryKey = () =>
  JSON.stringify([state.query, state.similar, state.kind, state.folders, state.combine, state.dim, state.detail, state.model, store.runCount.value]);
let shownKey = queryKey();
watch(
  hits,
  () =>
    void nextTick(() => {
      const key = queryKey();
      if (key !== shownKey && scrollEl.value) scrollEl.value.scrollTop = 0;
      shownKey = key;
      rearmIfHovered(scrollEl.value);
    }),
  { flush: "post" },
);

// text snippets, loaded once per visible text hit
const snippets = reactive<Record<string, string>>({});
watch(
  hits,
  (list) => {
    for (const h of list)
      if (h.kind === "text" && !(h.ref in snippets)) {
        snippets[h.ref] = "";
        void textOf(h.ref).then((t) => (snippets[h.ref] = t.slice(0, 240)));
      }
  },
  { immediate: true },
);

// Column count from the results box's own width and the zoom, measured with a ResizeObserver:
// under Vue nodes the node doesn't call onResize on DOM resizes.
const GAP = 5;
const resultsEl = ref<HTMLElement | null>(null);
const boxWidth = ref(400);
const cols = computed(() => Math.max(1, Math.floor((boxWidth.value - 8 + GAP) / (zoom.value + GAP))));
const cell = computed(() => (boxWidth.value - 8 - GAP * (cols.value - 1)) / cols.value);
const thumbSize = computed(() => (cell.value > 150 ? 384 : cell.value > 90 ? 256 : 160));
let ro: ResizeObserver | null = null;

const emptyIcon = computed(() => (!state.folders.length ? "mdi mdi-folder-plus-outline" : "mdi mdi-magnify"));
const emptyTitle = computed(() => {
  if (!models.value.length) return "No model";
  if (!state.folders.length) return "Pick folders to search";
  if (linkedQuery.value) return "Queue the node to search";
  if (!state.query.trim()) return "Type, or drop an image, to search";
  return searching.value ? "Searching…" : "Nothing found";
});

// ----- drag a result out ---------------------------------------------------------------------

/** Drag an image result onto a Load Image node, or onto the canvas. A file that's already in
 *  input/ or output/ goes as a native Comfy asset (the loader points at it, no re-upload); one in
 *  a symlinked folder, which core loaders refuse, goes as a URL and is uploaded on drop. */
function onDragStart(e: DragEvent, h: Hit) {
  if (h.kind !== "image") return;
  const [type, ...rest] = h.ref.split("/");
  const filename = rest.pop() ?? "";
  const linked = store.rowOf(h.folder)?.linked;
  const img = (e.currentTarget as HTMLElement).querySelector("img");
  setMediaDragData(
    e,
    {
      url: fileUrl(h.ref),
      filename,
      ...(linked || (type !== "input" && type !== "output")
        ? {}
        : { type: type as "input" | "output", subfolder: rest.join("/") }),
    },
    img,
  );
}

// ----- drop an image in to search by it -------------------------------------------------------

const dropping = ref(false);
function onDragOver(e: DragEvent) {
  if (!hasMediaDrop(e) || linkedQuery.value) return;
  if (dragStartedInSearch()) return; // our own result card being dragged out isn't a query
  e.preventDefault();
  dropping.value = true;
}
function onDragLeave(e: DragEvent) {
  const root = rootEl.value?.el;
  if (!root || !root.contains(e.relatedTarget as Node | null)) dropping.value = false;
}

/** Desktop files land in temp/ (not input/): a query image isn't something to keep or index. */
async function uploadTemp(file: File): Promise<string> {
  const body = new FormData();
  body.append("image", file);
  body.append("type", "temp");
  body.append("subfolder", "embeddingquery");
  const res = await api.fetchApi("/upload/image", { method: "POST", body });
  if (!res.ok) throw new Error(`upload failed: HTTP ${res.status}`);
  const d = (await res.json()) as { name: string; subfolder?: string; type?: string };
  return [d.type || "temp", d.subfolder, d.name].filter(Boolean).join("/");
}
async function onDrop(e: DragEvent) {
  dropping.value = false;
  if (!hasMediaDrop(e) || linkedQuery.value || dragStartedInSearch()) return;
  e.preventDefault(); // also stops ComfyUI importing the file into the graph
  e.stopPropagation();
  const add = e.shiftKey;
  try {
    const refs = (await readMediaDrop(e, "", (f) => uploadTemp(f))).filter((r) => isImageRef(r));
    if (!refs.length) return;
    set({ similar: add ? [...new Set([...state.similar, ...refs])] : refs, selected: null });
  } catch (err) {
    error.value = String((err as Error).message ?? err);
  }
}

// ----- pop out (ZenKit) ----------------------------------------------------------------------

const POPPED = "qePoppedOut";
const self = getCurrentInstance()!.type; // the panel mounts this same component
const handles = new WeakMap<object, ZenPanelHandle>();
const quiet = new WeakSet<object>(); // panels closed because the node left
/** The node body shows a placeholder while its panel is on screen. */
const poppedHere = computed(() => !props.panel && panelOpen.value);

function panelId() {
  const node = props.node;
  const graph = node?.graph?.id;
  return graph ? `embeddingquery:${graph}:${node?.id}` : `embeddingquery.${node?.id}`;
}
function remember(popped: boolean) {
  const node = props.node;
  if (!node) return;
  node.properties ??= {};
  if (Boolean(node.properties[POPPED]) === popped) return;
  node.properties[POPPED] = popped;
  node.graph?.change?.();
}
function popOut(reveal = false) {
  const node = props.node;
  if (!node) return;
  const existing = handles.get(node);
  if (existing) return existing.focus();
  const handle = openZenPanel(
    {
      id: panelId(),
      title: "Embedding Search",
      icon: "mdi mdi-image-search-outline",
      width: 760,
      height: 820,
      minWidth: 380,
      minHeight: 420,
      persist: true,
      reveal,
      props: { widget: props.widget, node: props.node, panel: true },
      onClose: () => {
        handles.delete(node);
        if (quiet.delete(node)) return; // the node left: stay "popped" for the next load
        remember(false); // the user closed it
      },
    },
    self,
  );
  if (!handle) return;
  handles.set(node, handle);
  remember(true);
  const previous = node.onRemoved;
  node.onRemoved = function (this: unknown, ...args: unknown[]) {
    const h = handles.get(node);
    if (h) {
      quiet.add(node);
      h.close({ keep: true });
    }
    return previous?.apply(this, args);
  };
}

let header: NodeHeaderButtonHandle | null = null;
function addPopButton() {
  if (props.panel || header || !hasZenPanels()) return !!header;
  header = addNodeHeaderButton(props.node, rootEl.value?.el ?? null, {
    icon: "mdi mdi-open-in-new",
    text: "⧉",
    title: "Open in a window (ZenKit)",
    onClick: () => popOut(true),
  });
  return true;
}

// ----- mount ---------------------------------------------------------------------------------

onMounted(() => {
  if (props.panel) panelOpen.value = true;
  if (resultsEl.value && typeof ResizeObserver !== "undefined") {
    ro = new ResizeObserver(() => (boxWidth.value = resultsEl.value?.clientWidth ?? boxWidth.value));
    ro.observe(resultsEl.value);
    boxWidth.value = resultsEl.value.clientWidth || boxWidth.value;
  }
  if (props.panel) return;
  // ZenKit may install after this node mounts (workflow load): retry for up to 10 s, then reopen
  // the panel if the node was popped out when the workflow was saved.
  let tries = 0;
  const attempt = () => {
    if (!addPopButton() && ++tries < 40) return void setTimeout(attempt, 250);
    if (header && props.node?.properties?.[POPPED] && !handles.has(props.node)) popOut(false);
  };
  attempt();
});
onBeforeUnmount(() => {
  if (props.panel) panelOpen.value = false;
  ro?.disconnect();
  header?.destroy();
});
// the results box is re-created when the node body comes back from a pop-out
watch(resultsEl, (el) => {
  ro?.disconnect();
  if (el && ro) {
    ro.observe(el);
    boxWidth.value = el.clientWidth || boxWidth.value;
  }
});
</script>
<style scoped>
.qe {
  font-size: 11px;
  color: var(--zen-text);
}
/* ZenKit's default-size controls for both: the input and the toggle group must be the same
   height, or the same radius on the shorter box reads as rounder. The similar-to chip and the
   linked notice stretch to that same height. */
.qe-query {
  display: flex;
  gap: 4px;
  align-items: stretch;
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
  height: 100%;
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

/* Scrollbars: thin rounded thumb tinted from the theme (ZenKit's --zen-scrollbar), transparent
   track, no arrow buttons. Chromium only drops the arrows through ::-webkit-scrollbar, and it
   ignores those rules when the standard scrollbar-* properties are set, so the standard
   properties go to browsers without ::-webkit-scrollbar (Firefox) only. */
.qe-scroll:focus,
.qe-frows:focus {
  outline: none;
}
.qe-scroll,
.qe-frows {
  --qe-thumb: var(--zen-scrollbar, color-mix(in srgb, var(--zen-text, #e5e5ea) 24%, transparent));
  --qe-thumb-hover: color-mix(in srgb, var(--zen-text, #e5e5ea) 40%, transparent);
}
.qe-scroll::-webkit-scrollbar,
.qe-frows::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.qe-scroll::-webkit-scrollbar-track,
.qe-frows::-webkit-scrollbar-track,
.qe-scroll::-webkit-scrollbar-corner,
.qe-frows::-webkit-scrollbar-corner {
  background: transparent;
}
.qe-scroll::-webkit-scrollbar-button,
.qe-frows::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}
.qe-scroll::-webkit-scrollbar-thumb,
.qe-frows::-webkit-scrollbar-thumb {
  background: var(--qe-thumb);
  border-radius: 8px;
  border: 2px solid transparent; /* inset the thumb inside its 8px gutter */
  background-clip: padding-box;
}
.qe-scroll::-webkit-scrollbar-thumb:hover,
.qe-frows::-webkit-scrollbar-thumb:hover {
  background: var(--qe-thumb-hover);
  background-clip: padding-box;
}
@supports not selector(::-webkit-scrollbar) {
  .qe-scroll,
  .qe-frows {
    scrollbar-width: thin;
    scrollbar-color: var(--qe-thumb) transparent;
  }
}

/* folders */
.qe-folders {
  border: 1px solid var(--zen-border);
  border-radius: var(--zen-radius);
  overflow: hidden; /* row hovers follow the rounded corners */
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
  border-radius: max(calc(var(--zen-radius) - 3px), 2px); /* nested in the box: outer radius minus the 3px inset */
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
  overflow-x: hidden; /* names truncate; a sideways scrollbar's track would leave a gap below */
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
  flex: none;
  gap: 4px;
  color: var(--zen-muted);
  font-variant-numeric: tabular-nums;
}
.qe-cnt {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  min-width: 46px; /* "▣ 12345" */
}
/* the state column has one width, so the counts line up whether a row shows ✓ or "+240" */
.qe-state {
  flex: none;
  display: inline-flex;
  justify-content: center;
  min-width: 58px;
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
.qe-pill.icon {
  padding: 0;
  width: 22px;
  height: 18px;
  display: inline-grid;
  place-items: center;
  background: none;
  font-size: 15px;
  line-height: 1;
}
.qe-pill.icon.ok,
.qe-pill.icon.info {
  background: none; /* bare icons: the colour alone says the state */
}
.qe-pill.icon.ok {
  color: var(--zen-ok);
}
.qe-pill.icon.info {
  color: var(--zen-info);
}
.qe-pill.icon:not(.ok):not(.info) {
  color: color-mix(in srgb, var(--zen-muted) 75%, transparent);
}
.qe-pill.icon.act:hover {
  box-shadow: none;
  filter: none;
  color: var(--zen-accent);
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
/* ----- pop-out, drop, fit, subtree rows ----- */
.qe {
  position: relative;
}
.qe-popped {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--zen-muted);
}
.qe-popped > .mdi {
  font-size: 28px;
}
.qe-dropmask {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 2px dashed var(--zen-accent);
  border-radius: var(--zen-radius);
  background: color-mix(in srgb, var(--zen-bg, #111) 80%, transparent);
  color: var(--zen-text);
  font-weight: 600;
  pointer-events: none;
}
.qe-dropmask > .mdi {
  font-size: 26px;
  color: var(--zen-accent);
}
.qe-dropmask small {
  color: var(--zen-muted);
  font-weight: 400;
}
.qe-grid.fit-contain .qe-hit img {
  object-fit: contain;
  background: color-mix(in srgb, var(--zen-text) 4%, var(--zen-surface));
}
.qe-hit[draggable="true"] {
  cursor: grab;
}
/* some of a subtree searched: a ring rather than a filled dot */
.qe-partly :deep(*) {
  box-shadow: inset 0 0 0 2px var(--zen-accent);
}
.qe-fcount.summed {
  opacity: 0.75;
}
</style>
