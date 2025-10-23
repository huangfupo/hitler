import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Affix from "./src/affix.vue";

export const HtAffix: SFCWithInstall<typeof Affix> = withInstall(Affix);

export type AffixInstance = InstanceType<typeof Affix> & unknown;

export default HtAffix;

export * from "./src/affix";
