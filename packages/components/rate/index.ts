import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Rate from "./src/rate.vue";

export const HtRate: SFCWithInstall<typeof Rate> = withInstall(Rate);

export type RateInstance = InstanceType<typeof Rate> & unknown;

export default HtRate;

export * from "./src/rate";
