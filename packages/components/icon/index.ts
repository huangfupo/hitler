import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Icon from "./src/icon.vue";

export const HtIcon: SFCWithInstall<typeof Icon> = withInstall(Icon);

export type IconInstance = InstanceType<typeof Icon> & unknown;

export default HtIcon;

export * from "./src/icon";
