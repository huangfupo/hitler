import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import TreeSelect from "./src/tree-select.vue";

export const HtTreeSelect: SFCWithInstall<typeof TreeSelect> = withInstall(TreeSelect);

export type TreeSelectInstance = InstanceType<typeof TreeSelect> & unknown;

export default HtTreeSelect;

export * from "./src/tree-select";
