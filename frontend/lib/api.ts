// Client for the pack's routes (nodes/_routes.py).
import { routeUrl } from "@/framework";

export type Kind = "all" | "image" | "text";
export type Combine = "mean" | "any" | "joint";

export interface SearchState {
  model: string;
  folders: string[];
  query: string;
  kind: Kind;
  top_k: number;
  dim: number;
  selected: string | null;
  /** Files to search like, by their stored embeddings (no model run). */
  similar: string[];
  /** How several query vectors become one ranking: centroid, best-of, or one joint sequence. */
  combine: Combine;
  /** Image detail for indexing and image queries: 280 (model default) / 140 / 70 soft tokens. */
  detail: number;
}

export interface FolderStatus {
  state: "none" | "ready" | "stale";
  indexed: number;
  new?: number;
  changed?: number;
  removed?: number;
  failed?: number;
  updated?: number;
  /** Image detail (soft tokens per image) the index was built with. */
  detail?: number;
}

export interface FolderRow {
  path: string;
  images: number;
  texts: number;
  status: FolderStatus;
}

export interface JobState {
  running: boolean;
  folder: string | null;
  done: number;
  total: number;
  queued: string[];
  error: string | null;
  finished: number | null;
}

export interface Hit {
  ref: string;
  folder: string;
  name: string;
  kind: "image" | "text";
  score: number;
}

/** What the node's `ui` output carries after a run (nodes/search.py). */
export interface RunResult {
  hits: Hit[];
  query: string;
  source: string;
  picked: string | null;
  auto: boolean;
}

export const JOB_EVENT = "embeddingquery.index";

async function json<T>(res: Response): Promise<T> {
  const body = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
  return body;
}

const post = (path: string, body: unknown) =>
  fetch(routeUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

export const listModels = async () =>
  (await json<{ models: string[] }>(await fetch(routeUrl("models")))).models;

export const listFolders = async (model: string) =>
  json<{ folders: FolderRow[]; job: JobState }>(
    await fetch(routeUrl("folders") + "?model=" + encodeURIComponent(model)),
  );

export const startIndex = async (model: string, folders: string[], full = false, detail = 280) =>
  json<JobState>(await post("index", { model, folders, full, detail }));

export const cancelIndex = async () => json<JobState>(await post("index/cancel", {}));

export const deleteIndex = async (model: string, folder: string) =>
  json<{ ok: boolean }>(await post("index/delete", { model, folder }));

export const search = async (
  s: SearchState,
  signal?: AbortSignal,
): Promise<{ hits: Hit[]; ms: number }> => {
  const res = await fetch(routeUrl("search"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal,
    body: JSON.stringify({
      model: s.model,
      folders: s.folders,
      text: s.similar.length ? "" : s.query,
      similar: s.similar,
      combine: s.combine,
      top_k: s.top_k,
      kind: s.kind,
      dim: s.dim,
    }),
  });
  return json(res);
};

export const thumbUrl = (ref: string, size = 256) =>
  `${routeUrl("thumb")}?size=${size}&ref=${encodeURIComponent(ref)}`;

export const fileUrl = (ref: string) => `${routeUrl("file")}?ref=${encodeURIComponent(ref)}`;

const textCache = new Map<string, Promise<string>>();
export function textOf(ref: string): Promise<string> {
  let p = textCache.get(ref);
  if (!p) {
    p = fetch(`${routeUrl("text")}?ref=${encodeURIComponent(ref)}`)
      .then((r) => json<{ text: string }>(r))
      .then((d) => d.text)
      .catch(() => "");
    textCache.set(ref, p);
  }
  return p;
}

export const ROOTS = ["input", "output"] as const;
const isRootKey = (p: string) => ROOTS.some((r) => p === r || p.startsWith(r + "/"));
/** Folder keys saved before output/ was a root were relative to input/ ("" = input/). */
export const normalizeFolder = (p: string) => {
  const f = p.replace(/^\/+|\/+$/g, "");
  return isRootKey(f) ? f : f ? `input/${f}` : "input";
};
export const isRoot = (path: string) => !path.includes("/");
export const folderLabel = (path: string) => path.split("/").pop() || path;
export const folderDepth = (path: string) => path.split("/").length - 1;
export const parentFolder = (path: string) => (isRoot(path) ? null : path.slice(0, path.lastIndexOf("/")));
