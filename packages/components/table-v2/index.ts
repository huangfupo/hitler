import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import TableV2 from "./src/table-v2.vue";

export const HtTableV2: SFCWithInstall<typeof TableV2> = withInstall(TableV2);
export type TableV2Instance = InstanceType<typeof TableV2>;

export default HtTableV2;

export * from "./src/table-v2";
