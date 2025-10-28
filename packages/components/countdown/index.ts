import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Countdown from "./src/countdown.vue";

export const HtCountdown: SFCWithInstall<typeof Countdown> = withInstall(Countdown);

export type CountdownInstance = InstanceType<typeof Countdown> & unknown;

export default HtCountdown;

export * from "./src/countdown";
