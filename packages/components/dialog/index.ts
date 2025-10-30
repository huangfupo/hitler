import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Dialog from "./src/dialog.vue";

export const HtDialog: SFCWithInstall<typeof Dialog> = withInstall(Dialog);

export type DialogInstance = InstanceType<typeof Dialog> & unknown;

export default HtDialog;

export * from "./src/dialog";
