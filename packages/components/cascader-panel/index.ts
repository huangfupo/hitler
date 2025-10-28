import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import CascaderPanel from "./src/cascader-panel.vue";

export const HtCascaderPanel: SFCWithInstall<typeof CascaderPanel> = withInstall(CascaderPanel);

export type CascaderPanelInstance = InstanceType<typeof CascaderPanel> & unknown;

export default HtCascaderPanel;

export * from "./src/cascader-panel";
