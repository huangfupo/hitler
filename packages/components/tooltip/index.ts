import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Tooltip from "./src/tooltip.vue";

export const HtTooltip: SFCWithInstall<typeof Tooltip> = withInstall(Tooltip);

export type TooltipInstance = InstanceType<typeof Tooltip> & unknown;

export default HtTooltip;

export * from "./src/tooltip";
