(function(){var s=document.createElement('style');s.setAttribute('data-extension',"comfyui-embeddingquery");s.textContent="\n.qe[data-v-7aa8a5bd] {\n  font-size: 11px;\n  color: var(--zen-text);\n}\n/* ZenKit's default-size controls for both: the input and the toggle group must be the same\n   height, or the same radius on the shorter box reads as rounder. The similar-to chip and the\n   linked notice stretch to that same height. */\n.qe-query[data-v-7aa8a5bd] {\n  display: flex;\n  gap: 4px;\n  align-items: stretch;\n}\n.qe-input[data-v-7aa8a5bd] {\n  flex: 1;\n  min-width: 0;\n}\n.qe-similar[data-v-7aa8a5bd],\n.qe-linked[data-v-7aa8a5bd] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 100%;\n  padding: 0 2px 0 4px;\n  border-radius: var(--zen-radius);\n  background: color-mix(in srgb, var(--zen-accent) 14%, transparent);\n  overflow: hidden;\n  white-space: nowrap;\n}\n.qe-linked[data-v-7aa8a5bd] {\n  background: var(--zen-surface-2);\n  color: var(--zen-muted);\n  padding: 0 8px;\n}\n.qe-similar > .qe-sim-stack[data-v-7aa8a5bd] {\n  display: inline-flex;\n  flex: none;\n}\n.qe-sim-stack[data-v-7aa8a5bd] > * {\n  width: 18px;\n  height: 18px;\n  object-fit: cover;\n  border-radius: 3px;\n  box-shadow: 0 0 0 1px var(--zen-surface);\n  display: grid;\n  place-items: center;\n  background: var(--zen-surface-2);\n}\n.qe-sim-stack[data-v-7aa8a5bd] > * + * {\n  margin-left: -6px;\n}\n.qe-similar span[data-v-7aa8a5bd],\n.qe-linked span[data-v-7aa8a5bd] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n\n/* Scrollbars: thin rounded thumb tinted from the theme (ZenKit's --zen-scrollbar), transparent\n   track, no arrow buttons. Chromium only drops the arrows through ::-webkit-scrollbar, and it\n   ignores those rules when the standard scrollbar-* properties are set, so the standard\n   properties go to browsers without ::-webkit-scrollbar (Firefox) only. */\n.qe-scroll[data-v-7aa8a5bd]:focus,\n.qe-frows[data-v-7aa8a5bd]:focus {\n  outline: none;\n}\n.qe-scroll[data-v-7aa8a5bd],\n.qe-frows[data-v-7aa8a5bd] {\n  --qe-thumb: var(--zen-scrollbar, color-mix(in srgb, var(--zen-text, #e5e5ea) 24%, transparent));\n  --qe-thumb-hover: color-mix(in srgb, var(--zen-text, #e5e5ea) 40%, transparent);\n}\n.qe-scroll[data-v-7aa8a5bd]::-webkit-scrollbar,\n.qe-frows[data-v-7aa8a5bd]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.qe-scroll[data-v-7aa8a5bd]::-webkit-scrollbar-track,\n.qe-frows[data-v-7aa8a5bd]::-webkit-scrollbar-track,\n.qe-scroll[data-v-7aa8a5bd]::-webkit-scrollbar-corner,\n.qe-frows[data-v-7aa8a5bd]::-webkit-scrollbar-corner {\n  background: transparent;\n}\n.qe-scroll[data-v-7aa8a5bd]::-webkit-scrollbar-button,\n.qe-frows[data-v-7aa8a5bd]::-webkit-scrollbar-button {\n  display: none;\n  width: 0;\n  height: 0;\n}\n.qe-scroll[data-v-7aa8a5bd]::-webkit-scrollbar-thumb,\n.qe-frows[data-v-7aa8a5bd]::-webkit-scrollbar-thumb {\n  background: var(--qe-thumb);\n  border-radius: 8px;\n  border: 2px solid transparent; /* inset the thumb inside its 8px gutter */\n  background-clip: padding-box;\n}\n.qe-scroll[data-v-7aa8a5bd]::-webkit-scrollbar-thumb:hover,\n.qe-frows[data-v-7aa8a5bd]::-webkit-scrollbar-thumb:hover {\n  background: var(--qe-thumb-hover);\n  background-clip: padding-box;\n}\n@supports not selector(::-webkit-scrollbar) {\n.qe-scroll[data-v-7aa8a5bd],\n  .qe-frows[data-v-7aa8a5bd] {\n    scrollbar-width: thin;\n    scrollbar-color: var(--qe-thumb) transparent;\n}\n}\n\n/* folders */\n.qe-folders[data-v-7aa8a5bd] {\n  border: 1px solid var(--zen-border);\n  border-radius: var(--zen-radius);\n  overflow: hidden; /* row hovers follow the rounded corners */\n  background: var(--zen-surface);\n  flex: none;\n}\n.qe-fhead[data-v-7aa8a5bd] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px;\n}\n.qe-fhead-main[data-v-7aa8a5bd] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: 24px;\n  padding: 0 4px;\n  border: 0;\n  background: none;\n  color: var(--zen-text);\n  font: inherit;\n  cursor: pointer;\n  border-radius: max(calc(var(--zen-radius) - 3px), 2px); /* nested in the box: outer radius minus the 3px inset */\n}\n.qe-fhead-main[data-v-7aa8a5bd]:hover {\n  background: color-mix(in srgb, var(--zen-text) 6%, transparent);\n}\n.qe-fhead-text[data-v-7aa8a5bd] {\n  flex: 1;\n  min-width: 0;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.qe-job[data-v-7aa8a5bd] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 2px 8px 5px;\n  color: var(--zen-muted);\n  white-space: nowrap;\n}\n.qe-job.err[data-v-7aa8a5bd] {\n  color: var(--zen-danger);\n  white-space: normal;\n}\n.qe-job-bar[data-v-7aa8a5bd] {\n  flex: 0 0 80px;\n  height: 4px;\n  border-radius: 2px;\n  background: var(--zen-surface-2);\n  overflow: hidden;\n}\n.qe-job-bar > div[data-v-7aa8a5bd] {\n  height: 100%;\n  background: var(--zen-accent);\n  transition: width 0.25s ease;\n}\n.qe-frows[data-v-7aa8a5bd] {\n  max-height: 190px;\n  overflow-y: auto;\n  overflow-x: hidden; /* names truncate; a sideways scrollbar's track would leave a gap below */\n  border-top: 1px solid var(--zen-border);\n  padding: 2px 0;\n}\n.qe-settings[data-v-7aa8a5bd] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 300px;\n  padding: 8px;\n  font-size: 11px;\n  color: var(--zen-text);\n}\n.qe-set-row[data-v-7aa8a5bd] {\n  display: grid;\n  grid-template-columns: 84px 1fr;\n  align-items: center;\n  gap: 8px;\n  color: var(--zen-muted);\n}\n.qe-set-row[data-v-7aa8a5bd] > :last-child {\n  min-width: 0;\n}\n.qe-set-hint[data-v-7aa8a5bd] {\n  margin: 0;\n  color: var(--zen-muted);\n  line-height: 1.4;\n}\n.qe-frow[data-v-7aa8a5bd] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding-right: 4px;\n}\n.qe-frow[data-v-7aa8a5bd]:hover {\n  background: color-mix(in srgb, var(--zen-text) 5%, transparent);\n}\n.qe-frow.off .qe-fname[data-v-7aa8a5bd] {\n  color: var(--zen-muted);\n}\n.qe-chev[data-v-7aa8a5bd] {\n  flex: none;\n  width: 14px;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  background: none;\n  color: var(--zen-muted);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.qe-fname[data-v-7aa8a5bd] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.qe-fname.root[data-v-7aa8a5bd] {\n  font-weight: 600;\n}\n.qe-froot[data-v-7aa8a5bd] {\n  color: var(--zen-muted);\n  font-size: 13px;\n}\n.qe-fcount[data-v-7aa8a5bd] {\n  display: inline-flex;\n  gap: 6px;\n  color: var(--zen-muted);\n  font-variant-numeric: tabular-nums;\n}\n.qe-fcount .mdi[data-v-7aa8a5bd] {\n  margin-right: 1px;\n}\n.qe-more[data-v-7aa8a5bd],\n.qe-more-gap[data-v-7aa8a5bd] {\n  flex: none;\n  width: 24px;\n}\n.qe-more[data-v-7aa8a5bd] {\n  opacity: 0.55;\n}\n.qe-frow:hover .qe-more[data-v-7aa8a5bd],\n.qe-more[aria-pressed=\"true\"][data-v-7aa8a5bd] {\n  opacity: 1;\n}\n.qe-pill[data-v-7aa8a5bd] {\n  flex: none;\n  border: 0;\n  font-family: inherit;\n  line-height: 15px;\n  padding: 1px 6px;\n  border-radius: 9px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--zen-muted);\n  background: var(--zen-surface-2);\n  white-space: nowrap;\n}\n.qe-pill[data-v-7aa8a5bd]:disabled {\n  cursor: default;\n}\n.qe-pill.act[data-v-7aa8a5bd] {\n  cursor: pointer;\n}\n.qe-pill.act[data-v-7aa8a5bd]:hover {\n  filter: brightness(1.25);\n  box-shadow: 0 0 0 1px currentColor;\n}\n.qe-pill.ok[data-v-7aa8a5bd] {\n  color: var(--zen-ok);\n  background: color-mix(in srgb, var(--zen-ok) 14%, transparent);\n}\n.qe-pill.warn[data-v-7aa8a5bd] {\n  color: var(--zen-warn);\n  background: color-mix(in srgb, var(--zen-warn) 14%, transparent);\n}\n.qe-pill.info[data-v-7aa8a5bd] {\n  color: var(--zen-info);\n  background: color-mix(in srgb, var(--zen-info) 14%, transparent);\n}\n.qe-hint[data-v-7aa8a5bd] {\n  padding: 6px 8px;\n  color: var(--zen-muted);\n}\n\n/* results */\n/* The scroller is absolutely positioned so it adds nothing to the body's intrinsic height. Under\n   Vue nodes the widget row is sized to content; an in-flow grid of results would grow the node\n   instead of scrolling. The node's size alone decides how much of the grid shows. */\n.qe-results[data-v-7aa8a5bd] {\n  position: relative;\n  flex: 1 1 0;\n  min-height: 90px;\n}\n.qe-scroll[data-v-7aa8a5bd] {\n  position: absolute;\n  inset: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-right: 4px;\n  border-radius: var(--zen-radius);\n}\n.qe-scroll > .zen-empty[data-v-7aa8a5bd],\n.qe-scroll[data-v-7aa8a5bd] > :not(.qe-grid) {\n  height: 100%;\n}\n.qe-grid[data-v-7aa8a5bd] {\n  display: grid;\n  gap: 5px;\n}\n.qe-hit[data-v-7aa8a5bd] {\n  position: relative;\n  aspect-ratio: 1;\n  padding: 0;\n  border: 1px solid var(--zen-border);\n  border-radius: var(--zen-radius);\n  background: var(--zen-surface);\n  overflow: hidden;\n  cursor: pointer;\n  color: var(--zen-text);\n  font: inherit;\n}\n.qe-hit img[data-v-7aa8a5bd] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.qe-hit[data-v-7aa8a5bd]:hover {\n  border-color: color-mix(in srgb, var(--zen-accent) 55%, var(--zen-border));\n}\n/* Selection rings are drawn INSIDE the card, over the image: an outer ring (box-shadow) spills\n   into the grid gap and is clipped by the scroller on the edge rows. */\n.qe-hit[data-v-7aa8a5bd]::after {\n  content: \"\";\n  position: absolute;\n  inset: -1px; /* over the card's own 1px border, so the ring is one solid edge */\n  border-radius: inherit;\n  pointer-events: none;\n  z-index: 1;\n}\n.qe-hit.picked[data-v-7aa8a5bd]::after {\n  box-shadow: inset 0 0 0 2px var(--zen-accent);\n}\n.qe-hit.auto[data-v-7aa8a5bd]::after {\n  border: 2px dashed var(--zen-accent);\n}\n.qe-score[data-v-7aa8a5bd],\n.qe-check[data-v-7aa8a5bd],\n.qe-name[data-v-7aa8a5bd],\n.qe-acts[data-v-7aa8a5bd] {\n  z-index: 2;\n}\n.qe-text[data-v-7aa8a5bd] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  height: 100%;\n  padding: 6px 6px 18px;\n  text-align: left;\n  background: var(--zen-surface-2);\n}\n.qe-text .mdi[data-v-7aa8a5bd] {\n  color: var(--zen-muted);\n  font-size: 14px;\n}\n.qe-snip[data-v-7aa8a5bd] {\n  font-size: 10px;\n  line-height: 1.3;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  color: var(--zen-text);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.qe-score[data-v-7aa8a5bd] {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  padding: 0 4px;\n  border-radius: 4px;\n  font-size: 9.5px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  background: rgb(0 0 0 / 0.6);\n  color: #fff;\n}\n.qe-check[data-v-7aa8a5bd] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: var(--zen-accent);\n  color: var(--zen-accent-text, #fff);\n  font-size: 12px;\n}\n.qe-name[data-v-7aa8a5bd] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 10px 4px 2px;\n  font-size: 9.5px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n  background: linear-gradient(transparent, rgb(0 0 0 / 0.7));\n  opacity: 0;\n  transition: opacity 0.12s;\n}\n.qe-acts[data-v-7aa8a5bd] {\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  display: flex;\n  gap: 2px;\n  opacity: 0;\n  transition: opacity 0.12s;\n}\n.qe-hit:hover .qe-name[data-v-7aa8a5bd],\n.qe-hit:hover .qe-acts[data-v-7aa8a5bd] {\n  opacity: 1;\n}\n.qe-hit:hover .qe-name[data-v-7aa8a5bd] {\n  right: 44px;\n}\n.qe-act[data-v-7aa8a5bd] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  display: grid;\n  place-items: center;\n  background: rgb(0 0 0 / 0.65);\n  color: #fff;\n  font-size: 12px;\n  text-decoration: none;\n}\n.qe-act.on[data-v-7aa8a5bd] {\n  background: var(--zen-accent);\n}\n.qe-act[data-v-7aa8a5bd]:hover {\n  background: var(--zen-accent);\n}\n\n/* status */\n.qe-status[data-v-7aa8a5bd] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 24px;\n  flex: none;\n}\n.qe-spacer[data-v-7aa8a5bd] {\n  flex: 1;\n}\n.qe-status[data-v-7aa8a5bd] > * {\n  flex: none;\n}\n.qe-status > .qe-muted[data-v-7aa8a5bd],\n.qe-status > .qe-err[data-v-7aa8a5bd],\n.qe-status > .qe-picked[data-v-7aa8a5bd] {\n  flex: 0 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.qe-status > .qe-spacer[data-v-7aa8a5bd] {\n  flex: 1 1 0;\n}\n.qe-muted[data-v-7aa8a5bd] {\n  color: var(--zen-muted);\n  white-space: nowrap;\n}\n.qe-err[data-v-7aa8a5bd] {\n  color: var(--zen-danger);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 0;\n}\n.qe-picked[data-v-7aa8a5bd] {\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--zen-accent);\n  font-weight: 600;\n}\n.qe-topk[data-v-7aa8a5bd] {\n  width: 76px;\n}\n.zen-widget[data-v-566c7d03]{display:flex;flex-direction:column;width:100%;padding:6px 2px;box-sizing:border-box;cursor:default;font-size:12px;color:var(--zen-text, #e5e5ea)}.zen-widget.fill[data-v-566c7d03]{height:100%;min-height:0}.zen-widget.has-footer[data-v-566c7d03]{flex:1 0 auto}.zen-widget-spacer[data-v-566c7d03]{flex:1 1 0;min-height:0}.zen-widget.drag-through[data-v-566c7d03]{cursor:inherit}.zen-row[data-v-33277610]{display:flex;width:100%;min-width:0}.zen-row[data-v-33277610]>*{flex:0 0 auto;width:auto}.zen-row[data-v-33277610]>[data-grow]{flex:1 1 var(--zen-row-min, 120px);width:auto;min-width:0}.zen-scroll{scrollbar-color:var( --zen-scrollbar, var(--dialog-surface, color-mix(in srgb, var(--zen-text, #e5e5ea) 24%, transparent)) ) transparent}:where(.zen-scroll,.zen-scroll *){scrollbar-width:thin}[data-zen-layer]{--zen-scrollbar: color-mix(in srgb, var(--zen-text, #e5e5ea) 32%, transparent)}:where(.zen-surface){box-sizing:border-box;border:1px solid var(--zen-surface-border, var(--zen-border, #34343c));border-radius:var(--zen-radius-surface, var(--zen-radius, 7px));background:var(--zen-chrome-bg, var(--zen-surface, #202026));box-shadow:var(--zen-shadow-pop, 0 10px 30px rgb(0 0 0 / 45%));color:var(--zen-text, #e5e5ea);font-family:var(--p-font-family, system-ui, sans-serif)}.zen-pop-tooltip[data-v-b1d17fa5]{pointer-events:none}.zen-pop-anchor[data-v-b1d17fa5]{display:inline-flex}.zen-pop[data-v-b1d17fa5]{position:fixed;z-index:100000;min-width:160px;max-width:min(360px,92vw);padding:5px;display:flex;flex-direction:column;gap:1px}.zen-tip[data-v-e12bb9ef]{display:inline-grid;place-items:center;width:16px;height:16px;padding:0;margin:0;border:none;background:none;color:var(--zen-muted, #9aa0aa);cursor:help;border-radius:var(--zen-radius, 6px);flex:none;vertical-align:middle}.zen-tip.inline[data-v-e12bb9ef]{display:inline;width:auto;height:auto;font:inherit;color:inherit;text-align:inherit;text-decoration:underline dotted transparent;text-underline-offset:3px;transition:text-decoration-color .15s ease}.zen-tip.inline[data-v-e12bb9ef]:hover,.zen-tip.inline[data-v-e12bb9ef]:focus-visible{color:inherit;text-decoration-color:color-mix(in srgb,currentColor 55%,transparent)}.zen-tip svg[data-v-e12bb9ef]{width:13px;height:13px}.zen-tip[data-v-e12bb9ef]:hover,.zen-tip[data-v-e12bb9ef]:focus-visible{color:var(--zen-accent, #8ab4ff)}.zen-tip[data-v-e12bb9ef]:focus-visible{outline:2px solid var(--zen-accent, #8ab4ff);outline-offset:1px}.zen-tip-body[data-v-e12bb9ef]{max-width:280px;padding:8px 10px;font-size:12px;line-height:1.45;color:var(--zen-text, #e5e5ea);white-space:normal}.zen-field[data-v-9c483aa7]{display:flex;flex-direction:column;gap:2px;min-width:0}.zf-row[data-v-9c483aa7]{display:flex;align-items:center;gap:6px;min-width:0}.zen-field.stack .zf-row[data-v-9c483aa7]{flex-direction:column;align-items:stretch;gap:3px}.zf-label-wrap[data-v-9c483aa7]{flex:0 0 auto;display:inline-flex;align-items:center;gap:4px;min-width:0}.zf-label[data-v-9c483aa7]{flex:0 0 auto;font-size:11px;color:var(--zen-muted, #9aa0aa);white-space:nowrap}.zf-control[data-v-9c483aa7]{flex:1 1 auto;min-width:0;display:flex;align-items:center;--zen-control-min: 0px}.zf-control[data-v-9c483aa7]>*{flex:1 1 auto;min-width:0}.zf-hint[data-v-9c483aa7]{font-size:10px;color:var(--zen-muted, #9aa0aa);opacity:.8}:root{--zen-dur-fast: .12s;--zen-dur: .2s}@media(prefers-reduced-motion:reduce){:root{--zen-dur-fast: 0s;--zen-dur: 0s}}:root[data-zen-motion=reduce]{--zen-dur-fast: 0s;--zen-dur: 0s}@media(prefers-reduced-motion:reduce){:root[data-zen-motion=full]{--zen-dur-fast: .12s;--zen-dur: .2s}}.zen-ico-img[data-v-819f0eab]{width:1em;height:1em;object-fit:contain;display:inline-block;vertical-align:-.15em;border-radius:var(--zen-radius, 7px)}.zen-section[data-v-217a9770]{display:flex;flex-direction:column;min-width:0;color:var(--zen-text, #e5e5ea)}.zen-section.plain+.zen-section.plain[data-v-217a9770]{border-top:1px solid var(--zen-border, #34343c)}.zen-section.card[data-v-217a9770]{border:1px solid var(--zen-border, #34343c);border-radius:var(--zen-radius, 7px);background:var(--zen-surface, #202026)}.zs-head[data-v-217a9770]{display:flex;align-items:center;gap:4px;min-height:26px}.zen-section.plain>.zs-head[data-v-217a9770]{padding:4px 0}.zen-section.card>.zs-head[data-v-217a9770]{padding:3px 4px 3px 8px}.zs-toggle[data-v-217a9770]{flex:1 1 auto;min-width:0;display:flex;align-items:center;gap:5px;padding:2px 0;border:0;border-radius:var(--zen-radius, 4px);background:none;color:inherit;font:inherit;font-size:11.5px;font-weight:600;text-align:left;cursor:pointer}.zs-toggle.static[data-v-217a9770]{cursor:default}.zs-toggle[data-v-217a9770]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:1px}.zs-toggle[data-v-217a9770]:disabled{cursor:default}.zen-section.disabled>.zs-head[data-v-217a9770]{opacity:.5}.zs-chev[data-v-217a9770]{flex:0 0 auto;font-size:14px;color:var(--zen-muted, #9aa0aa);transition:transform var(--zen-dur, .2s) ease}.zen-section.open>.zs-head .zs-chev[data-v-217a9770]{transform:rotate(90deg)}.zs-icon[data-v-217a9770]{flex:0 0 auto;font-size:14px;color:var(--zen-muted, #9aa0aa)}.zs-title[data-v-217a9770]{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.zs-meta[data-v-217a9770]{margin-left:auto;padding-left:8px;flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:11px;color:var(--zen-muted, #9aa0aa)}.zs-actions[data-v-217a9770]{flex:0 0 auto;display:flex;align-items:center;gap:2px}.zs-wrap[data-v-217a9770]{display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--zen-dur, .2s) ease}.zen-section.open>.zs-wrap[data-v-217a9770]{grid-template-rows:1fr}.zs-clip[data-v-217a9770]{min-height:0;min-width:0}.zs-clip.clipped[data-v-217a9770]{overflow:hidden}.zen-section:not(.open)>.zs-wrap>.zs-clip[data-v-217a9770]{visibility:hidden;transition:visibility 0s var(--zen-dur, .2s)}.zs-body[data-v-217a9770]{display:flex;flex-direction:column;gap:var(--zen-section-gap, 8px)}.zen-section.plain>.zs-wrap>.zs-clip>.zs-body[data-v-217a9770]{padding:2px 0 10px}.zen-section.card>.zs-wrap>.zs-clip>.zs-body[data-v-217a9770]{padding:2px 8px 8px}.zen-sections[data-v-be050f3f]{display:flex;flex-direction:column;min-width:0}.zen-resize-handle[data-v-732b507d]{position:relative;z-index:1;flex:0 0 8px;touch-action:none;user-select:none;background:transparent}.vertical[data-v-732b507d]{cursor:col-resize}.horizontal[data-v-732b507d]{cursor:row-resize}.both[data-v-732b507d]{cursor:move}.zen-resize-handle[data-v-732b507d]:after{content:\"\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:999px;background:var(--zen-accent, #6366f1);opacity:0;transition:opacity var(--zen-dur-fast, .12s) ease;pointer-events:none}.vertical[data-v-732b507d]:after{width:3px;height:32px;max-height:calc(100% - 4px)}.horizontal[data-v-732b507d]:after{width:32px;height:3px;max-width:calc(100% - 4px)}.both[data-v-732b507d]:after{width:8px;height:8px}.zen-resize-handle[data-v-732b507d]:hover:after,.zen-resize-handle.active[data-v-732b507d]:after,.zen-resize-handle[data-v-732b507d]:focus-visible:after{opacity:1}.zen-resize-handle[data-v-732b507d]:focus-visible{outline:2px solid var(--zen-focus-ring, var(--zen-accent, #6366f1));outline-offset:1px}.line[data-v-732b507d]{flex-basis:1px;background:var(--zen-border, #34343c);transition:background var(--zen-dur-fast, .12s) ease}.line[data-v-732b507d]:before{content:\"\";position:absolute}.line.vertical[data-v-732b507d]:before{inset:0 -2.5px}.line.horizontal[data-v-732b507d]:before{inset:-2.5px 0}.line[data-v-732b507d]:hover,.line.active[data-v-732b507d]{background:var(--zen-accent, #6366f1)}.line[data-v-732b507d]:after{display:none}.zen-split[data-v-a558794f]{display:flex;width:100%;height:100%;min-width:0;min-height:0}.zen-split.vertical[data-v-a558794f]{flex-direction:column}.zen-split.dragging[data-v-a558794f]{user-select:none}.zen-split.horizontal.dragging[data-v-a558794f]{cursor:col-resize}.zen-split.vertical.dragging[data-v-a558794f]{cursor:row-resize}.zsp-pane[data-v-a558794f]{position:relative;min-width:0;min-height:0;overflow:hidden}.zsp-pane.collapsed[data-v-a558794f]{visibility:hidden}.zen-scroll[data-v-f5a2c537]{height:100%;min-height:0;overflow-y:auto;overflow-x:hidden}.zen-scroll.x[data-v-f5a2c537]{overflow-x:auto;overflow-y:hidden}.zen-scroll-ov[data-v-f5a2c537]{position:relative;height:100%;min-height:0;overflow:hidden}.zen-scroll-viewport[data-v-f5a2c537]{scrollbar-width:none;will-change:scroll-position}.zen-scroll-viewport[data-v-f5a2c537]::-webkit-scrollbar{display:none}.zen-scroll-track[data-v-f5a2c537]{position:absolute;top:0;right:0;bottom:0;width:12px;z-index:4;opacity:0;transition:opacity .2s ease}.zen-scroll-ov:hover .zen-scroll-track[data-v-f5a2c537],.zen-scroll-ov.active .zen-scroll-track[data-v-f5a2c537]{opacity:1}.zen-scroll-thumb[data-v-f5a2c537]{position:absolute;top:0;right:3px;width:6px;border-radius:var(--zen-radius-sm, 4px);background:var(--zen-scrollbar, color-mix(in srgb, var(--zen-text, #e5e5ea) 28%, transparent));transition:width .15s ease,right .15s ease,background .15s ease;touch-action:none;cursor:pointer}.zen-scroll-track:hover .zen-scroll-thumb[data-v-f5a2c537],.zen-scroll-thumb[data-v-f5a2c537]:active{width:8px;right:2px;background:var(--zen-accent, #6366f1)}.zen-scroll-ov.x .zen-scroll-track[data-v-f5a2c537]{top:auto;left:0;width:auto;height:12px}.zen-scroll-ov.x .zen-scroll-thumb[data-v-f5a2c537]{inset:auto auto 3px 0;width:auto;height:6px}.zen-scroll-ov.x .zen-scroll-track:hover .zen-scroll-thumb[data-v-f5a2c537],.zen-scroll-ov.x .zen-scroll-thumb[data-v-f5a2c537]:active{width:auto;right:auto;height:8px;bottom:2px}.zen-view[data-v-f7345db8]{position:relative;display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden;background:var(--zen-bg, #1a1a1f);color:var(--zen-text, #e5e5ea);font-family:var(--p-font-family, system-ui, sans-serif)}.zen-view-body[data-v-f7345db8]{flex:1 1 0;min-height:0}.zen-view-body.fill[data-v-f7345db8]{display:flex}.zen-view-body.pad[data-v-f7345db8]{padding:10px}.zen-toolbar[data-v-ea3754a7]{flex:0 0 auto;display:flex;align-items:center;gap:8px;padding:7px 9px;border-bottom:1px solid var(--zen-surface-border, var(--zen-border, #34343c));background:var(--zen-chrome-bg, var(--zen-surface, #202026))}.tb-icon[data-v-ea3754a7]{font-size:15px;color:var(--zen-accent, #6366f1)}.tb-title[data-v-ea3754a7]{font-size:12px;font-weight:600;color:var(--zen-text, #e5e5ea);white-space:nowrap}.tb-grow[data-v-ea3754a7]{flex:1}.zen-btn[data-v-44a20193]{display:inline-flex;align-items:center;justify-content:center;gap:7px;cursor:pointer;user-select:none;font-family:inherit;font-size:12px;font-weight:600;box-sizing:border-box;height:var(--zen-control-h, 28px);padding:0 12px;border-radius:var(--zen-radius, 7px);border:1px solid var(--zen-control-border, var(--zen-border, #34343c));background:var(--zen-control-bg, var(--zen-surface, #202026));color:var(--zen-text, #e5e5ea);transition:border-color var(--zen-dur-fast, .12s) ease,background var(--zen-dur-fast, .12s) ease,color var(--zen-dur-fast, .12s) ease,filter var(--zen-dur-fast, .12s) ease}.zen-btn[data-v-44a20193]:hover:not(:disabled){border-color:var(--zen-control-hover-border, var(--zen-accent, #6366f1));background:var(--zen-control-hover-bg, var(--zen-control-bg))}.zen-btn[data-v-44a20193]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:1px}.zen-btn[data-v-44a20193]:disabled{opacity:.45;cursor:not-allowed}.zen-btn .mdi[data-v-44a20193]{font-size:15px}.zen-btn.block[data-v-44a20193]{width:100%}.zen-btn.sm[data-v-44a20193]{height:var(--zen-control-h-sm, 24px);padding:0 9px;font-size:11px}.zen-btn.primary[data-v-44a20193]{background:var(--zen-accent, #6366f1);border-color:var(--zen-accent, #6366f1);color:var(--zen-accent-text, #fff)}.zen-btn.primary[data-v-44a20193]:hover:not(:disabled){border-color:color-mix(in srgb,var(--zen-accent, #6366f1) 72%,var(--zen-accent-text, #fff));background:color-mix(in srgb,var(--zen-accent, #6366f1) 72%,var(--zen-accent-text, #fff))}.zen-btn.ghost[data-v-44a20193]{background:transparent;border-color:transparent}.zen-btn.ghost[data-v-44a20193]:hover:not(:disabled){background:color-mix(in srgb,var(--zen-text, #e5e5ea) 10%,transparent);border-color:transparent}.zen-btn.danger[data-v-44a20193]:hover:not(:disabled){background:var(--zen-danger, #dc2626);border-color:var(--zen-danger, #dc2626);color:var(--zen-danger-text, #fff)}.zen-iconbtn[data-v-350d2f84]{display:inline-flex;align-items:center;justify-content:center;flex:none;box-sizing:border-box;width:var(--zen-control-h, 28px);height:var(--zen-control-h, 28px);border:1px solid transparent;border-radius:var(--zen-radius, 7px);background:none;color:var(--zen-muted, #9aa0aa);cursor:pointer;user-select:none;transition:background var(--zen-dur-fast, .12s) ease,color var(--zen-dur-fast, .12s) ease}.zen-iconbtn[data-v-350d2f84]:hover:not(:disabled){background:color-mix(in srgb,var(--zen-text, #e5e5ea) 12%,transparent);color:var(--zen-text, #e5e5ea)}.zen-iconbtn.active[data-v-350d2f84]{color:var(--zen-accent, #6366f1)}.zen-iconbtn.danger[data-v-350d2f84]:hover:not(:disabled){background:var(--zen-danger, #dc2626);color:var(--zen-danger-text, #fff)}.zen-iconbtn[data-v-350d2f84]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:1px}.zen-iconbtn.sm[data-v-350d2f84]{width:var(--zen-control-h-sm, 24px);height:var(--zen-control-h-sm, 24px)}.zen-iconbtn[data-v-350d2f84]:disabled{cursor:not-allowed;opacity:.4;cursor:default}.zen-iconbtn .mdi[data-v-350d2f84]{font-size:16px;line-height:1}.zen-iconbtn .mdi[data-v-350d2f84]:before{display:block;line-height:1}.zen-lotus[data-v-b2ab3c2d]{display:inline-block;flex:none;width:1.2em;overflow:visible}.petal[data-v-b2ab3c2d]{transform:rotate(var(--r));transform-origin:0 0;transform-box:view-box}.zen-lotus.interactive[data-v-b2ab3c2d]{cursor:pointer}.blooming .petal[data-v-b2ab3c2d]{animation:zen-lotus-bloom-b2ab3c2d .9s cubic-bezier(.3,0,.2,1) both}@keyframes zen-lotus-bloom-b2ab3c2d{0%{transform:rotate(var(--r)) scale(1)}28%{transform:rotate(calc(var(--r) * .12)) scale(.82,.9)}62%{transform:rotate(calc(var(--r) * 1.12)) scale(1.06)}to{transform:rotate(var(--r)) scale(1)}}.ripple[data-v-b2ab3c2d]{fill:none;stroke:currentColor;stroke-width:3;opacity:0;transform-origin:0 2px;transform-box:view-box;animation:zen-lotus-ripple-b2ab3c2d 1s ease-out .25s both}@keyframes zen-lotus-ripple-b2ab3c2d{0%{opacity:.6;transform:scale(.3)}to{opacity:0;transform:scale(1.5)}}.breathing>g[data-v-b2ab3c2d]{transform-origin:0 0;transform-box:view-box;animation:zen-lotus-breathe-b2ab3c2d 4.8s ease-in-out infinite}@keyframes zen-lotus-breathe-b2ab3c2d{0%,to{transform:scale(.94);opacity:.85}50%{transform:scale(1.04);opacity:1}}@media(prefers-reduced-motion:reduce){.blooming .petal[data-v-b2ab3c2d]{animation-name:zen-lotus-glow-b2ab3c2d}.ripple[data-v-b2ab3c2d]{animation:none}.breathing>g[data-v-b2ab3c2d]{animation-name:zen-lotus-fade-b2ab3c2d}}:root[data-zen-motion=reduce] .blooming .petal[data-v-b2ab3c2d]{animation-name:zen-lotus-glow-b2ab3c2d}:root[data-zen-motion=reduce] .ripple[data-v-b2ab3c2d]{animation:none}:root[data-zen-motion=reduce] .breathing>g[data-v-b2ab3c2d]{animation-name:zen-lotus-fade-b2ab3c2d}@keyframes zen-lotus-glow-b2ab3c2d{0%,to{transform:rotate(var(--r));filter:none}40%{transform:rotate(var(--r));filter:brightness(1.6) drop-shadow(0 0 6px currentColor)}}@keyframes zen-lotus-fade-b2ab3c2d{0%,to{opacity:.75}50%{opacity:1}}.zen-empty[data-v-71f336c3]{margin:auto;display:flex;flex-direction:column;align-items:center;gap:6px;max-width:260px;padding:20px;text-align:center;color:var(--zen-muted, #9aa0aa);font-family:var(--p-font-family, system-ui, sans-serif)}.zen-empty-mark[data-v-71f336c3]{width:44px;margin-bottom:4px;fill:currentColor;opacity:.45}.zen-empty-icon[data-v-71f336c3]{width:auto;font-size:36px}.zen-empty-title[data-v-71f336c3]{color:var(--zen-text, #e5e5ea);font-size:13px;font-weight:600}.zen-empty-text[data-v-71f336c3]{margin:0;font-size:12px;line-height:1.5}.zen-empty-actions[data-v-71f336c3]{display:flex;gap:6px;margin-top:6px}.zen-input[data-v-2eb7b22b]{width:100%;box-sizing:border-box;font:inherit;font-size:12px;line-height:normal;background:var(--zen-field-bg, var(--zen-input, #1b1b20));color:var(--zen-text, #e5e5ea);border:1px solid var(--zen-control-border, var(--zen-border, #34343c));border-radius:var(--zen-radius, 7px);height:var(--zen-control-h, 28px);padding:0 9px;transition:border-color var(--zen-dur-fast, .12s) ease}.zen-input[data-v-2eb7b22b]::placeholder{color:var(--zen-muted, #9aa0aa)}.zen-input[data-v-2eb7b22b]:focus{outline:none;border-color:var(--zen-accent, #6366f1)}.zen-input[data-v-2eb7b22b]:disabled{opacity:.45;cursor:not-allowed}.zen-input.sm[data-v-2eb7b22b]{height:var(--zen-control-h-sm, 24px);padding:0 8px;font-size:11px}.zen-input.area[data-v-2eb7b22b]{height:auto;padding:7px 9px;resize:vertical;min-height:64px;line-height:1.45}.zen-input.area.auto[data-v-2eb7b22b]{resize:none;min-height:0;overflow:hidden}.zmi[data-v-6893f93d]{position:relative;display:grid;min-height:0;border:1px solid var(--zen-control-border, var(--zen-border, #34343c));border-radius:var(--zen-radius, 7px);background:var(--zen-field-bg, var(--zen-input, #1b1b20));transition:border-color var(--zen-dur-fast, .12s) ease}.zmi.focused[data-v-6893f93d]{border-color:var(--zen-accent, #6366f1)}.zmi-mirror[data-v-6893f93d],.zmi-area[data-v-6893f93d]{grid-area:1 / 1;box-sizing:border-box;margin:0;padding:8px 10px;border:0;font-family:inherit;font-size:12.5px;line-height:1.5;letter-spacing:normal;white-space:pre-wrap;overflow-wrap:break-word;word-break:normal;scrollbar-gutter:stable}.zmi-mirror[data-v-6893f93d]{overflow:hidden;color:transparent;pointer-events:none}.zmi-mirror mark[data-v-6893f93d]{border-radius:3px;background:color-mix(in srgb,var(--zen-accent, #6366f1) 28%,transparent);color:transparent;box-shadow:0 0 0 1px color-mix(in srgb,var(--zen-accent, #6366f1) 45%,transparent)}.zmi-mirror mark.unknown[data-v-6893f93d]{background:color-mix(in srgb,var(--zen-danger, #dc2626) 22%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--zen-danger, #dc2626) 55%,transparent);text-decoration:wavy underline var(--zen-danger, #dc2626)}.zmi-area[data-v-6893f93d]{height:100%;min-height:100%;resize:none;outline:none;background:transparent;color:var(--zen-text, #e5e5ea);caret-color:var(--zen-text, #e5e5ea)}.zmi.sized[data-v-6893f93d]{grid-template-rows:100%;overflow:hidden}.zmi-grip[data-v-6893f93d]{position:absolute;right:1px;bottom:1px;z-index:1;width:12px;height:12px;cursor:ns-resize;touch-action:none;background:linear-gradient(135deg,transparent 55%,var(--zen-muted, #9aa0aa) 55%,var(--zen-muted, #9aa0aa) 62%,transparent 62%),linear-gradient(135deg,transparent 75%,var(--zen-muted, #9aa0aa) 75%,var(--zen-muted, #9aa0aa) 82%,transparent 82%);opacity:.6}.zmi-grip[data-v-6893f93d]:hover{opacity:1}.zmi-area[data-v-6893f93d]::placeholder{color:var(--zen-muted, #9aa0aa);opacity:.7}.zmi-peek[data-v-6893f93d]{position:fixed;z-index:100000;display:flex;flex-direction:column;gap:6px;width:220px;padding:6px;border:1px solid var(--zen-surface-border, var(--zen-border, #34343c));border-radius:var(--zen-radius, 7px);background:var(--zen-surface, #202026);box-shadow:0 10px 30px #00000073;pointer-events:none}.zmi-peek>img[data-v-6893f93d],.zmi-peek[data-v-6893f93d]>img,.zmi-peek[data-v-6893f93d]>video{display:block;width:100%;max-height:180px;border-radius:calc(var(--zen-radius, 7px) - 2px);background:var(--zen-media-bg, #0b0b0e);object-fit:contain}.zmi-peek>.mdi[data-v-6893f93d]{display:grid;place-items:center;height:90px;color:var(--zen-muted, #9aa0aa);font-size:32px}.zmi-pop[data-v-6893f93d]{position:fixed;z-index:100000;width:250px;max-height:260px;overflow-y:auto;padding:4px}.zmi-item[data-v-6893f93d]{display:flex;align-items:center;gap:8px;width:100%;padding:4px 6px;border:0;border-radius:6px;background:none;color:var(--zen-text, #e5e5ea);font:inherit;text-align:left;cursor:pointer}.zmi-item.on[data-v-6893f93d]{background:color-mix(in srgb,var(--zen-accent, #6366f1) 25%,transparent)}.zmi-thumb[data-v-6893f93d]{display:grid;flex:none;place-items:center;width:30px;height:30px;overflow:hidden;border-radius:5px;background:var(--zen-media-bg, #0b0b0e);color:var(--zen-muted, #9aa0aa)}.zmi-thumb img[data-v-6893f93d]{width:100%;height:100%;object-fit:contain}.zmi-text[data-v-6893f93d]{display:flex;flex-direction:column;min-width:0}.zmi-text b[data-v-6893f93d]{color:#9db7ff;font-size:12px}.zmi-text small[data-v-6893f93d]{overflow:hidden;color:var(--zen-muted, #9aa0aa);font-size:10.5px;white-space:nowrap;text-overflow:ellipsis}.zen-off[data-v-6893f93d]{opacity:.45}.zen-num[data-v-f28d60a9]{display:inline-flex;align-items:stretch;height:var(--zen-control-h, 28px);box-sizing:border-box;border:1px solid var(--zen-control-border, var(--zen-border, #34343c));border-radius:var(--zen-radius, 7px);background:var(--zen-field-bg, var(--zen-input, #1b1b20));overflow:hidden;user-select:none;font-size:11px;font-variant-numeric:tabular-nums;min-width:calc(50px + var(--zn-chars, 4) * 1ch)}.zen-num.bare[data-v-f28d60a9]{min-width:calc(2px + var(--zn-chars, 4) * 1ch)}.zen-num[data-v-f28d60a9]:focus-within{border-color:var(--zen-accent, #6366f1)}.zen-num.sm[data-v-f28d60a9]{height:var(--zen-control-h-sm, 24px)}.zen-num.disabled[data-v-f28d60a9]{cursor:not-allowed;opacity:.5;pointer-events:none}.zn-step[data-v-f28d60a9]{flex:none;width:21px;border:none;background:none;color:var(--zen-muted, #9aa0aa);cursor:pointer;display:inline-flex;align-items:center;justify-content:center}.zn-step.hot[data-v-f28d60a9]{color:var(--zen-text, #e5e5ea);background:color-mix(in srgb,var(--zen-text, #e5e5ea) 9%,transparent)}.zn-step .mdi[data-v-f28d60a9]{font-size:13px}.zn-val[data-v-f28d60a9]{flex:1;min-width:calc(var(--zn-chars, 4) * 1ch);display:flex;align-items:center;justify-content:center;cursor:ew-resize;border-left:1px solid var(--zen-border, #34343c);border-right:1px solid var(--zen-border, #34343c);padding:0 2px}.zen-num.bare .zn-val[data-v-f28d60a9]{border-left:none;border-right:none}.zn-input[data-v-f28d60a9]{width:100%;min-width:0;background:none;border:none;outline:none;color:var(--zen-text, #e5e5ea);font:inherit;line-height:normal;text-align:center;pointer-events:none;cursor:ew-resize}.zn-input.live[data-v-f28d60a9]{pointer-events:auto;cursor:text}.zn-input[data-v-f28d60a9]:disabled{color:var(--zen-muted, #9aa0aa)}.zen-tg.sm[data-v-9ef2e1ca]{height:var(--zen-control-h-sm, 24px)}.zen-tg.disabled[data-v-9ef2e1ca]{opacity:.45}.zen-tg.disabled .zen-tg-b[data-v-9ef2e1ca]{cursor:not-allowed}.zen-tg[data-v-9ef2e1ca]{display:inline-flex;box-sizing:border-box;height:var(--zen-control-h, 28px);border:1px solid var(--zen-control-border, var(--zen-border, #34343c));border-radius:var(--zen-radius, 7px);overflow:hidden;background:var(--zen-control-bg, var(--zen-surface, #202026))}.zen-tg-b[data-v-9ef2e1ca]{display:inline-flex;align-items:center;justify-content:center;gap:5px;padding:0 9px;border:none;background:none;color:var(--zen-muted, #9aa0aa);font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--zen-dur-fast, .12s) ease,color var(--zen-dur-fast, .12s) ease}.zen-tg-b[data-v-9ef2e1ca]:first-child{border-radius:calc(var(--zen-radius, 7px) - 1px) 0 0 calc(var(--zen-radius, 7px) - 1px)}.zen-tg-b[data-v-9ef2e1ca]:last-child{border-radius:0 calc(var(--zen-radius, 7px) - 1px) calc(var(--zen-radius, 7px) - 1px) 0}.zen-tg-b[data-v-9ef2e1ca]:only-child{border-radius:calc(var(--zen-radius, 7px) - 1px)}.zen-tg-b+.zen-tg-b[data-v-9ef2e1ca]{border-left:1px solid var(--zen-border, #34343c)}.zen-tg-b[data-v-9ef2e1ca]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:-2px}.zen-tg-b[data-v-9ef2e1ca]:hover{color:var(--zen-text, #e5e5ea)}.zen-tg-b.on[data-v-9ef2e1ca]{background:color-mix(in srgb,var(--zen-accent, #6366f1) 22%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--zen-accent, #6366f1) 55%,transparent);color:var(--zen-accent, #6366f1)}.zen-tg-b .mdi[data-v-9ef2e1ca]{font-size:14px}.zen-tg.zen-tg-collapse .zen-tg-b[data-v-9ef2e1ca]{gap:0;padding:4px 7px;transition:background var(--zen-dur, .2s) ease,color var(--zen-dur, .2s) ease,gap var(--zen-dur, .2s) ease}.zen-tg.zen-tg-collapse .zen-tg-l[data-v-9ef2e1ca]{display:inline-grid;grid-template-columns:0fr;overflow:hidden;opacity:0;white-space:nowrap;transition:grid-template-columns var(--zen-dur, .2s) ease,opacity var(--zen-dur, .2s) ease}.zen-tg.zen-tg-collapse .zen-tg-l>span[data-v-9ef2e1ca]{min-width:0;overflow:hidden}.zen-tg.zen-tg-collapse .zen-tg-b.on[data-v-9ef2e1ca]{gap:5px;padding:4px 9px 4px 8px}.zen-tg.zen-tg-collapse .zen-tg-b.on .zen-tg-l[data-v-9ef2e1ca]{grid-template-columns:1fr;opacity:1}.zres[data-v-124b6fb4]{display:flex;flex-direction:column;gap:9px;width:268px;padding:6px;color:var(--zen-text, #e5e5ea);font-size:11px}.zres-sec[data-v-124b6fb4]{color:var(--zen-muted, #9aa0aa);font-size:10px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}.zres-aspects[data-v-124b6fb4]{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}.zres-chip[data-v-124b6fb4]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;height:46px;border:1px solid var(--zen-border, #34343c);border-radius:var(--zen-radius, 7px);background:var(--zen-field-bg, var(--zen-input, #1b1b20));color:var(--zen-muted, #9aa0aa);font:inherit;font-size:10px;font-weight:600;cursor:pointer}.zres-chip[data-v-124b6fb4]:hover,.zres-chip.on[data-v-124b6fb4]{border-color:var(--zen-accent, #6366f1);color:var(--zen-text, #e5e5ea)}.zres-chip.on[data-v-124b6fb4]{background:color-mix(in srgb,var(--zen-accent, #6366f1) 16%,var(--zen-field-bg, var(--zen-input, #1b1b20)))}.zres-rect[data-v-124b6fb4]{display:block;border-radius:1px;background:currentColor;opacity:.7}.zres-wide[data-v-124b6fb4] .zen-tg{display:flex;width:100%}.zres-wide[data-v-124b6fb4] .zen-tg-b{flex:1}.zres-div[data-v-124b6fb4]{border-top:1px solid var(--zen-border, #34343c)}.zres-row[data-v-124b6fb4]{display:flex;align-items:center;gap:8px}.zres-lbl[data-v-124b6fb4]{flex:1;color:var(--zen-muted, #9aa0aa)}.zres-wh[data-v-124b6fb4]{display:flex;align-items:center;gap:6px}.zres-wh label[data-v-124b6fb4]{display:flex;flex:1;align-items:center;gap:5px;color:var(--zen-muted, #9aa0aa)}.zres-wh label[data-v-124b6fb4] .zen-num{flex:1;min-width:0}.zres-foot[data-v-124b6fb4]{display:flex;align-items:center;color:var(--zen-muted, #9aa0aa);font-size:10px;font-variant-numeric:tabular-nums}.zres-grow[data-v-124b6fb4]{flex:1}.zen-off[data-v-124b6fb4]{opacity:.45}.zen-select[data-v-f834634f]{position:relative;display:inline-flex;min-width:var(--zen-control-min, 90px)}.zs-trigger[data-v-f834634f]{display:inline-flex;user-select:none;flex:1 1 auto;align-items:center;gap:6px;min-width:0;box-sizing:border-box;height:var(--zen-control-h, 28px);padding:0 6px 0 8px;font-size:12px;font-family:inherit;cursor:pointer;background:var(--zen-control-bg, var(--zen-surface, #202026));color:var(--zen-text, #e5e5ea);border:1px solid var(--zen-control-border, var(--zen-border, #34343c));border-radius:var(--zen-radius, 7px);transition:border-color var(--zen-dur-fast, .12s) ease}.zen-select.sm .zs-trigger[data-v-f834634f]{height:var(--zen-control-h-sm, 24px);font-size:11px}.zs-trigger[data-v-f834634f]:disabled{opacity:.45;cursor:not-allowed}.zs-trigger[data-v-f834634f]:hover,.zen-select.open .zs-trigger[data-v-f834634f]{border-color:var(--zen-control-hover-border, var(--zen-accent, #6366f1));background:var(--zen-control-hover-bg, var(--zen-control-bg))}.zs-trigger[data-v-f834634f]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:1px}.zs-label[data-v-f834634f]{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left}.zs-caret[data-v-f834634f]{font-size:16px;color:var(--zen-muted, #9aa0aa);flex:0 0 auto}.zs-ico[data-v-f834634f]{font-size:14px;flex:0 0 auto}.zs-menu[data-v-f834634f]{position:fixed;user-select:none;z-index:100000;max-height:260px;overflow-y:auto;padding:4px;display:flex;flex-direction:column;gap:1px}.zs-opt[data-v-f834634f]{display:flex;align-items:center;gap:7px;padding:6px 8px;font-size:12px;font-family:inherit;text-align:left;cursor:pointer;background:none;border:none;color:var(--zen-text, #e5e5ea);border-radius:var(--zen-radius, 7px);white-space:nowrap}.zs-opt span[data-v-f834634f]{flex:1}.zs-opt[data-v-f834634f]:hover,.zs-opt.cur[data-v-f834634f]{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 10%,transparent)}.zs-opt[data-v-f834634f]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:-2px}.zs-opt.on[data-v-f834634f]{color:var(--zen-accent, #6366f1)}.zs-check[data-v-f834634f]{font-size:14px;color:var(--zen-accent, #6366f1);flex:0 0 auto}.zen-peek{position:fixed;display:flex;flex-direction:column;max-width:min(560px,60vw);overflow:hidden;border-radius:var(--zen-radius, 8px);pointer-events:none;animation:zen-peek-in var(--zen-dur-fast, .12s) ease-out}.zen-peek img,.zen-peek video{display:block;max-width:min(560px,60vw);max-height:min(480px,70vh);object-fit:contain;background:var(--zen-media-bg, #0b0b0e)}.zen-peek-custom{display:block;max-width:min(560px,60vw);max-height:min(480px,70vh);overflow:hidden;background:var(--zen-media-bg, #0b0b0e)}.zen-peek-audio{display:flex;align-items:center;gap:10px;padding:14px;color:var(--zen-muted, #9aa0aa);font-size:22px}.zen-peek-caption{display:flex;flex-direction:column;gap:2px;max-width:100%;padding:8px 10px;font-size:12px;line-height:1.4}.zen-peek-caption span{color:var(--zen-muted, #9aa0aa)}@keyframes zen-peek-in{0%{opacity:0;transform:scale(.97)}}@media(prefers-reduced-motion:reduce){:root:not([data-zen-motion=full]) .zen-peek{animation:none}}:root[data-zen-motion=reduce] .zen-peek{animation:none}.zen-combo[data-v-1ec776ef]{position:relative;width:100%;min-width:var(--zen-control-min, 90px)}.zc-trigger[data-v-1ec776ef]{display:flex;user-select:none;align-items:center;gap:6px;width:100%;box-sizing:border-box;min-height:var(--zen-control-h, 28px);background:var(--zen-control-bg, var(--zen-input, #1b1b20));color:var(--zen-text, #e5e5ea);border:1px solid var(--zen-control-border, var(--zen-border, #34343c));border-radius:var(--zen-radius, 7px);padding:4px 8px;font:inherit;font-size:12px;cursor:pointer;text-align:left;transition:border-color var(--zen-dur-fast, .12s) ease}.zc-trigger[data-v-1ec776ef]:hover:not(:disabled){border-color:var(--zen-control-hover-border, var(--zen-accent, #6366f1));background:var(--zen-control-hover-bg, var(--zen-control-bg))}.zc-trigger[data-v-1ec776ef]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:1px}.zc-trigger.sm[data-v-1ec776ef]{min-height:var(--zen-control-h-sm, 24px);padding:2px 7px;font-size:11px}.zc-trigger[data-v-1ec776ef]:disabled{cursor:not-allowed;opacity:.45;cursor:default}.zen-combo.open .zc-trigger[data-v-1ec776ef]{border-color:var(--zen-accent, #6366f1)}.zc-current[data-v-1ec776ef]{flex:1;min-width:0;overflow:hidden}.zc-caret[data-v-1ec776ef]{flex:none;color:var(--zen-muted, #9aa0aa);transition:transform var(--zen-dur-fast, .12s) ease}.zen-combo.open .zc-caret[data-v-1ec776ef]{transform:rotate(180deg)}.zen-combo-menu{position:fixed;user-select:none;z-index:100000;display:flex;flex-direction:column;max-height:360px;overflow:hidden}.zen-combo-menu .zc-search{display:flex;align-items:center;gap:6px;padding:8px 10px;border-bottom:1px solid var(--zen-border, #34343c)}.zen-combo-menu .zc-search>.mdi{color:var(--zen-muted, #9aa0aa);font-size:16px}.zen-combo-menu .zc-search input{flex:1;user-select:text;min-width:0;background:none;border:none;outline:none;color:inherit;font:inherit;font-size:12px}.zen-combo-menu .zc-clear{border:none;background:none;color:var(--zen-muted, #9aa0aa);cursor:pointer;padding:0 2px}.zen-combo-menu .zc-search-actions{flex:none;display:inline-flex;align-items:center}.zen-combo-menu .zc-header{flex:none;border-bottom:1px solid var(--zen-border, #34343c)}.zen-combo-menu .zc-list{overflow-y:auto;padding:4px;min-height:0;will-change:scroll-position}.zen-combo-menu .zc-list.virt{overflow-anchor:none}.zen-combo-menu .zc-virt{position:relative;width:100%}.zen-combo-menu .zc-win{position:absolute;top:0;left:0;right:0}.zen-combo-menu .zc-opt{display:flex;align-items:center;gap:9px;padding:6px 8px;border-radius:var(--zen-radius, 7px);cursor:pointer;font-size:12px;box-sizing:border-box;overflow:hidden}.zen-combo-menu .zc-opt.active{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 10%,transparent)}.zen-combo-menu .zc-opt.sel{color:var(--zen-accent, #6366f1)}.zen-combo-menu .zc-opt-lbl{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.zen-combo-menu .zc-sep{height:1px;margin:4px 6px;background:var(--zen-border, #34343c)}.zen-combo-menu .zc-empty{padding:16px;text-align:center;font-size:12px;color:var(--zen-muted, #9aa0aa)}.zen-combo-menu .zc-footer{border-top:1px solid var(--zen-border, #34343c);padding:6px}.zen-combo-menu.grid .zc-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(var(--zc-grid-min, 92px),1fr));gap:6px;align-content:start}.zen-combo-menu.grid .zc-opt{flex-direction:column;align-items:stretch;height:auto;gap:4px;padding:4px}.zen-combo-menu.grid .zc-empty{grid-column:1 / -1}.zen-switch[data-v-c2dc757b]{position:relative;flex:0 0 auto;width:42px;height:23px;padding:0;border:1px solid var(--zen-border, #34343c);border-radius:var(--zen-switch-radius, var(--zen-radius, 7px));background:var(--zen-surface, #202026);cursor:pointer;transition:background var(--zen-dur, .2s) ease,border-color var(--zen-dur, .2s) ease}.zen-switch.on[data-v-c2dc757b]{background:var(--zen-accent, #6366f1);border-color:var(--zen-accent, #6366f1)}.zen-switch[data-v-c2dc757b]:disabled{opacity:.5;cursor:default}.zen-switch .knob[data-v-c2dc757b]{position:absolute;top:1px;left:1px;width:19px;height:19px;border-radius:var(--zen-switch-radius, var(--zen-radius, 7px));background:#fff;display:flex;align-items:center;justify-content:center;transition:transform var(--zen-dur, .2s) ease;box-shadow:0 1px 2px #00000059}.zen-switch.on .knob[data-v-c2dc757b]{transform:translate(19px);background:var(--zen-accent-text, #fff)}.zen-switch[data-v-c2dc757b]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:1px}.zen-switch .knob .mdi[data-v-c2dc757b]{font-size:12px;color:var(--zen-muted, #9aa0aa)}.zen-switch.on .knob .mdi[data-v-c2dc757b]{color:var(--zen-accent, #6366f1)}.zen-check[data-v-36edc25d]{display:inline-flex;align-items:center;gap:7px;background:none;border:none;cursor:pointer;color:var(--zen-text, #e5e5ea);font:inherit;font-size:12px;padding:0;text-align:left}.zen-check[data-v-36edc25d]:focus-visible{outline:none}.zen-check:focus-visible .box[data-v-36edc25d]{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:1px}.zen-check[data-v-36edc25d]:disabled{opacity:.5;cursor:default}.box[data-v-36edc25d]{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;flex:none;border:1px solid var(--zen-border, #34343c);border-radius:min(var(--zen-radius, 7px),6px);background:var(--zen-input, #1b1b20);color:var(--zen-accent-text, #fff);transition:background var(--zen-dur-fast, .12s) ease,border-color var(--zen-dur-fast, .12s) ease}.zen-check.on .box[data-v-36edc25d]{background:var(--zen-accent, #6366f1);border-color:var(--zen-accent, #6366f1)}.zen-check:hover:not(:disabled) .box[data-v-36edc25d]{border-color:var(--zen-accent, #6366f1)}.box .mdi[data-v-36edc25d]{font-size:13px;line-height:1}.lbl[data-v-36edc25d]{line-height:1.2}.zen-dot[data-v-73775b30]{display:inline-flex;align-items:center;gap:6px;padding:4px;margin:-4px;background:none;border:none;cursor:pointer;color:var(--zen-text, #e5e5ea);font:inherit;font-size:12px;line-height:1.2}.zen-dot[data-v-73775b30]:disabled{opacity:.4;cursor:default}.mark[data-v-73775b30]{position:relative;display:inline-block;flex:none;width:var(--zen-dot-size, 13px);height:var(--zen-dot-size, 13px);border-radius:var(--zen-dot-radius, var(--zen-radius, 7px));border:1px solid var(--zen-border, #34343c);background:var(--zen-input, #1b1b20);transition:border-color var(--zen-dur-fast, .12s) ease}.mark[data-v-73775b30]:after{content:\"\";position:absolute;inset:var(--zen-dot-gap, 2px);border-radius:max(0px,calc(min(var(--zen-dot-radius, var(--zen-radius, 7px)),var(--zen-dot-size, 13px) / 2) - 1px - var(--zen-dot-gap, 2px)));background:var(--zen-dot-on, var(--zen-accent, #6366f1));transform:scale(0);opacity:0;transition:transform var(--zen-dur-fast, .12s) ease,opacity var(--zen-dur-fast, .12s) ease}.zen-dot.on .mark[data-v-73775b30]{border-color:var(--zen-dot-on, var(--zen-accent, #6366f1))}.zen-dot.on .mark[data-v-73775b30]:after{transform:scale(1);opacity:1}.zen-dot:hover:not(:disabled) .mark[data-v-73775b30]{border-color:var(--zen-dot-on, var(--zen-accent, #6366f1))}.zen-dot:hover:not(:disabled):not(.on) .mark[data-v-73775b30]:after{transform:scale(1);opacity:.22}.zen-dot[data-v-73775b30]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:1px;border-radius:var(--zen-radius, 7px)}.zen-dot:not(.on) .lbl[data-v-73775b30]{color:var(--zen-muted, #9aa0aa)}.zvol[data-v-9e6c85be]{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 8px 0 2px;color:var(--zen-text, #e5e5ea);font-size:10.5px;user-select:none}.zvol.quiet[data-v-9e6c85be]{opacity:.45}.zvol-b[data-v-9e6c85be]{display:grid;place-items:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--zen-radius, 7px);background:none;color:inherit;cursor:pointer}.zvol-b[data-v-9e6c85be]:hover{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 10%,transparent)}.zvol-b .mdi[data-v-9e6c85be]{font-size:17px}.zvol.off .zvol-b[data-v-9e6c85be]{color:var(--zen-muted, #9aa0aa)}.zvol-track[data-v-9e6c85be]{position:relative;width:72px;height:18px;cursor:pointer;touch-action:none}.zvol-track[data-v-9e6c85be]:before{position:absolute;top:50%;right:0;left:0;height:4px;border-radius:2px;background:color-mix(in srgb,var(--zen-text, #e5e5ea) 16%,transparent);transform:translateY(-50%);content:\"\"}.zvol-fill[data-v-9e6c85be]{position:absolute;top:50%;left:0;height:4px;border-radius:2px;background:var(--zen-accent, #6366f1);transform:translateY(-50%)}.zvol-knob[data-v-9e6c85be]{position:absolute;top:50%;width:11px;height:11px;border-radius:50%;background:var(--zen-text, #e5e5ea);box-shadow:0 1px 3px #00000073;transform:translate(-50%,-50%)}.zvol-n[data-v-9e6c85be]{min-width:20px;color:var(--zen-muted, #9aa0aa);font-variant-numeric:tabular-nums;text-align:right}.zce[data-v-b10dcc0e]{display:flex;flex-direction:column;gap:4px}.zce-box[data-v-b10dcc0e]{position:relative;height:80px;border:1px solid var(--zen-border, #34343c);border-radius:var(--zen-radius, 7px);background:var(--zen-field-bg, var(--zen-input, #1b1b20))}.zce-svg[data-v-b10dcc0e]{display:block;width:100%;height:100%;cursor:crosshair}.zce-grid[data-v-b10dcc0e]{stroke:color-mix(in srgb,var(--zen-text, #e5e5ea) 7%,transparent);stroke-width:1;vector-effect:non-scaling-stroke}.zce-unit[data-v-b10dcc0e]{stroke:color-mix(in srgb,var(--zen-text, #e5e5ea) 25%,transparent);stroke-dasharray:3 3;stroke-width:1;vector-effect:non-scaling-stroke}.zce-area[data-v-b10dcc0e]{fill:color-mix(in srgb,var(--zen-accent, #6366f1) 16%,transparent)}.zce-line[data-v-b10dcc0e]{fill:none;stroke:var(--zen-accent, #6366f1);stroke-width:1.8;vector-effect:non-scaling-stroke}.zce-pt[data-v-b10dcc0e]{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border:2px solid var(--zen-accent, #6366f1);border-radius:50%;background:var(--zen-bg, #1a1a1f);cursor:grab;touch-action:none}.zce-pt[data-v-b10dcc0e]:hover{background:var(--zen-accent, #6366f1)}.zce-axis[data-v-b10dcc0e]{display:flex;justify-content:space-between;color:var(--zen-muted, #9aa0aa);font-size:10px}.zce-presets[data-v-b10dcc0e]{display:flex;flex-wrap:wrap;gap:4px}.zce-preset[data-v-b10dcc0e]{display:inline-flex;align-items:center;gap:4px;padding:2px 7px;border:1px solid var(--zen-border, #34343c);border-radius:var(--zen-radius, 7px);background:none;color:var(--zen-muted, #9aa0aa);font:inherit;font-size:10.5px;cursor:pointer}.zce-preset[data-v-b10dcc0e]:hover{border-color:var(--zen-accent, #6366f1);color:var(--zen-text, #e5e5ea)}.zen-off[data-v-b10dcc0e]{opacity:.45}.zen-slider[data-v-2a465bf0]{-webkit-appearance:none;appearance:none;width:100%;height:4px;border-radius:var(--zen-radius, 7px);background:var(--zen-border, #34343c);outline:none;cursor:pointer}.zen-slider[data-v-2a465bf0]:disabled{opacity:.5;cursor:default}.zen-slider[data-v-2a465bf0]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:14px;height:14px;border-radius:var(--zen-radius, 7px);background:var(--zen-accent, #6366f1);border:2px solid var(--zen-bg, #1a1a1f);cursor:pointer;box-shadow:0 1px 3px #0006}.zen-slider[data-v-2a465bf0]::-moz-range-thumb{width:14px;height:14px;border:2px solid var(--zen-bg, #1a1a1f);border-radius:var(--zen-radius, 7px);background:var(--zen-accent, #6366f1);cursor:pointer}.zen-slider[data-v-2a465bf0]::-moz-range-track{height:4px;border-radius:var(--zen-radius, 7px);background:var(--zen-border, #34343c)}.zen-slider[data-v-2a465bf0]:focus-visible{box-shadow:0 0 0 2px var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent))}.zcp[data-v-917b7a2e]{display:block;width:100%;min-width:var(--zen-control-min, 76px)}.zcp.compact[data-v-917b7a2e]{display:inline-block;width:auto;min-width:0}.zcp.compact .zcp-trigger[data-v-917b7a2e]{width:auto;height:auto;padding:0;border:none;background:none}.zcp-trigger[data-v-917b7a2e]{display:flex;align-items:center;gap:6px;width:100%;height:var(--zen-control-h, 28px);box-sizing:border-box;padding:0 6px;border:1px solid var(--zen-control-border, var(--zen-border, #34343c));border-radius:var(--zen-radius, 7px);background:var(--zen-control-bg, var(--zen-input, #1b1b20));color:var(--zen-text, #e5e5ea);cursor:pointer;font:inherit;font-size:11px}.zcp-trigger[data-v-917b7a2e]:hover{border-color:var(--zen-control-hover-border, var(--zen-accent, #6366f1));background:var(--zen-control-hover-bg, var(--zen-control-bg))}.zcp-sw[data-v-917b7a2e]{width:16px;height:16px;flex:none;border-radius:4px;border:1px solid rgba(255,255,255,.2)}.zcp-sw.lg[data-v-917b7a2e]{width:24px;height:24px}.zcp-hexlbl[data-v-917b7a2e]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left;text-transform:uppercase;font-variant-numeric:tabular-nums}.zcp-trigger .mdi[data-v-917b7a2e]{font-size:14px;color:var(--zen-muted, #9aa0aa)}.zcp-pop[data-v-917b7a2e]{position:fixed;z-index:100000;display:flex;flex-direction:column;gap:8px;padding:8px}.zcp-sv[data-v-917b7a2e]{position:relative;width:100%;height:118px;border-radius:6px;overflow:hidden;cursor:crosshair;touch-action:none}.zcp-sv-white[data-v-917b7a2e],.zcp-sv-black[data-v-917b7a2e]{position:absolute;inset:0}.zcp-sv-white[data-v-917b7a2e]{background:linear-gradient(to right,#fff,#fff0)}.zcp-sv-black[data-v-917b7a2e]{background:linear-gradient(to top,#000,#0000)}.zcp-sv-thumb[data-v-917b7a2e]{position:absolute;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #00000080;transform:translate(-50%,-50%);pointer-events:none}.zcp-hue[data-v-917b7a2e]{position:relative;width:100%;height:12px;border-radius:6px;cursor:pointer;touch-action:none;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.zcp-hue-thumb[data-v-917b7a2e]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #00000080;transform:translate(-50%,-50%);pointer-events:none}.zcp-row[data-v-917b7a2e]{display:flex;align-items:center;gap:8px}.zcp-input[data-v-917b7a2e]{flex:1;min-width:0;height:26px;box-sizing:border-box;padding:0 6px;border:1px solid var(--zen-control-border, var(--zen-border, #34343c));border-radius:var(--zen-radius, 7px);background:var(--zen-field-bg, var(--zen-input, #1b1b20));color:var(--zen-text, #e5e5ea);font:inherit;font-size:11px;text-transform:uppercase}.zcp-input[data-v-917b7a2e]:focus{outline:none;border-color:var(--zen-accent, #6366f1)}.zcp-presets[data-v-917b7a2e]{display:flex;gap:4px;flex-wrap:wrap}.zcp-pre[data-v-917b7a2e]{width:20px;height:20px;padding:0;border-radius:4px;border:1px solid var(--zen-border, #34343c);cursor:pointer}.zen-off[data-v-917b7a2e]{opacity:.45}.zen-dims[data-v-bb012b3c]{display:flex;align-items:center;flex-wrap:wrap;gap:5px}.zd-n[data-v-bb012b3c]{flex:1 1 60px;min-width:48px}.zd-x[data-v-bb012b3c]{flex:none;color:var(--zen-muted, #9aa0aa);font-size:11px}.zd-mp[data-v-bb012b3c]{flex:0 1 56px;min-width:44px}.zd-unit[data-v-bb012b3c],.zd-aspect[data-v-bb012b3c]{flex:none;font-size:10px;color:var(--zen-muted, #9aa0aa);font-variant-numeric:tabular-nums}.zd-aspect[data-v-bb012b3c]{margin-left:auto}.zen-off[data-v-bb012b3c]{opacity:.45}.zmi-lead[data-v-4282c43c]{flex:none;display:inline-flex;align-items:center}.zmi-wrap[data-v-4282c43c]{position:relative}.zmi[data-v-4282c43c]{display:flex;align-items:center;gap:9px;width:100%;text-align:left;cursor:pointer;font:inherit;font-size:12px;padding:7px 9px;border:none;border-radius:var(--zen-radius, 7px);background:none;color:var(--zen-text, #e5e5ea)}.zmi[data-v-4282c43c]:hover:not(:disabled),.zmi.on[data-v-4282c43c]{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 10%,transparent)}.zmi[data-v-4282c43c]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:-2px}.zmi[data-v-4282c43c]:disabled{opacity:.45;cursor:default}.zmi.danger[data-v-4282c43c]:hover:not(:disabled){background:var(--zen-danger, #dc2626);color:var(--zen-danger-text, #fff)}.zmi-ico[data-v-4282c43c]{flex:0 0 auto;font-size:15px;color:var(--zen-muted, #9aa0aa)}.zmi.danger:hover:not(:disabled) .zmi-ico[data-v-4282c43c]{color:var(--zen-danger-text, #fff)}.zmi-lbl[data-v-4282c43c]{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.zmi-caret[data-v-4282c43c]{margin-left:auto;flex:0 0 auto;font-size:15px;color:var(--zen-muted, #9aa0aa)}.zmi-hint[data-v-4282c43c]{margin-left:auto;flex:0 0 auto;font-size:10px;color:var(--zen-muted, #9aa0aa);font-variant-numeric:tabular-nums}.zmi-sub[data-v-4282c43c]{display:flex;flex-direction:column;gap:1px}.zen-msep[data-v-5c3057e1]{height:1px;background:var(--zen-border, #34343c);margin:4px}.zen-modal-back{position:fixed;inset:0;z-index:100100;display:flex;align-items:center;justify-content:center;background:#0000008c;backdrop-filter:blur(2px)}.zen-modal{display:flex;flex-direction:column;max-width:94vw;max-height:90vh;overflow:hidden;background:var(--zen-chrome-bg, var(--zen-surface, #202026));color:var(--zen-text, #e5e5ea);border:1px solid var(--zen-surface-border, var(--zen-border, #34343c));border-radius:calc(var(--zen-radius-surface, var(--zen-radius, 7px)) + 2px);box-shadow:0 24px 70px #0009;font-family:var(--p-font-family, system-ui, sans-serif)}.zen-modal .zm-head{display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:1px solid var(--zen-border, #34343c);flex:none}.zen-modal .zm-title{flex:none;font-size:13px;font-weight:600;white-space:nowrap}.zen-modal .zm-head-mid{flex:1;min-width:0;display:flex;align-items:center;gap:8px}.zen-modal .zm-x{border:none;background:none;color:var(--zen-muted, #9aa0aa);cursor:pointer;font-size:18px;display:inline-flex}.zen-modal .zm-x:hover{color:var(--zen-text, #e5e5ea)}.zen-modal .zm-body{flex:1;min-height:0;overflow:auto;padding:14px}.zen-modal .zm-foot{flex:none;border-top:1px solid var(--zen-border, #34343c);padding:10px 14px}.zw-root[data-v-c2d2ee07]{position:fixed;inset:0;z-index:100200;pointer-events:none;font-family:var(--p-font-family, system-ui, sans-serif)}.zw-root.zw-backdrop[data-v-c2d2ee07]{background:#0000006b;backdrop-filter:blur(2px);pointer-events:auto}.zw[data-v-c2d2ee07]{position:fixed;pointer-events:auto;display:flex;flex-direction:column;overflow:hidden;color:var(--zen-text, #e5e5ea);background:var(--zen-glass, color-mix(in srgb, var(--zen-bg, #1a1a1f) 90%, transparent));border:1px solid var(--zen-surface-border, var(--zen-border, #34343c));border-radius:var(--zen-radius-surface, var(--zen-radius, 7px));box-shadow:0 24px 70px #0000008c;backdrop-filter:blur(12px)}.zw-bar[data-v-c2d2ee07]{flex:0 0 auto;display:flex;align-items:center;gap:8px;height:40px;padding:0 8px 0 12px;cursor:grab;background:color-mix(in srgb,var(--zen-chrome-bg, var(--zen-surface, #202026)) 82%,transparent);border-bottom:1px solid var(--zen-surface-border, var(--zen-border, #34343c));user-select:none}.zw-bar[data-v-c2d2ee07]:active{cursor:grabbing}.zw-icon[data-v-c2d2ee07]{font-size:16px;color:var(--zen-accent, #6366f1)}.zw-title[data-v-c2d2ee07]{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.zw-grow[data-v-c2d2ee07]{flex:1}.zw-actions[data-v-c2d2ee07]{display:inline-flex;align-items:center;gap:6px}.zw-no-drag[data-v-c2d2ee07]{display:inline-flex;align-items:center;gap:2px;cursor:default}.zw-body[data-v-c2d2ee07]{flex:1;min-height:0;display:flex}.zw-foot[data-v-c2d2ee07]{flex:0 0 auto;display:flex;align-items:center;gap:10px;padding:6px 12px;background:color-mix(in srgb,var(--zen-chrome-bg, var(--zen-surface, #202026)) 82%,transparent);border-top:1px solid var(--zen-surface-border, var(--zen-border, #34343c))}.zw-resize[data-v-c2d2ee07]{position:absolute;right:0;bottom:0;width:16px;height:16px;cursor:nwse-resize;z-index:2}.zw-resize[data-v-c2d2ee07]:after{content:\"\";position:absolute;right:3px;bottom:3px;width:7px;height:7px;border-right:2px solid var(--zen-muted, #9aa0aa);border-bottom:2px solid var(--zen-muted, #9aa0aa);opacity:.55}.zen-ctx[data-v-247d47d6]{position:fixed;z-index:100000;min-width:190px;max-height:70vh;overflow-y:auto;padding:4px;font-size:12px}.zen-ctx-item[data-v-247d47d6]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 8px;border:0;border-radius:var(--zen-radius, 7px);background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.zen-ctx-item[data-v-247d47d6]:hover:not(:disabled){background:color-mix(in srgb,var(--zen-accent, #6366f1) 22%,transparent)}.zen-ctx-item[data-v-247d47d6]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:-2px}.zen-ctx-item[data-v-247d47d6]:disabled{opacity:.4;cursor:default}.zen-ctx-item.danger[data-v-247d47d6]{color:var(--zen-danger, #dc2626)}.zen-ctx-item .mdi[data-v-247d47d6]{width:16px;color:var(--zen-muted, #9aa0aa);font-size:14px;text-align:center}.zen-ctx-item span[data-v-247d47d6]{flex:1}.zen-ctx-item kbd[data-v-247d47d6]{color:var(--zen-muted, #9aa0aa);font-family:inherit;font-size:10.5px}.zen-ctx-sep[data-v-247d47d6]{height:1px;margin:4px 2px;background:var(--zen-surface-border, var(--zen-border, #34343c))}.zen-ctx-head[data-v-247d47d6]{padding:5px 8px 3px;color:var(--zen-muted, #9aa0aa);font-size:10px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}.zen-compare[data-v-7f4b84dd]{position:relative;overflow:hidden;width:100%;height:100%;user-select:none;touch-action:pan-y;background:var(--zen-surface-2, #222)}.zen-compare img[data-v-7f4b84dd]{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.zen-compare.contain img[data-v-7f4b84dd]{object-fit:contain}.slider .zc-before[data-v-7f4b84dd]{clip-path:inset(0 calc(100% - var(--split)) 0 0)}.slider:not(.moving) .zc-before[data-v-7f4b84dd],.slider:not(.moving) .zc-line[data-v-7f4b84dd]{transition:clip-path var(--zen-dur, .2s) ease,left var(--zen-dur, .2s) ease}.dissolve .zc-before[data-v-7f4b84dd]{transition:opacity .45s ease}.dissolve.hovering .zc-before[data-v-7f4b84dd]{opacity:0}.zc-line[data-v-7f4b84dd]{position:absolute;top:0;bottom:0;left:var(--split);width:2px;margin-left:-1px;background:#ffffffe6;box-shadow:0 0 6px #0006;pointer-events:none}.zc-knob[data-v-7f4b84dd]{position:absolute;top:50%;left:50%;width:22px;height:22px;transform:translate(-50%,-50%) rotate(90deg);border-radius:50%;display:grid;place-items:center;background:#fffffff2;color:#222;font-size:14px;box-shadow:0 1px 4px #00000059;opacity:0;transition:opacity var(--zen-dur-fast, .12s)}.hovering .zc-knob[data-v-7f4b84dd],.zen-compare:focus-visible .zc-knob[data-v-7f4b84dd]{opacity:1}.zc-tag[data-v-7f4b84dd]{position:absolute;bottom:8px;font-size:10px;padding:2px 7px;border-radius:999px;background:#0000008c;color:#fff;backdrop-filter:blur(4px);pointer-events:none;opacity:0;transition:opacity var(--zen-dur-fast, .12s)}.hovering .zc-tag[data-v-7f4b84dd]{opacity:1}.zc-tag.left[data-v-7f4b84dd]{left:8px}.zc-tag.right[data-v-7f4b84dd]{right:8px}.zen-compare[data-v-7f4b84dd]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:-2px}.zmc[data-v-29f0e538]{display:flex;box-sizing:border-box;min-width:0;align-items:center;gap:4px;padding:5px 8px;border:1px solid var(--zen-surface-border, var(--zen-border, #34343c));border-radius:var(--zen-radius-surface, var(--zen-radius, 7px));background:color-mix(in srgb,var(--zen-surface, #202026) 88%,transparent);backdrop-filter:blur(10px);color:var(--zen-text, #e5e5ea);font-size:11px;user-select:none}.zmc-b[data-v-29f0e538]{display:inline-grid;flex:none;place-items:center;min-width:26px;height:26px;padding:0 4px;border:0;border-radius:var(--zen-radius, 7px);background:none;color:var(--zen-muted, #9aa0aa);font:inherit;cursor:pointer}.zmc-b[data-v-29f0e538]:hover,.zmc-b.on[data-v-29f0e538]{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 10%,transparent);color:var(--zen-text, #e5e5ea)}.zmc-b.on[data-v-29f0e538]{color:var(--zen-accent, #6366f1)}.zmc-b[data-v-29f0e538]:disabled{opacity:.4;cursor:default}.zmc-b .mdi[data-v-29f0e538]{font-size:17px}.zmc-rate[data-v-29f0e538]{min-width:38px;font-size:11px;font-weight:700;font-variant-numeric:tabular-nums}.zmc-time[data-v-29f0e538]{flex:none;min-width:44px;font-variant-numeric:tabular-nums;text-align:center}.zmc-time.soft[data-v-29f0e538]{color:var(--zen-muted, #9aa0aa)}.zmc-bar[data-v-29f0e538]{position:relative;flex:1;min-width:60px;height:22px;cursor:pointer;touch-action:none}.zmc-track[data-v-29f0e538]{position:absolute;top:50%;right:0;left:0;height:4px;overflow:hidden;border-radius:2px;background:color-mix(in srgb,var(--zen-text, #e5e5ea) 14%,transparent);transform:translateY(-50%);transition:height var(--zen-dur-fast, .12s)}.zmc-bar:hover .zmc-track[data-v-29f0e538]{height:6px}.zmc-buf[data-v-29f0e538]{position:absolute;top:0;bottom:0;background:color-mix(in srgb,var(--zen-text, #e5e5ea) 16%,transparent)}.zmc-fill[data-v-29f0e538]{position:absolute;top:0;bottom:0;left:0;background:var(--zen-accent, #6366f1)}.zmc-knob[data-v-29f0e538]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;background:var(--zen-text, #e5e5ea);box-shadow:0 1px 4px #0000007f;transform:translate(-50%,-50%) scale(0);transition:transform var(--zen-dur-fast, .12s)}.zmc-bar:hover .zmc-knob[data-v-29f0e538]{transform:translate(-50%,-50%) scale(1)}.zmc-tip[data-v-29f0e538]{position:absolute;bottom:100%;margin-bottom:4px;padding:2px 5px;border-radius:4px;background:#000c;color:#fff;font-size:10.5px;font-variant-numeric:tabular-nums;white-space:nowrap;transform:translate(-50%);pointer-events:none}.zmc.compact .zmc-time[data-v-29f0e538]{min-width:34px}.zmc.compact .zmc-bar[data-v-29f0e538]{min-width:40px}.zmc.tiny[data-v-29f0e538]{gap:2px;padding:4px 5px}.zmc.tiny[data-v-29f0e538] .zvol-track{display:none}.zlb[data-v-82278b2b]{position:fixed;inset:0;z-index:100300;display:flex;overflow:hidden;user-select:none;background:color-mix(in srgb,var(--zen-bg, #1a1a1f) 92%,transparent);backdrop-filter:blur(6px);font-family:var(--p-font-family, system-ui, sans-serif);color:var(--zen-text, #e5e5ea)}.zlb.inline[data-v-82278b2b]{position:absolute;z-index:1;border-radius:var(--zen-radius, 7px);background:var(--zen-bg, #1a1a1f);backdrop-filter:none}.zlb-main[data-v-82278b2b]{position:relative;flex:1;min-width:0;display:flex;flex-direction:column}.zlb-chrome[data-v-82278b2b]{display:flex;align-items:center;gap:2px;padding:3px;background:color-mix(in srgb,var(--zen-chrome-bg, var(--zen-surface, #202026)) 94%,transparent);border:1px solid var(--zen-surface-border, var(--zen-border, #34343c));border-radius:var(--zen-radius-surface, var(--zen-radius, 7px));box-shadow:var(--interface-floating-panel-shadow, 0 6px 18px rgba(0, 0, 0, .28));backdrop-filter:blur(12px)}.zlb-chrome .zen-iconbtn[data-v-82278b2b]{width:30px;height:30px}.zlb-top[data-v-82278b2b],.zlb-bottom[data-v-82278b2b]{position:absolute;left:12px;right:12px;z-index:4;display:flex;gap:8px;pointer-events:none;transition:opacity var(--zen-dur, .2s) ease,translate var(--zen-dur, .2s) ease}.zlb-top[data-v-82278b2b]>*,.zlb-bottom[data-v-82278b2b]>*{pointer-events:auto}.zlb-top[data-v-82278b2b]{top:12px;align-items:flex-start}.zlb-bottom[data-v-82278b2b]{bottom:12px;align-items:flex-end;justify-content:center;flex-wrap:wrap-reverse}.zlb-main.idle .zlb-top[data-v-82278b2b],.zlb-main.far-top .zlb-top[data-v-82278b2b]:not(:focus-within){opacity:0;translate:0 -6px}.zlb-main.idle .zlb-bottom[data-v-82278b2b],.zlb-main.far-bottom .zlb-bottom[data-v-82278b2b]:not(:focus-within,:has(.zlb-caret.on)){opacity:0;translate:0 6px}.zlb-main.far-top .zlb-top[data-v-82278b2b]:not(:focus-within)>*,.zlb-main.far-bottom .zlb-bottom[data-v-82278b2b]:not(:focus-within,:has(.zlb-caret.on))>*{pointer-events:none}.zlb-main.idle[data-v-82278b2b]{cursor:none}.zlb-grow[data-v-82278b2b]{flex:1}.zlb-info[data-v-82278b2b]{gap:6px;min-width:0;flex:0 0 auto;height:38px;box-sizing:border-box;padding:0 10px 0 4px;font-size:13px}.zlb-info[data-v-82278b2b]:not(:has(.zlb-pos)){padding-right:4px}.zlb-tip[data-v-82278b2b]{display:grid;place-items:center;width:30px;height:30px;font-size:15px;color:var(--zen-muted, #9aa0aa)}.zlb-pos[data-v-82278b2b],.zlb-zval[data-v-82278b2b]{font-size:11.5px;color:var(--zen-muted, #9aa0aa);font-variant-numeric:tabular-nums;white-space:nowrap}.zlb-zval[data-v-82278b2b]{min-width:40px;text-align:center}.zlb-tools[data-v-82278b2b]{position:relative;flex-wrap:wrap;justify-content:center;max-width:100%;overflow:hidden}.zlb-progress[data-v-82278b2b]{position:absolute;left:0;bottom:0;height:2px;width:100%;transform-origin:left;background:var(--zen-accent, #6366f1);animation:zlb-progress-82278b2b linear forwards}@keyframes zlb-progress-82278b2b{0%{transform:scaleX(0)}to{transform:scaleX(1)}}.zlb-caret[data-v-82278b2b]{display:inline-flex;align-items:center;justify-content:center;width:18px;height:30px;margin-left:-2px;padding:0;cursor:pointer;color:var(--zen-muted, #9aa0aa);background:none;border:1px solid transparent;border-radius:var(--zen-radius, 7px)}.zlb-caret .mdi[data-v-82278b2b]{line-height:1}.zlb-caret .mdi[data-v-82278b2b]:before{display:block;line-height:1}.zlb-caret[data-v-82278b2b]:hover,.zlb-caret.on[data-v-82278b2b]{color:var(--zen-text, #e5e5ea);background:color-mix(in srgb,var(--zen-text, #e5e5ea) 12%,transparent)}.zlb-slidepop[data-v-82278b2b]{display:flex;flex-direction:column;gap:12px;padding:10px 12px;min-width:230px}.zlb-slidepop-row[data-v-82278b2b]{display:flex;flex-direction:column;gap:6px}.zlb-slidepop-row.inline[data-v-82278b2b]{flex-direction:row;align-items:center;justify-content:space-between;cursor:pointer}.zlb-slidepop-speed[data-v-82278b2b]{display:flex;align-items:center;gap:10px}.zlb-slidepop-speed .zen-slider[data-v-82278b2b]{flex:1;min-width:0}.zlb-slidepop-value[data-v-82278b2b]{min-width:34px;text-align:right;font-size:12px;font-variant-numeric:tabular-nums;color:var(--zen-text, #e5e5ea)}.zlb-slidepop-label[data-v-82278b2b]{font-size:11.5px;font-weight:600;color:var(--zen-muted, #9aa0aa)}.zlb-sep[data-v-82278b2b]{width:1px;height:18px;margin:0 4px;background:var(--zen-surface-border, var(--zen-border, #34343c))}.zlb-side.zlb-side-enter-active[data-v-82278b2b],.zlb-side.zlb-side-leave-active[data-v-82278b2b]{transition:translate var(--zen-dur, .2s) cubic-bezier(.45,0,.2,1),margin-right var(--zen-dur, .2s) cubic-bezier(.45,0,.2,1),opacity var(--zen-dur, .2s) ease}.zlb-side.zlb-side-enter-from[data-v-82278b2b],.zlb-side.zlb-side-leave-to[data-v-82278b2b]{translate:calc(-100% - 12px) 0;margin-right:calc(-1 * (var(--zlb-side-w, 264px) + 12px));opacity:0}.zlb-side[data-v-82278b2b]{position:relative;z-index:5;flex:0 0 auto;display:flex;flex-direction:column;min-height:0;margin:12px 0 12px 12px;overflow:hidden;background:color-mix(in srgb,var(--zen-chrome-bg, var(--zen-surface, #202026)) 94%,transparent);border:1px solid var(--zen-surface-border, var(--zen-border, #34343c));border-radius:var(--zen-radius-surface, var(--zen-radius, 7px));box-shadow:var(--interface-floating-panel-shadow, 0 6px 18px rgba(0, 0, 0, .28));backdrop-filter:blur(12px)}.zlb-resize[data-v-82278b2b]{position:absolute;top:0;right:-3px;bottom:0;width:8px;z-index:4;cursor:ew-resize}.zlb-resize[data-v-82278b2b]:hover{background:color-mix(in srgb,var(--zen-accent, #6366f1) 45%,transparent)}.zlb-side-head[data-v-82278b2b]{flex:0 0 auto;display:flex;align-items:center;gap:6px;padding:8px 10px;border-bottom:1px solid var(--zen-border, #34343c)}.zlb-search[data-v-82278b2b]{flex:1;min-width:0;display:flex;align-items:center;gap:6px;height:28px;padding:0 8px;border:1px solid var(--zen-border, #34343c);border-radius:var(--zen-radius, 7px);background:var(--zen-input, #1b1b20)}.zlb-search[data-v-82278b2b]:focus-within{border-color:var(--zen-accent, #6366f1)}.zlb-search .mdi[data-v-82278b2b]{font-size:14px;color:var(--zen-muted, #9aa0aa)}.zlb-search input[data-v-82278b2b]{flex:1;min-width:0;border:none;background:none;outline:none;color:var(--zen-text, #e5e5ea);font:inherit;font-size:12px}.zlb-tscroll[data-v-82278b2b]{flex:1;min-height:0}.zlb-tscroll[data-v-82278b2b] .zen-scroll-viewport{padding:10px 14px;overflow-anchor:none}.zlb-tscroll[data-v-82278b2b] .zen-scroll-thumb{width:4px;right:4px}.zlb-tscroll[data-v-82278b2b] .zen-scroll-track:hover .zen-scroll-thumb,.zlb-tscroll[data-v-82278b2b] .zen-scroll-thumb:active{width:6px;right:3px}.zlb-tpad[data-v-82278b2b]{position:relative;width:100%}.zlb-grid[data-v-82278b2b]{position:absolute;top:0;left:0;right:0;display:grid;align-content:start}.zlb-cell[data-v-82278b2b]{position:relative;aspect-ratio:1;padding:0;border:1px solid var(--zen-border, #34343c);border-radius:var(--zen-radius, 7px);background:var(--zen-input, #1b1b20);cursor:pointer;overflow:hidden}.zlb-cell img[data-v-82278b2b],.zlb-cell video[data-v-82278b2b]{width:100%;height:100%;object-fit:cover;display:block}.zlb-grid.contain .zlb-cell img[data-v-82278b2b],.zlb-grid.contain .zlb-cell video[data-v-82278b2b]{object-fit:contain}.zlb-cell-audio[data-v-82278b2b]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:30px;color:var(--zen-muted, #9aa0aa)}.zlb-cell-badge[data-v-82278b2b]{position:absolute;top:4px;left:4px;font-size:16px;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.8);pointer-events:none}.zlb-cell[data-v-82278b2b]:hover,.zlb-cell.on[data-v-82278b2b]{border-color:var(--zen-accent, #6366f1)}.zlb-cell.on[data-v-82278b2b]:after{content:\"\";position:absolute;inset:0;border:2px solid var(--zen-accent, #6366f1);border-radius:calc(var(--zen-radius, 7px) - 1px);pointer-events:none}.zlb-cell-wf[data-v-82278b2b]{position:absolute;bottom:3px;right:3px;font-size:11px;color:#fff;background:#0009;border-radius:max(0px,calc(var(--zen-radius, 7px) - 3px));padding:1px 3px}.zlb-side-foot[data-v-82278b2b]{flex:0 0 auto;display:flex;align-items:center;gap:3px;padding:6px 8px;border-top:1px solid var(--zen-border, #34343c)}.zlb-foot-n[data-v-82278b2b]{font-size:11px;color:var(--zen-muted, #9aa0aa);font-variant-numeric:tabular-nums;padding-right:4px}.zlb-stage[data-v-82278b2b]{container-type:size;position:relative;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px}.zlb-stage.has-mc[data-v-82278b2b]{padding-bottom:calc(60px + var(--zlb-foot, 0px))}.zlb.inline .zlb-stage.has-mc[data-v-82278b2b]{padding-bottom:52px}.zlb-mc[data-v-82278b2b]{position:absolute;right:12px;bottom:calc(8px + var(--zlb-foot, 0px));left:12px;z-index:3;max-width:760px;margin:0 auto}.zlb.inline .zlb-stage[data-v-82278b2b]{padding:6px}.zlb-media[data-v-82278b2b]{max-width:100%;max-height:100%;object-fit:contain;display:block;border-radius:var(--zen-radius, 7px);box-shadow:0 24px 60px -20px #0000008c;transition:transform var(--zen-dur, .2s) linear}.zlb-layered[data-v-82278b2b]{position:relative;overflow:hidden}.zlb-layered img[data-v-82278b2b]{position:absolute;inset:0;width:100%;height:100%;display:block;user-select:none}.zlb-overlay[data-v-82278b2b]{mix-blend-mode:multiply;opacity:.75;pointer-events:none}.zlb-masked-out[data-v-82278b2b]{filter:grayscale(.85) brightness(.32)}.zlb-overlay-mask[data-v-82278b2b]{mask-mode:luminance;mask-size:100% 100%;mask-repeat:no-repeat;pointer-events:none}.zlb-panel[data-v-82278b2b]{user-select:text;position:relative;z-index:5;flex:0 0 340px;min-width:0;display:flex;flex-direction:column;margin:12px 12px 12px 0;overflow:hidden;background:color-mix(in srgb,var(--zen-chrome-bg, var(--zen-surface, #202026)) 94%,transparent);border:1px solid var(--zen-surface-border, var(--zen-border, #34343c));border-radius:var(--zen-radius-surface, var(--zen-radius, 7px));box-shadow:var(--interface-floating-panel-shadow, 0 6px 18px rgba(0, 0, 0, .28));backdrop-filter:blur(12px)}.zlb-panel-scroll[data-v-82278b2b]{flex:1;min-height:0}.zlb-panel-body[data-v-82278b2b]{padding:16px}@media(max-width:860px){.zlb[data-v-82278b2b]{flex-direction:column}.zlb-panel[data-v-82278b2b]{flex:0 0 auto;max-height:45%;margin:0 12px 12px}}.zlb-media.steering[data-v-82278b2b]{transition:none;will-change:transform}.zlb.inline .zlb-media[data-v-82278b2b]{box-shadow:none}.zlb-empty[data-v-82278b2b]{opacity:.4;font-size:48px}.zlb-audio[data-v-82278b2b]{display:flex;flex-direction:column;align-items:center;gap:clamp(4px,3cqh,14px);padding:clamp(4px,5cqh,24px);max-width:560px;width:100%;color:var(--zen-text, #e5e5ea)}.zlb-audio .mdi[data-v-82278b2b]{font-size:clamp(28px,30cqh,96px);line-height:1;opacity:.5}.zlb-audio-name[data-v-82278b2b]{font-size:14px;font-weight:600;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.zlb-audio audio[data-v-82278b2b]{width:100%}.zlb-nav[data-v-82278b2b]{position:absolute;top:20%;bottom:20%;z-index:3;width:clamp(40px,7%,84px);display:flex;align-items:center;padding:0 8px;border:none;color:#fff;cursor:pointer;opacity:0;transition:opacity var(--zen-dur, .2s) ease;mask-image:linear-gradient(to bottom,transparent,#000 30%,#000 70%,transparent)}.zlb-nav.prev[data-v-82278b2b]{left:0;justify-content:flex-start;background:linear-gradient(to right,color-mix(in srgb,var(--zen-accent, #6366f1) 20%,transparent),transparent)}.zlb-nav.next[data-v-82278b2b]{right:0;justify-content:flex-end;background:linear-gradient(to left,color-mix(in srgb,var(--zen-accent, #6366f1) 20%,transparent),transparent)}.zlb-nav[data-v-82278b2b]:hover:not(:disabled){opacity:1}.zlb-nav[data-v-82278b2b]:disabled{display:none}.zlb-nav .mdi[data-v-82278b2b]{font-size:28px;filter:drop-shadow(0 1px 4px rgba(0,0,0,.6));transition:translate var(--zen-dur, .2s) ease}.zlb-nav.prev:hover .mdi[data-v-82278b2b]{translate:-3px 0}.zlb-nav.next:hover .mdi[data-v-82278b2b]{translate:3px 0}.zlb-slide-next-enter-active[data-v-82278b2b],.zlb-slide-next-leave-active[data-v-82278b2b],.zlb-slide-prev-enter-active[data-v-82278b2b],.zlb-slide-prev-leave-active[data-v-82278b2b],.zlb-slide-up-enter-active[data-v-82278b2b],.zlb-slide-up-leave-active[data-v-82278b2b],.zlb-slide-down-enter-active[data-v-82278b2b],.zlb-slide-down-leave-active[data-v-82278b2b]{transition:translate var(--zlb-slide-ms, .46s) cubic-bezier(.45,0,.2,1)}.zlb-slide-next-leave-active[data-v-82278b2b],.zlb-slide-prev-leave-active[data-v-82278b2b],.zlb-slide-up-leave-active[data-v-82278b2b],.zlb-slide-down-leave-active[data-v-82278b2b]{position:absolute}.zlb-slide-down-enter-from[data-v-82278b2b],.zlb-slide-up-leave-to[data-v-82278b2b]{translate:0 var(--zlb-slide-y, 100%)}.zlb-slide-down-leave-to[data-v-82278b2b],.zlb-slide-up-enter-from[data-v-82278b2b]{translate:0 calc(var(--zlb-slide-y, 100%) * -1)}.zlb-slide-next-enter-from[data-v-82278b2b],.zlb-slide-prev-leave-to[data-v-82278b2b]{translate:var(--zlb-slide, 100%) 0}.zlb-slide-next-leave-to[data-v-82278b2b],.zlb-slide-prev-enter-from[data-v-82278b2b]{translate:calc(var(--zlb-slide, 100%) * -1) 0}@media(prefers-reduced-motion:reduce){:root:not([data-zen-motion=full]){transition:none}}:root[data-zen-motion=reduce]{transition:none}.zsc[data-v-71ab7443]{display:block;width:100%;height:100%;outline:none;cursor:crosshair;touch-action:none}.zsc[data-v-71ab7443]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:-2px}.zft[data-v-86083019]{display:flex;flex-direction:column;gap:1px;font-size:12px}.zft-row[data-v-86083019]{display:flex;align-items:center;gap:4px;min-width:0;padding:4px 8px 4px 4px;border-radius:var(--zen-radius, 7px);color:var(--zen-muted, #9aa0aa);cursor:pointer}.zft-row[data-v-86083019]:hover{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 6%,transparent);color:var(--zen-text, #e5e5ea)}.zft-row.on[data-v-86083019]{background:color-mix(in srgb,var(--zen-accent, #6366f1) 20%,transparent);color:var(--zen-text, #e5e5ea)}.zft-chev[data-v-86083019]{display:grid;flex:none;place-items:center;width:16px;height:16px;padding:0;border:0;border-radius:3px;background:none;color:inherit;cursor:pointer}.zft-row[data-v-86083019]:focus-visible,.zft-chev[data-v-86083019]:focus-visible{outline:2px solid var(--zen-focus-ring, color-mix(in srgb, var(--zen-accent, #6366f1) 60%, transparent));outline-offset:-2px}button.zft-chev[data-v-86083019]:hover{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 12%,transparent)}.zft-icon[data-v-86083019]{flex:none;font-size:15px}.zft-name[data-v-86083019]{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zft-count[data-v-86083019]{flex:none;font-size:10.5px;font-variant-numeric:tabular-nums}.zmp[data-v-3cc842c8]{position:relative;display:grid;grid-template-columns:190px minmax(0,1fr) 260px;height:calc(100% + 28px);margin:-14px;font-size:12px}.zmp-search[data-v-3cc842c8]{flex:1;max-width:320px}.zmp-grow[data-v-3cc842c8]{flex:1}.zmp-folders[data-v-3cc842c8]{display:flex;flex-direction:column;gap:1px;min-height:0;overflow-y:auto;padding:10px 8px;border-right:1px solid var(--zen-border, #34343c)}.zmp-folder[data-v-3cc842c8]{display:flex;align-items:center;gap:6px;width:100%;padding:5px 8px;border:0;border-radius:var(--zen-radius, 7px);background:none;color:var(--zen-muted, #9aa0aa);font:inherit;text-align:left;cursor:pointer}.zmp-folder[data-v-3cc842c8]:hover{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 6%,transparent);color:var(--zen-text, #e5e5ea)}.zmp-folder.on[data-v-3cc842c8]{background:color-mix(in srgb,var(--zen-accent, #6366f1) 20%,transparent);color:var(--zen-text, #e5e5ea)}.zmp-folder .mdi[data-v-3cc842c8]{flex:none;font-size:15px}.zmp-fname[data-v-3cc842c8]{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zmp-count[data-v-3cc842c8]{flex:none;color:var(--zen-muted, #9aa0aa);font-size:10.5px;font-variant-numeric:tabular-nums}.zmp-main[data-v-3cc842c8]{display:flex;flex-direction:column;min-width:0;min-height:0}.zmp-filters[data-v-3cc842c8]{display:flex;flex:none;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid var(--zen-border, #34343c)}.zmp-grid[data-v-3cc842c8]{display:grid;flex:1;align-content:start;gap:10px;min-height:0;overflow-y:auto;padding:12px}.zmp-card[data-v-3cc842c8]{display:flex;flex-direction:column;gap:4px;min-width:0;padding:4px;border:1px solid transparent;border-radius:calc(var(--zen-radius, 7px) + 2px);background:none;color:var(--zen-text, #e5e5ea);font:inherit;text-align:left;cursor:pointer}.zmp-card[data-v-3cc842c8]:hover{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 5%,transparent)}.zmp-card.focus[data-v-3cc842c8]{border-color:var(--zen-border, #34343c)}.zmp-card.sel .zmp-thumb[data-v-3cc842c8]{outline:2px solid var(--zen-accent, #6366f1);outline-offset:1px}.zmp-thumb[data-v-3cc842c8]{position:relative;display:grid;place-items:center;aspect-ratio:1;overflow:hidden;border-radius:var(--zen-radius, 7px);background:var(--zen-media-bg, #0b0b0e)}.zmp-thumb img[data-v-3cc842c8],.zmp-thumb video[data-v-3cc842c8]{width:100%;height:100%;object-fit:contain}.zmp-audio[data-v-3cc842c8]{display:grid;place-items:center;width:100%;height:100%;background:linear-gradient(160deg,color-mix(in srgb,var(--zen-accent, #6366f1) 22%,var(--zen-media-bg, #0b0b0e)),var(--zen-media-bg, #0b0b0e));color:color-mix(in srgb,var(--zen-accent, #6366f1) 70%,white);font-size:34px}.zmp-kind[data-v-3cc842c8]{position:absolute;bottom:5px;left:5px;display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#000000a6;color:#fff;font-size:13px}.zmp-tick[data-v-3cc842c8]{position:absolute;top:5px;right:5px;display:grid;place-items:center;min-width:20px;height:20px;padding:0 5px;border-radius:10px;background:var(--zen-accent, #6366f1);color:var(--zen-accent-text, #fff);font-size:11px;font-weight:700}.zmp-name[data-v-3cc842c8],.zmp-dir[data-v-3cc842c8]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zmp-name[data-v-3cc842c8]{font-size:11.5px}.zmp-dir[data-v-3cc842c8]{margin-top:-3px;color:var(--zen-muted, #9aa0aa);font-size:10.5px}.zmp-empty[data-v-3cc842c8]{display:flex;flex-direction:column;grid-column:1 / -1;align-items:center;gap:6px;padding:48px 12px;color:var(--zen-muted, #9aa0aa);text-align:center}.zmp-empty .mdi[data-v-3cc842c8]{font-size:28px}.zmp-preview[data-v-3cc842c8]{display:flex;flex-direction:column;gap:10px;min-height:0;overflow-y:auto;padding:12px;border-left:1px solid var(--zen-border, #34343c)}.zmp-big[data-v-3cc842c8]{display:grid;place-items:center;aspect-ratio:1;overflow:hidden;border-radius:var(--zen-radius, 7px);background:var(--zen-media-bg, #0b0b0e)}.zmp-big img[data-v-3cc842c8],.zmp-big video[data-v-3cc842c8]{width:100%;height:100%;object-fit:contain}.zmp-bigaudio[data-v-3cc842c8]{display:flex;flex-direction:column;align-items:center;gap:12px;width:100%;padding:10px;color:color-mix(in srgb,var(--zen-accent, #6366f1) 70%,white);font-size:48px}.zmp-bigaudio audio[data-v-3cc842c8]{width:100%}.zmp-meta[data-v-3cc842c8]{display:flex;flex-direction:column;gap:3px;color:var(--zen-muted, #9aa0aa);overflow-wrap:anywhere}.zmp-meta b[data-v-3cc842c8]{color:var(--zen-text, #e5e5ea);font-size:12.5px}.zmp-hint[data-v-3cc842c8]{display:flex;flex-direction:column;align-items:center;gap:8px;margin:auto 0;color:var(--zen-muted, #9aa0aa);line-height:1.5;text-align:center}.zmp-hint .mdi[data-v-3cc842c8]{font-size:26px}.zmp-drop[data-v-3cc842c8]{position:absolute;inset:8px;display:flex;align-items:center;justify-content:center;gap:8px;border:2px dashed var(--zen-accent, #6366f1);border-radius:calc(var(--zen-radius, 7px) + 2px);background:color-mix(in srgb,var(--zen-accent, #6366f1) 14%,rgb(0 0 0 / 60%));color:var(--zen-text, #e5e5ea);font-size:14px;font-weight:600;pointer-events:none}.zmp-foot[data-v-3cc842c8]{display:flex;align-items:center;gap:8px}.zmp-soft[data-v-3cc842c8]{color:var(--zen-muted, #9aa0aa)}.ztl[data-v-ad0b766d]{position:relative;--ztl-bg: color-mix(in srgb, var(--zen-bg, #1a1a1f) 70%, #000);--ztl-bg: oklch(from var(--zen-bg, #1a1a1f) calc(l - .07) c h);--ztl-row: color-mix(in srgb, var(--zen-text, #e5e5ea) 3%, transparent);--ztl-line: color-mix(in srgb, var(--zen-text, #e5e5ea) 9%, transparent);--ztl-accent: var(--zen-accent, #6366f1);--ztl-seam: color-mix(in srgb, var(--zen-text, #e5e5ea) 62%, transparent);--ztl-playhead: var(--zen-playhead, #ff5a4f);display:flex;min-width:0;overflow:hidden;border:1px solid var(--ztl-line);border-radius:var(--zen-radius, 7px);background:var(--ztl-bg);user-select:none;touch-action:none}.ztl-grid[data-v-ad0b766d]{display:flex;width:max-content;min-width:100%}.ztl-heads[data-v-ad0b766d]{position:sticky;left:0;z-index:8;flex:none;width:var(--ztl-head);border-right:1px solid var(--ztl-line);background:var(--ztl-bg)}.ztl-corner[data-v-ad0b766d]{position:sticky;top:0;z-index:5;background:var(--ztl-bg);display:flex;align-items:center;justify-content:center;height:24px;border-bottom:1px solid var(--ztl-line)}.ztl-time[data-v-ad0b766d]{color:var(--zen-text, #e5e5ea);font-family:var(--zen-mono, ui-monospace, monospace);font-size:10.5px;font-variant-numeric:tabular-nums}.ztl-head[data-v-ad0b766d]{display:flex;align-items:center;gap:6px;box-sizing:border-box;min-width:0;overflow:hidden;padding:0 8px;border-bottom:1px solid var(--ztl-line);color:var(--zen-muted, #9aa0aa);font-size:10.5px;font-weight:600;letter-spacing:.02em}.ztl-head.movable[data-v-ad0b766d]{cursor:grab}.ztl-head.lifted[data-v-ad0b766d]{position:relative;z-index:6;background:color-mix(in srgb,var(--ztl-accent) 22%,var(--ztl-bg));box-shadow:0 4px 14px #00000073;cursor:grabbing}.ztl-insert[data-v-ad0b766d]{position:absolute;right:0;left:0;z-index:3;height:2px;margin-top:-1px;background:var(--ztl-accent);pointer-events:none}.ztl-head .mdi[data-v-ad0b766d]{flex:none;font-size:13px}.ztl-head.has-actions[data-v-ad0b766d]{flex-wrap:wrap;align-content:center;row-gap:2px}.ztl-head.has-actions .ztl-head-label[data-v-ad0b766d]{flex:1 1 0}.ztl-head-actions[data-v-ad0b766d]{display:flex;flex:1 0 100%;gap:2px;padding-left:24px}.ztl-head.has-actions.inline[data-v-ad0b766d]{flex-wrap:nowrap}.ztl-head.inline .ztl-head-actions[data-v-ad0b766d]{flex:none;padding-left:0}.ztl-head.inline .ztl-head-action[data-v-ad0b766d]{justify-content:center;width:20px;height:20px;padding:0;opacity:.6}.ztl-head.inline:hover .ztl-head-action[data-v-ad0b766d],.ztl-head.inline .ztl-head-action.on[data-v-ad0b766d]{opacity:1}.ztl-head-action[data-v-ad0b766d]{display:inline-flex;align-items:center;gap:2px;height:17px;padding:0 4px;border:1px solid transparent;border-radius:4px;background:none;color:var(--zen-muted, #9aa0aa);font:inherit;font-size:9.5px;font-weight:600;cursor:pointer}.ztl-head-action .mdi[data-v-ad0b766d]{font-size:12px}.ztl-head-action[data-v-ad0b766d]:hover{color:var(--zen-text, #e5e5ea)}.ztl-head-action.on[data-v-ad0b766d]{border-color:color-mix(in srgb,var(--ztl-accent) 55%,transparent);background:color-mix(in srgb,var(--ztl-accent) 22%,transparent);color:var(--zen-text, #e5e5ea)}.ztl-head-thumb[data-v-ad0b766d]{flex:none;width:18px;height:18px;border-radius:calc(var(--zen-radius, 7px) / 2);object-fit:cover}.ztl-head-label[data-v-ad0b766d]{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ztl-scroll[data-v-ad0b766d]{position:relative;flex:1;min-width:0;overflow:auto;scrollbar-width:none}.ztl-scroll[data-v-ad0b766d]::-webkit-scrollbar{display:none}.ztl-curve[data-v-ad0b766d]{position:absolute;top:0;left:0;overflow:visible}.ztl-cstep[data-v-ad0b766d]{fill:none;stroke:color-mix(in srgb,var(--ztl-curve) 70%,transparent);stroke-dasharray:3 3;stroke-width:1.5}.ztl-carea[data-v-ad0b766d]{fill:color-mix(in srgb,var(--ztl-curve) 22%,transparent)}.ztl-cunit[data-v-ad0b766d]{stroke:color-mix(in srgb,var(--zen-text, #e5e5ea) 18%,transparent);stroke-dasharray:4 4;stroke-width:1}.ztl-cline[data-v-ad0b766d]{fill:none;stroke:var(--ztl-curve);stroke-width:2.2;stroke-linejoin:round}.ztl-cval[data-v-ad0b766d]{fill:var(--ztl-curve);font-size:10px;font-variant-numeric:tabular-nums;pointer-events:none;paint-order:stroke;stroke:var(--ztl-bg);stroke-width:3px}.ztl-larea[data-v-ad0b766d]{fill:color-mix(in srgb,var(--ztl-curve) 20%,transparent)}.ztl-lbar[data-v-ad0b766d]{stroke:var(--ztl-curve);stroke-width:2.5;stroke-linecap:round}.ztl-lhit[data-v-ad0b766d]{stroke:transparent;stroke-width:12;cursor:ns-resize}.ztl-lseg:hover .ztl-lbar[data-v-ad0b766d]{stroke-width:3.5}.ztl-lseg.inherited .ztl-larea[data-v-ad0b766d]{fill:color-mix(in srgb,var(--ztl-curve) 10%,transparent)}.ztl-lseg.inherited .ztl-lbar[data-v-ad0b766d],.ztl-lseg.inherited .ztl-cline[data-v-ad0b766d]{stroke-dasharray:5 4}.ztl-lseg.inherited .ztl-carea[data-v-ad0b766d]{fill:color-mix(in srgb,var(--ztl-curve) 9%,transparent)}.ztl-lpad[data-v-ad0b766d]{fill:transparent}.ztl-levels.shaped .ztl-lseg+.ztl-lseg .ztl-lpad[data-v-ad0b766d]{stroke:color-mix(in srgb,var(--zen-text, #e5e5ea) 8%,transparent);stroke-dasharray:2 3}.ztl-cpt[data-v-ad0b766d]{fill:var(--ztl-bg);stroke:var(--ztl-curve);stroke-width:2;cursor:grab}.ztl-cpt[data-v-ad0b766d]:hover{fill:var(--ztl-curve)}.ztl-range[data-v-ad0b766d]{position:absolute;top:0;bottom:0;z-index:1;border-right:1px solid color-mix(in srgb,var(--ztl-accent) 60%,transparent);border-left:1px solid color-mix(in srgb,var(--ztl-accent) 60%,transparent);background:color-mix(in srgb,var(--ztl-accent) 9%,transparent);pointer-events:none}.ztl-range[data-v-ad0b766d]:before{position:absolute;top:0;right:0;left:0;height:4px;background:var(--ztl-accent);content:\"\"}.ztl-tail[data-v-ad0b766d]{position:absolute;top:0;right:0;bottom:0;display:flex;align-items:flex-end;justify-content:center;overflow:hidden;border-left:1px dashed color-mix(in srgb,var(--zen-text, #e5e5ea) 45%,transparent);background:repeating-linear-gradient(-45deg,color-mix(in srgb,var(--zen-text, #e5e5ea) 14%,transparent) 0 4px,transparent 4px 9px);pointer-events:none}.ztl-tail-label[data-v-ad0b766d]{padding:0 4px 2px;overflow:hidden;color:var(--zen-text, #e5e5ea);font-size:10px;white-space:nowrap;text-overflow:ellipsis;opacity:.85}.ztl-progress[data-v-ad0b766d]{position:absolute;bottom:0;left:0;height:3px;border-radius:0 2px 2px 0;background:var(--ztl-playhead);transition:width var(--zen-dur, .2s) ease;pointer-events:none}.ztl-hbar[data-v-ad0b766d]{position:absolute;right:0;bottom:0;z-index:6;height:9px;touch-action:none}.ztl-thumb[data-v-ad0b766d]{position:absolute;top:2px;bottom:2px;border-radius:3px;background:color-mix(in srgb,var(--zen-text, #e5e5ea) 22%,transparent);transition:background var(--zen-dur-fast, .12s)}.ztl-hbar:hover .ztl-thumb[data-v-ad0b766d]{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 38%,transparent)}.ztl-body[data-v-ad0b766d]{position:relative;flex:none}.ztl-ruler[data-v-ad0b766d]{position:sticky;top:0;z-index:5;background:var(--ztl-bg);height:24px;border-bottom:1px solid var(--ztl-line);cursor:col-resize}.ztl-tick[data-v-ad0b766d]{position:absolute;bottom:0;width:1px;height:5px;background:var(--ztl-line)}.ztl-tick.major[data-v-ad0b766d]{height:9px;background:color-mix(in srgb,var(--zen-text, #e5e5ea) 30%,transparent)}.ztl-tick b[data-v-ad0b766d]{position:absolute;bottom:10px;left:3px;color:var(--zen-muted, #9aa0aa);font-size:9.5px;font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}.ztl-track[data-v-ad0b766d]{position:relative;box-sizing:border-box;border-bottom:1px solid var(--ztl-line)}.ztl-track.zebra[data-v-ad0b766d]{background:var(--ztl-row)}.ztl-track.dropping[data-v-ad0b766d]{background:color-mix(in srgb,var(--ztl-accent) 16%,transparent)}.ztl-item[data-v-ad0b766d]{position:absolute;box-sizing:border-box;touch-action:none}.ztl-item.clip[data-v-ad0b766d]{top:3px;bottom:3px;display:flex;align-items:center;gap:5px;overflow:hidden;padding:0 7px;border:1px solid color-mix(in srgb,var(--ztl-color, var(--ztl-accent)) 70%,#000);border-radius:calc(var(--zen-radius, 7px) * .65);background:color-mix(in srgb,var(--ztl-color, var(--ztl-accent)) 42%,var(--ztl-bg));cursor:pointer}.ztl-item.clip.join-start[data-v-ad0b766d]{border-left-color:var(--ztl-seam);border-top-left-radius:0;border-bottom-left-radius:0}.ztl-item.clip.join-end[data-v-ad0b766d]{border-top-right-radius:0;border-bottom-right-radius:0}.ztl-item.clip.on[data-v-ad0b766d]{border-color:var(--zen-text, #e5e5ea);box-shadow:0 0 0 1px var(--zen-text, #e5e5ea) inset;background:color-mix(in srgb,var(--ztl-color, var(--ztl-accent)) 62%,var(--ztl-bg))}.ztl-item.droptarget[data-v-ad0b766d]{z-index:3;outline:2px solid var(--ztl-accent);outline-offset:1px}.ztl-item.lifted[data-v-ad0b766d]{z-index:3;box-shadow:0 6px 16px #00000073;cursor:grabbing;opacity:.92}.ztl-item.clip.ghost[data-v-ad0b766d]{border-style:dashed;background:color-mix(in srgb,var(--ztl-color, var(--ztl-accent)) 16%,var(--ztl-bg))}.ztl-item.clip.muted[data-v-ad0b766d]{opacity:.4}.ztl-item.clip img[data-v-ad0b766d]{flex:none;height:100%;margin-left:-7px;aspect-ratio:1;object-fit:cover}.ztl-badge[data-v-ad0b766d]{flex:none;padding:0 4px;border-radius:3px;background:#00000052;color:color-mix(in srgb,var(--zen-text, #e5e5ea) 88%,var(--ztl-color, var(--ztl-accent)));font-family:var(--zen-mono, ui-monospace, monospace);font-size:9px;line-height:13px;white-space:nowrap}.ztl-item.clip.banded[data-v-ad0b766d]{align-items:flex-start;padding-top:1px}.ztl-item.clip.banded>.ztl-label[data-v-ad0b766d],.ztl-item.clip.banded>.ztl-icon[data-v-ad0b766d],.ztl-item.clip.banded>.ztl-badge[data-v-ad0b766d]{position:relative;z-index:1;margin-top:1px}.ztl-mark[data-v-ad0b766d]{position:absolute;top:0;bottom:0;z-index:1;width:1px;margin-left:-.5px;background:#ffffff73}.ztl-mark[data-v-ad0b766d]:before{content:\"\";position:absolute;top:0;left:-3px;border:3.5px solid transparent;border-top-color:#ffffffb3}.ztl-mark.strong[data-v-ad0b766d]{background:#fffc}.ztl-mark.strong[data-v-ad0b766d]:before{border-top-color:#fff}.ztl-frames[data-v-ad0b766d],.ztl-wave[data-v-ad0b766d]{position:absolute;inset:16px 0 0;pointer-events:none}.ztl-frames[data-v-ad0b766d]{overflow:hidden;border-top:1px solid rgb(0 0 0 / 35%)}.ztl-item.clip .ztl-frames img[data-v-ad0b766d]{position:absolute;top:0;height:100%;margin:0;aspect-ratio:auto;object-fit:cover;opacity:.9}.ztl-wave[data-v-ad0b766d]{width:100%;height:calc(100% - 16px);padding:2px 0;box-sizing:border-box;fill:color-mix(in srgb,var(--ztl-color, var(--ztl-accent)) 35%,#fff);opacity:.85}.ztl-label[data-v-ad0b766d]{overflow:hidden;color:color-mix(in srgb,var(--zen-text, #e5e5ea) 78%,var(--ztl-color, var(--ztl-accent)));font-size:10.5px;font-weight:500;white-space:nowrap;text-overflow:ellipsis;text-shadow:0 1px 1px rgb(0 0 0 / 40%)}.ztl-icon[data-v-ad0b766d]{flex:none;color:#fff;font-size:12px;opacity:.85}.ztl-fade[data-v-ad0b766d]{position:absolute;top:0;bottom:0;pointer-events:none}.ztl-fade.in[data-v-ad0b766d]{left:0;background:linear-gradient(to top right,transparent calc(50% - .75px),rgb(255 255 255 / 70%) 50%,transparent calc(50% + .75px)),linear-gradient(to top right,transparent 50%,rgb(0 0 0 / 45%) 50%)}.ztl-fade.out[data-v-ad0b766d]{right:0;background:linear-gradient(to top left,transparent calc(50% - .75px),rgb(255 255 255 / 70%) 50%,transparent calc(50% + .75px)),linear-gradient(to top left,transparent 50%,rgb(0 0 0 / 45%) 50%)}.ztl-fadeknob[data-v-ad0b766d]{position:absolute;top:1px;z-index:2;width:9px;height:9px;margin:0 -4.5px;border:1px solid rgb(0 0 0 / 55%);border-radius:50%;background:#fff;cursor:ew-resize;opacity:0;transition:opacity var(--zen-dur-fast, .12s)}.ztl-fadeknob.set[data-v-ad0b766d],.ztl-item:hover .ztl-fadeknob[data-v-ad0b766d]{opacity:1}.ztl-grip[data-v-ad0b766d]{position:absolute;top:0;bottom:0;width:7px;cursor:ew-resize}.ztl-grip.end[data-v-ad0b766d]{right:0}.ztl-grip.start[data-v-ad0b766d]{left:0}.ztl-grip[data-v-ad0b766d]:after{content:\"\";position:absolute;top:25%;bottom:25%;left:3px;width:1px;background:#ffffff8c;opacity:0;transition:opacity var(--zen-dur-fast, .12s)}.ztl-item:hover .ztl-grip[data-v-ad0b766d]:after{opacity:1}.ztl-item.marker[data-v-ad0b766d]{z-index:2;top:50%;width:22px;height:22px;overflow:hidden;transform:translate(-50%,-50%);border:2px solid var(--ztl-color, var(--zen-marker, #f5c542));border-radius:5px;background:var(--ztl-bg);cursor:grab}.ztl-item.marker[data-v-ad0b766d]:not(.thumbed):not(.ghost){width:12px;height:12px;border-radius:2px;background:var(--ztl-color, var(--zen-marker, #f5c542));transform:translate(-50%,-50%) rotate(45deg)}.ztl-item.marker.on[data-v-ad0b766d]{border-color:#fff;box-shadow:0 0 0 2px var(--ztl-accent)}.ztl-item.marker.ghost[data-v-ad0b766d]{width:22px;height:22px;display:grid;place-items:center;border:1px dashed color-mix(in srgb,var(--zen-text, #e5e5ea) 35%,transparent);border-radius:5px;background:transparent;color:color-mix(in srgb,var(--zen-text, #e5e5ea) 55%,transparent);transform:translate(-50%,-50%);cursor:pointer}.ztl-item.marker.ghost[data-v-ad0b766d]:hover{border-color:var(--ztl-accent);color:var(--zen-text, #e5e5ea)}.ztl-item.marker.ghost .ztl-icon[data-v-ad0b766d]{color:inherit;font-size:12px}.ztl-item.marker img[data-v-ad0b766d]{width:100%;height:100%;object-fit:cover;pointer-events:none}.ztl-guide[data-v-ad0b766d]{position:absolute;top:24px;bottom:0;width:0;border-left:1px dashed color-mix(in srgb,var(--zen-text, #e5e5ea) 22%,transparent);pointer-events:none}.ztl-marquee[data-v-ad0b766d]{position:absolute;z-index:7;border:1px solid var(--ztl-accent);border-radius:calc(var(--zen-radius, 7px) * .65);background:color-mix(in srgb,var(--ztl-accent) 14%,transparent);pointer-events:none}.ztl-snapline[data-v-ad0b766d]{position:absolute;top:24px;bottom:0;z-index:3;width:1px;background:var(--zen-accent, #6366f1);box-shadow:0 0 4px var(--zen-accent, #6366f1);pointer-events:none}.ztl-playhead[data-v-ad0b766d]{position:absolute;top:0;bottom:0;left:0;z-index:6;width:0;border-left:1px solid var(--ztl-playhead);pointer-events:none}.ztl-playhead span[data-v-ad0b766d]{position:absolute;top:0;left:-6px;width:11px;height:11px;background:var(--ztl-playhead);clip-path:polygon(0 0,100% 0,100% 60%,50% 100%,0 60%)}.zbc-frame[data-v-657d6f53]{position:relative;width:100%;height:100%;min-height:0;overflow:hidden}.zbc[data-v-657d6f53]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);overflow:hidden;border-radius:var(--zen-radius, 7px);background:repeating-conic-gradient(color-mix(in srgb,var(--zen-text, #fff) 4%,transparent) 0% 25%,transparent 0% 50%) 0 0 / 16px 16px,var(--zen-input, #1b1b20);outline:1px solid var(--zen-border, #34343c);outline-offset:-1px;user-select:none;touch-action:none;cursor:crosshair}.zbc-keys[data-v-657d6f53]{position:absolute;top:0;left:0;width:1px;height:1px;padding:0;border:0;opacity:0;pointer-events:none}.zbc[data-v-657d6f53]:focus-within{outline:1px solid color-mix(in srgb,var(--zen-text, #fff) 22%,transparent);outline-offset:-1px}.zbc.tool-brush[data-v-657d6f53],.zbc.tool-erase[data-v-657d6f53]{cursor:none}.zbc-backdrop[data-v-657d6f53]{position:absolute;inset:0;width:100%;height:100%;object-fit:fill;pointer-events:none}.zbc-grid[data-v-657d6f53]{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(to right,color-mix(in srgb,var(--zen-text, #fff) 8%,transparent) 1px,transparent 1px),linear-gradient(to bottom,color-mix(in srgb,var(--zen-text, #fff) 8%,transparent) 1px,transparent 1px)}.zbc-box[data-v-657d6f53]{position:absolute;box-sizing:border-box;border:1.5px solid var(--zbc-color);border-radius:3px;cursor:move;transition:box-shadow .12s ease}.zbc-box.masked[data-v-657d6f53]{border-style:dashed}.zbc-box.locked[data-v-657d6f53]{cursor:default}.zbc-box.sel[data-v-657d6f53]{box-shadow:0 0 0 1px color-mix(in srgb,var(--zbc-color) 70%,transparent),0 0 14px color-mix(in srgb,var(--zbc-color) 40%,transparent)}.zbc-fill[data-v-657d6f53]{position:absolute;inset:0;background:color-mix(in srgb,var(--zbc-color) 22%,transparent);-webkit-mask-size:100% 100%;mask-size:100% 100%;pointer-events:none}.zbc-content[data-v-657d6f53]{position:absolute;inset:0;overflow:hidden;container-type:size;pointer-events:none}.zbc-box.painting .zbc-content[data-v-657d6f53]{opacity:.35}.zbc-box.masked .zbc-fill[data-v-657d6f53]{background:color-mix(in srgb,var(--zbc-color) 45%,transparent)}.zbc-box.painting .zbc-fill[data-v-657d6f53]{visibility:hidden}.zbc-paint[data-v-657d6f53]{position:absolute;opacity:.5;pointer-events:none}.zbc-tag[data-v-657d6f53]{position:absolute;left:-1px;top:-1px;display:flex;align-items:center;gap:4px;max-width:calc(100% + 2px);padding:1px 6px 1px 4px;border-radius:3px 0 4px;background:var(--zbc-color);color:#fff;font-size:10px;line-height:15px;white-space:nowrap;overflow:hidden;text-shadow:0 1px 1px rgb(0 0 0 / 35%);pointer-events:none}.zbc-n[data-v-657d6f53]{font-weight:700}.zbc-label[data-v-657d6f53]{overflow:hidden;text-overflow:ellipsis}.zbc-h[data-v-657d6f53]{position:absolute;width:9px;height:9px;margin:-5px 0 0 -5px;border:1.5px solid #fff;border-radius:2px;background:var(--zbc-color, var(--zen-accent, #6366f1));box-shadow:0 0 0 1px #0006}.h-nw[data-v-657d6f53]{left:0;top:0;cursor:nwse-resize}.h-n[data-v-657d6f53]{left:50%;top:0;cursor:ns-resize}.h-ne[data-v-657d6f53]{left:100%;top:0;cursor:nesw-resize}.h-e[data-v-657d6f53]{left:100%;top:50%;cursor:ew-resize}.h-se[data-v-657d6f53]{left:100%;top:100%;cursor:nwse-resize}.h-s[data-v-657d6f53]{left:50%;top:100%;cursor:ns-resize}.h-sw[data-v-657d6f53]{left:0;top:100%;cursor:nesw-resize}.h-w[data-v-657d6f53]{left:0;top:50%;cursor:ew-resize}.zbc-selframe[data-v-657d6f53]{position:absolute;box-sizing:border-box;outline:1.5px dashed var(--zbc-color);outline-offset:-1px;pointer-events:none}.zbc-selframe .zbc-h[data-v-657d6f53]{pointer-events:auto}.zbc-group[data-v-657d6f53]{position:absolute;box-sizing:border-box;border:1px dashed var(--zen-accent, #6366f1);pointer-events:none}.zbc-group .zbc-h[data-v-657d6f53]{pointer-events:auto;background:var(--zen-accent, #6366f1)}.zbc-draft[data-v-657d6f53],.zbc-marquee[data-v-657d6f53]{position:absolute;box-sizing:border-box;pointer-events:none}.zbc-draft[data-v-657d6f53]{border:1.5px dashed var(--zen-text, #e5e5ea);background:color-mix(in srgb,var(--zen-text, #fff) 8%,transparent)}.zbc-marquee[data-v-657d6f53]{border:1px solid var(--zen-accent, #6366f1);background:color-mix(in srgb,var(--zen-accent, #6366f1) 12%,transparent)}.zbc-ring[data-v-657d6f53]{position:absolute;box-sizing:border-box;border:1.5px solid #fff;border-radius:50%;box-shadow:0 0 0 1px #0000007f;pointer-events:none}.zbc-ring.erase[data-v-657d6f53]{border-style:dashed}.zbc-empty[data-v-657d6f53]{position:absolute;inset:0;display:grid;place-items:center;color:var(--zen-muted, #9aa0aa);font-size:12px;pointer-events:none}.zll[data-v-6dd767a3]{display:flex;flex-direction:column;gap:2px}.zll-row[data-v-6dd767a3]{position:relative;display:flex;align-items:center;gap:6px;min-height:30px;padding:2px 4px;border-radius:var(--zen-radius, 7px);border:1px solid transparent;color:var(--zen-text, #e5e5ea);cursor:pointer;transition:transform .15s ease,background .12s ease}.zll-row[data-v-6dd767a3]:hover{background:color-mix(in srgb,var(--zen-text, #fff) 5%,transparent)}.zll-row.sel[data-v-6dd767a3]{border-color:color-mix(in srgb,var(--zen-accent, #6366f1) 60%,transparent);background:color-mix(in srgb,var(--zen-accent, #6366f1) 14%,transparent)}.zll-row.hidden .zll-text[data-v-6dd767a3],.zll-row.hidden .zll-swatch[data-v-6dd767a3]{opacity:.45}.zll.settling .zll-row[data-v-6dd767a3]{transition:background .12s ease}.zll-row.dragging[data-v-6dd767a3]{z-index:1;transition:none;background:var(--zen-surface-2, #26262d);box-shadow:0 6px 18px #00000059}.zll-grip[data-v-6dd767a3]{display:grid;place-items:center;width:14px;color:var(--zen-muted, #9aa0aa);cursor:grab;touch-action:none}.zll-grip.pin[data-v-6dd767a3]{cursor:default;opacity:.6}.zll-swatch[data-v-6dd767a3]{flex:none;width:22px;height:22px;border-radius:5px;overflow:hidden;box-shadow:inset 0 0 0 1px #00000040}.zll-swatch img[data-v-6dd767a3]{width:100%;height:100%;object-fit:cover}.zll-text[data-v-6dd767a3]{flex:1;min-width:0;display:flex;flex-direction:column;line-height:1.2}.zll-label[data-v-6dd767a3]{font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zll-sub[data-v-6dd767a3]{font-size:10px;color:var(--zen-muted, #9aa0aa);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zll-btn[data-v-6dd767a3]{display:grid;place-items:center;width:22px;height:22px;padding:0;border:0;border-radius:5px;background:transparent;color:var(--zen-muted, #9aa0aa);cursor:pointer;opacity:.55}.zll-row:hover .zll-btn[data-v-6dd767a3],.zll-btn.on[data-v-6dd767a3]{opacity:1}.zll-btn[data-v-6dd767a3]:hover{background:color-mix(in srgb,var(--zen-text, #fff) 8%,transparent);color:var(--zen-text, #e5e5ea)}.lpk[data-v-8a766282]{position:fixed;z-index:100400;pointer-events:none;display:flex;flex-direction:column;max-height:480px;overflow:hidden;background:var(--zen-chrome-bg, var(--zen-surface, #202026));color:var(--zen-text, #e5e5ea);border:1px solid var(--zen-surface-border, var(--zen-border, #34343c));border-radius:calc(var(--zen-radius-surface, var(--zen-radius, 7px)) + 2px);box-shadow:0 16px 48px #0000008c;font-family:var(--p-font-family, system-ui, sans-serif)}.lpk-media[data-v-8a766282]{flex:1 1 auto;min-height:0;display:flex;justify-content:center;background:var(--zen-input, #1b1b20)}.lpk-media img[data-v-8a766282],.lpk-media video[data-v-8a766282]{display:block;max-width:100%;max-height:360px;object-fit:contain}.lpk-body[data-v-8a766282]{flex:none;display:flex;flex-direction:column;gap:5px;padding:8px 10px 9px}.lpk-title[data-v-8a766282]{font-size:12.5px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.lpk-chips[data-v-8a766282]{display:flex;flex-wrap:wrap;gap:4px}.lpk-chips[data-v-8a766282]:empty{display:none}.lpk-chip[data-v-8a766282]{font-size:10.5px;padding:1px 6px;border-radius:999px;background:color-mix(in srgb,var(--zen-accent, #6366f1) 18%,transparent);color:var(--zen-text, #e5e5ea)}.lpk-words[data-v-8a766282]{font-size:11px;color:var(--zen-muted, #9aa0aa);display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.lpk-hint[data-v-8a766282]{font-size:10px;color:var(--zen-muted, #9aa0aa);opacity:.8}.ld[data-v-a9e6a30b]{height:100%;box-sizing:border-box;overflow:auto;padding:12px 14px 16px;display:flex;flex-direction:column;gap:14px;color:var(--zen-text, #e5e5ea);font-size:12px}.ld-head[data-v-a9e6a30b]{display:flex;gap:12px;align-items:flex-start}.ld-cover[data-v-a9e6a30b]{flex:none;width:104px;height:136px;padding:0;border:1px solid var(--zen-border, #34343c);border-radius:var(--zen-radius, 7px);background:var(--zen-input, #1b1b20);overflow:hidden;cursor:zoom-in;display:flex;align-items:center;justify-content:center}.ld-cover[data-v-a9e6a30b]:disabled{cursor:default}.ld-cover img[data-v-a9e6a30b],.ld-cover video[data-v-a9e6a30b]{width:100%;height:100%;object-fit:contain;display:block}.ld-cover>.mdi[data-v-a9e6a30b]{font-size:32px;color:var(--zen-muted, #9aa0aa)}.ld-id[data-v-a9e6a30b]{flex:1;min-width:0;display:flex;flex-direction:column;gap:5px}.ld-title[data-v-a9e6a30b]{font-size:14px;font-weight:600;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.ld-file[data-v-a9e6a30b]{font-size:10.5px;color:var(--zen-muted, #9aa0aa);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ld-chips[data-v-a9e6a30b]{display:flex;flex-wrap:wrap;gap:4px}.ld-chip[data-v-a9e6a30b]{display:inline-flex;align-items:center;gap:3px;font:inherit;font-size:11px;padding:2px 8px;border:1px solid var(--zen-border, #34343c);border-radius:999px;background:var(--zen-input, #1b1b20);color:var(--zen-text, #e5e5ea)}.ld-chip.accent[data-v-a9e6a30b]{border-color:transparent;background:color-mix(in srgb,var(--zen-accent, #6366f1) 22%,transparent)}.ld-chip.word[data-v-a9e6a30b]{cursor:pointer}.ld-chip.word[data-v-a9e6a30b]:hover{border-color:var(--zen-accent, #6366f1)}.ld-actions[data-v-a9e6a30b]{display:flex;align-items:center;gap:6px;margin-top:2px}.ld-link[data-v-a9e6a30b]{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;color:var(--zen-accent, #6366f1);text-decoration:none}.ld-link[data-v-a9e6a30b]:hover{text-decoration:underline}.ld-sec[data-v-a9e6a30b]{display:flex;flex-direction:column;gap:7px}.ld-sec h4[data-v-a9e6a30b]{margin:0;display:flex;align-items:center;gap:6px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:var(--zen-muted, #9aa0aa)}.ld-count[data-v-a9e6a30b]{font-weight:400}.ld-copy[data-v-a9e6a30b],.ld-toggle[data-v-a9e6a30b],.ld-more[data-v-a9e6a30b]{border:none;background:none;padding:0 2px;font:inherit;cursor:pointer;color:var(--zen-muted, #9aa0aa);display:inline-flex;align-items:center;gap:3px;text-transform:none;letter-spacing:0}.ld-copy[data-v-a9e6a30b]:hover,.ld-toggle[data-v-a9e6a30b]:hover,.ld-more[data-v-a9e6a30b]:hover,.ld-toggle.on[data-v-a9e6a30b]{color:var(--zen-text, #e5e5ea)}.ld-toggle[data-v-a9e6a30b]{margin-left:auto;font-size:11px}.ld-more[data-v-a9e6a30b]{align-self:flex-start;font-size:11px;color:var(--zen-accent, #6366f1)}.ld-examples[data-v-a9e6a30b]{container:ld-examples / inline-size}.ld-viewer[data-v-a9e6a30b]{display:flex;flex-direction:column;gap:12px;outline:none}.ld-look[data-v-a9e6a30b]{display:flex;flex-direction:column;gap:6px;min-width:0}@container ld-examples (min-width: 560px){.ld-viewer[data-v-a9e6a30b]{display:grid;grid-template-columns:minmax(0,1fr) minmax(200px,38%);align-items:start}}.ld-stage[data-v-a9e6a30b]{position:relative;display:flex;height:340px;overflow:hidden;border:1px solid var(--zen-border, #34343c);border-radius:var(--zen-radius, 7px);background:var(--zen-media-bg, #0b0b0e)}.ld-stage-media[data-v-a9e6a30b]{flex:1;display:flex;align-items:center;justify-content:center;min-width:0;padding:0;border:0;background:none;cursor:zoom-in}.ld-stage-media img[data-v-a9e6a30b],.ld-stage-media video[data-v-a9e6a30b]{display:block;max-width:100%;max-height:100%;object-fit:contain}.ld-nav[data-v-a9e6a30b]{position:absolute;top:50%;display:grid;place-items:center;width:30px;height:44px;padding:0;border:0;border-radius:var(--zen-radius, 7px);background:#00000073;color:#fff;font-size:22px;opacity:0;transform:translateY(-50%);cursor:pointer;transition:opacity var(--zen-dur-fast, .12s) ease}.ld-nav.prev[data-v-a9e6a30b]{left:6px}.ld-nav.next[data-v-a9e6a30b]{right:6px}.ld-stage:hover .ld-nav[data-v-a9e6a30b],.ld-nav[data-v-a9e6a30b]:focus-visible{opacity:1}.ld-nav[data-v-a9e6a30b]:hover{background:#000000a6}.ld-counter[data-v-a9e6a30b]{position:absolute;right:8px;bottom:8px;padding:2px 7px;border-radius:999px;background:#0000008c;color:#fff;font-size:10.5px;font-variant-numeric:tabular-nums;pointer-events:none}.ld-strip[data-v-a9e6a30b]{display:flex;gap:4px;overflow-x:auto;overflow-y:hidden;padding-bottom:4px}.ld-thumb[data-v-a9e6a30b]{position:relative;flex:none;height:64px;padding:0;overflow:hidden;border:1px solid var(--zen-border, #34343c);border-radius:calc(var(--zen-radius, 7px) - 2px);background:var(--zen-media-bg, #0b0b0e);opacity:.7;cursor:pointer;transition:opacity var(--zen-dur-fast, .12s) ease}.ld-thumb[data-v-a9e6a30b]:hover,.ld-thumb.sel[data-v-a9e6a30b]{opacity:1}.ld-thumb.sel[data-v-a9e6a30b]{border-color:var(--zen-accent, #6366f1);box-shadow:inset 0 0 0 1px var(--zen-accent, #6366f1)}.ld-thumb img[data-v-a9e6a30b],.ld-thumb video[data-v-a9e6a30b]{display:block;width:100%;height:100%;object-fit:cover}.ld-badge[data-v-a9e6a30b]{position:absolute;right:3px;bottom:3px;font-size:14px;color:#fff;text-shadow:0 1px 3px rgb(0 0 0 / 70%)}.blur img[data-v-a9e6a30b],.blur video[data-v-a9e6a30b]{filter:blur(14px)}.ld-params[data-v-a9e6a30b]{min-width:0;display:flex;flex-direction:column;gap:8px}.ld-k[data-v-a9e6a30b]{display:flex;align-items:center;gap:4px;font-size:10.5px;font-weight:600;color:var(--zen-muted, #9aa0aa)}.ld-text[data-v-a9e6a30b]{max-height:140px;overflow:auto;padding:6px 8px;border-radius:var(--zen-radius, 7px);background:var(--zen-input, #1b1b20);white-space:pre-wrap;word-break:break-word;line-height:1.45;user-select:text}.ld-kv[data-v-a9e6a30b]{margin:0;display:grid;grid-template-columns:max-content minmax(0,1fr);gap:3px 10px;font-size:11.5px}.ld-kv dt[data-v-a9e6a30b]{color:var(--zen-muted, #9aa0aa)}.ld-kv dd[data-v-a9e6a30b]{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;user-select:text}.ld-desc[data-v-a9e6a30b]{white-space:pre-wrap;line-height:1.5;user-select:text;display:-webkit-box;-webkit-line-clamp:8;line-clamp:8;-webkit-box-orient:vertical;overflow:hidden}.ld-desc.open[data-v-a9e6a30b]{display:block}.ld-muted[data-v-a9e6a30b]{margin:0;color:var(--zen-muted, #9aa0aa);font-size:11.5px}.lt[data-v-40f2868d]{flex:none;box-sizing:border-box;width:40px;height:40px;object-fit:cover;border-radius:var(--zen-radius, 7px);background:var(--zen-input, #1b1b20);border:1px solid var(--zen-border, #34343c)}.lt.sm[data-v-40f2868d]{width:18px;height:18px;border-radius:var(--zen-radius, 7px)}.lt.ph[data-v-40f2868d]{display:inline-flex;align-items:center;justify-content:center;color:var(--zen-muted, #9aa0aa);font-size:20px}.lt.sm.ph[data-v-40f2868d]{font-size:11px}.lt.warn[data-v-40f2868d]{display:inline-flex;align-items:center;justify-content:center;color:var(--zen-danger, #dc2626);background:color-mix(in srgb,var(--zen-danger, #dc2626) 14%,transparent);border-color:color-mix(in srgb,var(--zen-danger, #dc2626) 45%,transparent);font-size:20px}.lt.sm.warn[data-v-40f2868d]{font-size:12px}.lp-sel[data-v-ba2b3a49]{display:flex;align-items:center;gap:7px;min-width:0}.lp-sel-name[data-v-ba2b3a49]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.lp-sel.missing .lp-sel-name[data-v-ba2b3a49]{color:var(--zen-danger, #dc2626)}.lp-opt[data-v-ba2b3a49]{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;line-height:1.25}.lp-opt-name[data-v-ba2b3a49]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12.5px}.lp-opt-dir[data-v-ba2b3a49]{font-size:10px;color:var(--zen-muted, #9aa0aa);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.lp-star[data-v-ba2b3a49]{flex:none;border:none;background:none;cursor:pointer;color:var(--zen-muted, #9aa0aa);font-size:15px;padding:2px;display:inline-flex}.lp-star.on[data-v-ba2b3a49],.lp-star[data-v-ba2b3a49]:hover{color:var(--zen-star, #f5b301)}.lp-browse[data-v-ba2b3a49]{border:none;background:none;cursor:pointer;color:var(--zen-muted, #9aa0aa);font-size:16px;padding:0 2px;display:inline-flex}.lp-browse[data-v-ba2b3a49]:hover{color:var(--zen-text, #e5e5ea)}.lp-crumbs[data-v-ba2b3a49]{display:flex;align-items:center;gap:2px;min-width:0;padding:4px 8px;overflow:hidden;white-space:nowrap}.lp-crumbs>.mdi[data-v-ba2b3a49]{flex:none;font-size:13px;color:var(--zen-muted, #9aa0aa)}.lp-up[data-v-ba2b3a49],.lp-crumb[data-v-ba2b3a49]{flex:none;border:none;background:none;cursor:pointer;font:inherit;font-size:11.5px;padding:2px 5px;border-radius:var(--zen-radius, 7px);color:var(--zen-muted, #9aa0aa)}.lp-crumb.on[data-v-ba2b3a49]{color:var(--zen-text, #e5e5ea);font-weight:600}.lp-up[data-v-ba2b3a49]:hover:not(:disabled),.lp-crumb[data-v-ba2b3a49]:hover{color:var(--zen-text, #e5e5ea);background:color-mix(in srgb,var(--zen-text, #e5e5ea) 6%,transparent)}.lp-up[data-v-ba2b3a49]:disabled{opacity:.35;cursor:default}.lp-folder[data-v-ba2b3a49]{flex:none;box-sizing:border-box;width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;font-size:22px;color:var(--zen-accent, #6366f1);border-radius:var(--zen-radius, 7px);background:color-mix(in srgb,var(--zen-accent, #6366f1) 10%,var(--zen-input, #1b1b20));border:1px solid var(--zen-border, #34343c)}.lp-chev[data-v-ba2b3a49]{flex:none;color:var(--zen-muted, #9aa0aa);font-size:16px}.lb[data-v-e37dd837]{display:grid;grid-template-columns:210px minmax(0,1fr) 360px;height:calc(100% + 28px);margin:-14px;font-size:12px}.lb-search[data-v-e37dd837]{display:flex;flex:1;max-width:340px}.lb-grow[data-v-e37dd837]{flex:1}.lb-soft[data-v-e37dd837]{color:var(--zen-muted, #9aa0aa)}.lb-folders[data-v-e37dd837]{display:flex;flex-direction:column;gap:1px;min-height:0;overflow-y:auto;padding:10px 8px;border-right:1px solid var(--zen-border, #34343c)}.lb-folder[data-v-e37dd837]{display:flex;align-items:center;gap:6px;width:100%;padding:5px 8px;border:0;border-radius:var(--zen-radius, 7px);background:none;color:var(--zen-muted, #9aa0aa);font:inherit;text-align:left;cursor:pointer}.lb-folder[data-v-e37dd837]:hover{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 6%,transparent);color:var(--zen-text, #e5e5ea)}.lb-folder.on[data-v-e37dd837]{background:color-mix(in srgb,var(--zen-accent, #6366f1) 20%,transparent);color:var(--zen-text, #e5e5ea)}.lb-folder .mdi[data-v-e37dd837]{flex:none;font-size:15px}.lb-folder .mdi-star[data-v-e37dd837]{color:var(--zen-star, #f5b301)}.lb-fname[data-v-e37dd837]{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.lb-count[data-v-e37dd837]{flex:none;font-size:10.5px;font-variant-numeric:tabular-nums}.lb-sep[data-v-e37dd837]{margin:6px 4px;border-top:1px solid var(--zen-border, #34343c)}.lb-main[data-v-e37dd837]{display:flex;flex-direction:column;min-width:0;min-height:0}.lb-filters[data-v-e37dd837]{display:flex;flex:none;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid var(--zen-border, #34343c)}.lb-scope[data-v-e37dd837]{display:inline-flex;align-items:center;gap:5px;font-weight:600}.lb-grid[data-v-e37dd837]{display:grid;flex:1;align-content:start;gap:10px;min-height:0;overflow-y:auto;padding:12px;outline:none}.lb-card[data-v-e37dd837]{display:flex;flex-direction:column;gap:3px;min-width:0;padding:4px;border:1px solid transparent;border-radius:calc(var(--zen-radius, 7px) + 2px);background:none;color:var(--zen-text, #e5e5ea);font:inherit;text-align:left;cursor:pointer}.lb-card[data-v-e37dd837]:focus{outline:none}.lb-card[data-v-e37dd837]:hover{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 5%,transparent)}.lb-card.focus .lb-img[data-v-e37dd837]{outline:2px solid var(--zen-accent, #6366f1);outline-offset:1px}.lb-img[data-v-e37dd837]{position:relative;display:grid;place-items:center;aspect-ratio:3 / 4;overflow:hidden;border-radius:var(--zen-radius, 7px);background:var(--zen-media-bg, #0b0b0e)}.lb-img img[data-v-e37dd837],.lb-img video[data-v-e37dd837]{width:100%;height:100%;object-fit:cover}.lb-noimg[data-v-e37dd837]{color:var(--zen-muted, #9aa0aa);font-size:30px;opacity:.5}.lb-badge[data-v-e37dd837],.lb-star[data-v-e37dd837],.lb-inuse[data-v-e37dd837]{position:absolute;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#0009;color:#fff;font-size:13px}.lb-badge[data-v-e37dd837]{bottom:5px;left:5px}.lb-star[data-v-e37dd837]{top:5px;right:5px;opacity:0;transition:opacity var(--zen-dur-fast, .12s)}.lb-card:hover .lb-star[data-v-e37dd837],.lb-star.on[data-v-e37dd837]{opacity:1}.lb-star.on[data-v-e37dd837]{color:var(--zen-star, #f5b301)}.lb-inuse[data-v-e37dd837]{top:5px;left:5px;background:var(--zen-accent, #6366f1);color:var(--zen-accent-text, #fff)}.lb-name[data-v-e37dd837],.lb-dir[data-v-e37dd837]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.lb-name[data-v-e37dd837]{font-size:11.5px}.lb-dir[data-v-e37dd837]{margin-top:-2px;color:var(--zen-muted, #9aa0aa);font-size:10.5px}.lb-empty[data-v-e37dd837]{display:flex;flex-direction:column;grid-column:1 / -1;align-items:center;gap:6px;padding:48px 12px;color:var(--zen-muted, #9aa0aa);text-align:center}.lb-empty .mdi[data-v-e37dd837]{font-size:28px}.lb-list[data-v-e37dd837]{display:flex;flex:1;flex-direction:column;min-height:0}.lb-lhead[data-v-e37dd837],.lb-row[data-v-e37dd837]{display:grid;grid-template-columns:34px minmax(0,2.4fr) minmax(0,1.2fr) 72px 104px 28px;align-items:center;gap:10px;padding:0 12px}.lb-lhead[data-v-e37dd837]{flex:none;height:28px;border-bottom:1px solid var(--zen-border, #34343c);color:var(--zen-muted, #9aa0aa);font-size:10.5px;font-weight:700;letter-spacing:.03em;text-transform:uppercase}.lb-lrows[data-v-e37dd837]{display:grid;flex:1;align-content:start;min-height:0;overflow-y:auto;outline:none}.lb-row[data-v-e37dd837]{height:34px;border-bottom:1px solid color-mix(in srgb,var(--zen-border, #34343c) 50%,transparent);cursor:pointer}.lb-row[data-v-e37dd837]:hover{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 5%,transparent)}.lb-row.focus[data-v-e37dd837]{background:color-mix(in srgb,var(--zen-accent, #6366f1) 18%,transparent)}.lb-rthumb[data-v-e37dd837]{display:grid;place-items:center;width:26px;height:26px;overflow:hidden;border-radius:5px;background:var(--zen-media-bg, #0b0b0e);color:var(--zen-muted, #9aa0aa)}.lb-rthumb img[data-v-e37dd837]{width:100%;height:100%;object-fit:cover}.lb-rname[data-v-e37dd837],.lb-rdir[data-v-e37dd837]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.lb-rname .mdi[data-v-e37dd837]{margin-left:4px;color:var(--zen-muted, #9aa0aa)}.lb-rname .lb-rcur[data-v-e37dd837]{color:var(--zen-accent, #6366f1)}.lb-rdir[data-v-e37dd837]{color:var(--zen-muted, #9aa0aa)}.num[data-v-e37dd837]{color:var(--zen-muted, #9aa0aa);font-variant-numeric:tabular-nums;text-align:right}.lb-rstar[data-v-e37dd837]{display:grid;place-items:center;color:var(--zen-muted, #9aa0aa);opacity:0}.lb-row:hover .lb-rstar[data-v-e37dd837],.lb-rstar.on[data-v-e37dd837]{opacity:1}.lb-rstar.on[data-v-e37dd837]{color:var(--zen-star, #f5b301)}.lb-detail[data-v-e37dd837]{min-height:0;overflow-y:auto;padding:12px;border-left:1px solid var(--zen-border, #34343c)}.lb-hint[data-v-e37dd837]{display:flex;flex-direction:column;align-items:center;gap:8px;margin-top:40%;color:var(--zen-muted, #9aa0aa);line-height:1.5;text-align:center}.lb-hint .mdi[data-v-e37dd837]{font-size:26px}.lb-foot[data-v-e37dd837]{display:flex;align-items:center;gap:8px}.lb-foot-name[data-v-e37dd837]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.jt[data-v-e4670a8d]{font-family:var(--zen-mono, ui-monospace, \"SF Mono\", Menlo, Consolas, monospace);font-size:11.5px;line-height:1.6}.jt-row[data-v-e4670a8d]{display:flex;align-items:center;gap:3px;cursor:pointer;white-space:nowrap;border-radius:var(--zen-radius, 7px)}.jt-row[data-v-e4670a8d]:hover{background:color-mix(in srgb,var(--zen-text, #e5e5ea) 7%,transparent)}.jt-row.leaf[data-v-e4670a8d]{cursor:default}.jt-caret[data-v-e4670a8d]{font-size:14px;color:var(--zen-muted, #9aa0aa);margin-left:-2px}.jt-key[data-v-e4670a8d]{color:var(--zen-accent, #6366f1)}.jt-key[data-v-e4670a8d]:after{content:\":\";color:var(--zen-muted, #9aa0aa);margin:0 2px 0 1px}.jt-brace[data-v-e4670a8d]{color:var(--zen-muted, #9aa0aa)}.jt-close[data-v-e4670a8d]{cursor:default}.jt-collapsed[data-v-e4670a8d]{color:var(--zen-muted, #9aa0aa);font-style:italic;margin:0 4px;opacity:.8}.jt-children[data-v-e4670a8d]{border-left:1px solid var(--zen-border, #34343c)}.jt-val[data-v-e4670a8d]{white-space:pre-wrap;word-break:break-word}.t-string[data-v-e4670a8d]{color:color-mix(in srgb,#4caf50 70%,var(--zen-text, #e5e5ea))}.t-number[data-v-e4670a8d]{color:color-mix(in srgb,#d4a017 70%,var(--zen-text, #e5e5ea))}.t-boolean[data-v-e4670a8d]{color:color-mix(in srgb,#b16ce8 70%,var(--zen-text, #e5e5ea))}.t-null[data-v-e4670a8d]{color:#9aa0aa;font-style:italic}\n/* ZenKit ↔ ComfyUI theme bridge — the runtime-free way to theme @nynxz/zenkit-ui.\n *\n * @nynxz/zenkit-ui components read --zen-* tokens. WITH the ZenKit runtime installed,\n * @nynxz/zenkit-core sets those from the active theme pack (the derivation in @nynxz/zenkit-theme's\n * zen.ts → zenAliases). Consumers that use @nynxz/zenkit-ui WITHOUT the runtime import this file\n * instead: it maps the same --zen-* set straight onto ComfyUI's native theme variables, so\n * the components follow the user's selected ComfyUI theme with zero JS.\n *\n * Declared at :root so teleported overlays (ZenPopover / ZenCombo menus, ZenModal) — which\n * mount outside any component subtree — pick the tokens up too. The right-hand fallbacks keep\n * every token sane if ComfyUI renames or drops a variable. Kept in lockstep with zen.ts:\n * the same core and status tokens, sourced from the host instead of a pack. (The other\n * --zen-* tokens the components use — glass, scrollbar, switch-radius — resolve through\n * inline fallbacks that chain back to these.)\n *\n * Import once, near your extension entry:  import '@nynxz/zenkit-ui/comfy-bridge.css'\n */\n:root {\n  --zen-bg: var(--comfy-menu-bg, #1a1a1f);\n  --zen-surface: var(--comfy-menu-secondary-bg, #202026);\n  --zen-surface-2: var(--comfy-menu-secondary-bg, #26262d);\n  --zen-input: var(--comfy-input-bg, #1b1b20);\n  --zen-border: var(--border-color, #34343c);\n  --zen-text: var(--input-text, var(--fg-color, #e5e5ea));\n  --zen-muted: var(--descrip-text, #9aa0aa);\n  --zen-accent: var(--p-primary-color, #6366f1);\n  --zen-accent-text: var(--p-button-text-primary-color, #fff);\n  --zen-radius: var(--border-radius-base, 7px);\n  --zen-danger: var(--color-destructive-background, #dc2626);\n  --zen-danger-text: #fff;\n  --zen-warn: var(--color-warning-background, #d97706);\n  --zen-warn-text: var(--color-warning-on-background, #15151a);\n  --zen-ok: var(--color-success-background, #16a34a);\n  --zen-ok-text: #fff;\n  --zen-info: var(--zen-accent);\n  --zen-info-text: var(--zen-accent-text);\n  --zen-mono: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;\n  /* keyboard-focus outline colour shared by every control's :focus-visible */\n  --zen-focus-ring: color-mix(in srgb, var(--zen-accent) 60%, transparent);\n}\n/*$vite$:1*/";document.head.appendChild(s);})();import { api } from "../../../scripts/api.js";
import { app } from "../../../scripts/app.js";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// node_modules/.pnpm/@vue+shared@3.5.42/node_modules/@vue/shared/dist/shared.esm-bundler.js
/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
	const map = /* @__PURE__ */ Object.create(null);
	for (const key of str.split(",")) map[key] = 1;
	return (val) => val in map;
}
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var NOOP = () => {};
var NO = () => false;
var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
	const i = arr.indexOf(el);
	if (i > -1) arr.splice(i, 1);
};
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isSet = (val) => toTypeString(val) === "[object Set]";
var isDate = (val) => toTypeString(val) === "[object Date]";
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
	return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
	return toTypeString(value).slice(8, -1);
};
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var cacheStringFunction = (fn) => {
	const cache = /* @__PURE__ */ Object.create(null);
	return ((str) => {
		return cache[str] || (cache[str] = fn(str));
	});
};
var camelizeRE = /-\w/g;
var camelize = cacheStringFunction((str) => {
	return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey = cacheStringFunction((str) => {
	return str ? `on${capitalize(str)}` : ``;
});
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, ...arg) => {
	for (let i = 0; i < fns.length; i++) fns[i](...arg);
};
var def = (obj, key, value, writable = false) => {
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: false,
		writable,
		value
	});
};
var looseToNumber = (val) => {
	const n = parseFloat(val);
	return isNaN(n) ? val : n;
};
var _globalThis;
var getGlobalThis = () => {
	return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
	if (isArray(value)) {
		const res = {};
		for (let i = 0; i < value.length; i++) {
			const item = value[i];
			const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
			if (normalized) for (const key in normalized) res[key] = normalized[key];
		}
		return res;
	} else if (isString(value) || isObject(value)) return value;
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
	const ret = {};
	cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
		if (item) {
			const tmp = item.split(propertyDelimiterRE);
			tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
		}
	});
	return ret;
}
function normalizeClass(value) {
	let res = "";
	if (isString(value)) res = value;
	else if (isArray(value)) for (let i = 0; i < value.length; i++) {
		const normalized = normalizeClass(value[i]);
		if (normalized) res += normalized + " ";
	}
	else if (isObject(value)) {
		for (const name in value) if (value[name]) res += name + " ";
	}
	return res.trim();
}
var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`);
function includeBooleanAttr(value) {
	return !!value || value === "";
}
function looseCompareArrays(a, b) {
	if (a.length !== b.length) return false;
	let equal = true;
	for (let i = 0; equal && i < a.length; i++) equal = looseEqual(a[i], b[i]);
	return equal;
}
function looseCompareCollections(a, b) {
	if (a.size !== b.size) return false;
	const candidates = Array.from(b);
	const matched = new Uint8Array(candidates.length);
	for (const item of a) {
		let index = -1;
		for (let i = 0; i < candidates.length; i++) if (!matched[i] && looseEqual(item, candidates[i])) {
			index = i;
			break;
		}
		if (index < 0) return false;
		matched[index] = 1;
	}
	return true;
}
function looseEqual(a, b) {
	if (a === b) return true;
	let aValidType = isDate(a);
	let bValidType = isDate(b);
	if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
	aValidType = isSymbol(a);
	bValidType = isSymbol(b);
	if (aValidType || bValidType) return a === b;
	aValidType = isArray(a);
	bValidType = isArray(b);
	if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
	aValidType = isObject(a);
	bValidType = isObject(b);
	if (aValidType || bValidType) {
		if (!aValidType || !bValidType) return false;
		aValidType = isMap(a);
		bValidType = isMap(b);
		if (aValidType || bValidType) return aValidType && bValidType ? looseCompareCollections(a, b) : false;
		aValidType = isSet(a);
		bValidType = isSet(b);
		if (aValidType || bValidType) return aValidType && bValidType ? looseCompareCollections(a, b) : false;
		if (Object.keys(a).length !== Object.keys(b).length) return false;
		for (const key in a) {
			const aHasKey = a.hasOwnProperty(key);
			const bHasKey = b.hasOwnProperty(key);
			if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
		}
	}
	return String(a) === String(b);
}
var isRef$1 = (val) => {
	return !!(val && val["__v_isRef"] === true);
};
var toDisplayString = (val) => {
	return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
var replacer = (_key, val) => {
	if (isRef$1(val)) return replacer(_key, val.value);
	else if (isMap(val)) return { [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
		entries[stringifySymbol(key, i) + " =>"] = val2;
		return entries;
	}, {}) };
	else if (isSet(val)) return { [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v)) };
	else if (isSymbol(val)) return stringifySymbol(val);
	else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
	return val;
};
var stringifySymbol = (v, i = "") => {
	var _a;
	return isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
};
// node_modules/.pnpm/@vue+reactivity@3.5.42/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var activeEffectScope;
var EffectScope = class {
	constructor(detached = false) {
		this.detached = detached;
		/**
		* @internal
		*/
		this._active = true;
		/**
		* @internal track `on` calls, allow `on` call multiple times
		*/
		this._on = 0;
		/**
		* @internal
		*/
		this.effects = [];
		/**
		* @internal
		*/
		this.cleanups = [];
		this._isPaused = false;
		this._warnOnRun = true;
		this.__v_skip = true;
		if (!detached && activeEffectScope) {
			if (activeEffectScope.active) {
				this.parent = activeEffectScope;
				this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
			} else {
				this._active = false;
				this._warnOnRun = false;
			}
		}
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = true;
			let i, l;
			if (this.scopes) {
				const scopes = this.scopes.slice();
				for (i = 0, l = scopes.length; i < l; i++) scopes[i].pause();
			}
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].pause();
		}
	}
	/**
	* Resumes the effect scope, including all child scopes and effects.
	*/
	resume() {
		if (this._active) {
			if (this._isPaused) {
				this._isPaused = false;
				let i, l;
				if (this.scopes) {
					const scopes = this.scopes.slice();
					for (i = 0, l = scopes.length; i < l; i++) scopes[i].resume();
				}
				const effects = this.effects.slice();
				for (i = 0, l = effects.length; i < l; i++) effects[i].resume();
			}
		}
	}
	run(fn) {
		if (this._active) {
			const currentEffectScope = activeEffectScope;
			try {
				activeEffectScope = this;
				return fn();
			} finally {
				activeEffectScope = currentEffectScope;
			}
		}
	}
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
	on() {
		if (++this._on === 1) {
			this.prevScope = activeEffectScope;
			activeEffectScope = this;
		}
	}
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (activeEffectScope === this) activeEffectScope = this.prevScope;
			else {
				let current = activeEffectScope;
				while (current) {
					if (current.prevScope === this) {
						current.prevScope = this.prevScope;
						break;
					}
					current = current.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(fromParent) {
		if (this._active) {
			this._active = false;
			let i, l;
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].stop();
			this.effects.length = 0;
			for (i = 0, l = this.cleanups.length; i < l; i++) this.cleanups[i]();
			this.cleanups.length = 0;
			if (this.scopes) {
				const scopes = this.scopes.slice();
				for (i = 0, l = scopes.length; i < l; i++) scopes[i].stop(true);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !fromParent) {
				const last = this.parent.scopes.pop();
				if (last && last !== this) {
					this.parent.scopes[this.index] = last;
					last.index = this.index;
				}
			}
			this.parent = void 0;
		}
	}
};
function getCurrentScope() {
	return activeEffectScope;
}
var activeSub;
var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
var ReactiveEffect = class {
	constructor(fn) {
		this.fn = fn;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 5;
		/**
		* @internal
		*/
		this.next = void 0;
		/**
		* @internal
		*/
		this.cleanup = void 0;
		this.scheduler = void 0;
		if (activeEffectScope) {
			if (activeEffectScope.active) activeEffectScope.effects.push(this);
			else this.flags &= -2;
		}
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		if (this.flags & 64) {
			this.flags &= -65;
			if (pausedQueueEffects.has(this)) {
				pausedQueueEffects.delete(this);
				this.trigger();
			}
		}
	}
	/**
	* @internal
	*/
	notify() {
		if (this.flags & 2 && !(this.flags & 32)) return;
		if (!(this.flags & 8)) batch(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2;
		cleanupEffect(this);
		prepareDeps(this);
		const prevEffect = activeSub;
		const prevShouldTrack = shouldTrack;
		activeSub = this;
		shouldTrack = true;
		try {
			return this.fn();
		} finally {
			cleanupDeps(this);
			activeSub = prevEffect;
			shouldTrack = prevShouldTrack;
			this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let link = this.deps; link; link = link.nextDep) removeSub(link);
			this.deps = this.depsTail = void 0;
			cleanupEffect(this);
			this.onStop && this.onStop();
			this.flags &= -2;
		}
	}
	trigger() {
		if (this.flags & 64) pausedQueueEffects.add(this);
		else if (this.scheduler) this.scheduler();
		else this.runIfDirty();
	}
	/**
	* @internal
	*/
	runIfDirty() {
		if (isDirty(this)) this.run();
	}
	get dirty() {
		return isDirty(this);
	}
};
var batchDepth = 0;
var batchedSub;
var batchedComputed;
function batch(sub, isComputed = false) {
	sub.flags |= 8;
	if (isComputed) {
		sub.next = batchedComputed;
		batchedComputed = sub;
		return;
	}
	sub.next = batchedSub;
	batchedSub = sub;
}
function startBatch() {
	batchDepth++;
}
function endBatch() {
	if (--batchDepth > 0) return;
	if (batchedComputed) {
		let e = batchedComputed;
		batchedComputed = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			e = next;
		}
	}
	let error;
	while (batchedSub) {
		let e = batchedSub;
		batchedSub = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			if (e.flags & 1) try {
				e.trigger();
			} catch (err) {
				if (!error) error = err;
			}
			e = next;
		}
	}
	if (error) throw error;
}
function prepareDeps(sub) {
	for (let link = sub.deps; link; link = link.nextDep) {
		link.version = -1;
		link.prevActiveLink = link.dep.activeLink;
		link.dep.activeLink = link;
	}
}
function cleanupDeps(sub) {
	let head;
	let tail = sub.depsTail;
	let link = tail;
	while (link) {
		const prev = link.prevDep;
		if (link.version === -1) {
			if (link === tail) tail = prev;
			removeSub(link);
			removeDep(link);
		} else head = link;
		link.dep.activeLink = link.prevActiveLink;
		link.prevActiveLink = void 0;
		link = prev;
	}
	sub.deps = head;
	sub.depsTail = tail;
}
function isDirty(sub) {
	for (let link = sub.deps; link; link = link.nextDep) if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
	if (sub._dirty) return true;
	return false;
}
function refreshComputed(computed) {
	if (computed.flags & 4 && !(computed.flags & 16)) return;
	computed.flags &= -17;
	if (computed.globalVersion === globalVersion) return;
	computed.globalVersion = globalVersion;
	if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !isDirty(computed))) return;
	computed.flags |= 2;
	const dep = computed.dep;
	const prevSub = activeSub;
	const prevShouldTrack = shouldTrack;
	activeSub = computed;
	shouldTrack = true;
	try {
		prepareDeps(computed);
		const value = computed.fn(computed._value);
		if (dep.version === 0 || hasChanged(value, computed._value)) {
			computed.flags |= 128;
			computed._value = value;
			dep.version++;
		}
	} catch (err) {
		dep.version++;
		throw err;
	} finally {
		activeSub = prevSub;
		shouldTrack = prevShouldTrack;
		cleanupDeps(computed);
		computed.flags &= -3;
	}
}
function removeSub(link, soft = false) {
	const { dep, prevSub, nextSub } = link;
	if (prevSub) {
		prevSub.nextSub = nextSub;
		link.prevSub = void 0;
	}
	if (nextSub) {
		nextSub.prevSub = prevSub;
		link.nextSub = void 0;
	}
	if (dep.subs === link) {
		dep.subs = prevSub;
		if (!prevSub && dep.computed) {
			dep.computed.flags &= -5;
			for (let l = dep.computed.deps; l; l = l.nextDep) removeSub(l, true);
		}
	}
	if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
}
function removeDep(link) {
	const { prevDep, nextDep } = link;
	if (prevDep) {
		prevDep.nextDep = nextDep;
		link.prevDep = void 0;
	}
	if (nextDep) {
		nextDep.prevDep = prevDep;
		link.nextDep = void 0;
	}
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
	trackStack.push(shouldTrack);
	shouldTrack = false;
}
function resetTracking() {
	const last = trackStack.pop();
	shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
	const { cleanup } = e;
	e.cleanup = void 0;
	if (cleanup) {
		const prevSub = activeSub;
		activeSub = void 0;
		try {
			cleanup();
		} finally {
			activeSub = prevSub;
		}
	}
}
var globalVersion = 0;
var Link = class {
	constructor(sub, dep) {
		this.sub = sub;
		this.dep = dep;
		this.version = dep.version;
		this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
};
var Dep = class {
	constructor(computed) {
		this.computed = computed;
		this.version = 0;
		/**
		* Link between this dep and the current active effect
		*/
		this.activeLink = void 0;
		/**
		* Doubly linked list representing the subscribing effects (tail)
		*/
		this.subs = void 0;
		/**
		* For object property deps cleanup
		*/
		this.map = void 0;
		this.key = void 0;
		/**
		* Subscriber counter
		*/
		this.sc = 0;
		/**
		* @internal
		*/
		this.__v_skip = true;
	}
	track(debugInfo) {
		if (!activeSub || !shouldTrack || activeSub === this.computed) return;
		let link = this.activeLink;
		if (link === void 0 || link.sub !== activeSub) {
			link = this.activeLink = new Link(activeSub, this);
			if (!activeSub.deps) activeSub.deps = activeSub.depsTail = link;
			else {
				link.prevDep = activeSub.depsTail;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
			}
			addSub(link);
		} else if (link.version === -1) {
			link.version = this.version;
			if (link.nextDep) {
				const next = link.nextDep;
				next.prevDep = link.prevDep;
				if (link.prevDep) link.prevDep.nextDep = next;
				link.prevDep = activeSub.depsTail;
				link.nextDep = void 0;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
				if (activeSub.deps === link) activeSub.deps = next;
			}
		}
		return link;
	}
	trigger(debugInfo) {
		this.version++;
		globalVersion++;
		this.notify(debugInfo);
	}
	notify(debugInfo) {
		startBatch();
		try {
			for (let link = this.subs; link; link = link.prevSub) if (link.sub.notify()) link.sub.dep.notify();
		} finally {
			endBatch();
		}
	}
};
function addSub(link) {
	link.dep.sc++;
	if (link.sub.flags & 4) {
		const computed = link.dep.computed;
		if (computed && !link.dep.subs) {
			computed.flags |= 20;
			for (let l = computed.deps; l; l = l.nextDep) addSub(l);
		}
		const currentTail = link.dep.subs;
		if (currentTail !== link) {
			link.prevSub = currentTail;
			if (currentTail) currentTail.nextSub = link;
		}
		link.dep.subs = link;
	}
}
var targetMap = /* @__PURE__ */ new WeakMap();
var ITERATE_KEY = /* @__PURE__ */ Symbol("");
var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
function track(target, type, key) {
	if (shouldTrack && activeSub) {
		let depsMap = targetMap.get(target);
		if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
		let dep = depsMap.get(key);
		if (!dep) {
			depsMap.set(key, dep = new Dep());
			dep.map = depsMap;
			dep.key = key;
		}
		dep.track();
	}
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
	const depsMap = targetMap.get(target);
	if (!depsMap) {
		globalVersion++;
		return;
	}
	const run = (dep) => {
		if (dep) dep.trigger();
	};
	startBatch();
	if (type === "clear") depsMap.forEach(run);
	else {
		const targetIsArray = isArray(target);
		const isArrayIndex = targetIsArray && isIntegerKey(key);
		if (targetIsArray && key === "length") {
			const newLength = Number(newValue);
			depsMap.forEach((dep, key2) => {
				if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) run(dep);
			});
		} else {
			if (key !== void 0 || depsMap.has(void 0)) run(depsMap.get(key));
			if (isArrayIndex) run(depsMap.get(ARRAY_ITERATE_KEY));
			switch (type) {
				case "add":
					if (!targetIsArray) {
						run(depsMap.get(ITERATE_KEY));
						if (isMap(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
					} else if (isArrayIndex) run(depsMap.get("length"));
					break;
				case "delete":
					if (!targetIsArray) {
						run(depsMap.get(ITERATE_KEY));
						if (isMap(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
					}
					break;
				case "set": if (isMap(target)) run(depsMap.get(ITERATE_KEY));
			}
		}
	}
	endBatch();
}
function reactiveReadArray(array) {
	const raw = /* @__PURE__ */ toRaw(array);
	if (raw === array) return raw;
	track(raw, "iterate", ARRAY_ITERATE_KEY);
	return /* @__PURE__ */ isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
	track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
	return arr;
}
function toWrapped(target, item) {
	if (/* @__PURE__ */ isReadonly(target)) return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
	return toReactive(item);
}
var arrayInstrumentations = {
	__proto__: null,
	[Symbol.iterator]() {
		return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
	},
	concat(...args) {
		return reactiveReadArray(this).concat(...args.map((x) => isArray(x) ? reactiveReadArray(x) : x));
	},
	entries() {
		return iterator(this, "entries", (value) => {
			value[1] = toWrapped(this, value[1]);
			return value;
		});
	},
	every(fn, thisArg) {
		return apply(this, "every", fn, thisArg, void 0, arguments);
	},
	filter(fn, thisArg) {
		return apply(this, "filter", fn, thisArg, (v) => v.map((item) => toWrapped(this, item)), arguments);
	},
	find(fn, thisArg) {
		return apply(this, "find", fn, thisArg, (item) => toWrapped(this, item), arguments);
	},
	findIndex(fn, thisArg) {
		return apply(this, "findIndex", fn, thisArg, void 0, arguments);
	},
	findLast(fn, thisArg) {
		return apply(this, "findLast", fn, thisArg, (item) => toWrapped(this, item), arguments);
	},
	findLastIndex(fn, thisArg) {
		return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
	},
	forEach(fn, thisArg) {
		return apply(this, "forEach", fn, thisArg, void 0, arguments);
	},
	includes(...args) {
		return searchProxy(this, "includes", args);
	},
	indexOf(...args) {
		return searchProxy(this, "indexOf", args);
	},
	join(separator) {
		return reactiveReadArray(this).join(separator);
	},
	lastIndexOf(...args) {
		return searchProxy(this, "lastIndexOf", args);
	},
	map(fn, thisArg) {
		return apply(this, "map", fn, thisArg, void 0, arguments);
	},
	pop() {
		return noTracking(this, "pop");
	},
	push(...args) {
		return noTracking(this, "push", args);
	},
	reduce(fn, ...args) {
		return reduce(this, "reduce", fn, args);
	},
	reduceRight(fn, ...args) {
		return reduce(this, "reduceRight", fn, args);
	},
	shift() {
		return noTracking(this, "shift");
	},
	some(fn, thisArg) {
		return apply(this, "some", fn, thisArg, void 0, arguments);
	},
	splice(...args) {
		return noTracking(this, "splice", args);
	},
	toReversed() {
		return reactiveReadArray(this).toReversed();
	},
	toSorted(comparer) {
		return reactiveReadArray(this).toSorted(comparer);
	},
	toSpliced(...args) {
		return reactiveReadArray(this).toSpliced(...args);
	},
	unshift(...args) {
		return noTracking(this, "unshift", args);
	},
	values() {
		return iterator(this, "values", (item) => toWrapped(this, item));
	}
};
function iterator(self, method, wrapValue) {
	const arr = shallowReadArray(self);
	const iter = arr[method]();
	if (arr !== self && !/* @__PURE__ */ isShallow(self)) {
		iter._next = iter.next;
		iter.next = () => {
			const result = iter._next();
			if (!result.done) result.value = wrapValue(result.value);
			return result;
		};
	}
	return iter;
}
var arrayProto = Array.prototype;
function apply(self, method, fn, thisArg, wrappedRetFn, args) {
	const arr = shallowReadArray(self);
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
	const methodFn = arr[method];
	if (methodFn !== arrayProto[method]) {
		const result2 = methodFn.apply(self, args);
		return needsWrap ? toReactive(result2) : result2;
	}
	let wrappedFn = fn;
	if (arr !== self) {
		if (needsWrap) wrappedFn = function(item, index) {
			return fn.call(this, toWrapped(self, item), index, self);
		};
		else if (fn.length > 2) wrappedFn = function(item, index) {
			return fn.call(this, item, index, self);
		};
	}
	const result = methodFn.call(arr, wrappedFn, thisArg);
	return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
	const arr = shallowReadArray(self);
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
	let wrappedFn = fn;
	let wrapInitialAccumulator = false;
	if (arr !== self) {
		if (needsWrap) {
			wrapInitialAccumulator = args.length === 0;
			wrappedFn = function(acc, item, index) {
				if (wrapInitialAccumulator) {
					wrapInitialAccumulator = false;
					acc = toWrapped(self, acc);
				}
				return fn.call(this, acc, toWrapped(self, item), index, self);
			};
		} else if (fn.length > 3) wrappedFn = function(acc, item, index) {
			return fn.call(this, acc, item, index, self);
		};
	}
	const result = arr[method](wrappedFn, ...args);
	return wrapInitialAccumulator ? toWrapped(self, result) : result;
}
function searchProxy(self, method, args) {
	const arr = /* @__PURE__ */ toRaw(self);
	track(arr, "iterate", ARRAY_ITERATE_KEY);
	const res = arr[method](...args);
	if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
		args[0] = /* @__PURE__ */ toRaw(args[0]);
		return arr[method](...args);
	}
	return res;
}
function noTracking(self, method, args = []) {
	pauseTracking();
	startBatch();
	const res = (/* @__PURE__ */ toRaw(self))[method].apply(self, args);
	endBatch();
	resetTracking();
	return res;
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
function hasOwnProperty(key) {
	if (!isSymbol(key)) key = String(key);
	const obj = /* @__PURE__ */ toRaw(this);
	track(obj, "has", key);
	return obj.hasOwnProperty(key);
}
var BaseReactiveHandler = class {
	constructor(_isReadonly = false, _isShallow = false) {
		this._isReadonly = _isReadonly;
		this._isShallow = _isShallow;
	}
	get(target, key, receiver) {
		if (key === "__v_skip") return target["__v_skip"];
		const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_isShallow") return isShallow2;
		else if (key === "__v_raw") {
			if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
			return;
		}
		const targetIsArray = isArray(target);
		if (!isReadonly2) {
			let fn;
			if (targetIsArray && (fn = arrayInstrumentations[key])) return fn;
			if (key === "hasOwnProperty") return hasOwnProperty;
		}
		const res = Reflect.get(target, key, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
		if (!isReadonly2) track(target, "get", key);
		if (isShallow2) return res;
		if (/* @__PURE__ */ isRef(res)) {
			const value = targetIsArray && isIntegerKey(key) ? res : res.value;
			return isReadonly2 && isObject(value) ? /* @__PURE__ */ readonly(value) : value;
		}
		if (isObject(res)) return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive(res);
		return res;
	}
};
var MutableReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(false, isShallow2);
	}
	set(target, key, value, receiver) {
		let oldValue = target[key];
		const isArrayWithIntegerKey = isArray(target) && isIntegerKey(key);
		if (!this._isShallow) {
			const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
			if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
				oldValue = /* @__PURE__ */ toRaw(oldValue);
				value = /* @__PURE__ */ toRaw(value);
			}
			if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
				if (isOldValueReadonly) return true;
				else {
					oldValue.value = value;
					return true;
				}
			}
		}
		const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
		const result = Reflect.set(target, key, value, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (target === /* @__PURE__ */ toRaw(receiver) && result) {
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
		}
		return result;
	}
	deleteProperty(target, key) {
		const hadKey = hasOwn(target, key);
		const oldValue = target[key];
		const result = Reflect.deleteProperty(target, key);
		if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
		return result;
	}
	has(target, key) {
		const result = Reflect.has(target, key);
		if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
		return result;
	}
	ownKeys(target) {
		track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
		return Reflect.ownKeys(target);
	}
};
var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(true, isShallow2);
	}
	set(target, key) {
		return true;
	}
	deleteProperty(target, key) {
		return true;
	}
};
var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
	return function(...args) {
		const target = this["__v_raw"];
		const rawTarget = /* @__PURE__ */ toRaw(target);
		const targetIsMap = isMap(rawTarget);
		const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
		const isKeyOnly = method === "keys" && targetIsMap;
		const innerIterator = target[method](...args);
		const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
		!isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
		return extend(Object.create(innerIterator), { next() {
			const { value, done } = innerIterator.next();
			return done ? {
				value,
				done
			} : {
				value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
				done
			};
		} });
	};
}
function createReadonlyMethod(type) {
	return function(...args) {
		return type === "delete" ? false : type === "clear" ? void 0 : this;
	};
}
function createInstrumentations(readonly, shallow) {
	const instrumentations = {
		get(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly) {
				if (hasChanged(key, rawKey)) track(rawTarget, "get", key);
				track(rawTarget, "get", rawKey);
			}
			const { has } = getProto(rawTarget);
			const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
			if (has.call(rawTarget, key)) return wrap(target.get(key));
			else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
			else if (target !== rawTarget) target.get(key);
		},
		get size() {
			const target = this["__v_raw"];
			!readonly && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
			return target.size;
		},
		has(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly) {
				if (hasChanged(key, rawKey)) track(rawTarget, "has", key);
				track(rawTarget, "has", rawKey);
			}
			return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
		},
		forEach(callback, thisArg) {
			const observed = this;
			const target = observed["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
			!readonly && track(rawTarget, "iterate", ITERATE_KEY);
			return target.forEach((value, key) => {
				return callback.call(thisArg, wrap(value), wrap(key), observed);
			});
		}
	};
	extend(instrumentations, readonly ? {
		add: createReadonlyMethod("add"),
		set: createReadonlyMethod("set"),
		delete: createReadonlyMethod("delete"),
		clear: createReadonlyMethod("clear")
	} : {
		add(value) {
			const target = /* @__PURE__ */ toRaw(this);
			const proto = getProto(target);
			const rawValue = /* @__PURE__ */ toRaw(value);
			const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value) ? rawValue : value;
			if (!(proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue))) {
				target.add(valueToAdd);
				trigger(target, "add", valueToAdd, valueToAdd);
			}
			return this;
		},
		set(key, value) {
			if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) value = /* @__PURE__ */ toRaw(value);
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			}
			const oldValue = get.call(target, key);
			target.set(key, value);
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
			return this;
		},
		delete(key) {
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			}
			const oldValue = get ? get.call(target, key) : void 0;
			const result = target.delete(key);
			if (hadKey) trigger(target, "delete", key, void 0, oldValue);
			return result;
		},
		clear() {
			const target = /* @__PURE__ */ toRaw(this);
			const hadItems = target.size !== 0;
			const oldTarget = void 0;
			const result = target.clear();
			if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
			return result;
		}
	});
	[
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((method) => {
		instrumentations[method] = createIterableMethod(method, readonly, shallow);
	});
	return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
	const instrumentations = createInstrumentations(isReadonly2, shallow);
	return (target, key, receiver) => {
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_raw") return target;
		return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
	};
}
var mutableCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, false) };
var shallowCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, true) };
var readonlyCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(true, false) };
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
	switch (rawType) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function reactive(target) {
	if (/* @__PURE__ */ isReadonly(target)) return target;
	return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
// @__NO_SIDE_EFFECTS__
function shallowReactive(target) {
	return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
// @__NO_SIDE_EFFECTS__
function readonly(target) {
	return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
	if (!isObject(target)) return target;
	if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
	if (target["__v_skip"] || !Object.isExtensible(target)) return target;
	const existingProxy = proxyMap.get(target);
	if (existingProxy) return existingProxy;
	const targetType = targetTypeMap(toRawType(target));
	if (targetType === 0) return target;
	const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
	proxyMap.set(target, proxy);
	return proxy;
}
// @__NO_SIDE_EFFECTS__
function isReactive(value) {
	if (/* @__PURE__ */ isReadonly(value)) return /* @__PURE__ */ isReactive(value["__v_raw"]);
	return !!(value && value["__v_isReactive"]);
}
// @__NO_SIDE_EFFECTS__
function isReadonly(value) {
	return !!(value && value["__v_isReadonly"]);
}
// @__NO_SIDE_EFFECTS__
function isShallow(value) {
	return !!(value && value["__v_isShallow"]);
}
// @__NO_SIDE_EFFECTS__
function isProxy(value) {
	return value ? !!value["__v_raw"] : false;
}
// @__NO_SIDE_EFFECTS__
function toRaw(observed) {
	const raw = observed && observed["__v_raw"];
	return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
function markRaw(value) {
	if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) def(value, "__v_skip", true);
	return value;
}
var toReactive = (value) => isObject(value) ? /* @__PURE__ */ reactive(value) : value;
var toReadonly = (value) => isObject(value) ? /* @__PURE__ */ readonly(value) : value;
// @__NO_SIDE_EFFECTS__
function isRef(r) {
	return r ? r["__v_isRef"] === true : false;
}
// @__NO_SIDE_EFFECTS__
function ref(value) {
	return createRef(value, false);
}
// @__NO_SIDE_EFFECTS__
function shallowRef(value) {
	return createRef(value, true);
}
function createRef(rawValue, shallow) {
	if (/* @__PURE__ */ isRef(rawValue)) return rawValue;
	return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
	constructor(value, isShallow2) {
		this.dep = new Dep();
		this["__v_isRef"] = true;
		this["__v_isShallow"] = false;
		this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
		this._value = isShallow2 ? value : toReactive(value);
		this["__v_isShallow"] = isShallow2;
	}
	get value() {
		this.dep.track();
		return this._value;
	}
	set value(newValue) {
		const oldValue = this._rawValue;
		const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
		newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
		if (hasChanged(newValue, oldValue)) {
			this._rawValue = newValue;
			this._value = useDirectValue ? newValue : toReactive(newValue);
			this.dep.trigger();
		}
	}
};
function unref(ref2) {
	return /* @__PURE__ */ isRef(ref2) ? ref2.value : ref2;
}
var shallowUnwrapHandlers = {
	get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
	set: (target, key, value, receiver) => {
		const oldValue = target[key];
		if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
			oldValue.value = value;
			return true;
		} else return Reflect.set(target, key, value, receiver);
	}
};
function proxyRefs(objectWithRefs) {
	return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var ComputedRefImpl = class {
	constructor(fn, setter, isSSR) {
		this.fn = fn;
		this.setter = setter;
		/**
		* @internal
		*/
		this._value = void 0;
		/**
		* @internal
		*/
		this.dep = new Dep(this);
		/**
		* @internal
		*/
		this.__v_isRef = true;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 16;
		/**
		* @internal
		*/
		this.globalVersion = globalVersion - 1;
		/**
		* @internal
		*/
		this.next = void 0;
		this.effect = this;
		this["__v_isReadonly"] = !setter;
		this.isSSR = isSSR;
	}
	/**
	* @internal
	*/
	notify() {
		this.flags |= 16;
		if (!(this.flags & 8) && activeSub !== this) {
			batch(this, true);
			return true;
		}
	}
	get value() {
		const link = this.dep.track();
		refreshComputed(this);
		if (link) link.version = this.dep.version;
		return this._value;
	}
	set value(newValue) {
		if (this.setter) this.setter(newValue);
	}
};
// @__NO_SIDE_EFFECTS__
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
	let getter;
	let setter;
	if (isFunction(getterOrOptions)) getter = getterOrOptions;
	else {
		getter = getterOrOptions.get;
		setter = getterOrOptions.set;
	}
	return new ComputedRefImpl(getter, setter, isSSR);
}
var INITIAL_WATCHER_VALUE = {};
var cleanupMap = /* @__PURE__ */ new WeakMap();
var activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
	if (owner) {
		let cleanups = cleanupMap.get(owner);
		if (!cleanups) cleanupMap.set(owner, cleanups = []);
		cleanups.push(cleanupFn);
	}
}
function watch$1(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, once, scheduler, augmentJob, call } = options;
	const reactiveGetter = (source2) => {
		if (deep) return source2;
		if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
		return traverse(source2);
	};
	let effect;
	let getter;
	let cleanup;
	let boundCleanup;
	let forceTrigger = false;
	let isMultiSource = false;
	if (/* @__PURE__ */ isRef(source)) {
		getter = () => source.value;
		forceTrigger = /* @__PURE__ */ isShallow(source);
	} else if (/* @__PURE__ */ isReactive(source)) {
		getter = () => reactiveGetter(source);
		forceTrigger = true;
	} else if (isArray(source)) {
		isMultiSource = true;
		forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
		getter = () => source.map((s) => {
			if (/* @__PURE__ */ isRef(s)) return s.value;
			else if (/* @__PURE__ */ isReactive(s)) return reactiveGetter(s);
			else if (isFunction(s)) return call ? call(s, 2) : s();
		});
	} else if (isFunction(source)) {
		if (cb) getter = call ? () => call(source, 2) : source;
		else getter = () => {
			if (cleanup) {
				pauseTracking();
				try {
					cleanup();
				} finally {
					resetTracking();
				}
			}
			const currentEffect = activeWatcher;
			activeWatcher = effect;
			try {
				return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
			} finally {
				activeWatcher = currentEffect;
			}
		};
	} else getter = NOOP;
	if (cb && deep) {
		const baseGetter = getter;
		const depth = deep === true ? Infinity : deep;
		getter = () => traverse(baseGetter(), depth);
	}
	const scope = getCurrentScope();
	const watchHandle = () => {
		effect.stop();
		if (scope && scope.active) remove(scope.effects, effect);
	};
	if (once && cb) {
		const _cb = cb;
		cb = (...args) => {
			const res = _cb(...args);
			watchHandle();
			return res;
		};
	}
	let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
	const job = (immediateFirstRun) => {
		if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) return;
		if (cb) {
			const newValue = effect.run();
			if (immediateFirstRun || deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
				if (cleanup) cleanup();
				const currentWatcher = activeWatcher;
				activeWatcher = effect;
				try {
					const args = [
						newValue,
						oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
						boundCleanup
					];
					oldValue = newValue;
					call ? call(cb, 3, args) : cb(...args);
				} finally {
					activeWatcher = currentWatcher;
				}
			}
		} else effect.run();
	};
	if (augmentJob) augmentJob(job);
	effect = new ReactiveEffect(getter);
	effect.scheduler = scheduler ? () => scheduler(job, false) : job;
	boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
	cleanup = effect.onStop = () => {
		const cleanups = cleanupMap.get(effect);
		if (cleanups) {
			if (call) call(cleanups, 4);
			else for (const cleanup2 of cleanups) cleanup2();
			cleanupMap.delete(effect);
		}
	};
	if (cb) {
		if (immediate) job(true);
		else oldValue = effect.run();
	} else if (scheduler) scheduler(job.bind(null, true), true);
	else effect.run();
	watchHandle.pause = effect.pause.bind(effect);
	watchHandle.resume = effect.resume.bind(effect);
	watchHandle.stop = watchHandle;
	return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
	if (depth <= 0 || !isObject(value) || value["__v_skip"]) return value;
	seen = seen || /* @__PURE__ */ new Map();
	if ((seen.get(value) || 0) >= depth) return value;
	seen.set(value, depth);
	depth--;
	if (/* @__PURE__ */ isRef(value)) traverse(value.value, depth, seen);
	else if (isArray(value)) for (let i = 0; i < value.length; i++) traverse(value[i], depth, seen);
	else if (isSet(value) || isMap(value)) value.forEach((v) => {
		traverse(v, depth, seen);
	});
	else if (isPlainObject(value)) {
		for (const key in value) traverse(value[key], depth, seen);
		for (const key of Object.getOwnPropertySymbols(value)) if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
	}
	return value;
}
// node_modules/.pnpm/@vue+runtime-core@3.5.42/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function callWithErrorHandling(fn, instance, type, args) {
	try {
		return args ? fn(...args) : fn();
	} catch (err) {
		handleError(err, instance, type);
	}
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
	if (isFunction(fn)) {
		const res = callWithErrorHandling(fn, instance, type, args);
		if (res && isPromise(res)) res.catch((err) => {
			handleError(err, instance, type);
		});
		return res;
	}
	if (isArray(fn)) {
		const values = [];
		for (let i = 0; i < fn.length; i++) values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
		return values;
	}
}
function handleError(err, instance, type, throwInDev = true) {
	const contextVNode = instance ? instance.vnode : null;
	const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
	if (instance) {
		let cur = instance.parent;
		const exposedInstance = instance.proxy;
		const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
		while (cur) {
			const errorCapturedHooks = cur.ec;
			if (errorCapturedHooks) {
				for (let i = 0; i < errorCapturedHooks.length; i++) if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
			}
			cur = cur.parent;
		}
		if (errorHandler) {
			pauseTracking();
			callWithErrorHandling(errorHandler, null, 10, [
				err,
				exposedInstance,
				errorInfo
			]);
			resetTracking();
			return;
		}
	}
	logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
	if (throwInProd) throw err;
	else console.error(err);
}
var queue = [];
var flushIndex = -1;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ Promise.resolve();
var currentFlushPromise = null;
function nextTick(fn) {
	const p = currentFlushPromise || resolvedPromise;
	return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
	let start = flushIndex + 1;
	let end = queue.length;
	while (start < end) {
		const middle = start + end >>> 1;
		const middleJob = queue[middle];
		const middleJobId = getId(middleJob);
		if (middleJobId < id || middleJobId === id && middleJob.flags & 2) start = middle + 1;
		else end = middle;
	}
	return start;
}
function queueJob(job) {
	if (!(job.flags & 1)) {
		const jobId = getId(job);
		const lastJob = queue[queue.length - 1];
		if (!lastJob || !(job.flags & 2) && jobId >= getId(lastJob)) queue.push(job);
		else queue.splice(findInsertionIndex(jobId), 0, job);
		job.flags |= 1;
		queueFlush();
	}
}
function queueFlush() {
	if (!currentFlushPromise) currentFlushPromise = resolvedPromise.then(flushJobs);
}
function queuePostFlushCb(cb) {
	if (!isArray(cb)) {
		if (activePostFlushCbs && cb.id === -1) activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
		else if (!(cb.flags & 1)) {
			pendingPostFlushCbs.push(cb);
			cb.flags |= 1;
		}
	} else for (let i = 0; i < cb.length; i++) pendingPostFlushCbs.push(cb[i]);
	queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
	for (; i < queue.length; i++) {
		const cb = queue[i];
		if (cb && cb.flags & 2) {
			if (instance && cb.id !== instance.uid) continue;
			queue.splice(i, 1);
			i--;
			if (cb.flags & 4) cb.flags &= -2;
			cb();
			if (!(cb.flags & 4)) cb.flags &= -2;
		}
	}
}
function flushPostFlushCbs(seen) {
	if (pendingPostFlushCbs.length) {
		const deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
		pendingPostFlushCbs.length = 0;
		if (activePostFlushCbs) {
			for (let i = 0; i < deduped.length; i++) activePostFlushCbs.push(deduped[i]);
			return;
		}
		activePostFlushCbs = deduped;
		for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
			const cb = activePostFlushCbs[postFlushIndex];
			if (cb.flags & 4) cb.flags &= -2;
			if (!(cb.flags & 8)) cb();
			cb.flags &= -2;
		}
		activePostFlushCbs = null;
		postFlushIndex = 0;
	}
}
var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
	try {
		for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job && !(job.flags & 8)) {
				if (job.flags & 4) job.flags &= -2;
				callWithErrorHandling(job, job.i, job.i ? 15 : 14);
				if (!(job.flags & 4)) job.flags &= -2;
			}
		}
	} finally {
		for (; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job) job.flags &= -2;
		}
		flushIndex = -1;
		queue.length = 0;
		flushPostFlushCbs(seen);
		currentFlushPromise = null;
		if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
	}
}
var currentRenderingInstance = null;
var currentScopeId = null;
function setCurrentRenderingInstance(instance) {
	const prev = currentRenderingInstance;
	currentRenderingInstance = instance;
	currentScopeId = instance && instance.type.__scopeId || null;
	return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
	if (!ctx) return fn;
	if (fn._n) return fn;
	const renderFnWithContext = (...args) => {
		if (renderFnWithContext._d) setBlockTracking(-1);
		const prevInstance = setCurrentRenderingInstance(ctx);
		const prevStackSize = blockStack.length;
		let res;
		try {
			res = fn(...args);
		} finally {
			for (let i = blockStack.length; i > prevStackSize; i--) closeBlock();
			setCurrentRenderingInstance(prevInstance);
			if (renderFnWithContext._d) setBlockTracking(1);
		}
		return res;
	};
	renderFnWithContext._n = true;
	renderFnWithContext._c = true;
	renderFnWithContext._d = true;
	return renderFnWithContext;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
	const bindings = vnode.dirs;
	const oldBindings = prevVNode && prevVNode.dirs;
	for (let i = 0; i < bindings.length; i++) {
		const binding = bindings[i];
		if (oldBindings) binding.oldValue = oldBindings[i].value;
		let hook = binding.dir[name];
		if (hook) {
			pauseTracking();
			callWithAsyncErrorHandling(hook, instance, 8, [
				vnode.el,
				binding,
				vnode,
				prevVNode
			]);
			resetTracking();
		}
	}
}
function provide(key, value) {
	if (currentInstance) {
		let provides = currentInstance.provides;
		const parentProvides = currentInstance.parent && currentInstance.parent.provides;
		if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
		provides[key] = value;
	}
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
	const instance = getCurrentInstance();
	if (instance || currentApp) {
		let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
		if (provides && key in provides) return provides[key];
		else if (arguments.length > 1) return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
	}
}
var ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
var useSSRContext = () => {
	{
		const ctx = inject(ssrContextKey);
		if (!ctx) {}
		return ctx;
	}
};
function watch(source, cb, options) {
	return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, flush, once } = options;
	const baseWatchOptions = extend({}, options);
	const runsImmediately = cb && immediate || !cb && flush !== "post";
	let ssrCleanup;
	if (isInSSRComponentSetup) {
		if (flush === "sync") {
			const ctx = useSSRContext();
			ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
		} else if (!runsImmediately) {
			const watchStopHandle = () => {};
			watchStopHandle.stop = NOOP;
			watchStopHandle.resume = NOOP;
			watchStopHandle.pause = NOOP;
			return watchStopHandle;
		}
	}
	const instance = currentInstance;
	baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
	let isPre = false;
	if (flush === "post") baseWatchOptions.scheduler = (job) => {
		queuePostRenderEffect(job, instance && instance.suspense);
	};
	else if (flush !== "sync") {
		isPre = true;
		baseWatchOptions.scheduler = (job, isFirstRun) => {
			if (isFirstRun) job();
			else queueJob(job);
		};
	}
	baseWatchOptions.augmentJob = (job) => {
		if (cb) job.flags |= 4;
		if (isPre) {
			job.flags |= 2;
			if (instance) {
				job.id = instance.uid;
				job.i = instance;
			}
		}
	};
	const watchHandle = watch$1(source, cb, baseWatchOptions);
	if (isInSSRComponentSetup) {
		if (ssrCleanup) ssrCleanup.push(watchHandle);
		else if (runsImmediately) watchHandle();
	}
	return watchHandle;
}
function instanceWatch(source, value, options) {
	const publicThis = this.proxy;
	const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
	let cb;
	if (isFunction(value)) cb = value;
	else {
		cb = value.handler;
		options = value;
	}
	const reset = setCurrentInstance(this);
	const res = doWatch(getter, cb.bind(publicThis), options);
	reset();
	return res;
}
function createPathGetter(ctx, path) {
	const segments = path.split(".");
	return () => {
		let cur = ctx;
		for (let i = 0; i < segments.length && cur; i++) cur = cur[segments[i]];
		return cur;
	};
}
var pendingMounts = /* @__PURE__ */ new WeakMap();
var TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
var isTeleport = (type) => type.__isTeleport;
var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
var isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
var isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
var resolveTarget = (props, select) => {
	const targetSelector = props && props.to;
	if (isString(targetSelector)) {
		if (!select) return null;
		else return select(targetSelector);
	} else return targetSelector;
};
var TeleportImpl = {
	name: "Teleport",
	__isTeleport: true,
	process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
		const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment, parentNode } } = internals;
		const disabled = isTeleportDisabled(n2.props);
		let { dynamicChildren } = n2;
		const mount = (vnode, container2, anchor2) => {
			if (vnode.shapeFlag & 16) mountChildren(vnode.children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		};
		const mountToTarget = (vnode = n2) => {
			const disabled2 = isTeleportDisabled(vnode.props);
			const target = vnode.target = resolveTarget(vnode.props, querySelector);
			const targetAnchor = prepareAnchor(target, vnode, createText, insert);
			if (target) {
				if (namespace !== "svg" && isTargetSVG(target)) namespace = "svg";
				else if (namespace !== "mathml" && isTargetMathML(target)) namespace = "mathml";
				if (parentComponent && parentComponent.isCE) (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
				if (!disabled2) {
					mount(vnode, target, targetAnchor);
					updateCssVars(vnode, false);
				}
			}
		};
		const queuePendingMount = (vnode) => {
			const mountJob = () => {
				if (pendingMounts.get(vnode) !== mountJob) return;
				pendingMounts.delete(vnode);
				if (isTeleportDisabled(vnode.props)) {
					const mountContainer = parentNode(vnode.el) || container;
					mount(vnode, mountContainer, vnode.anchor);
					updateCssVars(vnode, true);
				}
				mountToTarget(vnode);
			};
			pendingMounts.set(vnode, mountJob);
			queuePostRenderEffect(mountJob, parentSuspense);
		};
		if (n1 == null) {
			const placeholder = n2.el = createText("");
			const mainAnchor = n2.anchor = createText("");
			insert(placeholder, container, anchor);
			insert(mainAnchor, container, anchor);
			if (isTeleportDeferred(n2.props) || parentSuspense && parentSuspense.pendingBranch) {
				queuePendingMount(n2);
				return;
			}
			if (disabled) {
				mount(n2, container, mainAnchor);
				updateCssVars(n2, true);
			}
			mountToTarget();
		} else {
			n2.el = n1.el;
			const mainAnchor = n2.anchor = n1.anchor;
			const pendingMount = pendingMounts.get(n1);
			if (pendingMount) {
				pendingMount.flags |= 8;
				pendingMounts.delete(n1);
				queuePendingMount(n2);
				return;
			}
			n2.targetStart = n1.targetStart;
			const target = n2.target = n1.target;
			const targetAnchor = n2.targetAnchor = n1.targetAnchor;
			const wasDisabled = isTeleportDisabled(n1.props);
			const currentContainer = wasDisabled ? container : target;
			const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
			if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
			else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
			if (dynamicChildren) {
				patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
				traverseStaticChildren(n1, n2, true);
			} else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
			if (disabled) {
				if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
				else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
			} else if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
				const nextTarget = resolveTarget(n2.props, querySelector);
				if (nextTarget) {
					n2.target = nextTarget;
					moveTeleport(n2, nextTarget, null, internals, 0);
				}
			} else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
			updateCssVars(n2, disabled);
		}
	},
	remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
		const { shapeFlag, children, anchor, targetStart, targetAnchor, target, props } = vnode;
		const disabled = isTeleportDisabled(props);
		const shouldRemove = doRemove || !disabled;
		const pendingMount = pendingMounts.get(vnode);
		if (pendingMount) {
			pendingMount.flags |= 8;
			pendingMounts.delete(vnode);
		}
		if (target) {
			hostRemove(targetStart);
			hostRemove(targetAnchor);
		}
		doRemove && hostRemove(anchor);
		if (!pendingMount && (disabled || target) && shapeFlag & 16) for (let i = 0; i < children.length; i++) {
			const child = children[i];
			unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
		}
	},
	move: moveTeleport,
	hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
	if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
	const { el, anchor, shapeFlag, children, props } = vnode;
	const isReorder = moveType === 2;
	if (isReorder) insert(el, container, parentAnchor);
	if (!pendingMounts.has(vnode) && (!isReorder || isTeleportDisabled(props))) {
		if (shapeFlag & 16) for (let i = 0; i < children.length; i++) move(children[i], container, parentAnchor, 2);
	}
	if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector, insert, createText } }, hydrateChildren) {
	function hydrateAnchor(target2, targetNode) {
		let targetAnchor = targetNode;
		while (targetAnchor) {
			if (targetAnchor && targetAnchor.nodeType === 8) {
				if (targetAnchor.data === "teleport start anchor") vnode.targetStart = targetAnchor;
				else if (targetAnchor.data === "teleport anchor") {
					vnode.targetAnchor = targetAnchor;
					target2._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
					break;
				}
			}
			targetAnchor = nextSibling(targetAnchor);
		}
	}
	function hydrateDisabledTeleport(node2, vnode2) {
		vnode2.anchor = hydrateChildren(nextSibling(node2), vnode2, parentNode(node2), parentComponent, parentSuspense, slotScopeIds, optimized);
	}
	const target = vnode.target = resolveTarget(vnode.props, querySelector);
	const disabled = isTeleportDisabled(vnode.props);
	if (target) {
		const targetNode = target._lpa || target.firstChild;
		if (vnode.shapeFlag & 16) {
			if (disabled) {
				hydrateDisabledTeleport(node, vnode);
				hydrateAnchor(target, targetNode);
				if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert, parentNode(node) === target ? node : null);
			} else {
				vnode.anchor = nextSibling(node);
				hydrateAnchor(target, targetNode);
				if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert);
				hydrateChildren(targetNode && nextSibling(targetNode), vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
			}
		}
		updateCssVars(vnode, disabled);
	} else if (disabled) {
		if (vnode.shapeFlag & 16) {
			hydrateDisabledTeleport(node, vnode);
			vnode.targetStart = node;
			vnode.targetAnchor = nextSibling(node);
		}
	}
	return vnode.anchor && nextSibling(vnode.anchor);
}
var Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
	const ctx = vnode.ctx;
	if (ctx && ctx.ut) {
		let node, anchor;
		if (isDisabled) {
			node = vnode.el;
			anchor = vnode.anchor;
		} else {
			node = vnode.targetStart;
			anchor = vnode.targetAnchor;
		}
		while (node && node !== anchor) {
			if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
			node = node.nextSibling;
		}
		ctx.ut();
	}
}
function prepareAnchor(target, vnode, createText, insert, anchor = null) {
	const targetStart = vnode.targetStart = createText("");
	const targetAnchor = vnode.targetAnchor = createText("");
	targetStart[TeleportEndKey] = targetAnchor;
	if (target) {
		insert(targetStart, target, anchor);
		insert(targetAnchor, target, anchor);
	}
	return targetAnchor;
}
var leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
function findNonCommentChild(children) {
	let child = children[0];
	if (children.length > 1) {
		for (const c of children) if (c.type !== Comment) {
			child = c;
			break;
		}
	}
	return child;
}
function getInnerChild$1(vnode) {
	if (!isKeepAlive(vnode)) {
		if (isTeleport(vnode.type) && vnode.children) return findNonCommentChild(vnode.children);
		return vnode;
	}
	if (vnode.component) return vnode.component.subTree;
	const { shapeFlag, children } = vnode;
	if (children) {
		if (shapeFlag & 16) return children[0];
		if (shapeFlag & 32 && isFunction(children.default)) return children.default();
	}
}
function setTransitionHooks(vnode, hooks) {
	if (vnode.shapeFlag & 6 && vnode.component) {
		vnode.transition = hooks;
		const subTree = vnode.component.subTree;
		setTransitionHooks(isTeleport(subTree.type) ? getInnerChild$1(subTree) || subTree : subTree, hooks);
	} else if (vnode.shapeFlag & 128) {
		vnode.ssContent.transition = hooks.clone(vnode.ssContent);
		vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
	} else vnode.transition = hooks;
}
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
	return isFunction(options) ? /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))() : options;
}
function useId() {
	const i = getCurrentInstance();
	if (i) return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
	return "";
}
function markAsyncBoundary(instance) {
	instance.ids = [
		instance.ids[0] + instance.ids[2]++ + "-",
		0,
		0
	];
}
function isTemplateRefKey(refs, key) {
	let desc;
	return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
}
var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
	if (isArray(rawRef)) {
		rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
		return;
	}
	if (isAsyncWrapper(vnode) && !isUnmount) {
		if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
		return;
	}
	const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
	const value = isUnmount ? null : refValue;
	const { i: owner, r: ref } = rawRef;
	const oldRef = oldRawRef && oldRawRef.r;
	const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
	const setupState = owner.setupState;
	const rawSetupState = /* @__PURE__ */ toRaw(setupState);
	const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
		if (isTemplateRefKey(refs, key)) return false;
		return hasOwn(rawSetupState, key);
	};
	const canSetRef = (ref2, key) => {
		if (key && isTemplateRefKey(refs, key)) return false;
		return true;
	};
	if (oldRef != null && oldRef !== ref) {
		invalidatePendingSetRef(oldRawRef);
		if (isString(oldRef)) {
			refs[oldRef] = null;
			if (canSetSetupRef(oldRef)) setupState[oldRef] = null;
		} else if (/* @__PURE__ */ isRef(oldRef)) {
			const oldRawRefAtom = oldRawRef;
			if (canSetRef(oldRef, oldRawRefAtom.k)) oldRef.value = null;
			if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
		}
	}
	if (isFunction(ref)) callWithErrorHandling(ref, owner, 12, [value, refs]);
	else {
		const _isString = isString(ref);
		const _isRef = /* @__PURE__ */ isRef(ref);
		if (_isString || _isRef) {
			const doSet = () => {
				if (rawRef.f) {
					const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : canSetRef(ref) || !rawRef.k ? ref.value : refs[rawRef.k];
					if (isUnmount) isArray(existing) && remove(existing, refValue);
					else if (!isArray(existing)) {
						if (_isString) {
							refs[ref] = [refValue];
							if (canSetSetupRef(ref)) setupState[ref] = refs[ref];
						} else {
							const newVal = [refValue];
							if (canSetRef(ref, rawRef.k)) ref.value = newVal;
							if (rawRef.k) refs[rawRef.k] = newVal;
						}
					} else if (!existing.includes(refValue)) existing.push(refValue);
				} else if (_isString) {
					refs[ref] = value;
					if (canSetSetupRef(ref)) setupState[ref] = value;
				} else if (_isRef) {
					if (canSetRef(ref, rawRef.k)) ref.value = value;
					if (rawRef.k) refs[rawRef.k] = value;
				}
			};
			if (value) {
				const job = () => {
					doSet();
					pendingSetRefMap.delete(rawRef);
				};
				job.id = -1;
				pendingSetRefMap.set(rawRef, job);
				queuePostRenderEffect(job, parentSuspense);
			} else {
				invalidatePendingSetRef(rawRef);
				doSet();
			}
		}
	}
}
function invalidatePendingSetRef(rawRef) {
	const pendingSetRef = pendingSetRefMap.get(rawRef);
	if (pendingSetRef) {
		pendingSetRef.flags |= 8;
		pendingSetRefMap.delete(rawRef);
	}
}
getGlobalThis().requestIdleCallback;
getGlobalThis().cancelIdleCallback;
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
	registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
	registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
	const wrappedHook = hook.__wdc || (hook.__wdc = () => {
		let current = target;
		while (current) {
			if (current.isDeactivated) return;
			current = current.parent;
		}
		return hook();
	});
	injectHook(type, wrappedHook, target);
	if (target) {
		let current = target.parent;
		while (current && current.parent) {
			if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
			current = current.parent;
		}
	}
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
	const injected = injectHook(type, hook, keepAliveRoot, true);
	onUnmounted(() => {
		remove(keepAliveRoot[type], injected);
	}, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
	if (target) {
		const hooks = target[type] || (target[type] = []);
		const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
			pauseTracking();
			const reset = setCurrentInstance(target);
			const res = callWithAsyncErrorHandling(hook, target, type, args);
			reset();
			resetTracking();
			return res;
		});
		if (prepend) hooks.unshift(wrappedHook);
		else hooks.push(wrappedHook);
		return wrappedHook;
	}
}
var createHook = (lifecycle) => (hook, target = currentInstance) => {
	if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args) => hook(...args), target);
};
var onBeforeMount = createHook("bm");
var onMounted = createHook("m");
var onBeforeUpdate = createHook("bu");
var onUpdated = createHook("u");
var onBeforeUnmount = createHook("bum");
var onUnmounted = createHook("um");
var onServerPrefetch = createHook("sp");
var onRenderTriggered = createHook("rtg");
var onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
	injectHook("ec", hook, target);
}
var COMPONENTS = "components";
var NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
	if (isString(component)) return resolveAsset(COMPONENTS, component, false) || component;
	else return component || NULL_DYNAMIC_COMPONENT;
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
	const instance = currentRenderingInstance || currentInstance;
	if (instance) {
		const Component = instance.type;
		if (type === COMPONENTS) {
			const selfName = getComponentName(Component, false);
			if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) return Component;
		}
		const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
		if (!res && maybeSelfReference) return Component;
		return res;
	}
}
function resolve(registry, name) {
	return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
	let ret;
	const cached = cache && cache[index];
	const sourceIsArray = isArray(source);
	if (sourceIsArray || isString(source)) {
		const sourceIsReactiveArray = sourceIsArray && /* @__PURE__ */ isReactive(source);
		let needsWrap = false;
		let isReadonlySource = false;
		if (sourceIsReactiveArray) {
			needsWrap = !/* @__PURE__ */ isShallow(source);
			isReadonlySource = /* @__PURE__ */ isReadonly(source);
			source = shallowReadArray(source);
		}
		ret = new Array(source.length);
		for (let i = 0, l = source.length; i < l; i++) ret[i] = renderItem(needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i], i, void 0, cached && cached[i]);
	} else if (typeof source === "number") {
		ret = new Array(source);
		for (let i = 0; i < source; i++) ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
	} else if (isObject(source)) {
		if (source[Symbol.iterator]) ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
		else {
			const keys = Object.keys(source);
			ret = new Array(keys.length);
			for (let i = 0, l = keys.length; i < l; i++) {
				const key = keys[i];
				ret[i] = renderItem(source[key], key, i, cached && cached[i]);
			}
		}
	} else ret = [];
	if (cache) cache[index] = ret;
	return ret;
}
function renderSlot(slots, name, props, fallback, noSlotted, branchKey) {
	if (props == null) props = {};
	if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
		const slotProps = branchKey != null && props.key == null ? extend({}, props, { key: branchKey }) : props;
		const hasProps = Object.keys(slotProps).length > 0;
		if (name !== "default") slotProps.name = name;
		return openBlock(), createBlock(Fragment, null, [createVNode("slot", slotProps, fallback && fallback())], hasProps ? -2 : 64);
	}
	let slot = slots[name];
	if (slot && slot._c) slot._d = false;
	const prevStackSize = blockStack.length;
	openBlock();
	let rendered;
	try {
		const validSlotContent = slot && ensureValidVNode(slot(props));
		const slotKey = props.key || branchKey || validSlotContent && validSlotContent.key;
		rendered = createBlock(Fragment, { key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + (!validSlotContent && fallback ? "_fb" : "") }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
	} catch (err) {
		for (let i = blockStack.length; i > prevStackSize; i--) closeBlock();
		throw err;
	} finally {
		if (slot && slot._c) slot._d = true;
	}
	if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [rendered.scopeId + "-s"];
	return rendered;
}
function ensureValidVNode(vnodes) {
	return vnodes.some((child) => {
		if (!isVNode(child)) return true;
		if (child.type === Comment) return false;
		if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
		return true;
	}) ? vnodes : null;
}
var getPublicInstance = (i) => {
	if (!i) return null;
	if (isStatefulComponent(i)) return getComponentPublicInstance(i);
	return getPublicInstance(i.parent);
};
var publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
	$: (i) => i,
	$el: (i) => i.vnode.el,
	$data: (i) => i.data,
	$props: (i) => i.props,
	$attrs: (i) => i.attrs,
	$slots: (i) => i.slots,
	$refs: (i) => i.refs,
	$parent: (i) => getPublicInstance(i.parent),
	$root: (i) => getPublicInstance(i.root),
	$host: (i) => i.ce,
	$emit: (i) => i.emit,
	$options: (i) => resolveMergedOptions(i),
	$forceUpdate: (i) => i.f || (i.f = () => {
		queueJob(i.update);
	}),
	$nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
	$watch: (i) => instanceWatch.bind(i)
});
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
var PublicInstanceProxyHandlers = {
	get({ _: instance }, key) {
		if (key === "__v_skip") return true;
		const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
		if (key[0] !== "$") {
			const n = accessCache[key];
			if (n !== void 0) switch (n) {
				case 1: return setupState[key];
				case 2: return data[key];
				case 4: return ctx[key];
				case 3: return props[key];
			}
			else if (hasSetupBinding(setupState, key)) {
				accessCache[key] = 1;
				return setupState[key];
			} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
				accessCache[key] = 2;
				return data[key];
			} else if (hasOwn(props, key)) {
				accessCache[key] = 3;
				return props[key];
			} else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
				accessCache[key] = 4;
				return ctx[key];
			} else if (shouldCacheAccess) accessCache[key] = 0;
		}
		const publicGetter = publicPropertiesMap[key];
		let cssModule, globalProperties;
		if (publicGetter) {
			if (key === "$attrs") track(instance.attrs, "get", "");
			return publicGetter(instance);
		} else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
		else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
			accessCache[key] = 4;
			return ctx[key];
		} else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) return globalProperties[key];
	},
	set({ _: instance }, key, value) {
		const { data, setupState, ctx } = instance;
		if (hasSetupBinding(setupState, key)) {
			setupState[key] = value;
			return true;
		} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
			data[key] = value;
			return true;
		} else if (hasOwn(instance.props, key)) return false;
		if (key[0] === "$" && key.slice(1) in instance) return false;
		else ctx[key] = value;
		return true;
	},
	has({ _: { data, setupState, accessCache, ctx, appContext, props, type } }, key) {
		let cssModules;
		return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
	},
	defineProperty(target, key, descriptor) {
		if (descriptor.get != null) target._.accessCache[key] = 0;
		else if (hasOwn(descriptor, "value")) this.set(target, key, descriptor.value, null);
		return Reflect.defineProperty(target, key, descriptor);
	}
};
function useSlots() {
	return getContext("useSlots").slots;
}
function useAttrs() {
	return getContext("useAttrs").attrs;
}
function getContext(calledFunctionName) {
	const i = getCurrentInstance();
	return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
	return isArray(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
}
var shouldCacheAccess = true;
function applyOptions(instance) {
	const options = resolveMergedOptions(instance);
	const publicThis = instance.proxy;
	const ctx = instance.ctx;
	shouldCacheAccess = false;
	if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc");
	const { data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, expose, inheritAttrs, components, directives, filters } = options;
	const checkDuplicateProperties = null;
	if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
	if (methods) for (const key in methods) {
		const methodHandler = methods[key];
		if (isFunction(methodHandler)) ctx[key] = methodHandler.bind(publicThis);
	}
	if (dataOptions) {
		const data = dataOptions.call(publicThis, publicThis);
		if (!isObject(data)) {} else instance.data = /* @__PURE__ */ reactive(data);
	}
	shouldCacheAccess = true;
	if (computedOptions) for (const key in computedOptions) {
		const opt = computedOptions[key];
		const c = computed({
			get: isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP,
			set: !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP
		});
		Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => c.value,
			set: (v) => c.value = v
		});
	}
	if (watchOptions) for (const key in watchOptions) createWatcher(watchOptions[key], ctx, publicThis, key);
	if (provideOptions) {
		const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
		Reflect.ownKeys(provides).forEach((key) => {
			provide(key, provides[key]);
		});
	}
	if (created) callHook(created, instance, "c");
	function registerLifecycleHook(register, hook) {
		if (isArray(hook)) hook.forEach((_hook) => register(_hook.bind(publicThis)));
		else if (hook) register(hook.bind(publicThis));
	}
	registerLifecycleHook(onBeforeMount, beforeMount);
	registerLifecycleHook(onMounted, mounted);
	registerLifecycleHook(onBeforeUpdate, beforeUpdate);
	registerLifecycleHook(onUpdated, updated);
	registerLifecycleHook(onActivated, activated);
	registerLifecycleHook(onDeactivated, deactivated);
	registerLifecycleHook(onErrorCaptured, errorCaptured);
	registerLifecycleHook(onRenderTracked, renderTracked);
	registerLifecycleHook(onRenderTriggered, renderTriggered);
	registerLifecycleHook(onBeforeUnmount, beforeUnmount);
	registerLifecycleHook(onUnmounted, unmounted);
	registerLifecycleHook(onServerPrefetch, serverPrefetch);
	if (isArray(expose)) {
		if (expose.length) {
			const exposed = instance.exposed || (instance.exposed = {});
			expose.forEach((key) => {
				Object.defineProperty(exposed, key, {
					get: () => publicThis[key],
					set: (val) => publicThis[key] = val,
					enumerable: true
				});
			});
		} else if (!instance.exposed) instance.exposed = {};
	}
	if (render && instance.render === NOOP) instance.render = render;
	if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
	if (components) instance.components = components;
	if (directives) instance.directives = directives;
	if (serverPrefetch) markAsyncBoundary(instance);
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
	if (isArray(injectOptions)) injectOptions = normalizeInject(injectOptions);
	for (const key in injectOptions) {
		const opt = injectOptions[key];
		let injected;
		if (isObject(opt)) {
			if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
			else injected = inject(opt.from || key);
		} else injected = inject(opt);
		if (/* @__PURE__ */ isRef(injected)) Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => injected.value,
			set: (v) => injected.value = v
		});
		else ctx[key] = injected;
	}
}
function callHook(hook, instance, type) {
	callWithAsyncErrorHandling(isArray(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
	let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
	if (isString(raw)) {
		const handler = ctx[raw];
		if (isFunction(handler)) watch(getter, handler);
	} else if (isFunction(raw)) watch(getter, raw.bind(publicThis));
	else if (isObject(raw)) {
		if (isArray(raw)) raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
		else {
			const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
			if (isFunction(handler)) watch(getter, handler, raw);
		}
	}
}
function resolveMergedOptions(instance) {
	const base = instance.type;
	const { mixins, extends: extendsOptions } = base;
	const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
	const cached = cache.get(base);
	let resolved;
	if (cached) resolved = cached;
	else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
	else {
		resolved = {};
		if (globalMixins.length) globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
		mergeOptions(resolved, base, optionMergeStrategies);
	}
	if (isObject(base)) cache.set(base, resolved);
	return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
	const { mixins, extends: extendsOptions } = from;
	if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
	if (mixins) mixins.forEach((m) => mergeOptions(to, m, strats, true));
	for (const key in from) if (asMixin && key === "expose") {} else {
		const strat = internalOptionMergeStrats[key] || strats && strats[key];
		to[key] = strat ? strat(to[key], from[key]) : from[key];
	}
	return to;
}
var internalOptionMergeStrats = {
	data: mergeDataFn,
	props: mergeEmitsOrPropsOptions,
	emits: mergeEmitsOrPropsOptions,
	methods: mergeObjectOptions,
	computed: mergeObjectOptions,
	beforeCreate: mergeAsArray,
	created: mergeAsArray,
	beforeMount: mergeAsArray,
	mounted: mergeAsArray,
	beforeUpdate: mergeAsArray,
	updated: mergeAsArray,
	beforeDestroy: mergeAsArray,
	beforeUnmount: mergeAsArray,
	destroyed: mergeAsArray,
	unmounted: mergeAsArray,
	activated: mergeAsArray,
	deactivated: mergeAsArray,
	errorCaptured: mergeAsArray,
	serverPrefetch: mergeAsArray,
	components: mergeObjectOptions,
	directives: mergeObjectOptions,
	watch: mergeWatchOptions,
	provide: mergeDataFn,
	inject: mergeInject
};
function mergeDataFn(to, from) {
	if (!from) return to;
	if (!to) return from;
	return function mergedDataFn() {
		return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
	};
}
function mergeInject(to, from) {
	return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
	if (isArray(raw)) {
		const res = {};
		for (let i = 0; i < raw.length; i++) res[raw[i]] = raw[i];
		return res;
	}
	return raw;
}
function mergeAsArray(to, from) {
	return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
	return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
	if (to) {
		if (isArray(to) && isArray(from)) return [.../* @__PURE__ */ new Set([...to, ...from])];
		return extend(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
	} else return from;
}
function mergeWatchOptions(to, from) {
	if (!to) return from;
	if (!from) return to;
	const merged = extend(/* @__PURE__ */ Object.create(null), to);
	for (const key in from) merged[key] = mergeAsArray(to[key], from[key]);
	return merged;
}
function createAppContext() {
	return {
		app: null,
		config: {
			isNativeTag: NO,
			performance: false,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var uid$1 = 0;
function createAppAPI(render, hydrate) {
	return function createApp(rootComponent, rootProps = null) {
		if (!isFunction(rootComponent)) rootComponent = extend({}, rootComponent);
		if (rootProps != null && !isObject(rootProps)) rootProps = null;
		const context = createAppContext();
		const installedPlugins = /* @__PURE__ */ new WeakSet();
		const pluginCleanupFns = [];
		let isMounted = false;
		const app = context.app = {
			_uid: uid$1++,
			_component: rootComponent,
			_props: rootProps,
			_container: null,
			_context: context,
			_instance: null,
			version,
			get config() {
				return context.config;
			},
			set config(v) {},
			use(plugin, ...options) {
				if (installedPlugins.has(plugin)) {} else if (plugin && isFunction(plugin.install)) {
					installedPlugins.add(plugin);
					plugin.install(app, ...options);
				} else if (isFunction(plugin)) {
					installedPlugins.add(plugin);
					plugin(app, ...options);
				}
				return app;
			},
			mixin(mixin) {
				if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
				return app;
			},
			component(name, component) {
				if (!component) return context.components[name];
				context.components[name] = component;
				return app;
			},
			directive(name, directive) {
				if (!directive) return context.directives[name];
				context.directives[name] = directive;
				return app;
			},
			mount(rootContainer, isHydrate, namespace) {
				if (!isMounted) {
					const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
					vnode.appContext = context;
					if (namespace === true) namespace = "svg";
					else if (namespace === false) namespace = void 0;
					if (isHydrate && hydrate) hydrate(vnode, rootContainer);
					else render(vnode, rootContainer, namespace);
					isMounted = true;
					app._container = rootContainer;
					rootContainer.__vue_app__ = app;
					return getComponentPublicInstance(vnode.component);
				}
			},
			onUnmount(cleanupFn) {
				pluginCleanupFns.push(cleanupFn);
			},
			unmount() {
				if (isMounted) {
					callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
					render(null, app._container);
					delete app._container.__vue_app__;
				}
			},
			provide(key, value) {
				context.provides[key] = value;
				return app;
			},
			runWithContext(fn) {
				const lastApp = currentApp;
				currentApp = app;
				try {
					return fn();
				} finally {
					currentApp = lastApp;
				}
			}
		};
		return app;
	};
}
var currentApp = null;
var getModelModifiers = (props, modelName) => {
	return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
	if (instance.isUnmounted) return;
	const props = instance.vnode.props || EMPTY_OBJ;
	let args = rawArgs;
	const isModelListener = event.startsWith("update:");
	const modifiers = isModelListener && getModelModifiers(props, event.slice(7));
	if (modifiers) {
		if (modifiers.trim) args = rawArgs.map((a) => isString(a) ? a.trim() : a);
		if (modifiers.number) args = args.map(looseToNumber);
	}
	let handlerName;
	let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
	if (!handler && isModelListener) handler = props[handlerName = toHandlerKey(hyphenate(event))];
	if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
	const onceHandler = props[handlerName + `Once`];
	if (onceHandler) {
		if (!instance.emitted) instance.emitted = {};
		else if (instance.emitted[handlerName]) return;
		instance.emitted[handlerName] = true;
		callWithAsyncErrorHandling(onceHandler, instance, 6, args);
	}
}
var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
	const cached = cache.get(comp);
	if (cached !== void 0) return cached;
	const raw = comp.emits;
	let normalized = {};
	let hasExtends = false;
	if (!isFunction(comp)) {
		const extendEmits = (raw2) => {
			const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
			if (normalizedFromExtend) {
				hasExtends = true;
				extend(normalized, normalizedFromExtend);
			}
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
		if (comp.extends) extendEmits(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendEmits);
	}
	if (!raw && !hasExtends) {
		if (isObject(comp)) cache.set(comp, null);
		return null;
	}
	if (isArray(raw)) raw.forEach((key) => normalized[key] = null);
	else extend(normalized, raw);
	if (isObject(comp)) cache.set(comp, normalized);
	return normalized;
}
function isEmitListener(options, key) {
	if (!options || !isOn(key)) return false;
	key = key.slice(2);
	key = key === "Once" ? key : key.replace(/Once$/, "");
	return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
function renderComponentRoot(instance) {
	const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
	const prev = setCurrentRenderingInstance(instance);
	let result;
	let fallthroughAttrs;
	try {
		if (vnode.shapeFlag & 4) {
			const proxyToUse = withProxy || proxy;
			const thisProxy = proxyToUse;
			result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
			fallthroughAttrs = attrs;
		} else {
			const render2 = Component;
			result = normalizeVNode(render2.length > 1 ? render2(props, {
				attrs,
				slots,
				emit
			}) : render2(props, null));
			fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
		}
	} catch (err) {
		blockStack.length = 0;
		handleError(err, instance, 1);
		result = createVNode(Comment);
	}
	let root = result;
	if (fallthroughAttrs && inheritAttrs !== false) {
		const keys = Object.keys(fallthroughAttrs);
		const { shapeFlag } = root;
		if (keys.length) {
			if (shapeFlag & 7) {
				if (propsOptions && keys.some(isModelListener)) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
				root = cloneVNode(root, fallthroughAttrs, false, true);
			}
		}
	}
	if (vnode.dirs) {
		root = cloneVNode(root, null, false, true);
		root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
	}
	if (vnode.transition) setTransitionHooks(isTeleport(root.type) ? getInnerChild$1(root) || root : root, vnode.transition);
	result = root;
	setCurrentRenderingInstance(prev);
	return result;
}
var getFunctionalFallthrough = (attrs) => {
	let res;
	for (const key in attrs) if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
	return res;
};
var filterModelListeners = (attrs, props) => {
	const res = {};
	for (const key in attrs) if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
	return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
	const { props: prevProps, children: prevChildren, component } = prevVNode;
	const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
	const emits = component.emitsOptions;
	if (nextVNode.dirs || nextVNode.transition) return true;
	if (optimized && patchFlag >= 0) {
		if (patchFlag & 1024) return true;
		if (patchFlag & 16) {
			if (!prevProps) return !!nextProps;
			return hasPropsChanged(prevProps, nextProps, emits);
		} else if (patchFlag & 8) {
			const dynamicProps = nextVNode.dynamicProps;
			for (let i = 0; i < dynamicProps.length; i++) {
				const key = dynamicProps[i];
				if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) return true;
			}
		}
	} else {
		if (prevChildren || nextChildren) {
			if (!nextChildren || !nextChildren.$stable) return true;
		}
		if (prevProps === nextProps) return false;
		if (!prevProps) return !!nextProps;
		if (!nextProps) return true;
		return hasPropsChanged(prevProps, nextProps, emits);
	}
	return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
	const nextKeys = Object.keys(nextProps);
	if (nextKeys.length !== Object.keys(prevProps).length) return true;
	for (let i = 0; i < nextKeys.length; i++) {
		const key = nextKeys[i];
		if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) return true;
	}
	return false;
}
function hasPropValueChanged(nextProps, prevProps, key) {
	const nextProp = nextProps[key];
	const prevProp = prevProps[key];
	if (key === "style" && isObject(nextProp) && isObject(prevProp)) return !looseEqual(nextProp, prevProp);
	return nextProp !== prevProp;
}
function updateHOCHostEl({ vnode, parent, suspense }, el) {
	while (parent) {
		const root = parent.subTree;
		if (root.suspense && root.suspense.activeBranch === vnode) {
			root.suspense.vnode.el = root.el = el;
			vnode = root;
		}
		if (root === vnode) {
			(vnode = parent.vnode).el = el;
			parent = parent.parent;
		} else break;
	}
	if (suspense && suspense.activeBranch === vnode) suspense.vnode.el = el;
}
var internalObjectProto = {};
var createInternalObject = () => Object.create(internalObjectProto);
var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
	const props = {};
	const attrs = createInternalObject();
	instance.propsDefaults = /* @__PURE__ */ Object.create(null);
	setFullProps(instance, rawProps, props, attrs);
	for (const key in instance.propsOptions[0]) if (!(key in props)) props[key] = void 0;
	if (isStateful) instance.props = isSSR ? props : /* @__PURE__ */ shallowReactive(props);
	else if (!instance.type.props) instance.props = attrs;
	else instance.props = props;
	instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
	const { props, attrs, vnode: { patchFlag } } = instance;
	const rawCurrentProps = /* @__PURE__ */ toRaw(props);
	const [options] = instance.propsOptions;
	let hasAttrsChanged = false;
	if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
		if (patchFlag & 8) {
			const propsToUpdate = instance.vnode.dynamicProps;
			for (let i = 0; i < propsToUpdate.length; i++) {
				let key = propsToUpdate[i];
				if (isEmitListener(instance.emitsOptions, key)) continue;
				const value = rawProps[key];
				if (options) {
					if (hasOwn(attrs, key)) {
						if (value !== attrs[key]) {
							attrs[key] = value;
							hasAttrsChanged = true;
						}
					} else {
						const camelizedKey = camelize(key);
						props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
					}
				} else if (value !== attrs[key]) {
					attrs[key] = value;
					hasAttrsChanged = true;
				}
			}
		}
	} else {
		if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
		let kebabKey;
		for (const key in rawCurrentProps) if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
			if (options) {
				if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
			} else delete props[key];
		}
		if (attrs !== rawCurrentProps) {
			for (const key in attrs) if (!rawProps || !hasOwn(rawProps, key) && true) {
				delete attrs[key];
				hasAttrsChanged = true;
			}
		}
	}
	if (hasAttrsChanged) trigger(instance.attrs, "set", "");
}
function setFullProps(instance, rawProps, props, attrs) {
	const [options, needCastKeys] = instance.propsOptions;
	let hasAttrsChanged = false;
	let rawCastValues;
	if (rawProps) for (let key in rawProps) {
		if (isReservedProp(key)) continue;
		const value = rawProps[key];
		let camelKey;
		if (options && hasOwn(options, camelKey = camelize(key))) {
			if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
			else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
		} else if (!isEmitListener(instance.emitsOptions, key)) {
			if (!(key in attrs) || value !== attrs[key]) {
				attrs[key] = value;
				hasAttrsChanged = true;
			}
		}
	}
	if (needCastKeys) {
		const rawCurrentProps = /* @__PURE__ */ toRaw(props);
		const castValues = rawCastValues || EMPTY_OBJ;
		for (let i = 0; i < needCastKeys.length; i++) {
			const key = needCastKeys[i];
			props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
		}
	}
	return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
	const opt = options[key];
	if (opt != null) {
		const hasDefault = hasOwn(opt, "default");
		if (hasDefault && value === void 0) {
			const defaultValue = opt.default;
			if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
				const { propsDefaults } = instance;
				if (key in propsDefaults) value = propsDefaults[key];
				else {
					const reset = setCurrentInstance(instance);
					value = propsDefaults[key] = defaultValue.call(null, props);
					reset();
				}
			} else value = defaultValue;
			if (instance.ce) instance.ce._setProp(key, value);
		}
		if (opt[0]) {
			if (isAbsent && !hasDefault) value = false;
			else if (opt[1] && (value === "" || value === hyphenate(key))) value = true;
		}
	}
	return value;
}
var mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinPropsCache : appContext.propsCache;
	const cached = cache.get(comp);
	if (cached) return cached;
	const raw = comp.props;
	const normalized = {};
	const needCastKeys = [];
	let hasExtends = false;
	if (!isFunction(comp)) {
		const extendProps = (raw2) => {
			hasExtends = true;
			const [props, keys] = normalizePropsOptions(raw2, appContext, true);
			extend(normalized, props);
			if (keys) needCastKeys.push(...keys);
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
		if (comp.extends) extendProps(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendProps);
	}
	if (!raw && !hasExtends) {
		if (isObject(comp)) cache.set(comp, EMPTY_ARR);
		return EMPTY_ARR;
	}
	if (isArray(raw)) for (let i = 0; i < raw.length; i++) {
		const normalizedKey = camelize(raw[i]);
		if (validatePropName(normalizedKey)) normalized[normalizedKey] = EMPTY_OBJ;
	}
	else if (raw) for (const key in raw) {
		const normalizedKey = camelize(key);
		if (validatePropName(normalizedKey)) {
			const opt = raw[key];
			const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
			const propType = prop.type;
			let shouldCast = false;
			let shouldCastTrue = true;
			if (isArray(propType)) for (let index = 0; index < propType.length; ++index) {
				const type = propType[index];
				const typeName = isFunction(type) && type.name;
				if (typeName === "Boolean") {
					shouldCast = true;
					break;
				} else if (typeName === "String") shouldCastTrue = false;
			}
			else shouldCast = isFunction(propType) && propType.name === "Boolean";
			prop[0] = shouldCast;
			prop[1] = shouldCastTrue;
			if (shouldCast || hasOwn(prop, "default")) needCastKeys.push(normalizedKey);
		}
	}
	const res = [normalized, needCastKeys];
	if (isObject(comp)) cache.set(comp, res);
	return res;
}
function validatePropName(key) {
	if (key[0] !== "$" && !isReservedProp(key)) return true;
	return false;
}
var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
var normalizeSlot = (key, rawSlot, ctx) => {
	if (rawSlot._n) return rawSlot;
	const normalized = withCtx((...args) => {
		return normalizeSlotValue(rawSlot(...args));
	}, ctx);
	normalized._c = false;
	return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
	const ctx = rawSlots._ctx;
	for (const key in rawSlots) {
		if (isInternalKey(key)) continue;
		const value = rawSlots[key];
		if (isFunction(value)) slots[key] = normalizeSlot(key, value, ctx);
		else if (value != null) {
			const normalized = normalizeSlotValue(value);
			slots[key] = () => normalized;
		}
	}
};
var normalizeVNodeSlots = (instance, children) => {
	const normalized = normalizeSlotValue(children);
	instance.slots.default = () => normalized;
};
var assignSlots = (slots, children, optimized) => {
	for (const key in children) if (optimized || !isInternalKey(key)) slots[key] = children[key];
};
var initSlots = (instance, children, optimized) => {
	const slots = instance.slots = createInternalObject();
	if (instance.vnode.shapeFlag & 32) {
		const type = children._;
		if (type) {
			assignSlots(slots, children, optimized);
			if (optimized) def(slots, "_", type, true);
		} else normalizeObjectSlots(children, slots);
	} else if (children) normalizeVNodeSlots(instance, children);
};
var updateSlots = (instance, children, optimized) => {
	const { vnode, slots } = instance;
	let needDeletionCheck = true;
	let deletionComparisonTarget = EMPTY_OBJ;
	if (vnode.shapeFlag & 32) {
		const type = children._;
		if (type) {
			if (optimized && type === 1) needDeletionCheck = false;
			else assignSlots(slots, children, optimized);
		} else {
			needDeletionCheck = !children.$stable;
			normalizeObjectSlots(children, slots);
		}
		deletionComparisonTarget = children;
	} else if (children) {
		normalizeVNodeSlots(instance, children);
		deletionComparisonTarget = { default: 1 };
	}
	if (needDeletionCheck) {
		for (const key in slots) if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
	}
};
var queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
	return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
	const target = getGlobalThis();
	target.__VUE__ = true;
	const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
	const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
		if (n1 === n2) return;
		if (n1 && !isSameVNodeType(n1, n2)) {
			anchor = getNextHostNode(n1);
			unmount(n1, parentComponent, parentSuspense, true);
			n1 = null;
		}
		if (n2.patchFlag === -2) {
			optimized = false;
			n2.dynamicChildren = null;
		}
		const { type, ref, shapeFlag } = n2;
		switch (type) {
			case Text:
				processText(n1, n2, container, anchor);
				break;
			case Comment:
				processCommentNode(n1, n2, container, anchor);
				break;
			case Static:
				if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
				break;
			case Fragment:
				processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				break;
			default: if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
			else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
		}
		if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
		else if (ref == null && n1 && n1.ref != null) setRef(n1.ref, null, parentSuspense, n1, true);
	};
	const processText = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
		else {
			const el = n2.el = n1.el;
			if (n2.children !== n1.children) hostSetText(el, n2.children);
		}
	};
	const processCommentNode = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
		else n2.el = n1.el;
	};
	const mountStaticNode = (n2, container, anchor, namespace) => {
		[n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
	};
	const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
		let next;
		while (el && el !== anchor) {
			next = hostNextSibling(el);
			hostInsert(el, container, nextSibling);
			el = next;
		}
		hostInsert(anchor, container, nextSibling);
	};
	const removeStaticNode = ({ el, anchor }) => {
		let next;
		while (el && el !== anchor) {
			next = hostNextSibling(el);
			hostRemove(el);
			el = next;
		}
		hostRemove(anchor);
	};
	const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		if (n2.type === "svg") namespace = "svg";
		else if (n2.type === "math") namespace = "mathml";
		if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		else {
			const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
			try {
				if (customElement) customElement._beginPatch();
				patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			} finally {
				if (customElement) customElement._endPatch();
			}
		}
	};
	const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let el;
		let vnodeHook;
		const { props, shapeFlag, transition, dirs } = vnode;
		el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
		if (shapeFlag & 8) hostSetElementText(el, vnode.children);
		else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
		setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
		if (props) {
			for (const key in props) if (key !== "value" && !isReservedProp(key)) hostPatchProp(el, key, null, props[key], namespace, parentComponent);
			if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
			if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		}
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
		const needCallTransitionHooks = needTransition(parentSuspense, transition);
		if (needCallTransitionHooks) transition.beforeEnter(el);
		hostInsert(el, container, anchor);
		if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(() => {
			try {
				vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
				needCallTransitionHooks && transition.enter(el);
				dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
			} finally {}
		}, parentSuspense);
	};
	const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
		if (scopeId) hostSetScopeId(el, scopeId);
		if (slotScopeIds) for (let i = 0; i < slotScopeIds.length; i++) hostSetScopeId(el, slotScopeIds[i]);
		if (parentComponent) {
			let subTree = parentComponent.subTree;
			if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
				const parentVNode = parentComponent.vnode;
				setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
			}
		}
	};
	const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
		for (let i = start; i < children.length; i++) {
			const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
			patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
	};
	const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const el = n2.el = n1.el;
		let { patchFlag, dynamicChildren, dirs } = n2;
		patchFlag |= n1.patchFlag & 16;
		const oldProps = n1.props || EMPTY_OBJ;
		const newProps = n2.props || EMPTY_OBJ;
		let vnodeHook;
		parentComponent && toggleRecurse(parentComponent, false);
		if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
		if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
		parentComponent && toggleRecurse(parentComponent, true);
		if (dynamicChildren && (!n1.dynamicChildren || n1.dynamicChildren.length !== dynamicChildren.length)) {
			patchFlag = 0;
			optimized = false;
			dynamicChildren = null;
		}
		if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) hostSetElementText(el, "");
		if (dynamicChildren) patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
		else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
		if (patchFlag > 0) {
			if (patchFlag & 16) patchProps(el, oldProps, newProps, parentComponent, namespace);
			else {
				if (patchFlag & 2) {
					if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
				}
				if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
				if (patchFlag & 8) {
					const propsToUpdate = n2.dynamicProps;
					for (let i = 0; i < propsToUpdate.length; i++) {
						const key = propsToUpdate[i];
						const prev = oldProps[key];
						const next = newProps[key];
						if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
					}
				}
			}
			if (patchFlag & 1) {
				if (n1.children !== n2.children) hostSetElementText(el, n2.children);
			}
		} else if (!optimized && dynamicChildren == null) patchProps(el, oldProps, newProps, parentComponent, namespace);
		if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
			dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
		}, parentSuspense);
	};
	const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
		for (let i = 0; i < newChildren.length; i++) {
			const oldVNode = oldChildren[i];
			const newVNode = newChildren[i];
			const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & 198) ? hostParentNode(oldVNode.el) : fallbackContainer;
			patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
		}
	};
	const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
		if (oldProps !== newProps) {
			if (oldProps !== EMPTY_OBJ) {
				for (const key in oldProps) if (!isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
			}
			for (const key in newProps) {
				if (isReservedProp(key)) continue;
				const next = newProps[key];
				const prev = oldProps[key];
				if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
			}
			if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
		}
	};
	const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
		const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
		let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
		if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
		if (n1 == null) {
			hostInsert(fragmentStartAnchor, container, anchor);
			hostInsert(fragmentEndAnchor, container, anchor);
			mountChildren(n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		} else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
			patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
			if (n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
		} else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		n2.slotScopeIds = slotScopeIds;
		if (n1 == null) {
			if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
			else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
		} else updateComponent(n1, n2, optimized);
	};
	const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
		const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
		if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
		setupComponent(instance, false, optimized);
		if (instance.asyncDep) {
			parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
			if (!initialVNode.el) {
				const placeholder = instance.subTree = createVNode(Comment);
				processCommentNode(null, placeholder, container, anchor);
				initialVNode.placeholder = placeholder.el;
			}
		} else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
	};
	const updateComponent = (n1, n2, optimized) => {
		const instance = n2.component = n1.component;
		if (shouldUpdateComponent(n1, n2, optimized)) {
			if (instance.asyncDep && !instance.asyncResolved) {
				updateComponentPreRender(instance, n2, optimized);
				return;
			} else {
				instance.next = n2;
				instance.update();
			}
		} else {
			n2.el = n1.el;
			instance.vnode = n2;
		}
	};
	const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
		const componentUpdateFn = () => {
			if (!instance.isMounted) {
				let vnodeHook;
				const { el, props } = initialVNode;
				const { bm, m, parent, root, type } = instance;
				const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
				toggleRecurse(instance, false);
				if (bm) invokeArrayFns(bm);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
				toggleRecurse(instance, true);
				if (el && hydrateNode) {
					const hydrateSubTree = () => {
						instance.subTree = renderComponentRoot(instance);
						hydrateNode(el, instance.subTree, instance, parentSuspense, null);
					};
					if (isAsyncWrapperVNode && type.__asyncHydrate) type.__asyncHydrate(el, instance, hydrateSubTree);
					else hydrateSubTree();
				} else {
					if (root.ce && root.ce._hasShadowRoot()) root.ce._injectChildStyle(type, instance.parent ? instance.parent.type : void 0);
					const subTree = instance.subTree = renderComponentRoot(instance);
					patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
					initialVNode.el = subTree.el;
				}
				if (m) queuePostRenderEffect(m, parentSuspense);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
					const scopedInitialVNode = initialVNode;
					queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
				}
				if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
				instance.isMounted = true;
				initialVNode = container = anchor = null;
			} else {
				let { next, bu, u, parent, vnode } = instance;
				{
					const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
					if (nonHydratedAsyncRoot) {
						if (next) {
							next.el = vnode.el;
							updateComponentPreRender(instance, next, optimized);
						}
						nonHydratedAsyncRoot.asyncDep.then(() => {
							queuePostRenderEffect(() => {
								if (!instance.isUnmounted) update();
							}, parentSuspense);
						});
						return;
					}
				}
				let originNext = next;
				let vnodeHook;
				toggleRecurse(instance, false);
				if (next) {
					next.el = vnode.el;
					updateComponentPreRender(instance, next, optimized);
				} else next = vnode;
				if (bu) invokeArrayFns(bu);
				if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
				toggleRecurse(instance, true);
				const nextTree = renderComponentRoot(instance);
				const prevTree = instance.subTree;
				instance.subTree = nextTree;
				patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, namespace);
				next.el = nextTree.el;
				if (originNext === null) updateHOCHostEl(instance, nextTree.el);
				if (u) queuePostRenderEffect(u, parentSuspense);
				if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
			}
		};
		instance.scope.on();
		const effect = instance.effect = new ReactiveEffect(componentUpdateFn);
		instance.scope.off();
		const update = instance.update = effect.run.bind(effect);
		const job = instance.job = effect.runIfDirty.bind(effect);
		job.i = instance;
		job.id = instance.uid;
		effect.scheduler = () => queueJob(job);
		toggleRecurse(instance, true);
		update();
	};
	const updateComponentPreRender = (instance, nextVNode, optimized) => {
		nextVNode.component = instance;
		const prevProps = instance.vnode.props;
		instance.vnode = nextVNode;
		instance.next = null;
		updateProps(instance, nextVNode.props, prevProps, optimized);
		updateSlots(instance, nextVNode.children, optimized);
		pauseTracking();
		flushPreFlushCbs(instance);
		resetTracking();
	};
	const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
		const c1 = n1 && n1.children;
		const prevShapeFlag = n1 ? n1.shapeFlag : 0;
		const c2 = n2.children;
		const { patchFlag, shapeFlag } = n2;
		if (patchFlag > 0) {
			if (patchFlag & 128) {
				patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			} else if (patchFlag & 256) {
				patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			}
		}
		if (shapeFlag & 8) {
			if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
			if (c2 !== c1) hostSetElementText(container, c2);
		} else if (prevShapeFlag & 16) {
			if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else unmountChildren(c1, parentComponent, parentSuspense, true);
		} else {
			if (prevShapeFlag & 8) hostSetElementText(container, "");
			if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
	};
	const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		c1 = c1 || EMPTY_ARR;
		c2 = c2 || EMPTY_ARR;
		const oldLength = c1.length;
		const newLength = c2.length;
		const commonLength = Math.min(oldLength, newLength);
		let i = 0;
		for (; i < commonLength; i++) {
			const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
		if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
		else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
	};
	const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let i = 0;
		const l2 = c2.length;
		let e1 = c1.length - 1;
		let e2 = l2 - 1;
		while (i <= e1 && i <= e2) {
			const n1 = c1[i];
			const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			i++;
		}
		while (i <= e1 && i <= e2) {
			const n1 = c1[e1];
			const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			e1--;
			e2--;
		}
		if (i > e1) {
			if (i <= e2) {
				const nextPos = e2 + 1;
				const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
				while (i <= e2) {
					patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					i++;
				}
			}
		} else if (i > e2) while (i <= e1) {
			unmount(c1[i], parentComponent, parentSuspense, true);
			i++;
		}
		else {
			const s1 = i;
			const s2 = i;
			const keyToNewIndexMap = /* @__PURE__ */ new Map();
			for (i = s2; i <= e2; i++) {
				const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
				if (nextChild.key != null) keyToNewIndexMap.set(nextChild.key, i);
			}
			let j;
			let patched = 0;
			const toBePatched = e2 - s2 + 1;
			let moved = false;
			let maxNewIndexSoFar = 0;
			const newIndexToOldIndexMap = new Array(toBePatched);
			for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
			for (i = s1; i <= e1; i++) {
				const prevChild = c1[i];
				if (patched >= toBePatched) {
					unmount(prevChild, parentComponent, parentSuspense, true);
					continue;
				}
				let newIndex;
				if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
				else for (j = s2; j <= e2; j++) if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
					newIndex = j;
					break;
				}
				if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
				else {
					newIndexToOldIndexMap[newIndex - s2] = i + 1;
					if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
					else moved = true;
					patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					patched++;
				}
			}
			const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
			j = increasingNewIndexSequence.length - 1;
			for (i = toBePatched - 1; i >= 0; i--) {
				const nextIndex = s2 + i;
				const nextChild = c2[nextIndex];
				const anchorVNode = c2[nextIndex + 1];
				const anchor = nextIndex + 1 < l2 ? anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode) : parentAnchor;
				if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else if (moved) {
					if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
					else j--;
				}
			}
		}
	};
	const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
		const { el, type, transition, children, shapeFlag } = vnode;
		if (shapeFlag & 6) {
			move(vnode.component.subTree, container, anchor, moveType);
			return;
		}
		if (shapeFlag & 128) {
			vnode.suspense.move(container, anchor, moveType);
			return;
		}
		if (shapeFlag & 64) {
			type.move(vnode, container, anchor, internals);
			return;
		}
		if (type === Fragment) {
			hostInsert(el, container, anchor);
			for (let i = 0; i < children.length; i++) move(children[i], container, anchor, moveType);
			hostInsert(vnode.anchor, container, anchor);
			return;
		}
		if (type === Static) {
			moveStaticNode(vnode, container, anchor);
			return;
		}
		if (moveType !== 2 && shapeFlag & 1 && transition) {
			if (moveType === 0) {
				if (transition.persisted && !el[leaveCbKey]) hostInsert(el, container, anchor);
				else {
					transition.beforeEnter(el);
					hostInsert(el, container, anchor);
					queuePostRenderEffect(() => transition.enter(el), parentSuspense);
				}
			} else {
				const { leave, delayLeave, afterLeave } = transition;
				const remove2 = () => {
					if (vnode.ctx.isUnmounted) hostRemove(el);
					else hostInsert(el, container, anchor);
				};
				const performLeave = () => {
					const wasLeaving = el._isLeaving || !!el[leaveCbKey];
					if (el._isLeaving) el[leaveCbKey](true);
					if (transition.persisted && !wasLeaving) remove2();
					else leave(el, () => {
						remove2();
						afterLeave && afterLeave();
					});
				};
				if (delayLeave) delayLeave(el, remove2, performLeave);
				else performLeave();
			}
		} else hostInsert(el, container, anchor);
	};
	const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
		const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs, cacheIndex, memo } = vnode;
		if (patchFlag === -2) optimized = false;
		if (ref != null) {
			pauseTracking();
			setRef(ref, null, parentSuspense, vnode, true);
			resetTracking();
		}
		if (cacheIndex != null) parentComponent.renderCache[cacheIndex] = void 0;
		if (shapeFlag & 256) {
			parentComponent.ctx.deactivate(vnode);
			return;
		}
		const shouldInvokeDirs = shapeFlag & 1 && dirs;
		const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
		let vnodeHook;
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
		else {
			if (shapeFlag & 128) {
				vnode.suspense.unmount(parentSuspense, doRemove);
				return;
			}
			if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
			if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
			else if (dynamicChildren && !dynamicChildren.hasOnce && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
			else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
			if (doRemove) remove(vnode);
		}
		const shouldInvalidateMemo = memo != null && cacheIndex == null;
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs || shouldInvalidateMemo) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
			shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
			if (shouldInvalidateMemo) vnode.el = null;
		}, parentSuspense);
	};
	const remove = (vnode) => {
		const { type, el, anchor, transition } = vnode;
		if (type === Fragment) {
			removeFragment(el, anchor);
			return;
		}
		if (type === Static) {
			removeStaticNode(vnode);
			return;
		}
		const performRemove = () => {
			hostRemove(el);
			if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
		};
		if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
			const { leave, delayLeave } = transition;
			const performLeave = () => leave(el, performRemove);
			if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
			else performLeave();
		} else performRemove();
	};
	const removeFragment = (cur, end) => {
		let next;
		while (cur !== end) {
			next = hostNextSibling(cur);
			hostRemove(cur);
			cur = next;
		}
		hostRemove(end);
	};
	const unmountComponent = (instance, parentSuspense, doRemove) => {
		const { bum, scope, job, subTree, um, m, a } = instance;
		invalidateMount(m);
		invalidateMount(a);
		if (bum) invokeArrayFns(bum);
		scope.stop();
		if (job) {
			job.flags |= 8;
			unmount(subTree, instance, parentSuspense, doRemove);
		}
		if (um) queuePostRenderEffect(um, parentSuspense);
		queuePostRenderEffect(() => {
			instance.isUnmounted = true;
		}, parentSuspense);
	};
	const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
		for (let i = start; i < children.length; i++) unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
	};
	const getNextHostNode = (vnode) => {
		if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
		if (vnode.shapeFlag & 128) return vnode.suspense.next();
		const el = hostNextSibling(vnode.anchor || vnode.el);
		const teleportEnd = el && el[TeleportEndKey];
		return teleportEnd ? hostNextSibling(teleportEnd) : el;
	};
	let isFlushing = false;
	const render = (vnode, container, namespace) => {
		let instance;
		if (vnode == null) {
			if (container._vnode) {
				unmount(container._vnode, null, null, true);
				instance = container._vnode.component;
			}
		} else patch(container._vnode || null, vnode, container, null, null, null, namespace);
		container._vnode = vnode;
		if (!isFlushing) {
			isFlushing = true;
			flushPreFlushCbs(instance);
			flushPostFlushCbs();
			isFlushing = false;
		}
	};
	const internals = {
		p: patch,
		um: unmount,
		m: move,
		r: remove,
		mt: mountComponent,
		mc: mountChildren,
		pc: patchChildren,
		pbc: patchBlockChildren,
		n: getNextHostNode,
		o: options
	};
	let hydrate;
	let hydrateNode;
	if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
	return {
		render,
		hydrate,
		createApp: createAppAPI(render, hydrate)
	};
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
	return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, job }, allowed) {
	if (allowed) {
		effect.flags |= 32;
		job.flags |= 4;
	} else {
		effect.flags &= -33;
		job.flags &= -5;
	}
}
function needTransition(parentSuspense, transition) {
	return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
	const ch1 = n1.children;
	const ch2 = n2.children;
	if (isArray(ch1) && isArray(ch2)) for (let i = 0; i < ch1.length; i++) {
		const c1 = ch1[i];
		let c2 = ch2[i];
		if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
			if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
				c2 = ch2[i] = cloneIfMounted(ch2[i]);
				c2.el = c1.el;
			}
			if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
		}
		if (c2.type === Text) {
			if (c2.patchFlag === -1) c2 = ch2[i] = cloneIfMounted(c2);
			c2.el = c1.el;
		}
		if (c2.type === Comment && !c2.el) c2.el = c1.el;
	}
}
function getSequence(arr) {
	const p = arr.slice();
	const result = [0];
	let i, j, u, v, c;
	const len = arr.length;
	for (i = 0; i < len; i++) {
		const arrI = arr[i];
		if (arrI !== 0) {
			j = result[result.length - 1];
			if (arr[j] < arrI) {
				p[i] = j;
				result.push(i);
				continue;
			}
			u = 0;
			v = result.length - 1;
			while (u < v) {
				c = u + v >> 1;
				if (arr[result[c]] < arrI) u = c + 1;
				else v = c;
			}
			if (arrI < arr[result[u]]) {
				if (u > 0) p[i] = result[u - 1];
				result[u] = i;
			}
		}
	}
	u = result.length;
	v = result[u - 1];
	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}
	return result;
}
function locateNonHydratedAsyncRoot(instance) {
	const subComponent = instance.subTree.component;
	if (subComponent) {
		if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
		else return locateNonHydratedAsyncRoot(subComponent);
	}
}
function invalidateMount(hooks) {
	if (hooks) for (let i = 0; i < hooks.length; i++) hooks[i].flags |= 8;
}
function resolveAsyncComponentPlaceholder(anchorVnode) {
	if (anchorVnode.placeholder) return anchorVnode.placeholder;
	const instance = anchorVnode.component;
	if (instance) return resolveAsyncComponentPlaceholder(instance.subTree);
	return null;
}
var isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
	if (suspense && suspense.pendingBranch) {
		if (isArray(fn)) suspense.effects.push(...fn);
		else suspense.effects.push(fn);
	} else queuePostFlushCb(fn);
}
var Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
var Text = /* @__PURE__ */ Symbol.for("v-txt");
var Comment = /* @__PURE__ */ Symbol.for("v-cmt");
var Static = /* @__PURE__ */ Symbol.for("v-stc");
var blockStack = [];
var currentBlock = null;
function openBlock(disableTracking = false) {
	blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
	blockStack.pop();
	currentBlock = blockStack[blockStack.length - 1] || null;
}
var isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
	isBlockTreeEnabled += value;
	if (value < 0 && currentBlock && inVOnce) currentBlock.hasOnce = true;
}
function setupBlock(vnode) {
	vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
	closeBlock();
	if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
	return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
	return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
	return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
	return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
	return n1.type === n2.type && n1.key === n2.key;
}
var normalizeKey = ({ key }) => key != null ? key : null;
var normalizeRef = ({ ref, ref_key, ref_for }) => {
	if (typeof ref === "number") ref = "" + ref;
	return ref != null ? isString(ref) || /* @__PURE__ */ isRef(ref) || isFunction(ref) ? {
		i: currentRenderingInstance,
		r: ref,
		k: ref_key,
		f: !!ref_for
	} : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
	const vnode = {
		__v_isVNode: true,
		__v_skip: true,
		type,
		props,
		key: props && normalizeKey(props),
		ref: props && normalizeRef(props),
		scopeId: currentScopeId,
		slotScopeIds: null,
		children,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag,
		patchFlag,
		dynamicProps,
		dynamicChildren: null,
		appContext: null,
		ctx: currentRenderingInstance
	};
	if (needFullChildrenNormalization) {
		normalizeChildren(vnode, children);
		if (shapeFlag & 128) type.normalize(vnode);
	} else if (children) vnode.shapeFlag |= isString(children) ? 8 : 16;
	if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) currentBlock.push(vnode);
	return vnode;
}
var createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
	if (!type || type === NULL_DYNAMIC_COMPONENT) type = Comment;
	if (isVNode(type)) {
		const cloned = cloneVNode(type, props, true);
		if (children) normalizeChildren(cloned, children);
		if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
			if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
			else currentBlock.push(cloned);
		}
		cloned.patchFlag = -2;
		return cloned;
	}
	if (isClassComponent(type)) type = type.__vccOpts;
	if (props) {
		props = guardReactiveProps(props);
		let { class: klass, style } = props;
		if (klass && !isString(klass)) props.class = normalizeClass(klass);
		if (isObject(style)) {
			if (/* @__PURE__ */ isProxy(style) && !isArray(style)) style = extend({}, style);
			props.style = normalizeStyle(style);
		}
	}
	const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
	return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
	if (!props) return null;
	return /* @__PURE__ */ isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
	const { props, ref, patchFlag, children, transition } = vnode;
	const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
	const cloned = {
		__v_isVNode: true,
		__v_skip: true,
		type: vnode.type,
		props: mergedProps,
		key: mergedProps && normalizeKey(mergedProps),
		ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
		scopeId: vnode.scopeId,
		slotScopeIds: vnode.slotScopeIds,
		children,
		target: vnode.target,
		targetStart: vnode.targetStart,
		targetAnchor: vnode.targetAnchor,
		staticCount: vnode.staticCount,
		shapeFlag: vnode.shapeFlag,
		patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
		dynamicProps: vnode.dynamicProps,
		dynamicChildren: vnode.dynamicChildren,
		appContext: vnode.appContext,
		dirs: vnode.dirs,
		transition,
		component: vnode.component,
		suspense: vnode.suspense,
		ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
		ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
		placeholder: vnode.placeholder,
		el: vnode.el,
		anchor: vnode.anchor,
		ctx: vnode.ctx,
		ce: vnode.ce
	};
	if (transition && cloneTransition) setTransitionHooks(cloned, transition.clone(cloned));
	return cloned;
}
function createTextVNode(text = " ", flag = 0) {
	return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
	return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
	if (child == null || typeof child === "boolean") return createVNode(Comment);
	else if (isArray(child)) return createVNode(Fragment, null, child.slice());
	else if (isVNode(child)) return cloneIfMounted(child);
	else return createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
	return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
	let type = 0;
	const { shapeFlag } = vnode;
	if (children == null) children = null;
	else if (isArray(children)) type = 16;
	else if (typeof children === "object") {
		if (shapeFlag & 65) {
			const slot = children.default;
			if (slot) {
				slot._c && (slot._d = false);
				normalizeChildren(vnode, slot());
				slot._c && (slot._d = true);
			}
			return;
		} else {
			type = 32;
			const slotFlag = children._;
			if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
			else if (slotFlag === 3 && currentRenderingInstance) {
				if (currentRenderingInstance.slots._ === 1) children._ = 1;
				else {
					children._ = 2;
					vnode.patchFlag |= 1024;
				}
			}
		}
	} else if (isFunction(children)) {
		if (shapeFlag & 65) {
			normalizeChildren(vnode, { default: children });
			return;
		}
		children = {
			default: children,
			_ctx: currentRenderingInstance
		};
		type = 32;
	} else {
		children = String(children);
		if (shapeFlag & 64) {
			type = 16;
			children = [createTextVNode(children)];
		} else type = 8;
	}
	vnode.children = children;
	vnode.shapeFlag |= type;
}
function mergeProps(...args) {
	const ret = {};
	for (let i = 0; i < args.length; i++) {
		const toMerge = args[i];
		for (const key in toMerge) if (key === "class") {
			if (ret.class !== toMerge.class) ret.class = normalizeClass([ret.class, toMerge.class]);
		} else if (key === "style") ret.style = normalizeStyle([ret.style, toMerge.style]);
		else if (isOn(key)) {
			const existing = ret[key];
			const incoming = toMerge[key];
			if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
			else if (incoming == null && existing == null && !isModelListener(key)) ret[key] = incoming;
		} else if (key !== "") ret[key] = toMerge[key];
	}
	return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
	callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
}
var emptyAppContext = createAppContext();
var uid = 0;
function createComponentInstance(vnode, parent, suspense) {
	const type = vnode.type;
	const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
	const instance = {
		uid: uid++,
		vnode,
		type,
		parent,
		appContext,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new EffectScope(true),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: parent ? parent.provides : Object.create(appContext.provides),
		ids: parent ? parent.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: normalizePropsOptions(type, appContext),
		emitsOptions: normalizeEmitsOptions(type, appContext),
		emit: null,
		emitted: null,
		propsDefaults: EMPTY_OBJ,
		inheritAttrs: type.inheritAttrs,
		ctx: EMPTY_OBJ,
		data: EMPTY_OBJ,
		props: EMPTY_OBJ,
		attrs: EMPTY_OBJ,
		slots: EMPTY_OBJ,
		refs: EMPTY_OBJ,
		setupState: EMPTY_OBJ,
		setupContext: null,
		suspense,
		suspenseId: suspense ? suspense.pendingId : 0,
		asyncDep: null,
		asyncResolved: false,
		isMounted: false,
		isUnmounted: false,
		isDeactivated: false,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	instance.ctx = { _: instance };
	instance.root = parent ? parent.root : instance;
	instance.emit = emit.bind(null, instance);
	if (vnode.ce) vnode.ce(instance);
	return instance;
}
var currentInstance = null;
var getCurrentInstance = () => currentInstance || currentRenderingInstance;
var internalSetCurrentInstance;
var setInSSRSetupState;
{
	const g = getGlobalThis();
	const registerGlobalSetter = (key, setter) => {
		let setters;
		if (!(setters = g[key])) setters = g[key] = [];
		setters.push(setter);
		return (v) => {
			if (setters.length > 1) setters.forEach((set) => set(v));
			else setters[0](v);
		};
	};
	internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v) => currentInstance = v);
	setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v) => isInSSRComponentSetup = v);
}
var setCurrentInstance = (instance) => {
	const prev = currentInstance;
	internalSetCurrentInstance(instance);
	instance.scope.on();
	return () => {
		instance.scope.off();
		internalSetCurrentInstance(prev);
	};
};
var unsetCurrentInstance = () => {
	currentInstance && currentInstance.scope.off();
	internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
	return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
	isSSR && setInSSRSetupState(isSSR);
	const { props, children } = instance.vnode;
	const isStateful = isStatefulComponent(instance);
	initProps(instance, props, isStateful, isSSR);
	initSlots(instance, children, optimized || isSSR);
	const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
	isSSR && setInSSRSetupState(false);
	return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
	const Component = instance.type;
	instance.accessCache = /* @__PURE__ */ Object.create(null);
	instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
	const { setup } = Component;
	if (setup) {
		pauseTracking();
		const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
		const reset = setCurrentInstance(instance);
		const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
		const isAsyncSetup = isPromise(setupResult);
		resetTracking();
		reset();
		if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) markAsyncBoundary(instance);
		if (isAsyncSetup) {
			setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
			if (isSSR) return setupResult.then((resolvedResult) => {
				setInSSRSetupState(true);
				try {
					handleSetupResult(instance, resolvedResult, isSSR);
				} finally {
					setInSSRSetupState(false);
				}
			}).catch((e) => {
				handleError(e, instance, 0);
			});
			else instance.asyncDep = setupResult;
		} else handleSetupResult(instance, setupResult, isSSR);
	} else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
	if (isFunction(setupResult)) {
		if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
		else instance.render = setupResult;
	} else if (isObject(setupResult)) instance.setupState = proxyRefs(setupResult);
	finishComponentSetup(instance, isSSR);
}
function finishComponentSetup(instance, isSSR, skipOptions) {
	const Component = instance.type;
	if (!instance.render) instance.render = Component.render || NOOP;
	{
		const reset = setCurrentInstance(instance);
		pauseTracking();
		try {
			applyOptions(instance);
		} finally {
			resetTracking();
			reset();
		}
	}
}
var attrsProxyHandlers = { get(target, key) {
	track(target, "get", "");
	return target[key];
} };
function createSetupContext(instance) {
	const expose = (exposed) => {
		instance.exposed = exposed || {};
	};
	return {
		attrs: new Proxy(instance.attrs, attrsProxyHandlers),
		slots: instance.slots,
		emit: instance.emit,
		expose
	};
}
function getComponentPublicInstance(instance) {
	if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
		get(target, key) {
			if (key in target) return target[key];
			else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
		},
		has(target, key) {
			return key in target || key in publicPropertiesMap;
		}
	}));
	else return instance.proxy;
}
function getComponentName(Component, includeInferred = true) {
	return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
	return isFunction(value) && "__vccOpts" in value;
}
var computed = (getterOrOptions, debugOptions) => {
	return /* @__PURE__ */ computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
var version = "3.5.42";
// node_modules/.pnpm/@vue+runtime-dom@3.5.42/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var policy = void 0;
var tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) try {
	policy = /* @__PURE__ */ tt.createPolicy("vue", { createHTML: (val) => val });
} catch (e) {}
var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
var svgNS = "http://www.w3.org/2000/svg";
var mathmlNS = "http://www.w3.org/1998/Math/MathML";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
var nodeOps = {
	insert: (child, parent, anchor) => {
		parent.insertBefore(child, anchor || null);
	},
	remove: (child) => {
		const parent = child.parentNode;
		if (parent) parent.removeChild(child);
	},
	createElement: (tag, namespace, is, props) => {
		const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
		if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
		return el;
	},
	createText: (text) => doc.createTextNode(text),
	createComment: (text) => doc.createComment(text),
	setText: (node, text) => {
		node.nodeValue = text;
	},
	setElementText: (el, text) => {
		el.textContent = text;
	},
	parentNode: (node) => node.parentNode,
	nextSibling: (node) => node.nextSibling,
	querySelector: (selector) => doc.querySelector(selector),
	setScopeId(el, id) {
		el.setAttribute(id, "");
	},
	insertStaticContent(content, parent, anchor, namespace, start, end) {
		const before = anchor ? anchor.previousSibling : parent.lastChild;
		if (start && (start === end || start.nextSibling)) while (true) {
			parent.insertBefore(start.cloneNode(true), anchor);
			if (start === end || !(start = start.nextSibling)) break;
		}
		else {
			templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
			const template = templateContainer.content;
			if (namespace === "svg" || namespace === "mathml") {
				const wrapper = template.firstChild;
				while (wrapper.firstChild) template.appendChild(wrapper.firstChild);
				template.removeChild(wrapper);
			}
			parent.insertBefore(template, anchor);
		}
		return [before ? before.nextSibling : parent.firstChild, anchor ? anchor.previousSibling : parent.lastChild];
	}
};
var vtcKey = /* @__PURE__ */ Symbol("_vtc");
function patchClass(el, value, isSVG) {
	const transitionClasses = el[vtcKey];
	if (transitionClasses) value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
	if (value == null) el.removeAttribute("class");
	else if (isSVG) el.setAttribute("class", value);
	else el.className = value;
}
var vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
var vShowHidden = /* @__PURE__ */ Symbol("_vsh");
var CSS_VAR_TEXT = /* @__PURE__ */ Symbol("");
var displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
	const style = el.style;
	const isCssString = isString(next);
	let hasControlledDisplay = false;
	if (next && !isCssString) {
		if (prev) {
			if (!isString(prev)) {
				for (const key in prev) if (next[key] == null) setStyle(style, key, "");
			} else for (const prevStyle of prev.split(";")) {
				const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
				if (next[key] == null) setStyle(style, key, "");
			}
		}
		for (const key in next) {
			if (key === "display") hasControlledDisplay = true;
			const value = next[key];
			if (value != null) {
				if (!shouldPreserveTextareaResizeStyle(el, key, !isString(prev) && prev ? prev[key] : void 0, value)) setStyle(style, key, value);
			} else setStyle(style, key, "");
		}
	} else if (isCssString) {
		if (prev !== next) {
			const cssVarText = style[CSS_VAR_TEXT];
			if (cssVarText) next += ";" + cssVarText;
			style.cssText = next;
			hasControlledDisplay = displayRE.test(next);
		}
	} else if (prev) el.removeAttribute("style");
	if (vShowOriginalDisplay in el) {
		el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
		if (el[vShowHidden]) style.display = "none";
	}
}
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
	if (isArray(val)) val.forEach((v) => setStyle(style, name, v));
	else {
		if (val == null) val = "";
		if (name.startsWith("--")) {
			if (importantRE.test(val)) style.setProperty(name, val.replace(importantRE, ""), "important");
			else style.setProperty(name, val);
		} else {
			const prefixed = autoPrefix(style, name);
			if (importantRE.test(val)) style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
			else style[prefixed] = val;
		}
	}
}
var prefixes = [
	"Webkit",
	"Moz",
	"ms"
];
var prefixCache = {};
function autoPrefix(style, rawName) {
	const cached = prefixCache[rawName];
	if (cached) return cached;
	let name = camelize(rawName);
	if (name !== "filter" && name in style) return prefixCache[rawName] = name;
	name = capitalize(name);
	for (let i = 0; i < prefixes.length; i++) {
		const prefixed = prefixes[i] + name;
		if (prefixed in style) return prefixCache[rawName] = prefixed;
	}
	return rawName;
}
function shouldPreserveTextareaResizeStyle(el, key, prev, next) {
	return el.tagName === "TEXTAREA" && (key === "width" || key === "height") && isString(next) && prev === next;
}
var xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
	if (isSVG && key.startsWith("xlink:")) {
		if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
		else el.setAttributeNS(xlinkNS, key, value);
	} else if (value == null || isBoolean && !includeBooleanAttr(value)) el.removeAttribute(key);
	else el.setAttribute(key, isBoolean ? "" : isSymbol(value) ? String(value) : value);
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
	if (key === "innerHTML" || key === "textContent") {
		if (value != null) el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
		return;
	}
	const tag = el.tagName;
	if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
		const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
		const newValue = value == null ? el.type === "checkbox" ? "on" : "" : String(value);
		if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
		if (value == null) el.removeAttribute(key);
		el._value = value;
		return;
	}
	let needRemove = false;
	if (value === "" || value == null) {
		const type = typeof el[key];
		if (type === "boolean") value = includeBooleanAttr(value);
		else if (value == null && type === "string") {
			value = "";
			needRemove = true;
		} else if (type === "number") {
			value = 0;
			needRemove = true;
		}
	}
	try {
		el[key] = value;
	} catch (e) {}
	needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
	el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
	el.removeEventListener(event, handler, options);
}
var veiKey = /* @__PURE__ */ Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
	const invokers = el[veiKey] || (el[veiKey] = {});
	const existingInvoker = invokers[rawName];
	if (nextValue && existingInvoker) existingInvoker.value = nextValue;
	else {
		const [name, options] = parseName(rawName);
		if (nextValue) addEventListener(el, name, invokers[rawName] = createInvoker(nextValue, instance), options);
		else if (existingInvoker) {
			removeEventListener(el, name, existingInvoker, options);
			invokers[rawName] = void 0;
		}
	}
}
var optionsModifierRE = /(Once|Passive|Capture)$/;
var optionsModifierEventRE = /^on:?(?:Once|Passive|Capture)$/;
function parseName(name) {
	let options;
	let m;
	while ((m = name.match(optionsModifierRE)) && !optionsModifierEventRE.test(name)) {
		if (!options) options = {};
		name = name.slice(0, name.length - m[1].length);
		options[m[1].toLowerCase()] = true;
	}
	return [name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2)), options];
}
var cachedNow = 0;
var p = /* @__PURE__ */ Promise.resolve();
var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
	const invoker = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= invoker.attached) return;
		const value = invoker.value;
		if (isArray(value)) {
			const originalStop = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				originalStop.call(e);
				e._stopped = true;
			};
			const handlers = value.slice();
			const args = [e];
			for (let i = 0; i < handlers.length; i++) {
				if (e._stopped) break;
				const handler = handlers[i];
				if (handler) callWithAsyncErrorHandling(handler, instance, 5, args);
			}
		} else callWithAsyncErrorHandling(value, instance, 5, [e]);
	};
	invoker.value = initialValue;
	invoker.attached = getNow();
	return invoker;
}
var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
	const isSVG = namespace === "svg";
	if (key === "class") patchClass(el, nextValue, isSVG);
	else if (key === "style") patchStyle(el, prevValue, nextValue);
	else if (isOn(key)) {
		if (!isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
	} else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
		patchDOMProp(el, key, nextValue);
		if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
	} else if (el._isVueCE && (shouldSetAsPropForVueCE(el, key) || el._def.__asyncLoader && (/[A-Z]/.test(key) || !isString(nextValue)))) patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
	else {
		if (key === "true-value") el._trueValue = nextValue;
		else if (key === "false-value") el._falseValue = nextValue;
		patchAttr(el, key, nextValue, isSVG);
	}
};
function shouldSetAsProp(el, key, value, isSVG) {
	if (isSVG) {
		if (key === "innerHTML" || key === "textContent") return true;
		if (key in el && isNativeOn(key) && isFunction(value)) return true;
		return false;
	}
	if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") return false;
	if (key === "sandbox" && el.tagName === "IFRAME") return false;
	if (key === "form") return false;
	if (key === "list" && el.tagName === "INPUT") return false;
	if (key === "type" && el.tagName === "TEXTAREA") return false;
	if (key === "width" || key === "height") {
		const tag = el.tagName;
		if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
	}
	if (isNativeOn(key) && isString(value)) return false;
	return key in el;
}
function shouldSetAsPropForVueCE(el, key) {
	const props = el._def.props;
	if (!props) return false;
	const camelKey = camelize(key);
	return Array.isArray(props) ? props.some((prop) => camelize(prop) === camelKey) : Object.keys(props).some((prop) => camelize(prop) === camelKey);
}
var systemModifiers = [
	"ctrl",
	"shift",
	"alt",
	"meta"
];
var modifierGuards = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
var withModifiers = (fn, modifiers) => {
	if (!fn) return fn;
	const cache = fn._withMods || (fn._withMods = {});
	const cacheKey = modifiers.join(".");
	return cache[cacheKey] || (cache[cacheKey] = ((event, ...args) => {
		for (let i = 0; i < modifiers.length; i++) {
			const guard = modifierGuards[modifiers[i]];
			if (guard && guard(event, modifiers)) return;
		}
		return fn(event, ...args);
	}));
};
var keyNames = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
};
var withKeys = (fn, modifiers) => {
	const cache = fn._withKeys || (fn._withKeys = {});
	const cacheKey = modifiers.join(".");
	return cache[cacheKey] || (cache[cacheKey] = ((event) => {
		if (!("key" in event)) return;
		const eventKey = hyphenate(event.key);
		if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) return fn(event);
	}));
};
var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
var renderer;
function ensureRenderer() {
	return renderer || (renderer = createRenderer(rendererOptions));
}
var createApp = ((...args) => {
	const app = ensureRenderer().createApp(...args);
	const { mount } = app;
	app.mount = (containerOrSelector) => {
		const container = normalizeContainer(containerOrSelector);
		if (!container) return;
		const component = app._component;
		if (!isFunction(component) && !component.render && !component.template) component.template = container.innerHTML;
		if (container.nodeType === 1) container.textContent = "";
		const proxy = mount(container, false, resolveRootNamespace(container));
		if (container instanceof Element) {
			container.removeAttribute("v-cloak");
			container.setAttribute("data-v-app", "");
		}
		return proxy;
	};
	return app;
});
function resolveRootNamespace(container) {
	if (container instanceof SVGElement) return "svg";
	if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function normalizeContainer(container) {
	if (isString(container)) return document.querySelector(container);
	return container;
}
// node_modules/.pnpm/@nynxz+zenkit-ui@0.5.1_vue@3.5.42_typescript@5.9.3_/node_modules/@nynxz/zenkit-ui/dist/index.js
var wo = /* @__PURE__ */ defineComponent({
	__name: "ZenWidget",
	props: {
		fill: {
			type: Boolean,
			default: !1
		},
		gap: { default: 7 },
		pad: {
			type: [
				Boolean,
				Number,
				String
			],
			default: !0
		},
		dragThrough: {
			type: Boolean,
			default: !1
		}
	},
	setup(e, { expose: l }) {
		const t = /* @__PURE__ */ ref(null);
		return l({ el: t }), (o, r) => (openBlock(), createElementBlock("div", {
			ref_key: "el",
			ref: t,
			class: normalizeClass(["zen-widget", {
				fill: e.fill,
				"drag-through": e.dragThrough,
				"has-footer": !!o.$slots.footer
			}]),
			style: normalizeStyle({
				gap: `${e.gap}px`,
				...e.pad === !1 ? { padding: "0" } : typeof e.pad == "number" ? { padding: `${e.pad}px 2px` } : typeof e.pad == "string" ? { padding: e.pad } : {}
			})
		}, [renderSlot(o.$slots, "default", {}, void 0, !0), o.$slots.footer ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", {
			class: "zen-widget-spacer",
			"data-zen-spacer": "",
			style: normalizeStyle({ marginTop: `${-e.gap}px` })
		}, null, 4), renderSlot(o.$slots, "footer", {}, void 0, !0)], 64)) : createCommentVNode("", !0)], 6));
	}
});
var Te = (e, l) => {
	const t = e.__vccOpts || e;
	for (const [o, r] of l) t[o] = r;
	return t;
};
var Ff = /* @__PURE__ */ Te(wo, [["__scopeId", "data-v-566c7d03"]]);
var xo = 150;
function _l(e, l, t, o) {
	let r = e(), s = 0;
	const u = (w) => {
		w.target instanceof Node && o?.()?.contains(w.target) && (s = performance.now() + xo);
	};
	o && (window.addEventListener("scroll", u, {
		capture: !0,
		passive: !0
	}), window.addEventListener("wheel", u, {
		capture: !0,
		passive: !0
	}));
	let d = requestAnimationFrame(function w(b) {
		if (d = requestAnimationFrame(w), b < s) return;
		const V = e();
		if (!V) {
			c(), t();
			return;
		}
		(!r || V.x !== r.x || V.y !== r.y || V.width !== r.width || V.height !== r.height) && (r = V, l());
	});
	function c() {
		cancelAnimationFrame(d), window.removeEventListener("scroll", u, { capture: !0 }), window.removeEventListener("wheel", u, { capture: !0 });
	}
	return c;
}
function Ul(e) {
	if (!e?.isConnected) return null;
	const l = e.getBoundingClientRect();
	return l.width || l.height ? l : null;
}
function lt(e = document.body) {
	if (!e) return 1;
	if (typeof e.currentCSSZoom == "number") return e.currentCSSZoom || 1;
	const l = e instanceof HTMLElement ? e.offsetWidth : 0;
	return l && e.getBoundingClientRect().width / l || 1;
}
function kt(e, l) {
	return l === 1 ? e : new DOMRect(e.x / l, e.y / l, e.width / l, e.height / l);
}
function Rt(e) {
	return {
		width: window.innerWidth / e,
		height: window.innerHeight / e
	};
}
var zo = "data-zen-layer";
var qe$1 = {
	/** dropdowns, menus, pickers, context menus, popovers */
	popover: 1e5,
	modal: 100100,
	window: 100200,
	lightbox: 100300,
	/** hover previews — above everything static */
	peek: 100400
};
function Cn(e, l) {
	const t = e instanceof Element ? e.closest(`[${zo}]`) : null;
	return !!t && t !== l;
}
var xn = [];
var wl = /* @__PURE__ */ new WeakSet();
function fl(e = qe$1.popover) {
	return xn.reduce((l, t) => Math.max(l, t.z + 1), e);
}
function Mt(e = qe$1.popover) {
	const l = Symbol("layer"), t = fl(e);
	xn.push({
		id: l,
		z: t
	});
	const o = () => xn.at(-1)?.id === l;
	return {
		z: t,
		isTop: o,
		escape: (r) => r.key !== "Escape" || wl.has(r) || !o() ? !1 : (wl.add(r), !0),
		release: () => {
			const r = xn.findIndex((s) => s.id === l);
			r !== -1 && xn.splice(r, 1);
		}
	};
}
var Mo = ["role"];
var ml = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenPopover",
	props: {
		open: {
			type: Boolean,
			default: void 0
		},
		anchor: {},
		placement: { default: "bottom-start" },
		offset: { default: 6 },
		matchWidth: {
			type: Boolean,
			default: !1
		},
		role: { default: "menu" }
	},
	emits: ["update:open"],
	setup(e, { expose: l, emit: t }) {
		const o = e, r = t, s = /* @__PURE__ */ ref(!1), u = computed({
			get: () => o.open !== void 0 ? o.open : s.value,
			set: (M) => {
				o.open !== void 0 ? r("update:open", M) : s.value = M;
			}
		}), d = /* @__PURE__ */ ref(null), c = /* @__PURE__ */ ref(null), w = /* @__PURE__ */ ref({}), b = /* @__PURE__ */ ref(!1);
		function V() {
			const M = o.anchor;
			return M ? M instanceof HTMLElement ? M.getBoundingClientRect() : "width" in M ? M : new DOMRect(M.x, M.y, 0, 0) : d.value ? d.value.getBoundingClientRect() : null;
		}
		function k() {
			const M = o.anchor;
			return M ? M instanceof HTMLElement ? M : null : d.value;
		}
		function p() {
			const M = V(), h = c.value;
			if (!M || !h) return;
			const F = lt(), ee = kt(M, F), X = o.offset, { width: ve, height: ae } = Rt(F), ce = h.offsetWidth, fe = h.offsetHeight, [Y, G] = o.placement.split("-");
			let B = Y;
			B === "bottom" && ee.bottom + X + fe > ae && ee.top - X - fe >= 0 ? B = "top" : B === "top" && ee.top - X - fe < 0 && ee.bottom + X + fe <= ae ? B = "bottom" : B === "right" && ee.right + X + ce > ve && ee.left - X - ce >= 0 ? B = "left" : B === "left" && ee.left - X - ce < 0 && ee.right + X + ce <= ve && (B = "right");
			const N = {};
			B === "bottom" ? N.top = ee.bottom + X + "px" : B === "top" ? N.bottom = ae - ee.top + X + "px" : B === "right" ? N.left = ee.right + X + "px" : N.right = ve - ee.left + X + "px", B === "bottom" || B === "top" ? G === "end" ? N.right = Math.max(4, ve - ee.right) + "px" : N.left = Math.max(4, Math.min(ee.left, ve - ce - 4)) + "px" : G === "end" ? N.bottom = Math.max(4, ae - ee.bottom) + "px" : N.top = Math.max(4, Math.min(ee.top, ae - fe - 4)) + "px", o.matchWidth && (N.minWidth = ee.width + "px"), w.value = N, b.value = !0;
		}
		function y() {
			u.value = !0;
		}
		function D() {
			u.value = !1;
		}
		function le() {
			u.value ? D() : y();
		}
		function E(M) {
			const h = M.target;
			c.value?.contains(h) || k()?.contains(h) || Cn(M.target, c.value) || D();
		}
		let x = null;
		const _ = /* @__PURE__ */ ref(qe$1.popover);
		function re(M) {
			x?.escape(M) && D();
		}
		function W(M) {
			M.target instanceof Node && c.value?.contains(M.target) || u.value && p();
		}
		function oe(M) {
			c.value?.contains(M.target) || D();
		}
		let me = null, Q = 0;
		function L() {
			me?.(), me = null, window.removeEventListener("wheel", oe, !0), x?.release(), x = null, window.removeEventListener("pointerdown", E, !0), window.removeEventListener("keydown", re, !0), window.removeEventListener("resize", W), window.removeEventListener("scroll", W, !0);
		}
		return watch(u, (M) => {
			const h = ++Q;
			if (!M) {
				L();
				return;
			}
			b.value = !1, x ??= Mt(qe$1.popover), _.value = x.z, nextTick(() => {
				if (h !== Q || !u.value) return;
				p(), setTimeout(() => {
					h === Q && (window.addEventListener("pointerdown", E, !0), window.addEventListener("keydown", re, !0));
				}, 0), window.addEventListener("resize", W), window.addEventListener("scroll", W, !0);
				const F = k();
				F ? me = _l(() => Ul(F), p, D, () => c.value) : window.addEventListener("wheel", oe, {
					capture: !0,
					passive: !0
				});
			});
		}), onBeforeUnmount(() => {
			Q++, L();
		}), l({
			open: y,
			close: D,
			toggle: le
		}), (M, h) => (openBlock(), createElementBlock(Fragment, null, [M.$slots.trigger ? (openBlock(), createElementBlock("span", {
			key: 0,
			ref_key: "anchorEl",
			ref: d,
			class: "zen-pop-anchor"
		}, [renderSlot(M.$slots, "trigger", {
			toggle: le,
			open: y,
			close: D,
			active: u.value
		}, void 0, !0)], 512)) : createCommentVNode("", !0), (openBlock(), createBlock(Teleport, { to: "body" }, [u.value ? (openBlock(), createElementBlock("div", {
			key: 0,
			ref_key: "panelEl",
			ref: c,
			"data-zen-layer": "",
			class: normalizeClass(["zen-pop zen-surface zen-scroll", { "zen-pop-tooltip": e.role === "tooltip" }]),
			style: normalizeStyle([w.value, {
				zIndex: _.value,
				visibility: b.value ? "visible" : "hidden"
			}]),
			role: e.role
		}, [renderSlot(M.$slots, "default", { close: D }, void 0, !0)], 14, Mo)) : createCommentVNode("", !0)]))], 64));
	}
}), [["__scopeId", "data-v-b1d17fa5"]]);
function Vo(e) {
	if (!e) return !1;
	const l = e.trim();
	return !l || l.includes(" ") ? !1 : /^(https?:|data:|blob:|\/)/i.test(l) || /\.(png|jpe?g|gif|webp|svg|ico|avif|bmp)(\?|#|$)/i.test(l);
}
function ot(e, l = "") {
	const t = e?.trim() || l;
	return t.startsWith("mdi-") ? `mdi ${t}` : t;
}
var ol = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenIcon",
	props: {
		icon: {},
		fallback: { default: "mdi-application-outline" }
	},
	setup(e) {
		const l = e, t = /* @__PURE__ */ ref(!1);
		watch(() => l.icon, () => t.value = !1);
		const o = computed(() => Vo(l.icon)), r = computed(() => o.value && !t.value), s = computed(() => o.value ? l.fallback : l.icon || l.fallback);
		function u() {
			o.value && (t.value = !0);
		}
		return (d, c) => (openBlock(), createBlock(resolveDynamicComponent(r.value ? "img" : "i"), mergeProps(r.value ? {
			src: e.icon,
			alt: "",
			referrerpolicy: "no-referrer",
			draggable: "false"
		} : {}, {
			class: r.value ? "zen-ico-img" : unref(ot)(s.value),
			onError: u
		}), null, 16, ["class"]));
	}
}), [["__scopeId", "data-v-819f0eab"]]);
var ca = ["disabled", "aria-label"];
var Ge = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenIconButton",
	props: {
		icon: {},
		danger: {
			type: Boolean,
			default: !1
		},
		active: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		size: { default: "md" }
	},
	setup(e) {
		const l = useAttrs();
		return (t, o) => (openBlock(), createElementBlock("button", {
			type: "button",
			class: normalizeClass(["zen-iconbtn", {
				danger: e.danger,
				active: e.active,
				sm: e.size === "sm"
			}]),
			disabled: e.disabled,
			"aria-label": unref(l)["aria-label"] ?? unref(l).title
		}, [createBaseVNode("i", { class: normalizeClass(unref(ot)(e.icon)) }, null, 2)], 10, ca));
	}
}), [["__scopeId", "data-v-350d2f84"]]);
var va = ["viewBox"];
var fa = {
	key: 0,
	class: "ripple",
	cx: "0",
	cy: "2",
	rx: "40",
	ry: "6"
};
var ma = ["d", "opacity"];
var pa = {
	key: 0,
	cx: "0",
	cy: "12",
	rx: "44",
	ry: "5",
	opacity: "0.45"
};
var ya = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenLotus",
	props: {
		water: {
			type: Boolean,
			default: !1
		},
		interactive: {
			type: Boolean,
			default: !1
		},
		breathing: {
			type: Boolean,
			default: !1
		}
	},
	setup(e, { expose: l }) {
		const t = (u, d) => `M0,0 C${d},${-u * .3} ${d * .7},${-u * .78} 0,${-u} C${-d * .7},${-u * .78} ${-d},${-u * .3} 0,0Z`, o = [
			{
				d: t(54, 24),
				r: -70,
				o: .35,
				delay: .06
			},
			{
				d: t(54, 24),
				r: 70,
				o: .35,
				delay: .06
			},
			{
				d: t(66, 26),
				r: -36,
				o: .6,
				delay: .03
			},
			{
				d: t(66, 26),
				r: 36,
				o: .6,
				delay: .03
			},
			{
				d: t(78, 28),
				r: 0,
				o: 1,
				delay: 0
			}
		], r = /* @__PURE__ */ ref(0);
		function s() {
			r.value++;
		}
		return l({ bloom: s }), (u, d) => (openBlock(), createElementBlock("svg", {
			class: normalizeClass(["zen-lotus", {
				breathing: e.breathing,
				interactive: e.interactive
			}]),
			viewBox: e.water ? "-60 -84 120 106" : "-60 -84 120 90",
			fill: "currentColor",
			"aria-hidden": "true",
			onClick: d[0] || (d[0] = (c) => e.interactive && s())
		}, [(openBlock(), createElementBlock("g", {
			key: r.value,
			class: normalizeClass({ blooming: r.value > 0 })
		}, [r.value > 0 ? (openBlock(), createElementBlock("ellipse", fa)) : createCommentVNode("", !0), (openBlock(), createElementBlock(Fragment, null, renderList(o, (c, w) => createBaseVNode("path", {
			key: w,
			class: "petal",
			d: c.d,
			opacity: c.o,
			style: normalizeStyle({
				"--r": `${c.r}deg`,
				animationDelay: `${c.delay}s`
			})
		}, null, 12, ma)), 64))], 2)), e.water ? (openBlock(), createElementBlock("ellipse", pa)) : createCommentVNode("", !0)], 10, va));
	}
}), [["__scopeId", "data-v-b2ab3c2d"]]);
var ga = {
	class: "zen-empty",
	role: "status"
};
var ba = {
	key: 2,
	class: "zen-empty-title"
};
var ka = {
	key: 3,
	class: "zen-empty-text"
};
var wa = {
	key: 4,
	class: "zen-empty-actions"
};
var Uf = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenEmpty",
	props: {
		title: {},
		icon: {}
	},
	setup(e) {
		return (l, t) => (openBlock(), createElementBlock("div", ga, [
			e.icon ? (openBlock(), createBlock(ol, {
				key: 0,
				class: "zen-empty-mark zen-empty-icon",
				icon: e.icon
			}, null, 8, ["icon"])) : (openBlock(), createBlock(ya, {
				key: 1,
				class: "zen-empty-mark",
				water: ""
			})),
			e.title ? (openBlock(), createElementBlock("div", ba, toDisplayString(e.title), 1)) : createCommentVNode("", !0),
			l.$slots.default ? (openBlock(), createElementBlock("p", ka, [renderSlot(l.$slots, "default", {}, void 0, !0)])) : createCommentVNode("", !0),
			l.$slots.actions ? (openBlock(), createElementBlock("div", wa, [renderSlot(l.$slots, "actions", {}, void 0, !0)])) : createCommentVNode("", !0)
		]));
	}
}), [["__scopeId", "data-v-71f336c3"]]);
var xa = [
	"rows",
	"placeholder",
	"disabled",
	"value"
];
var za = [
	"type",
	"placeholder",
	"disabled",
	"min",
	"max",
	"step",
	"value"
];
var ql = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenInput",
	props: {
		modelValue: {},
		type: { default: "text" },
		placeholder: {},
		rows: { default: 4 },
		min: {},
		max: {},
		step: {},
		disabled: {
			type: Boolean,
			default: !1
		},
		size: { default: "md" },
		sm: {
			type: Boolean,
			default: !1
		},
		autosize: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: l }) {
		const t = e, o = /* @__PURE__ */ ref(null);
		function r() {
			const d = o.value;
			!t.autosize || !d || (d.style.height = "auto", d.style.height = `${d.scrollHeight + 2}px`);
		}
		watch(() => t.modelValue, () => nextTick(r)), onMounted(r);
		const s = l;
		function u(d) {
			const c = d.target.value;
			if (t.type === "number") {
				const w = Number(c);
				s("update:modelValue", c === "" || Number.isNaN(w) ? 0 : w);
			} else s("update:modelValue", c);
		}
		return (d, c) => e.type === "textarea" ? (openBlock(), createElementBlock("textarea", {
			key: 0,
			ref_key: "area",
			ref: o,
			class: normalizeClass(["zen-input area", {
				sm: e.sm || e.size === "sm",
				auto: e.autosize
			}]),
			rows: e.rows,
			placeholder: e.placeholder,
			disabled: e.disabled,
			value: e.modelValue,
			onInput: u
		}, null, 42, xa)) : (openBlock(), createElementBlock("input", {
			key: 1,
			class: normalizeClass(["zen-input", { sm: e.sm || e.size === "sm" }]),
			type: e.type,
			placeholder: e.placeholder,
			disabled: e.disabled,
			min: e.min,
			max: e.max,
			step: e.step,
			value: e.modelValue,
			onInput: u
		}, null, 42, za));
	}
}), [["__scopeId", "data-v-2eb7b22b"]]);
var Va = ["aria-disabled"];
var Fa = [
	"value",
	"disabled",
	"onKeydown"
];
var Ha = ["aria-disabled"];
var cn = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenNumber",
	props: {
		modelValue: {},
		min: {},
		max: {},
		step: { default: .05 },
		precision: {},
		disabled: {
			type: Boolean,
			default: !1
		},
		bare: {
			type: Boolean,
			default: !1
		},
		size: { default: "md" }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: l }) {
		const t = e, o = l, r = /* @__PURE__ */ ref(null), s = /* @__PURE__ */ ref(!1), u = /* @__PURE__ */ ref(""), d = /* @__PURE__ */ ref(0), c = computed(() => t.precision ?? String(t.step).split(".")[1]?.length ?? 0), w = computed(() => (Number.isFinite(t.modelValue) ? t.modelValue : 0).toFixed(c.value)), b = computed(() => {
			const M = [t.min, t.max].filter((h) => h != null && Number.isFinite(h));
			return M.length ? Math.max(3, ...M.map((h) => h.toFixed(c.value).length)) : 6;
		});
		function V(M) {
			t.min != null && (M = Math.max(t.min, M)), t.max != null && (M = Math.min(t.max, M));
			const h = Math.pow(10, c.value);
			return Math.round(M * h) / h;
		}
		function k(M) {
			Number.isFinite(M) && o("update:modelValue", V(M));
		}
		function p(M) {
			if (t.disabled) return;
			const h = V((t.modelValue || 0) + M * t.step);
			k(h), s.value && (u.value = h.toFixed(c.value));
		}
		function y() {
			s.value = !0, u.value = w.value, requestAnimationFrame(() => r.value?.select());
		}
		function D() {
			s.value = !1, E();
		}
		function le(M) {
			u.value = M.target.value;
		}
		function E() {
			const M = parseFloat(u.value);
			Number.isFinite(M) && k(M);
		}
		function x() {
			u.value = w.value, r.value?.blur();
		}
		let _ = !1, re = !1, W = 0, oe = 0;
		function me(M) {
			t.disabled || s.value || (_ = !0, re = !1, W = M.clientX, oe = t.modelValue || 0, M.currentTarget.setPointerCapture(M.pointerId));
		}
		function Q(M) {
			if (!_) return;
			const h = M.clientX - W;
			Math.abs(h) > 3 && (re = !0), re && (M.preventDefault(), k(oe + h / 4 * t.step));
		}
		function L(M) {
			if (_) {
				_ = !1;
				try {
					M.currentTarget.releasePointerCapture(M.pointerId);
				} catch {}
				re || r.value?.focus();
			}
		}
		return (M, h) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(["zen-num", {
				disabled: e.disabled,
				bare: e.bare,
				sm: e.size === "sm"
			}]),
			style: normalizeStyle({ "--zn-chars": b.value }),
			onPointerleave: h[11] || (h[11] = (F) => d.value = 0)
		}, [
			e.bare ? createCommentVNode("", !0) : (openBlock(), createElementBlock("span", {
				key: 0,
				role: "button",
				"aria-label": "Decrease",
				class: normalizeClass(["zn-step", { hot: d.value === -1 }]),
				tabindex: "-1",
				"aria-disabled": e.disabled || void 0,
				onPointerenter: h[0] || (h[0] = (F) => d.value = -1),
				onPointerleave: h[1] || (h[1] = (F) => d.value = 0),
				onPointerdown: h[2] || (h[2] = withModifiers(() => {}, ["prevent"])),
				onClick: h[3] || (h[3] = (F) => p(-1))
			}, [...h[12] || (h[12] = [createBaseVNode("i", {
				class: "mdi mdi-minus",
				"aria-hidden": "true"
			}, null, -1)])], 42, Va)),
			createBaseVNode("div", {
				class: "zn-val",
				onPointerdown: me,
				onPointermove: Q,
				onPointerup: L
			}, [createBaseVNode("input", {
				ref_key: "el",
				ref: r,
				class: normalizeClass(["zn-input", { live: s.value }]),
				type: "text",
				inputmode: "decimal",
				size: "1",
				value: s.value ? u.value : w.value,
				disabled: e.disabled,
				onFocus: y,
				onBlur: D,
				onInput: le,
				onKeydown: [
					h[4] || (h[4] = withKeys(withModifiers((F) => p(1), ["prevent"]), ["up"])),
					h[5] || (h[5] = withKeys(withModifiers((F) => p(-1), ["prevent"]), ["down"])),
					h[6] || (h[6] = withKeys(withModifiers((F) => r.value?.blur(), ["prevent"]), ["enter"])),
					withKeys(withModifiers(x, ["prevent"]), ["esc"])
				]
			}, null, 42, Fa)], 32),
			e.bare ? createCommentVNode("", !0) : (openBlock(), createElementBlock("span", {
				key: 1,
				role: "button",
				"aria-label": "Increase",
				class: normalizeClass(["zn-step", { hot: d.value === 1 }]),
				tabindex: "-1",
				"aria-disabled": e.disabled || void 0,
				onPointerenter: h[7] || (h[7] = (F) => d.value = 1),
				onPointerleave: h[8] || (h[8] = (F) => d.value = 0),
				onPointerdown: h[9] || (h[9] = withModifiers(() => {}, ["prevent"])),
				onClick: h[10] || (h[10] = (F) => p(1))
			}, [...h[13] || (h[13] = [createBaseVNode("i", {
				class: "mdi mdi-plus",
				"aria-hidden": "true"
			}, null, -1)])], 42, Ha))
		], 38));
	}
}), [["__scopeId", "data-v-f28d60a9"]]);
var Oa = [
	"title",
	"aria-checked",
	"aria-label",
	"tabindex",
	"disabled",
	"onClick"
];
var Wa = {
	key: 1,
	class: "zen-tg-l"
};
var It = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenToggleGroup",
	props: {
		modelValue: {},
		options: {},
		collapse: { type: Boolean },
		disabled: { type: Boolean },
		size: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: l }) {
		const t = e, o = l;
		function r(s) {
			const u = t.options.length, d = t.options.findIndex((V) => V.value === t.modelValue), w = {
				ArrowRight: (d + 1) % u,
				ArrowDown: (d + 1) % u,
				ArrowLeft: (d - 1 + u) % u,
				ArrowUp: (d - 1 + u) % u,
				Home: 0,
				End: u - 1
			}[s.key];
			if (w === void 0 || !u || t.disabled) return;
			s.preventDefault();
			const b = s.currentTarget;
			o("update:modelValue", t.options[w].value), nextTick(() => b.querySelectorAll(".zen-tg-b")[w]?.focus());
		}
		return (s, u) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(["zen-tg", {
				"zen-tg-collapse": e.collapse,
				sm: e.size === "sm",
				disabled: e.disabled
			}]),
			role: "radiogroup",
			onKeydown: r
		}, [(openBlock(!0), createElementBlock(Fragment, null, renderList(e.options, (d, c) => (openBlock(), createElementBlock("button", {
			key: String(d.value),
			type: "button",
			class: normalizeClass(["zen-tg-b", { on: d.value === e.modelValue }]),
			title: d.title || d.label,
			role: "radio",
			"aria-checked": d.value === e.modelValue,
			"aria-label": d.label ? void 0 : d.title,
			tabindex: d.value === e.modelValue || c === 0 && !e.options.some((w) => w.value === e.modelValue) ? 0 : -1,
			disabled: e.disabled,
			onClick: (w) => o("update:modelValue", d.value)
		}, [d.icon ? (openBlock(), createElementBlock("i", {
			key: 0,
			class: normalizeClass(unref(ot)(d.icon))
		}, null, 2)) : createCommentVNode("", !0), d.label ? (openBlock(), createElementBlock("span", Wa, [createBaseVNode("span", null, toDisplayString(d.label), 1)])) : createCommentVNode("", !0)], 10, Oa))), 128))], 34));
	}
}), [["__scopeId", "data-v-9ef2e1ca"]]);
var Ga = [
	"disabled",
	"aria-expanded",
	"aria-activedescendant"
];
var Ja = { class: "zs-label" };
var Qa = [
	"id",
	"aria-selected",
	"onClick",
	"onPointermove"
];
var es = {
	key: 1,
	class: "mdi mdi-check zs-check"
};
var qf = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenSelect",
	props: {
		modelValue: {},
		options: {},
		placeholder: {},
		disabled: { type: Boolean },
		size: {}
	},
	emits: ["update:modelValue", "active"],
	setup(e, { emit: l }) {
		const t = e, o = l, r = (L) => typeof L == "object" ? L : {
			value: L,
			label: String(L)
		}, s = /* @__PURE__ */ ref(!1), u = /* @__PURE__ */ ref(null), d = /* @__PURE__ */ ref(null), c = /* @__PURE__ */ ref({}), w = computed(() => t.options.map(r).find((L) => L.value === t.modelValue)), b = /* @__PURE__ */ ref(-1), V = useId(), k = (L) => `${V}-opt-${L}`;
		function p(L) {
			const M = t.options.length;
			M && (b.value = Math.min(Math.max(L, 0), M - 1), nextTick(() => d.value?.querySelector(`#${CSS.escape(k(b.value))}`)?.scrollIntoView({ block: "nearest" })));
		}
		watch([s, b], () => {
			const L = s.value ? t.options[b.value] : void 0;
			o("active", L === void 0 ? null : r(L).value);
		});
		function y(L) {
			const M = t.options.map((F) => String(r(F).label ?? r(F).value).toLowerCase()), h = M.length;
			for (let F = 1; F <= h; F++) {
				const ee = (b.value + F) % h;
				if (M[ee].startsWith(L)) return p(ee);
			}
		}
		function D(L) {
			s.value || t.disabled || [
				"ArrowDown",
				"ArrowUp",
				"Enter",
				" "
			].includes(L.key) && (L.preventDefault(), oe());
		}
		function le(L) {
			const M = L.target;
			u.value?.contains(M) || d.value?.contains(M) || Cn(L.target, d.value) || me();
		}
		let E = null, x = null;
		const _ = /* @__PURE__ */ ref(qe$1.popover);
		function re(L) {
			if (E?.escape(L)) return me();
			if (!s.value || !E?.isTop()) return;
			if (L.key === "Tab") return me();
			const M = () => {
				const X = t.options[b.value];
				X !== void 0 && Q(r(X).value);
			}, h = {
				ArrowDown: () => p(b.value + 1),
				ArrowUp: () => p(b.value - 1),
				Home: () => p(0),
				End: () => p(t.options.length - 1),
				Enter: M,
				" ": M
			}, F = L.key.length === 1 && !L.ctrlKey && !L.metaKey && !L.altKey, ee = h[L.key] ?? (F ? () => y(L.key.toLowerCase()) : void 0);
			ee && (L.preventDefault(), L.stopPropagation(), ee());
		}
		function W(L) {
			d.value?.contains(L.target) || me();
		}
		function oe() {
			const L = u.value?.querySelector(".zs-trigger");
			if (L) {
				const M = lt(), h = kt(L.getBoundingClientRect(), M), F = Rt(M).height, ee = Math.min(260, t.options.length * 30 + 10), X = F - h.bottom, ve = X < ee + 8 && h.top > X;
				c.value = ve ? {
					bottom: F - h.top + 4 + "px",
					left: h.left + "px",
					minWidth: h.width + "px"
				} : {
					top: h.bottom + 4 + "px",
					left: h.left + "px",
					minWidth: h.width + "px"
				};
			}
			s.value = !0, p(Math.max(0, t.options.findIndex((M) => r(M).value === t.modelValue))), E ??= Mt(qe$1.popover), _.value = E.z, x = setTimeout(() => {
				x = null, s.value && (window.addEventListener("pointerdown", le, !0), window.addEventListener("keydown", re, !0), window.addEventListener("scroll", W, !0), window.addEventListener("resize", me));
			}, 0);
		}
		function me() {
			x !== null && (clearTimeout(x), x = null), s.value && (s.value = !1, E?.release(), E = null, window.removeEventListener("pointerdown", le, !0), window.removeEventListener("keydown", re, !0), window.removeEventListener("scroll", W, !0), window.removeEventListener("resize", me));
		}
		function Q(L) {
			o("update:modelValue", L), me();
		}
		return onBeforeUnmount(me), (L, M) => (openBlock(), createElementBlock("div", {
			ref_key: "root",
			ref: u,
			class: normalizeClass(["zen-select", {
				open: s.value,
				sm: e.size === "sm"
			}])
		}, [createBaseVNode("button", {
			type: "button",
			class: "zs-trigger",
			disabled: e.disabled,
			"aria-haspopup": "listbox",
			"aria-expanded": s.value,
			"aria-activedescendant": s.value && b.value >= 0 ? k(b.value) : void 0,
			onClick: M[0] || (M[0] = (h) => s.value ? me() : oe()),
			onKeydown: D
		}, [
			w.value?.icon ? (openBlock(), createElementBlock("i", {
				key: 0,
				class: normalizeClass(["zs-ico", unref(ot)(w.value.icon)])
			}, null, 2)) : createCommentVNode("", !0),
			createBaseVNode("span", Ja, toDisplayString(w.value?.label ?? w.value?.value ?? e.placeholder ?? ""), 1),
			M[1] || (M[1] = createBaseVNode("i", { class: "mdi mdi-menu-down zs-caret" }, null, -1))
		], 40, Ga), (openBlock(), createBlock(Teleport, { to: "body" }, [s.value ? (openBlock(), createElementBlock("div", {
			key: 0,
			ref_key: "menuRef",
			ref: d,
			"data-zen-layer": "",
			class: "zs-menu zen-surface zen-scroll",
			style: normalizeStyle([c.value, { zIndex: _.value }]),
			role: "listbox"
		}, [(openBlock(!0), createElementBlock(Fragment, null, renderList(e.options, (h, F) => (openBlock(), createElementBlock("button", {
			id: k(F),
			key: String(r(h).value),
			type: "button",
			tabindex: "-1",
			class: normalizeClass(["zs-opt", {
				on: r(h).value === e.modelValue,
				cur: F === b.value
			}]),
			role: "option",
			"aria-selected": r(h).value === e.modelValue,
			onClick: (ee) => Q(r(h).value),
			onPointermove: (ee) => b.value = F
		}, [
			r(h).icon ? (openBlock(), createElementBlock("i", {
				key: 0,
				class: normalizeClass(["zs-ico", unref(ot)(r(h).icon)])
			}, null, 2)) : createCommentVNode("", !0),
			createBaseVNode("span", null, toDisplayString(r(h).label ?? r(h).value), 1),
			r(h).value === e.modelValue ? (openBlock(), createElementBlock("i", es)) : createCommentVNode("", !0)
		], 42, Qa))), 128))], 4)) : createCommentVNode("", !0)]))], 2));
	}
}), [["__scopeId", "data-v-f834634f"]]);
var Ds = ["aria-checked", "disabled"];
var Vs = {
	key: 0,
	class: "lbl"
};
var Gf = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenDot",
	props: {
		modelValue: { type: Boolean },
		color: {},
		label: {},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: l }) {
		const t = e, o = l, r = computed(() => t.color ? { "--zen-dot-on": t.color } : void 0);
		return (s, u) => (openBlock(), createElementBlock("button", {
			type: "button",
			class: normalizeClass(["zen-dot", { on: e.modelValue }]),
			role: "checkbox",
			"aria-checked": e.modelValue,
			disabled: e.disabled,
			onClick: u[0] || (u[0] = (d) => o("update:modelValue", !e.modelValue))
		}, [createBaseVNode("span", {
			class: "mark",
			style: normalizeStyle(r.value)
		}, null, 4), e.label || s.$slots.default ? (openBlock(), createElementBlock("span", Vs, [renderSlot(s.$slots, "default", {}, () => [createTextVNode(toDisplayString(e.label), 1)], !0)])) : createCommentVNode("", !0)], 10, Ds));
	}
}), [["__scopeId", "data-v-73775b30"]]);
var $i = ["disabled"];
var xi = { class: "zmi-lbl" };
var zi = ["disabled"];
var Mi = {
	key: 0,
	class: "zmi-lead"
};
var Ei = { class: "zmi-lbl" };
var Li = {
	key: 2,
	class: "zmi-hint"
};
var am = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenMenuItem",
	props: {
		icon: {},
		danger: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["select"],
	setup(e, { emit: l }) {
		const t = e, o = l, r = useSlots(), s = /* @__PURE__ */ ref(null), u = /* @__PURE__ */ ref(!1);
		let d;
		function c() {
			clearTimeout(d), t.disabled || (u.value = !0);
		}
		function w() {
			clearTimeout(d), d = setTimeout(() => {
				u.value = !1;
			}, 220);
		}
		function b() {
			t.disabled || o("select");
		}
		return (V, k) => unref(r).submenu ? (openBlock(), createElementBlock("div", {
			key: 0,
			ref_key: "rootEl",
			ref: s,
			class: "zmi-wrap",
			onPointerenter: c,
			onPointerleave: w
		}, [createBaseVNode("button", {
			type: "button",
			class: normalizeClass(["zmi", {
				danger: e.danger,
				on: u.value
			}]),
			disabled: e.disabled
		}, [
			e.icon ? (openBlock(), createElementBlock("i", {
				key: 0,
				class: normalizeClass(["zmi-ico", unref(ot)(e.icon)])
			}, null, 2)) : createCommentVNode("", !0),
			createBaseVNode("span", xi, [renderSlot(V.$slots, "default", {}, void 0, !0)]),
			k[1] || (k[1] = createBaseVNode("i", { class: "mdi mdi-chevron-right zmi-caret" }, null, -1))
		], 10, $i), createVNode(ml, {
			open: u.value,
			"onUpdate:open": k[0] || (k[0] = (p) => u.value = p),
			anchor: s.value,
			placement: "right-start",
			offset: 3
		}, {
			default: withCtx(() => [createBaseVNode("div", {
				class: "zmi-sub",
				onPointerenter: c,
				onPointerleave: w
			}, [renderSlot(V.$slots, "submenu", {}, void 0, !0)], 32)]),
			_: 3
		}, 8, ["open", "anchor"])], 544)) : (openBlock(), createElementBlock("button", {
			key: 1,
			type: "button",
			class: normalizeClass(["zmi", { danger: e.danger }]),
			disabled: e.disabled,
			onClick: b
		}, [
			unref(r).lead ? (openBlock(), createElementBlock("span", Mi, [renderSlot(V.$slots, "lead", {}, void 0, !0)])) : createCommentVNode("", !0),
			e.icon ? (openBlock(), createElementBlock("i", {
				key: 1,
				class: normalizeClass(["zmi-ico", unref(ot)(e.icon)])
			}, null, 2)) : createCommentVNode("", !0),
			createBaseVNode("span", Ei, [renderSlot(V.$slots, "default", {}, void 0, !0)]),
			unref(r).hint ? (openBlock(), createElementBlock("span", Li, [renderSlot(V.$slots, "hint", {}, void 0, !0)])) : createCommentVNode("", !0)
		], 10, zi));
	}
}), [["__scopeId", "data-v-4282c43c"]]);
var Ci = {
	class: "zen-msep",
	role: "separator"
};
var sm = /* @__PURE__ */ Te(/* @__PURE__ */ defineComponent({
	__name: "ZenMenuSeparator",
	setup(e) {
		return (l, t) => (openBlock(), createElementBlock("div", Ci));
	}
}), [["__scopeId", "data-v-5c3057e1"]]);
// frontend/lib/wheelScroll.ts
var prevFocus = /* @__PURE__ */ new WeakMap();
function isTyping(el) {
	const t = el;
	return !!t && (t.isContentEditable || t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT");
}
function arm(e) {
	if (e.buttons) return;
	armEl(e.currentTarget);
}
/** Re-arm after the content under a resting pointer changed (no pointer event will follow). */
function rearmIfHovered(el) {
	if (el && el.matches(":hover")) armEl(el);
}
function armEl(el) {
	if (el.scrollHeight <= el.clientHeight) return;
	const active = document.activeElement;
	if (el.contains(active)) return;
	const ownNode = el.closest(".zen-widget");
	if (isTyping(active) && !(ownNode && ownNode.contains(active))) return;
	if (!prevFocus.has(el)) prevFocus.set(el, isTyping(active) ? null : active);
	el.focus({ preventScroll: true });
}
/** Undo only the focus we took: if a real control inside took it since, leave it alone. */
function disarm(e) {
	const el = e.currentTarget;
	if (document.activeElement !== el) return;
	const prev = prevFocus.get(el);
	if (prev && prev !== document.body && document.contains(prev)) prev.focus({ preventScroll: true });
	else el.blur();
	prevFocus.delete(el);
}
var wheelScroll = {
	tabindex: "-1",
	"data-capture-wheel": "true",
	onPointerenter: arm,
	onPointermove: arm,
	onPointerleave: disarm
};
// node_modules/.pnpm/@nynxz+zenkit-nodekit@0.5.1_@vitejs+plugin-vue@6.0.8_vite@8.2.2_@types+node@26.6.6__vue_d058ed17d4c09c61a2be5ceed3d055aa/node_modules/@nynxz/zenkit-nodekit/dist/identity-YgEOIRDu.js
function n(a) {
	const t = a.namespace, o = "/" + t.split(".").join("/"), r = t.toUpperCase().replace(/[.-]/g, "_") + "_";
	return {
		NAMESPACE: t,
		DISPLAY_NAME: a.displayName,
		CATEGORY: a.category,
		ROUTE_PREFIX: o,
		nodeId: (e) => `${t}.${e}`,
		typeId: (e) => r + e.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").toUpperCase(),
		route: (e) => `${o}/${e.replace(/^\/+/, "")}`,
		settingId: (e) => `${t}.${e}`
	};
}
// node_modules/.pnpm/@nynxz+zenkit-nodekit@0.5.1_@vitejs+plugin-vue@6.0.8_vite@8.2.2_@types+node@26.6.6__vue_d058ed17d4c09c61a2be5ceed3d055aa/node_modules/@nynxz/zenkit-nodekit/dist/index.js
var me = "ZenKit.Security.AllowedHosts";
var q = "__zenkitAllowedHostsSetting";
function ge() {
	const e = globalThis;
	return e[q] ? [] : (e[q] = !0, [{
		id: me,
		category: [
			"ZenKit",
			"Security",
			"Allowed host names"
		],
		name: "Allowed host names",
		tooltip: "Names a reverse proxy serves ComfyUI under (comma-separated, e.g. comfy.example.com). ZenKit packs refuse changes from any other host while ComfyUI listens only on loopback or one address.",
		type: "text",
		defaultValue: ""
	}]);
}
function we(e, t) {
	if (e === t) return !0;
	try {
		return JSON.stringify(e) === JSON.stringify(t);
	} catch {
		return !1;
	}
}
function ye(e) {
	const t = /* @__PURE__ */ new Set(), n = { refresh: e };
	let o = null;
	const r = /* @__PURE__ */ new Set();
	let s = !1;
	function a() {
		s = !1;
		const i = [...r];
		r.clear();
		for (const c of i) try {
			c.refresh();
		} catch (u) {
			console.error("[ZenKit] widget mirror refresh failed", u);
		}
	}
	return {
		original: n,
		changed(i, c) {
			if (we(i, c)) return;
			const u = o ?? n;
			for (const f of [n, ...t]) f !== u && r.add(f);
			!r.size || s || (s = !0, queueMicrotask(a));
		},
		add(i) {
			return t.add(i), () => {
				t.delete(i), r.delete(i);
			};
		},
		writerFor(i, c) {
			return new Proxy(i, { set(u, f, l) {
				if (f !== "value") return Reflect.set(u, f, l);
				const p = o;
				o = c;
				try {
					u.value = l;
				} finally {
					o = p;
				}
				return !0;
			} });
		}
	};
}
var M = /* @__PURE__ */ new WeakMap();
function V(e) {
	e.addEventListener("pointerdown", (t) => {
		const o = t.target?.closest?.(ve);
		o && e.contains(o) && t.stopPropagation();
	});
}
var ve = "button, input, select, textarea, a[href], [contenteditable=\"true\"], [data-zen-drag],[draggable=\"true\"], [role=\"button\"], [role=\"slider\"], [role=\"switch\"], [role=\"tab\"], [role=\"combobox\"], [role=\"checkbox\"]";
var re = "zenSlot";
function be(e, t) {
	return [
		e.graph?.id ?? "root",
		String(e.id),
		t
	].map(encodeURIComponent).join(":");
}
function Se(e, t) {
	if (e.isConnected) return !0;
	for (const n of document.querySelectorAll("[data-zen-slot]")) if (!(n === e || n.dataset[re] !== t)) return n.replaceWith(e), !0;
	return !1;
}
function ie(e, t, n) {
	const o = !!t.fill, r = document.createElement("div");
	r.dataset.packWidget = t.widgetType, Object.assign(r.style, {
		width: "100%",
		height: "100%",
		overflow: o ? "hidden" : "visible",
		pointerEvents: t.dragThrough ? "none" : "auto",
		...o ? { minHeight: `${t.minHeight ?? 80}px` } : {}
	});
	const s = document.createElement("div");
	Object.assign(s.style, {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		boxSizing: "border-box",
		...o ? {
			height: "100%",
			overflow: "hidden"
		} : { minHeight: "100%" }
	}), r.appendChild(s), t.dragThrough || V(r);
	const a = t.minHeight ?? 40, i = t.serialize !== !1;
	let c = t.defaultValue;
	const u = (d, m) => {
		const S = createApp(t.component, {
			widget: m,
			node: e,
			...t.props
		});
		return S.mount(d), S;
	}, f = ye(() => {
		const d = M.get(l);
		d && (d.app.unmount(), d.app = u(s, l));
	}), l = e.addDOMWidget(t.widgetName, t.widgetType, r, {
		getMinHeight: () => o ? a : Math.max(a, Math.ceil(p())),
		hideOnZoom: !1,
		serialize: i,
		getValue: () => i ? c : t.defaultValue,
		setValue: (d) => {
			const m = c;
			c = d, f.changed(m, d);
		}
	});
	l.serializeValue = i ? () => c : () => {}, i || (l.serialize = !1), l.zenMirror = {
		fill: o,
		mount(d) {
			const m = document.createElement("div");
			Object.assign(m.style, {
				width: "100%",
				display: "flex",
				flexDirection: "column",
				boxSizing: "border-box",
				...o ? {
					height: "100%",
					minHeight: "0",
					overflow: "hidden"
				} : {}
			}), V(m), d.appendChild(m);
			const S = { refresh: () => {
				b.unmount(), b = u(m, x);
			} }, x = f.writerFor(l, S);
			let b = u(m, x);
			const I = f.add(S);
			return () => {
				I(), b.unmount(), m.remove();
			};
		}
	};
	function p() {
		let d = 0;
		for (const m of s.children) {
			const S = m;
			d += Math.max(S.offsetHeight, S.scrollHeight);
		}
		for (const m of s.querySelectorAll("[data-zen-spacer]")) d -= m.offsetHeight;
		return d;
	}
	const w = t.minWidth ?? 0;
	if (w && typeof e.computeSize == "function") {
		const d = e.computeSize.bind(e);
		e.computeSize = () => {
			const m = d();
			return [Math.max(m[0], w), m[1]];
		};
	}
	function v() {
		if (!w) return;
		const d = r.closest("[data-node-id]");
		d && d.style.minWidth !== `${w}px` && (d.style.minWidth = `${w}px`), e.size && e.size[0] < w && e.setSize?.([w, e.size[1]]);
	}
	let y = 0;
	function z() {
		v();
		try {
			if (typeof e.computeSize == "function" && typeof e.setSize == "function") {
				const d = e.computeSize()[1];
				if (d === y) return;
				const m = e.size?.[1] ?? d, S = y > 0 && m <= y + 1;
				e.setSize([e.size?.[0] ?? e.computeSize()[0], S ? d : Math.max(m, d)]), y = d;
			}
		} catch {}
		e.graph?.setDirtyCanvas?.(!0, !0);
	}
	Promise.resolve().then(() => {
		try {
			const d = u(s, l);
			let m;
			if (!o && typeof ResizeObserver < "u") {
				const b = /* @__PURE__ */ new Set(), I = () => {
					for (const N of [
						s,
						...s.children,
						...s.querySelectorAll("[data-zen-spacer]")
					]) b.has(N) || (b.add(N), m?.observe(N));
				};
				m = new ResizeObserver(() => {
					I(), z();
				}), I();
			}
			M.set(l, {
				app: d,
				ro: m
			}), o || z();
			const S = () => {
				if (!t.dragThrough) return;
				const b = r.parentElement;
				b && (b.style.pointerEvents = "none");
			}, x = () => {
				const b = be(e, t.widgetName);
				r.dataset[re] = b, Se(r, b), S(), v();
			};
			typeof requestAnimationFrame == "function" ? requestAnimationFrame(x) : x(), [
				60,
				200,
				600,
				1500
			].forEach((b) => window.setTimeout(x, b));
		} catch (d) {
			console.error(`[${n.DISPLAY_NAME}] failed to mount widget`, t.widgetType, d);
		}
	});
	const h = l.onRemove;
	return l.onRemove = () => {
		try {
			const d = M.get(l);
			d && (d.ro?.disconnect(), d.app.unmount(), M.delete(l));
		} catch (d) {
			console.error(`[${n.DISPLAY_NAME}] widget unmount error`, d);
		}
		try {
			h?.call(l);
		} catch (d) {
			console.error(`[${n.DISPLAY_NAME}] chained onRemove error`, d);
		}
	}, { widget: l };
}
var ze = [
	"output",
	"input",
	"temp"
];
function B(e) {
	if (typeof e != "string") return null;
	const [t, ...n] = e.split("/"), o = n.pop();
	return !o || !ze.includes(t) || [...n, o].some((r) => !r || r === "." || r === "..") ? null : {
		type: t,
		subfolder: n.join("/"),
		filename: o
	};
}
var xe = /\.(mp4|webm|mov|mkv|avi|m4v)(\?|#|$)/i;
var Ee = /\.(mp3|wav|flac|ogg|oga|m4a|aac|opus)(\?|#|$)/i;
function R(e) {
	const t = e || "", n = /^data:(image|video|audio)\//i.exec(t);
	return n ? n[1].toLowerCase() : xe.test(t) ? "video" : Ee.test(t) ? "audio" : "image";
}
var Ae = "background:#b45309;color:#fff;border-radius:3px;padding:1px 6px;font-weight:700";
function ke(e, ...t) {
	console.warn("%cZenKit%c " + e, Ae, "color:inherit", ...t);
}
function A() {
	return typeof window < "u" && window.ZenKit || null;
}
var Ie = 6e3;
var X = !1;
var Ne = 6e4;
var $e = "/zenkit/themes";
var G = null;
function Ce() {
	return G ??= fetch($e, {
		method: "HEAD",
		credentials: "include"
	}).then((e) => e.ok ? !0 : e.status === 404 ? !1 : null).catch(() => null), G;
}
function C(e = Ie) {
	const t = A();
	return t ? t.ready ?? Promise.resolve(t) : typeof window > "u" ? Promise.resolve(null) : window.ZenKitPending ? new Promise((n) => window.addEventListener("zen:ready", () => n(A()), { once: !0 })) : X ? Promise.resolve(null) : new Promise((n) => {
		let o = !1, r;
		const s = (i) => {
			o || (o = !0, clearTimeout(r), window.removeEventListener("zen:ready", a), i || (X = !0, Me()), n(i));
		}, a = () => s(A());
		window.addEventListener("zen:ready", a), r = setTimeout(() => s(A()), e), Ce().then((i) => {
			i === null || o || (clearTimeout(r), i ? r = setTimeout(() => s(A()), Ne) : s(A()));
		});
	});
}
var J = !1;
function Me() {
	J || (J = !0, ke("runtime not detected — ZenKit-integrated panels will use their fallback UI. Install ComfyUI-ZenKit for the full experience."));
}
async function Le(e) {
	const t = await C();
	try {
		return t ? t.graph.slotLink(e) : () => {};
	} catch {
		return () => {};
	}
}
function Pe(e, t) {
	return Object.entries(e).sort(([n], [o]) => n.localeCompare(o)).flatMap(([n, o]) => {
		const r = o?.default;
		return r ? Array.isArray(r) ? r : [r] : (console.warn(`[${t?.DISPLAY_NAME ?? "nodekit"}] ${n} has no default export — skipped`), []);
	});
}
var Q = (e) => Array.isArray(e) ? e : [e];
function De(e) {
	if (Array.isArray(e)) return e[1]?.default;
	if (e && typeof e == "object") return e.default;
}
function Oe(e, t, n) {
	const o = /* @__PURE__ */ new Map();
	for (const a of e) for (const i of Q(a.is ?? [])) o.set(i, a);
	const r = {};
	for (const a of e) for (const i of a.widgets ?? []) r[i.type] || (r[i.type] = (c, u, f) => ie(c, {
		widgetName: i.name ?? u,
		widgetType: i.type,
		component: i.component,
		minHeight: i.minHeight,
		minWidth: i.minWidth,
		fill: i.fill,
		dragThrough: i.dragThrough,
		serialize: i.serialize,
		defaultValue: i.default !== void 0 ? i.default : De(f)
	}, n));
	const s = [...e.flatMap((a) => a.settings ?? []), ...ge()];
	app.registerExtension({
		name: t,
		...s.length ? { settings: s } : {},
		getCustomWidgets() {
			return r;
		},
		nodeCreated(a) {
			const i = a, c = o.get(i.constructor?.comfyClass ?? "");
			if (c && (c.minSize && i.setSize([Math.max(i.size[0], c.minSize[0]), Math.max(i.size[1], c.minSize[1])]), c.hideOutputImages && (i.hideOutputImages = !0), c.output)) {
				const { widget: u, from: f } = c.output, l = i.onExecuted;
				i.onExecuted = function(p) {
					l?.call(this, p);
					const w = i.widgets?.find((y) => y.name === u);
					if (!w) return;
					const v = f(p ?? {});
					try {
						w.callback?.(v);
					} catch (y) {
						console.warn(`[${n.DISPLAY_NAME}] output handler failed for ${u}`, y);
					}
				};
			}
		}
	});
	for (const a of e) for (const i of a.slotLinks ?? []) for (const c of Q(a.is ?? [])) Le({
		on: i.input != null ? {
			node: c,
			input: i.input
		} : {
			node: c,
			output: i.output
		},
		spawn: i.spawn
	});
}
function ce(e) {
	return e.split("/").pop().replace(/\.vue$/, "");
}
function Re(e, t) {
	const n = /* @__PURE__ */ new Set(), o = [];
	for (const [r, s] of Object.entries(e).sort(([a], [i]) => a.localeCompare(i))) {
		const a = s, i = ce(r), c = t.typeId(i);
		if (!a?.default) {
			console.warn(`[${t.DISPLAY_NAME}] ${r} has no default export — skipped`);
			continue;
		}
		if (n.has(c)) {
			console.warn(`[${t.DISPLAY_NAME}] duplicate widget type ${c} from ${r} — skipped`);
			continue;
		}
		n.add(c), o.push({
			...a.nodeDef,
			widgets: [{
				type: c,
				component: a.default,
				...a.widgetOptions
			}]
		});
	}
	return o;
}
function _e(e, t) {
	return Object.keys(e).map((n) => t.typeId(ce(n))).sort();
}
var ee = "#6366f1";
var Ue = "#0f1f0f";
function Be(e) {
	let t = e;
	for (let n = 0; t && n < 12; n++) {
		const o = t.querySelector?.(".lg-node-header");
		if (o) return o;
		t = t.parentElement;
	}
	return null;
}
function He(e, t, n, o) {
	let r = !1, s = !1;
	const a = document.createElement("button");
	a.type = "button", a.className = `${o.NAMESPACE}-hdr-btn`, a.title = n.title ?? "";
	const i = document.createElement("i");
	i.className = n.icon, a.appendChild(i), Object.assign(a.style, {
		position: "absolute",
		right: "10px",
		top: "50%",
		transform: "translateY(-50%)",
		zIndex: "2",
		background: "none",
		border: "none",
		cursor: "pointer",
		color: "inherit",
		opacity: "0.6",
		display: "inline-flex",
		alignItems: "center",
		padding: "2px",
		fontSize: "15px",
		lineHeight: "1",
		transition: "opacity .12s ease, color .12s ease"
	}), a.addEventListener("pointerdown", (h) => h.stopPropagation()), a.addEventListener("pointerup", (h) => h.stopPropagation()), a.addEventListener("click", (h) => {
		h.stopPropagation(), n.onClick(a);
	}), a.addEventListener("pointerenter", () => {
		s = !0, f();
	}), a.addEventListener("pointerleave", () => {
		s = !1, f();
	}), a.addEventListener("dblclick", (h) => {
		h.stopPropagation(), h.preventDefault();
	});
	const c = () => {
		const h = Be(t);
		if (!h) {
			a.parentElement && a.remove();
			return;
		}
		getComputedStyle(h).position === "static" && (h.style.position = "relative"), a.parentElement !== h && h.appendChild(a);
	};
	c();
	const u = window.setInterval(c, 500);
	function f() {
		const h = r || s;
		a.style.opacity = h ? "1" : "0.6", a.style.color = h ? `var(--zen-accent, ${ee})` : "inherit";
	}
	const l = e, p = () => (l.setDirtyCanvas ?? l.graph?.setDirtyCanvas)?.(!0, !0);
	let w = null;
	const v = {
		x: 0,
		y: 0
	}, y = (h) => {
		v.x = h.clientX, v.y = h.clientY;
	};
	if (typeof l.addTitleButton == "function") try {
		window.addEventListener("pointerdown", y, !0), w = l.addTitleButton({
			text: n.text ?? "⚙",
			name: `${o.NAMESPACE}-header-btn`,
			xOffset: -8
		});
		const h = l.onTitleButtonClick;
		l.onTitleButtonClick = function(d, m) {
			h?.call(this, d, m), d === w && n.onClick({ ...v });
		};
	} catch {
		w = null;
	}
	const z = () => {
		f(), w && (w.bgColor = r ? n.activeColor ?? ee : Ue, p());
	};
	return {
		destroy() {
			if (window.clearInterval(u), window.removeEventListener("pointerdown", y, !0), a.remove(), w && Array.isArray(l.title_buttons)) {
				const h = l.title_buttons.indexOf(w);
				h >= 0 && l.title_buttons.splice(h, 1), p();
			}
		},
		setActive(h) {
			r = h, z();
		}
	};
}
function We(e) {
	const t = new URLSearchParams(e).toString(), n = app.getRandParam?.() ?? `&r=${t.length}`;
	return api.apiURL(`/view?${t}${n}`);
}
function Ze(e) {
	const t = B(e);
	return t ? We(t) : je();
}
var je = () => api.apiURL("/view?filename=");
async function j(e, t = "zenkit") {
	const n = new FormData();
	n.append("image", e), n.append("subfolder", t);
	const o = await api.fetchApi("/upload/image", {
		method: "POST",
		body: n
	});
	if (!o.ok) throw new Error(`Upload failed (${o.status}).`);
	const r = await o.json();
	return [
		"input",
		r.subfolder,
		r.name
	].filter(Boolean).join("/");
}
var te = (e) => api.apiURL(e);
function Ke(e) {
	const t = /* @__PURE__ */ new Map();
	async function n(o) {
		const r = await fetch(te(`${e}?type=${o}`));
		if (!r.ok) throw new Error(`Could not list ${o}/ (${r.status}).`);
		return ((await r.json()).items ?? []).map((a) => {
			const i = String(a.name), c = `${o}/${i}`, u = Number(a.mtime) || 0, f = a.kind ?? "image", l = new URLSearchParams({
				type: o,
				name: i,
				size: "320",
				v: String(u)
			});
			return {
				ref: c,
				root: o,
				folder: String(a.subfolder ?? ""),
				filename: String(a.filename ?? i.split("/").pop()),
				kind: f,
				size: Number(a.size) || 0,
				mtime: u,
				url: Ze(c),
				thumb: f === "audio" ? void 0 : te(`${e}/thumb?${l}`)
			};
		});
	}
	return {
		roots: [
			"input",
			"output",
			"temp"
		],
		list(o, r = !1) {
			if (r || !t.has(o)) {
				const s = n(o);
				s.catch(() => t.delete(o)), t.set(o, s);
			}
			return t.get(o);
		},
		async upload(o, r = "zenkit") {
			const s = await this.list("input").catch(() => []), a = new Map(s.map((c) => [`${c.filename}|${c.size}`, c.ref])), i = [];
			for (const c of o) {
				const u = a.get(`${c.name}|${c.size}`);
				if (u) {
					i.push(u);
					continue;
				}
				const f = await j(c, r);
				a.set(`${c.name}|${c.size}`, f), i.push(f);
			}
			return t.delete("input"), i;
		}
	};
}
var T = (e) => api.apiURL(e);
async function qe(e) {
	if (!globalThis.crypto?.subtle) return null;
	const t = await crypto.subtle.digest("SHA-256", await e.arrayBuffer());
	return Array.from(new Uint8Array(t), (n) => n.toString(16).padStart(2, "0")).join("");
}
function Ve(e) {
	async function t(s) {
		try {
			const a = await qe(s);
			if (!a) return null;
			const i = new URLSearchParams({
				size: String(s.size),
				sha256: a
			}), c = await fetch(T(`${e}/find?${i}`));
			return c.ok ? (await c.json()).ref : null;
		} catch {
			return null;
		}
	}
	const n = /* @__PURE__ */ shallowRef(null);
	let o = !1;
	function r(s) {
		o || (o = !0, fetch(s, { cache: "no-store" }).then((a) => {
			a.ok && (n.value = a.headers.has("X-Thumb-Time"));
		}).catch(() => {}).finally(() => o = !1));
	}
	return {
		thumbUrl(s, a = 256, i) {
			const c = B(s);
			if (!c || R(s) === "audio") return "";
			const u = c.subfolder ? `${c.subfolder}/${c.filename}` : c.filename, f = new URLSearchParams({
				type: c.type,
				name: u,
				size: String(a)
			}), l = T(`${e}/thumb?${f}`);
			if (!i || !(i > 0) || R(s) !== "video") return l;
			f.set("t", i.toFixed(6));
			const p = T(`${e}/thumb?${f}`);
			return n.value ? p : (n.value === null && r(p), l);
		},
		async uploadOrReuse(s, a = "zenkit") {
			return await t(s) ?? j(s, a);
		},
		async mediaInfo(s) {
			try {
				const a = await fetch(T(`${e}/info?${new URLSearchParams({ ref: s })}`));
				if (!a.ok) return null;
				const i = await a.json(), c = (u) => typeof u == "number" ? u : null;
				return {
					kind: i.kind ?? R(s),
					duration: c(i.duration),
					width: c(i.width),
					height: c(i.height),
					fps: c(i.fps),
					hasAudio: typeof i.has_audio == "boolean" ? i.has_audio : null
				};
			} catch {
				return null;
			}
		}
	};
}
function dt(e) {
	const t = n(e);
	return {
		...t,
		routeUrl: (n) => api.apiURL(t.route(n)),
		registerNodes: (n, o) => Oe(n, o ?? t.NAMESPACE, t),
		discoverNodes: (n) => Pe(n, t),
		discoverWidgets: (n) => Re(n, t),
		widgetTypes: (n) => _e(n, t),
		mountWidget: (n, o) => ie(n, o, t),
		addNodeHeaderButton: (n, o, r) => He(n, o, r, t),
		mediaLibrary: Ke(t.route("media")),
		...Ve(t.route("media"))
	};
}
// frontend/framework.ts
var { NAMESPACE, DISPLAY_NAME, nodeId, routeUrl, registerNodes, discoverWidgets, widgetTypes } = dt({
	namespace: "embeddingquery",
	displayName: "Embedding Query",
	category: "EmbeddingQuery",
	python: {
		"logPrefix": "[EmbeddingQuery]",
		"routes": ["_routes"]
	}
});
// frontend/lib/api.ts
var JOB_EVENT = "embeddingquery.index";
async function json(res) {
	const body = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
	return body;
}
var post = (path, body) => fetch(routeUrl(path), {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(body)
});
var listModels = async () => (await json(await fetch(routeUrl("models")))).models;
var listFolders = async (model) => json(await fetch(routeUrl("folders") + "?model=" + encodeURIComponent(model)));
var startIndex = async (model, folders, full = false, detail = 280) => json(await post("index", {
	model,
	folders,
	full,
	detail
}));
var cancelIndex = async () => json(await post("index/cancel", {}));
var deleteIndex = async (model, folder) => json(await post("index/delete", {
	model,
	folder
}));
var search = async (s, signal) => {
	return json(await fetch(routeUrl("search"), {
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
			dim: s.dim
		})
	}));
};
var thumbUrl = (ref, size = 256) => `${routeUrl("thumb")}?size=${size}&ref=${encodeURIComponent(ref)}`;
var fileUrl = (ref) => `${routeUrl("file")}?ref=${encodeURIComponent(ref)}`;
var textCache = /* @__PURE__ */ new Map();
function textOf(ref) {
	let p = textCache.get(ref);
	if (!p) {
		p = fetch(`${routeUrl("text")}?ref=${encodeURIComponent(ref)}`).then((r) => json(r)).then((d) => d.text).catch(() => "");
		textCache.set(ref, p);
	}
	return p;
}
var ROOTS = ["input", "output"];
var isRootKey = (p) => ROOTS.some((r) => p === r || p.startsWith(r + "/"));
/** Folder keys saved before output/ was a root were relative to input/ ("" = input/). */
var normalizeFolder = (p) => {
	const f = p.replace(/^\/+|\/+$/g, "");
	return isRootKey(f) ? f : f ? `input/${f}` : "input";
};
var isRoot = (path) => !path.includes("/");
var folderLabel = (path) => path.split("/").pop() || path;
var folderDepth = (path) => path.split("/").length - 1;
var parentFolder = (path) => isRoot(path) ? null : path.slice(0, path.lastIndexOf("/"));
// frontend/widgets/EmbeddingSearch.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "qe-query" };
var _hoisted_2 = {
	key: 0,
	class: "qe-linked"
};
var _hoisted_3 = ["title"];
var _hoisted_4 = { class: "qe-sim-stack" };
var _hoisted_5 = ["src"];
var _hoisted_6 = {
	key: 1,
	class: "mdi mdi-text-box-outline"
};
var _hoisted_7 = { key: 0 };
var _hoisted_8 = { key: 1 };
var _hoisted_9 = { class: "qe-muted" };
var _hoisted_10 = { class: "qe-fhead" };
var _hoisted_11 = { class: "qe-fhead-text" };
var _hoisted_12 = ["title"];
var _hoisted_13 = {
	key: 0,
	class: "qe-job"
};
var _hoisted_14 = { class: "qe-job-bar" };
var _hoisted_15 = {
	key: 1,
	class: "qe-job err"
};
var _hoisted_16 = {
	key: 0,
	class: "qe-hint"
};
var _hoisted_17 = ["title", "onClick"];
var _hoisted_18 = {
	key: 1,
	class: "qe-chev"
};
var _hoisted_19 = ["title"];
var _hoisted_20 = { class: "qe-fcount" };
var _hoisted_21 = [
	"title",
	"disabled",
	"onClick"
];
var _hoisted_22 = {
	key: 5,
	class: "qe-more-gap"
};
var _hoisted_23 = ["title", "onClick"];
var _hoisted_24 = ["src"];
var _hoisted_25 = {
	key: 1,
	class: "qe-text"
};
var _hoisted_26 = { class: "qe-snip" };
var _hoisted_27 = { class: "qe-score" };
var _hoisted_28 = {
	key: 2,
	class: "qe-check"
};
var _hoisted_29 = { class: "qe-name" };
var _hoisted_30 = { class: "qe-acts" };
var _hoisted_31 = ["title", "onClick"];
var _hoisted_32 = ["href"];
var _hoisted_33 = { class: "qe-status" };
var _hoisted_34 = ["title"];
var _hoisted_35 = {
	key: 1,
	class: "qe-muted"
};
var _hoisted_36 = {
	key: 2,
	class: "qe-muted"
};
var _hoisted_37 = ["title"];
var _hoisted_38 = {
	key: 4,
	class: "qe-muted",
	title: "Click a result to pin it as the output"
};
var _hoisted_39 = { class: "qe-settings" };
var _hoisted_40 = { class: "qe-set-row" };
var _hoisted_41 = { class: "qe-set-row" };
var _hoisted_42 = { class: "qe-set-row" };
var _hoisted_43 = { class: "qe-set-row" };
var widgetOptions = {
	fill: true,
	minHeight: 300,
	minWidth: 340
};
var nodeDef = {
	is: "embeddingquery.Search",
	minSize: [420, 520],
	output: {
		widget: "search",
		from: (o) => ({ __qeRun: (o.qe_results ?? [])[0] ?? null })
	}
};
var EmbeddingSearch_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "EmbeddingSearch",
	props: {
		widget: {},
		node: {}
	},
	setup(__props) {
		const props = __props;
		const KIND_OPTS = [
			{
				value: "all",
				icon: "mdi mdi-shape-outline",
				title: "Images and text"
			},
			{
				value: "image",
				icon: "mdi mdi-image-outline",
				title: "Images only"
			},
			{
				value: "text",
				icon: "mdi mdi-text-box-outline",
				title: "Text files only"
			}
		];
		const COMBINE_LABEL = {
			mean: "in common",
			any: "any of them",
			joint: "together"
		};
		const COMBINE_OPTS = [
			{
				value: "mean",
				label: "Mean (in common)"
			},
			{
				value: "any",
				label: "Any (OR)"
			},
			{
				value: "joint",
				label: "Joint (together)"
			}
		];
		const DETAIL_OPTS = [
			{
				value: "280",
				label: "High (280)"
			},
			{
				value: "140",
				label: "Medium (140, ~2x faster)"
			},
			{
				value: "70",
				label: "Fast (70, ~4x faster)"
			}
		];
		const DIM_OPTS = [
			"768",
			"512",
			"256",
			"128"
		].map((d) => ({
			value: d,
			label: d
		}));
		const IMAGE_EXT = /\.(png|jpe?g|webp|bmp|gif|tiff?)$/i;
		const rootEl = /* @__PURE__ */ ref(null);
		const DEFAULTS = {
			model: "",
			folders: [],
			query: "",
			kind: "all",
			top_k: 24,
			dim: 768,
			selected: null,
			similar: [],
			combine: "mean",
			detail: 280
		};
		function toState(v) {
			const o = v && typeof v === "object" ? v : {};
			return {
				...DEFAULTS,
				...o,
				similar: typeof o.similar === "string" ? [o.similar] : Array.isArray(o.similar) ? o.similar.filter((r) => typeof r === "string") : [],
				combine: [
					"mean",
					"any",
					"joint"
				].includes(o.combine) ? o.combine : "mean",
				detail: [
					280,
					140,
					70
				].includes(Number(o.detail)) ? Number(o.detail) : 280,
				folders: Array.isArray(o.folders) ? [...new Set(o.folders.filter((f) => typeof f === "string").map(normalizeFolder))] : []
			};
		}
		const state = /* @__PURE__ */ reactive(toState(props.widget?.value));
		function set(patch) {
			Object.assign(state, patch);
			const value = JSON.parse(JSON.stringify(state));
			const w = props.widget;
			if (!w) return;
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
		const hits = /* @__PURE__ */ ref([]);
		const ms = /* @__PURE__ */ ref(null);
		const autoPick = /* @__PURE__ */ ref(null);
		const searching = /* @__PURE__ */ ref(false);
		const error = /* @__PURE__ */ ref("");
		function onRun(r) {
			if (!r) return;
			hits.value = r.hits ?? [];
			ms.value = null;
			error.value = "";
			autoPick.value = r.auto ? r.picked : null;
		}
		const models = /* @__PURE__ */ ref([]);
		const settingsOpen = /* @__PURE__ */ ref(false);
		const folderRows = /* @__PURE__ */ ref([]);
		const job = /* @__PURE__ */ ref({
			running: false,
			folder: null,
			done: 0,
			total: 0,
			queued: [],
			error: null,
			finished: null
		});
		const savedOpen = props.node?.properties?.qeFoldersOpen;
		const foldersOpen = /* @__PURE__ */ ref(typeof savedOpen === "boolean" ? savedOpen : !state.folders.length);
		const collapsed = /* @__PURE__ */ ref(new Set(props.node?.properties?.qeCollapsed ?? []));
		function toggleFolders() {
			foldersOpen.value = !foldersOpen.value;
			if (props.node?.properties) props.node.properties.qeFoldersOpen = foldersOpen.value;
		}
		const hasChildren = (p) => folderRows.value.some((r) => r.path !== p && parentOf(r.path) === p);
		const parentOf = parentFolder;
		const isCollapsed = (p) => collapsed.value.has(p);
		function toggleCollapsed(p) {
			const next = new Set(collapsed.value);
			if (next.has(p)) next.delete(p);
			else next.add(p);
			collapsed.value = next;
			if (props.node?.properties) props.node.properties.qeCollapsed = [...next];
		}
		const visibleFolders = computed(() => folderRows.value.filter((r) => {
			for (let p = parentOf(r.path); p !== null; p = parentOf(p)) if (collapsed.value.has(p)) return false;
			return true;
		}));
		const isOn = (p) => state.folders.includes(p);
		function setOn(p, on) {
			set({ folders: on ? [.../* @__PURE__ */ new Set([...state.folders, p])] : state.folders.filter((f) => f !== p) });
			const row = folderRows.value.find((r) => r.path === p);
			if (on && row && rowState(row) !== "ready" && row.images + row.texts) indexFolders([p]);
		}
		const isQueued = (p) => job.value.running && job.value.folder === p || job.value.queued.includes(p);
		const needsIndex = computed(() => folderRows.value.filter((r) => isOn(r.path) && rowState(r) !== "ready" && r.images + r.texts > 0 && !isQueued(r.path)).length);
		const folderSummary = computed(() => {
			const on = state.folders.length;
			if (!folderRows.value.length) return "Folders";
			if (!on) return "No folders searched: pick some";
			const files = folderRows.value.filter((r) => isOn(r.path)).reduce((n, r) => n + (r.status.indexed || 0), 0);
			return `${on} folder${on === 1 ? "" : "s"} · ${files} indexed files`;
		});
		const jobPct = computed(() => job.value.total ? 100 * job.value.done / job.value.total : 0);
		const menu = /* @__PURE__ */ reactive({
			open: false,
			path: "",
			anchor: null
		});
		const menuRow = computed(() => folderRows.value.find((r) => r.path === menu.path) ?? null);
		function openMenu(row, e) {
			const same = menu.open && menu.path === row.path;
			menu.path = row.path;
			menu.anchor = e.currentTarget;
			menu.open = !same;
		}
		function menuDo(fn) {
			menu.open = false;
			fn();
		}
		/** The pill indexes / updates on click when there's something to do and nothing queued. */
		const pillActs = (r) => rowState(r) !== "ready" && r.images + r.texts > 0 && !isQueued(r.path);
		/** The row's state for THIS node: an index built at another image detail needs rebuilding. */
		function rowState(r) {
			const s = r.status.state;
			if (s !== "none" && (r.status.detail ?? 280) !== state.detail) return "detail";
			return s;
		}
		function pillClass(r) {
			if (isQueued(r.path)) return "info";
			return {
				ready: "ok",
				stale: "warn",
				detail: "warn",
				none: ""
			}[rowState(r)];
		}
		function pillText(r) {
			if (job.value.running && job.value.folder === r.path) return job.value.total ? `${Math.round(jobPct.value)}%` : "…";
			if (job.value.queued.includes(r.path)) return "queued";
			const s = r.status;
			const st = rowState(r);
			if (st === "detail") return `detail ${s.detail ?? 280}`;
			if (st === "ready") return "indexed";
			if (st === "stale") return `+${(s.new ?? 0) + (s.changed ?? 0)}${s.removed ? ` −${s.removed}` : ""}`;
			return r.images + r.texts ? "no index" : "";
		}
		function pillTitle(r) {
			const s = r.status;
			if (s.state === "none") return "Not indexed";
			const when = s.updated ? (/* @__PURE__ */ new Date(s.updated * 1e3)).toLocaleString() : "";
			const parts = [`${s.indexed} files indexed ${when}, image detail ${s.detail ?? 280}`];
			if (rowState(r) === "detail") parts.push(`This node uses detail ${state.detail}: rebuild to match`);
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
				error.value = String(e.message ?? e);
			}
		}
		async function indexFolders(paths, full = false) {
			try {
				job.value = await startIndex(state.model, paths, full, state.detail);
			} catch (e) {
				error.value = String(e.message ?? e);
			}
		}
		function indexSearched() {
			indexFolders(folderRows.value.filter((r) => isOn(r.path) && rowState(r) !== "ready" && r.images + r.texts > 0).map((r) => r.path));
		}
		async function cancelIndex$1() {
			job.value = await cancelIndex();
		}
		async function removeIndex(p) {
			await deleteIndex(state.model, p);
			await refreshFolders();
		}
		function setModel(m) {
			set({
				model: m,
				selected: null,
				similar: []
			});
			hits.value = [];
			refreshFolders();
		}
		function onJobEvent(e) {
			const prev = job.value;
			job.value = e.detail;
			if (prev.folder && prev.folder !== job.value.folder || prev.running && !job.value.running) refreshFolders().then(() => liveSearch());
		}
		const linked = /* @__PURE__ */ ref({
			text: false,
			image: false
		});
		const linkedQuery = computed(() => linked.value.image && linked.value.text ? "image + text" : linked.value.image ? "image" : linked.value.text ? "text" : "");
		function readLinks() {
			const node = props.node;
			const ins = node?.inputs ?? [];
			const on = (name) => {
				const slot = ins.findIndex((i) => i.name === name);
				if (slot < 0) return false;
				return node?.isInputConnected ? node.isInputConnected(slot) : ins[slot].link != null;
			};
			const was = linkedQuery.value;
			linked.value = {
				text: on("text"),
				image: on("image")
			};
			if (linkedQuery.value !== was) {
				hits.value = [];
				ms.value = null;
				autoPick.value = null;
				if (!linkedQuery.value) liveSearch();
			}
		}
		let timer = null;
		let inflight = null;
		function liveSearch(delay = 0) {
			if (timer) clearTimeout(timer);
			timer = setTimeout(runLive, delay);
		}
		async function runLive() {
			const similar = state.similar.length > 0;
			if (linkedQuery.value) return;
			if (!state.model || !state.folders.length || !state.query.trim() && !similar) {
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
				if (e.name !== "AbortError") error.value = String(e.message ?? e);
			} finally {
				searching.value = false;
			}
		}
		watch(() => [
			state.query,
			state.kind,
			state.top_k,
			state.dim,
			state.folders.join("\n"),
			state.similar.join("\n"),
			state.combine,
			state.model
		], (now, before) => liveSearch(now[0] !== before?.[0] ? 350 : 0));
		function pick(ref) {
			set({ selected: state.selected === ref ? null : ref });
		}
		/** Click: search like this file. Shift-click: add it to (or drop it from) the similar-to set. */
		function toggleSimilar(ref, add) {
			const has = state.similar.includes(ref);
			if (add) set({ similar: has ? state.similar.filter((r) => r !== ref) : [...state.similar, ref] });
			else set({ similar: has && state.similar.length === 1 ? [] : [ref] });
		}
		const scrollEl = /* @__PURE__ */ ref(null);
		watch(hits, () => void nextTick(() => rearmIfHovered(scrollEl.value)), { flush: "post" });
		const snippets = /* @__PURE__ */ reactive({});
		watch(hits, (list) => {
			for (const h of list) if (h.kind === "text" && !(h.ref in snippets)) {
				snippets[h.ref] = "";
				textOf(h.ref).then((t) => snippets[h.ref] = t.slice(0, 240));
			}
		});
		const ZOOM_MIN = 56;
		const ZOOM_MAX = 240;
		const ZOOM_STEP = 24;
		const GAP = 5;
		const resultsEl = /* @__PURE__ */ ref(null);
		const boxWidth = /* @__PURE__ */ ref(400);
		const zoom = /* @__PURE__ */ ref(clampZoom(Number(props.node?.properties?.qeZoom ?? 104)));
		function clampZoom(z) {
			return Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, Number.isFinite(z) ? z : 104));
		}
		function setZoom(z) {
			zoom.value = clampZoom(z);
			if (props.node?.properties) props.node.properties.qeZoom = zoom.value;
		}
		const cols = computed(() => Math.max(1, Math.floor((boxWidth.value - 8 + GAP) / (zoom.value + GAP))));
		const cell = computed(() => (boxWidth.value - 8 - GAP * (cols.value - 1)) / cols.value);
		const thumbSize = computed(() => cell.value > 150 ? 384 : cell.value > 90 ? 256 : 160);
		let ro = null;
		const isImageRef = (r) => IMAGE_EXT.test(r);
		const baseName = (r) => r.split("/").pop() ?? r;
		const emptyIcon = computed(() => !state.folders.length ? "mdi mdi-folder-plus-outline" : "mdi mdi-magnify");
		const emptyTitle = computed(() => {
			if (!models.value.length) return "No model";
			if (!state.folders.length) return "Pick folders to search";
			if (linkedQuery.value) return "Queue the node to search";
			if (!state.query.trim()) return "Type to search";
			return searching.value ? "Searching…" : "Nothing found";
		});
		onMounted(() => {
			const w = props.widget;
			if (w) {
				const prev = w.callback;
				w.callback = function(v) {
					if (v && typeof v === "object" && "__qeRun" in v) {
						onRun(v.__qeRun);
						return;
					}
					if (prev) prev.call(this, v);
					if (!ownWrite) Object.assign(state, toState(v));
				};
			}
			const node = props.node;
			if (node) {
				const prevConn = node.onConnectionsChange;
				node.onConnectionsChange = function(...args) {
					prevConn?.apply(this, args);
					readLinks();
				};
			}
			if (resultsEl.value && typeof ResizeObserver !== "undefined") {
				ro = new ResizeObserver(() => boxWidth.value = resultsEl.value?.clientWidth ?? boxWidth.value);
				ro.observe(resultsEl.value);
				boxWidth.value = resultsEl.value.clientWidth || boxWidth.value;
			}
			readLinks();
			api.addEventListener(JOB_EVENT, onJobEvent);
			refreshFolders().then(() => liveSearch());
		});
		onBeforeUnmount(() => {
			api.removeEventListener(JOB_EVENT, onJobEvent);
			ro?.disconnect();
			inflight?.abort();
			if (timer) clearTimeout(timer);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Ff), {
				ref_key: "rootEl",
				ref: rootEl,
				fill: "",
				gap: 6,
				pad: "2px",
				class: "qe"
			}, {
				default: withCtx(() => [
					createBaseVNode("div", _hoisted_1, [linkedQuery.value ? (openBlock(), createElementBlock("div", _hoisted_2, [_cache[19] || (_cache[19] = createBaseVNode("i", { class: "mdi mdi-link-variant" }, null, -1)), createBaseVNode("span", null, "Query from the " + toDisplayString(linkedQuery.value) + " input · queue to search", 1)])) : state.similar.length ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: "qe-similar",
						title: state.similar.join("\n")
					}, [
						createBaseVNode("span", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(state.similar.slice(0, 4), (r) => {
							return openBlock(), createElementBlock(Fragment, { key: r }, [isImageRef(r) ? (openBlock(), createElementBlock("img", {
								key: 0,
								src: unref(thumbUrl)(r, 64)
							}, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("i", _hoisted_6))], 64);
						}), 128))]),
						state.similar.length === 1 ? (openBlock(), createElementBlock("span", _hoisted_7, [_cache[20] || (_cache[20] = createTextVNode("Similar to ", -1)), createBaseVNode("b", null, toDisplayString(baseName(state.similar[0])), 1)])) : (openBlock(), createElementBlock("span", _hoisted_8, [
							_cache[21] || (_cache[21] = createTextVNode(" Similar to ", -1)),
							createBaseVNode("b", null, toDisplayString(state.similar.length) + " files", 1),
							createBaseVNode("span", _hoisted_9, " · " + toDisplayString(COMBINE_LABEL[state.combine]), 1)
						])),
						createVNode(unref(Ge), {
							sm: "",
							icon: "mdi mdi-close",
							title: "Back to text search",
							onClick: _cache[0] || (_cache[0] = ($event) => set({ similar: [] }))
						})
					], 8, _hoisted_3)) : (openBlock(), createBlock(unref(ql), {
						key: 2,
						class: "qe-input",
						"model-value": state.query,
						placeholder: "Search images and text…",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => set({ query: String($event) }))
					}, null, 8, ["model-value"])), createVNode(unref(It), {
						collapse: "",
						"model-value": state.kind,
						options: KIND_OPTS,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => set({ kind: $event }))
					}, null, 8, ["model-value"])]),
					createBaseVNode("div", { class: normalizeClass(["qe-folders", { open: foldersOpen.value }]) }, [
						createBaseVNode("div", _hoisted_10, [
							createBaseVNode("button", {
								class: "qe-fhead-main",
								onClick: toggleFolders
							}, [
								createBaseVNode("i", { class: normalizeClass(["mdi", foldersOpen.value ? "mdi-chevron-down" : "mdi-chevron-right"]) }, null, 2),
								_cache[22] || (_cache[22] = createBaseVNode("i", { class: "mdi mdi-folder-search-outline" }, null, -1)),
								createBaseVNode("span", _hoisted_11, toDisplayString(folderSummary.value), 1),
								needsIndex.value ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: "qe-pill warn",
									title: `${needsIndex.value} searched folder(s) need indexing`
								}, toDisplayString(needsIndex.value) + " to index ", 9, _hoisted_12)) : createCommentVNode("", true)
							]),
							needsIndex.value && !job.value.running ? (openBlock(), createBlock(unref(Ge), {
								key: 0,
								sm: "",
								icon: "mdi mdi-database-sync-outline",
								title: "Index the searched folders that need it",
								onClick: indexSearched
							})) : createCommentVNode("", true),
							job.value.running ? (openBlock(), createBlock(unref(Ge), {
								key: 1,
								sm: "",
								danger: "",
								icon: "mdi mdi-stop-circle-outline",
								title: "Stop indexing",
								onClick: cancelIndex$1
							})) : createCommentVNode("", true),
							createVNode(unref(Ge), {
								sm: "",
								icon: "mdi mdi-refresh",
								title: "Rescan folders",
								onClick: refreshFolders
							})
						]),
						job.value.running ? (openBlock(), createElementBlock("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [createBaseVNode("div", { style: normalizeStyle({ width: jobPct.value + "%" }) }, null, 4)]), createBaseVNode("span", null, [
							_cache[23] || (_cache[23] = createTextVNode(" Indexing ", -1)),
							createBaseVNode("b", null, toDisplayString(job.value.folder ?? ""), 1),
							createTextVNode(" " + toDisplayString(job.value.total ? `${job.value.done}/${job.value.total}` : "…") + " ", 1),
							job.value.queued.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" · " + toDisplayString(job.value.queued.length) + " queued", 1)], 64)) : createCommentVNode("", true)
						])])) : job.value.error ? (openBlock(), createElementBlock("div", _hoisted_15, [_cache[24] || (_cache[24] = createBaseVNode("i", { class: "mdi mdi-alert-circle-outline" }, null, -1)), createTextVNode(" " + toDisplayString(job.value.error), 1)])) : createCommentVNode("", true),
						foldersOpen.value ? (openBlock(), createElementBlock("div", mergeProps({
							key: 2,
							class: "qe-frows"
						}, unref(wheelScroll)), [
							!models.value.length ? (openBlock(), createElementBlock("div", _hoisted_16, [..._cache[25] || (_cache[25] = [
								createTextVNode(" No model found. Download ", -1),
								createBaseVNode("a", {
									href: "https://huggingface.co/nynxz/embeddinggemma-2/blob/main/text_encoders/embeddinggemma_2_bf16.safetensors",
									target: "_blank",
									rel: "noopener"
								}, "embeddinggemma_2_bf16.safetensors", -1),
								createTextVNode(" into ", -1),
								createBaseVNode("code", null, "models/text_encoders/", -1),
								createTextVNode(" and restart ComfyUI. ", -1)
							])])) : createCommentVNode("", true),
							(openBlock(true), createElementBlock(Fragment, null, renderList(visibleFolders.value, (row) => {
								return openBlock(), createElementBlock("div", {
									key: row.path,
									class: normalizeClass(["qe-frow", {
										off: !isOn(row.path),
										busy: job.value.running && job.value.folder === row.path
									}]),
									style: normalizeStyle({ paddingLeft: `${4 + unref(folderDepth)(row.path) * 12}px` })
								}, [
									hasChildren(row.path) ? (openBlock(), createElementBlock("button", {
										key: 0,
										class: "qe-chev",
										title: isCollapsed(row.path) ? "Show subfolders" : "Hide subfolders",
										onClick: ($event) => toggleCollapsed(row.path)
									}, [createBaseVNode("i", { class: normalizeClass(["mdi", isCollapsed(row.path) ? "mdi-chevron-right" : "mdi-chevron-down"]) }, null, 2)], 8, _hoisted_17)) : (openBlock(), createElementBlock("span", _hoisted_18)),
									createVNode(unref(Gf), {
										"model-value": isOn(row.path),
										title: isOn(row.path) ? "Searched: click to leave out" : "Not searched: click to include (indexes it if needed)",
										"onUpdate:modelValue": ($event) => setOn(row.path, $event)
									}, null, 8, [
										"model-value",
										"title",
										"onUpdate:modelValue"
									]),
									unref(isRoot)(row.path) ? (openBlock(), createElementBlock("i", {
										key: 2,
										class: normalizeClass(["mdi qe-froot", row.path === "output" ? "mdi-image-multiple-outline" : "mdi-tray-arrow-down"])
									}, null, 2)) : createCommentVNode("", true),
									createBaseVNode("span", {
										class: normalizeClass(["qe-fname", { root: unref(isRoot)(row.path) }]),
										title: row.path + "/"
									}, toDisplayString(unref(folderLabel)(row.path)), 11, _hoisted_19),
									createBaseVNode("span", _hoisted_20, [row.images ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_cache[26] || (_cache[26] = createBaseVNode("i", { class: "mdi mdi-image-outline" }, null, -1)), createTextVNode(toDisplayString(row.images), 1)], 64)) : createCommentVNode("", true), row.texts ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [_cache[27] || (_cache[27] = createBaseVNode("i", { class: "mdi mdi-text-box-outline" }, null, -1)), createTextVNode(toDisplayString(row.texts), 1)], 64)) : createCommentVNode("", true)]),
									pillText(row) ? (openBlock(), createElementBlock("button", {
										key: 3,
										class: normalizeClass(["qe-pill", [pillClass(row), { act: pillActs(row) }]]),
										title: pillTitle(row) + (pillActs(row) ? "\nClick to " + {
											stale: "update",
											detail: "rebuild",
											none: "index",
											ready: ""
										}[rowState(row)] : ""),
										disabled: !pillActs(row),
										onClick: ($event) => indexFolders([row.path])
									}, toDisplayString(pillText(row)), 11, _hoisted_21)) : createCommentVNode("", true),
									row.images + row.texts ? (openBlock(), createBlock(unref(Ge), {
										key: 4,
										sm: "",
										class: "qe-more",
										icon: "mdi mdi-dots-horizontal",
										active: menu.open && menu.path === row.path,
										title: "Index options",
										onClick: ($event) => openMenu(row, $event)
									}, null, 8, ["active", "onClick"])) : (openBlock(), createElementBlock("span", _hoisted_22))
								], 6);
							}), 128)),
							createVNode(unref(ml), {
								open: menu.open,
								"onUpdate:open": _cache[6] || (_cache[6] = ($event) => menu.open = $event),
								anchor: menu.anchor ?? void 0,
								placement: "bottom-end"
							}, {
								default: withCtx(() => [menuRow.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
									rowState(menuRow.value) !== "ready" ? (openBlock(), createBlock(unref(am), {
										key: 0,
										icon: "mdi mdi-database-plus-outline",
										disabled: isQueued(menuRow.value.path),
										onSelect: _cache[3] || (_cache[3] = ($event) => menuDo(() => indexFolders([menuRow.value.path])))
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString({
											stale: `Update (${pillText(menuRow.value)})`,
											detail: `Rebuild at detail ${state.detail}`,
											none: "Index folder",
											ready: ""
										}[rowState(menuRow.value)]), 1)]),
										_: 1
									}, 8, ["disabled"])) : createCommentVNode("", true),
									menuRow.value.status.state !== "none" && rowState(menuRow.value) !== "detail" ? (openBlock(), createBlock(unref(am), {
										key: 1,
										icon: "mdi mdi-database-refresh-outline",
										disabled: isQueued(menuRow.value.path),
										onSelect: _cache[4] || (_cache[4] = ($event) => menuDo(() => indexFolders([menuRow.value.path], true)))
									}, {
										default: withCtx(() => [..._cache[28] || (_cache[28] = [createTextVNode(" Rebuild from scratch ", -1)])]),
										_: 1
									}, 8, ["disabled"])) : createCommentVNode("", true),
									menuRow.value.status.state !== "none" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(sm)), createVNode(unref(am), {
										icon: "mdi mdi-trash-can-outline",
										danger: "",
										disabled: isQueued(menuRow.value.path),
										onSelect: _cache[5] || (_cache[5] = ($event) => menuDo(() => removeIndex(menuRow.value.path)))
									}, {
										default: withCtx(() => [..._cache[29] || (_cache[29] = [createTextVNode(" Delete index ", -1)])]),
										_: 1
									}, 8, ["disabled"])], 64)) : createCommentVNode("", true)
								], 64)) : createCommentVNode("", true)]),
								_: 1
							}, 8, ["open", "anchor"])
						], 16)) : createCommentVNode("", true)
					], 2),
					createBaseVNode("div", {
						ref_key: "resultsEl",
						ref: resultsEl,
						class: "qe-results"
					}, [createBaseVNode("div", mergeProps({
						ref_key: "scrollEl",
						ref: scrollEl,
						class: "qe-scroll"
					}, unref(wheelScroll)), [hits.value.length ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: "qe-grid",
						style: normalizeStyle({ gridTemplateColumns: `repeat(${cols.value}, 1fr)` })
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(hits.value, (h) => {
						return openBlock(), createElementBlock("button", {
							key: h.ref,
							class: normalizeClass(["qe-hit", {
								picked: h.ref === state.selected,
								auto: !state.selected && h.ref === autoPick.value
							}]),
							title: `${h.ref}\nscore ${h.score.toFixed(3)}${!state.selected && h.ref === autoPick.value ? "\nOutput of the last run (top result, nothing pinned)" : ""}`,
							onMousedown: _cache[8] || (_cache[8] = withModifiers(() => {}, ["prevent"])),
							onClick: ($event) => pick(h.ref)
						}, [
							h.kind === "image" ? (openBlock(), createElementBlock("img", {
								key: 0,
								src: unref(thumbUrl)(h.ref, thumbSize.value),
								loading: "lazy",
								draggable: "false"
							}, null, 8, _hoisted_24)) : (openBlock(), createElementBlock("div", _hoisted_25, [_cache[30] || (_cache[30] = createBaseVNode("i", { class: "mdi mdi-text-box-outline" }, null, -1)), createBaseVNode("span", _hoisted_26, toDisplayString(snippets[h.ref] ?? ""), 1)])),
							createBaseVNode("span", _hoisted_27, toDisplayString(h.score.toFixed(2)), 1),
							h.ref === state.selected ? (openBlock(), createElementBlock("span", _hoisted_28, [..._cache[31] || (_cache[31] = [createBaseVNode("i", { class: "mdi mdi-check" }, null, -1)])])) : createCommentVNode("", true),
							createBaseVNode("span", _hoisted_29, toDisplayString(h.name), 1),
							createBaseVNode("span", _hoisted_30, [!linkedQuery.value ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(["qe-act", { on: state.similar.includes(h.ref) }]),
								role: "button",
								title: state.similar.includes(h.ref) ? "Remove from the similar-to set" : "Find similar (shift-click: add to the set)",
								onClick: withModifiers(($event) => toggleSimilar(h.ref, $event.shiftKey), ["stop"])
							}, [..._cache[32] || (_cache[32] = [createBaseVNode("i", { class: "mdi mdi-image-search-outline" }, null, -1)])], 10, _hoisted_31)) : createCommentVNode("", true), createBaseVNode("a", {
								class: "qe-act",
								href: unref(fileUrl)(h.ref),
								target: "_blank",
								rel: "noopener",
								title: "Open in a new tab",
								onClick: _cache[7] || (_cache[7] = withModifiers(() => {}, ["stop"]))
							}, [..._cache[33] || (_cache[33] = [createBaseVNode("i", { class: "mdi mdi-open-in-new" }, null, -1)])], 8, _hoisted_32)])
						], 42, _hoisted_23);
					}), 128))], 4)) : (openBlock(), createBlock(unref(Uf), {
						key: 1,
						icon: emptyIcon.value,
						title: emptyTitle.value
					}, null, 8, ["icon", "title"]))], 16)], 512),
					createBaseVNode("div", _hoisted_33, [
						error.value ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: "qe-err",
							title: error.value
						}, [_cache[34] || (_cache[34] = createBaseVNode("i", { class: "mdi mdi-alert-circle-outline" }, null, -1)), createTextVNode(" " + toDisplayString(error.value), 1)], 8, _hoisted_34)) : searching.value ? (openBlock(), createElementBlock("span", _hoisted_35, [..._cache[35] || (_cache[35] = [createBaseVNode("i", { class: "mdi mdi-loading mdi-spin" }, null, -1), createTextVNode(" Searching…", -1)])])) : hits.value.length ? (openBlock(), createElementBlock("span", _hoisted_36, [createTextVNode(toDisplayString(hits.value.length) + " results", 1), ms.value != null ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" · " + toDisplayString(ms.value) + " ms", 1)], 64)) : createCommentVNode("", true)])) : createCommentVNode("", true),
						_cache[44] || (_cache[44] = createBaseVNode("span", { class: "qe-spacer" }, null, -1)),
						state.selected ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [createBaseVNode("span", {
							class: "qe-picked",
							title: state.selected
						}, [_cache[36] || (_cache[36] = createBaseVNode("i", { class: "mdi mdi-pin" }, null, -1)), createTextVNode(" " + toDisplayString(baseName(state.selected)), 1)], 8, _hoisted_37), createVNode(unref(Ge), {
							sm: "",
							icon: "mdi mdi-pin-off-outline",
							title: "Unpick: output the top result",
							onClick: _cache[9] || (_cache[9] = ($event) => set({ selected: null }))
						})], 64)) : hits.value.length ? (openBlock(), createElementBlock("span", _hoisted_38, "output: top result")) : createCommentVNode("", true),
						createVNode(unref(Ge), {
							sm: "",
							icon: "mdi mdi-magnify-minus-outline",
							title: "Smaller thumbnails",
							disabled: zoom.value <= ZOOM_MIN,
							onClick: _cache[10] || (_cache[10] = ($event) => setZoom(zoom.value - ZOOM_STEP))
						}, null, 8, ["disabled"]),
						createVNode(unref(Ge), {
							sm: "",
							icon: "mdi mdi-magnify-plus-outline",
							title: "Larger thumbnails",
							disabled: zoom.value >= ZOOM_MAX,
							onClick: _cache[11] || (_cache[11] = ($event) => setZoom(zoom.value + ZOOM_STEP))
						}, null, 8, ["disabled"]),
						createVNode(unref(cn), {
							class: "qe-topk",
							sm: "",
							"model-value": state.top_k,
							min: 1,
							max: 200,
							step: 1,
							precision: 0,
							title: "How many results",
							"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => set({ top_k: Math.round($event) }))
						}, null, 8, ["model-value"]),
						createVNode(unref(ml), {
							open: settingsOpen.value,
							"onUpdate:open": _cache[18] || (_cache[18] = ($event) => settingsOpen.value = $event),
							placement: "top-end",
							role: "dialog"
						}, {
							trigger: withCtx(() => [createVNode(unref(Ge), {
								sm: "",
								icon: "mdi mdi-cog-outline",
								active: settingsOpen.value,
								title: "Model and ranking settings",
								onClick: _cache[13] || (_cache[13] = ($event) => settingsOpen.value = !settingsOpen.value)
							}, null, 8, ["active"])]),
							default: withCtx(() => [createBaseVNode("div", _hoisted_39, [
								createBaseVNode("label", _hoisted_40, [_cache[37] || (_cache[37] = createBaseVNode("span", null, "Model", -1)), createVNode(unref(qf), {
									sm: "",
									"model-value": state.model,
									options: models.value.map((m) => ({
										value: m,
										label: m
									})),
									placeholder: "No model found",
									"onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => setModel(String($event)))
								}, null, 8, ["model-value", "options"])]),
								createBaseVNode("label", _hoisted_41, [_cache[38] || (_cache[38] = createBaseVNode("span", null, "Several queries", -1)), createVNode(unref(qf), {
									sm: "",
									"model-value": state.combine,
									options: COMBINE_OPTS,
									"onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => set({ combine: $event }))
								}, null, 8, ["model-value"])]),
								createBaseVNode("label", _hoisted_42, [_cache[39] || (_cache[39] = createBaseVNode("span", null, "Image detail", -1)), createVNode(unref(qf), {
									sm: "",
									"model-value": String(state.detail),
									options: DETAIL_OPTS,
									"onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => set({ detail: Number($event) }))
								}, null, 8, ["model-value"])]),
								createBaseVNode("label", _hoisted_43, [_cache[40] || (_cache[40] = createBaseVNode("span", null, "Ranking dims", -1)), createVNode(unref(qf), {
									sm: "",
									"model-value": String(state.dim),
									options: unref(DIM_OPTS),
									"onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => set({ dim: Number($event) }))
								}, null, 8, ["model-value", "options"])]),
								_cache[41] || (_cache[41] = createBaseVNode("p", { class: "qe-set-hint" }, [
									createBaseVNode("b", null, "Several queries"),
									createTextVNode(" (an image batch, image + text, or a shift-clicked similar-to set): "),
									createBaseVNode("b", null, "mean"),
									createTextVNode(" finds what they have in common, "),
									createBaseVNode("b", null, "any"),
									createTextVNode(" finds things like any one of them, "),
									createBaseVNode("b", null, "joint"),
									createTextVNode(" lets the model read them together (wired inputs only, up to 16 images). ")
								], -1)),
								_cache[42] || (_cache[42] = createBaseVNode("p", { class: "qe-set-hint" }, [createBaseVNode("b", null, "Image detail"), createTextVNode(": tokens per image when indexing and for image queries. Lower is faster to index but matches less precisely. Folders indexed at another detail show it on their pill; click to rebuild. ")], -1)),
								_cache[43] || (_cache[43] = createBaseVNode("p", { class: "qe-set-hint" }, " 768 is the most accurate. Smaller sizes (Matryoshka) rank slightly faster and looser; the indexes stay the same. ", -1))
							])]),
							_: 1
						}, 8, ["open"])
					])
				]),
				_: 1
			}, 512);
		};
	}
});
// \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
// frontend/widgets/EmbeddingSearch.vue
var EmbeddingSearch_exports = /* @__PURE__ */ __exportAll({
	default: () => EmbeddingSearch_default,
	nodeDef: () => nodeDef,
	widgetOptions: () => widgetOptions
});
var EmbeddingSearch_default = /*#__PURE__*/ _plugin_vue_export_helper_default(EmbeddingSearch_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-7aa8a5bd"]]);
// frontend/main.ts
var widgets = /* #__PURE__ */ Object.assign({ "./widgets/EmbeddingSearch.vue": EmbeddingSearch_exports });
registerNodes(discoverWidgets(widgets));
console.log(`[${DISPLAY_NAME}] widgets: ${widgetTypes(widgets).join(", ")}`);
