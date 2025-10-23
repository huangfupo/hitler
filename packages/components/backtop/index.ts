import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Backtop from "./src/backtop.vue";

export const HtBacktop: SFCWithInstall<typeof Backtop> = withInstall(Backtop);

export type BacktopInstance = InstanceType<typeof Backtop> & unknown;

export default HtBacktop;

export * from "./src/backtop";
