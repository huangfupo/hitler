import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import InputTag from "./src/input-tag.vue";

export const HtInputTag: SFCWithInstall<typeof InputTag> = withInstall(InputTag);

export type InputTagInstance = InstanceType<typeof InputTag> & unknown;

export default HtInputTag;

export * from "./src/input-tag";
