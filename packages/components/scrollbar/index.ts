import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Scrollbar from "./src/scrollbar.vue";

export const HtScrollbar: SFCWithInstall<typeof Scrollbar> = withInstall(Scrollbar);

export type ScrollbarInstance = InstanceType<typeof Scrollbar> & unknown;

export default HtScrollbar;

export * from "./src/scrollbar";
