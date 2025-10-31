import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Popper from "./src/popper.vue";

export const HtPopper: SFCWithInstall<typeof Popper> = withInstall(Popper);

export type PopperInstance = InstanceType<typeof Popper> & unknown;

export default HtPopper;

export * from "./src/popper";
