import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Drawer from "./src/drawer.vue";

export const HtDrawer: SFCWithInstall<typeof Drawer> = withInstall(Drawer);

export type DrawerInstance = InstanceType<typeof Drawer> & unknown;

export default HtDrawer;

export * from "./src/drawer";
