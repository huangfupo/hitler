import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Switch from "./src/switch.vue";

export const HtSwitch: SFCWithInstall<typeof Switch> = withInstall(Switch);

export type SwitchInstance = InstanceType<typeof Switch> & unknown;

export default HtSwitch;

export * from "./src/switch";
