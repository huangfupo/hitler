import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import TreeV2 from "./src/tree-v2.vue";

export const HtTreeV2: SFCWithInstall<typeof TreeV2> = withInstall(TreeV2);

export type TreeV2Instance = InstanceType<typeof TreeV2> & unknown;

export default HtTreeV2;

export * from "./src/tree-v2";
