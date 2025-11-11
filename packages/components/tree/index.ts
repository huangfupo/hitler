import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Tree from "./src/tree.vue";

export const HtTree: SFCWithInstall<typeof Tree> = withInstall(Tree);

export type TreeInstance = InstanceType<typeof Tree> & unknown;

export default HtTree;

export * from "./src/tree";
