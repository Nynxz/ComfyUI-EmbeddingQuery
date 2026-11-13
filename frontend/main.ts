import "@nynxz/zenkit-ui/style.css";
import "@nynxz/zenkit-ui/comfy-bridge.css";

import { DISPLAY_NAME, discoverWidgets, registerNodes, widgetTypes } from "@/framework";

// Every .vue in widgets/ is a node widget; its filename is its io type.
const widgets = import.meta.glob("./widgets/*.vue", { eager: true });
registerNodes(discoverWidgets(widgets));
console.log(`[${DISPLAY_NAME}] widgets: ${widgetTypes(widgets).join(", ")}`);
