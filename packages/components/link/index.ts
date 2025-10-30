import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Link from "./src/link.vue";

export const HtLink: SFCWithInstall<typeof Link> = withInstall(Link);

export type LinkInstance = InstanceType<typeof Link> & unknown;

export default HtLink;

export * from "./src/link";
