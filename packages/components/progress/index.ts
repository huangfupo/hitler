import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Progress from "./src/progress.vue";

export const HtProgress: SFCWithInstall<typeof Progress> = withInstall(Progress);

export type ProgressInstance = InstanceType<typeof Progress> & unknown;

export default HtProgress;

export * from "./src/progress";
