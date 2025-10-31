import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Segmented from "./src/segmented.vue";

export const HtSegmented: SFCWithInstall<typeof Segmented> = withInstall(Segmented);

export type SegmentedInstance = InstanceType<typeof Segmented> & unknown;

export default HtSegmented;

export * from "./src/segmented";
