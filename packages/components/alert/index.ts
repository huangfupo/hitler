import { withInstall } from "@hitler/utils";
import Alert from "./src/alert.vue";

import type { SFCWithInstall } from "@hitler/utils";

export const HtAlert: SFCWithInstall<typeof Alert> = withInstall(Alert);
export default HtAlert;

export * from "./src/alert";

export type { AlertInstance } from "./src/instance";
