import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Badge from "./src/badge.vue";

export const HtBadge: SFCWithInstall<typeof Badge> = withInstall(Badge);

export type BadgeInstance = InstanceType<typeof Badge> & unknown;

export default HtBadge;

export * from "./src/badge";
