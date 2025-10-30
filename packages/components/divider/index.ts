import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Divider from "./src/divider.vue";

export const HtDivider: SFCWithInstall<typeof Divider> = withInstall(Divider);

export type DividerInstance = InstanceType<typeof Divider> & unknown;

export default HtDivider;

export * from "./src/divider";
