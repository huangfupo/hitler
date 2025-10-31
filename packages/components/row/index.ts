import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Row from "./src/row.vue";

export const HtRow: SFCWithInstall<typeof Row> = withInstall(Row);

export type RowInstance = InstanceType<typeof Row> & unknown;

export default HtRow;

export * from "./src/row";
