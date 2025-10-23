import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Alert from "./src/alert.vue";

export const HtAlert: SFCWithInstall<typeof Alert> = withInstall(Alert);

export type AlertInstance = InstanceType<typeof Alert> & unknown;

export default HtAlert;

export * from "./src/alert";
