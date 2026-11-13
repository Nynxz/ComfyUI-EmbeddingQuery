// The pack's one import of @nynxz/zenkit-nodekit; everything else imports from "@/framework".
import { createNodekit } from "@nynxz/zenkit-nodekit";

import manifest from "../pack.json";

export * from "@nynxz/zenkit-nodekit";
export const {
  NAMESPACE,
  DISPLAY_NAME,
  nodeId,
  routeUrl,
  registerNodes,
  discoverWidgets,
  widgetTypes,
  addNodeHeaderButton,
} = createNodekit(manifest);
