import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Popover from "./src/popover.vue";

export const HtPopover: SFCWithInstall<typeof Popover> = withInstall(Popover);

export type PopoverInstance = InstanceType<typeof Popover> & unknown;

export default HtPopover;

export * from "./src/popover";
