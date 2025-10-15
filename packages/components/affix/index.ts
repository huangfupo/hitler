import { withInstall } from "@hitler/utils";
import Affix from "./src/affix.vue";

import type { SFCWithInstall } from "@hitler/utils";

export const HtAffix: SFCWithInstall<typeof Affix> = withInstall(Affix);
export default HtAffix;

export * from "./src/affix";

export type AffixInstance = InstanceType<typeof Affix> & unknown;
