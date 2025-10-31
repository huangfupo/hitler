import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import SelectV2 from "./src/select-v2.vue";

export const HtSelectV2: SFCWithInstall<typeof SelectV2> = withInstall(SelectV2);

export type SelectV2Instance = InstanceType<typeof SelectV2> & unknown;

export default HtSelectV2;

export * from "./src/select-v2";
