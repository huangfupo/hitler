import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Statistic from "./src/statistic.vue";

export const HtStatistic: SFCWithInstall<typeof Statistic> = withInstall(Statistic);

export type StatisticInstance = InstanceType<typeof Statistic> & unknown;

export default HtStatistic;

export * from "./src/statistic";
