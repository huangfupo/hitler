import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import CheckTag from "./src/check-tag.vue";

export const HtCheckTag: SFCWithInstall<typeof CheckTag> = withInstall(CheckTag);

export type CheckTagInstance = InstanceType<typeof CheckTag> & unknown;

export default HtCheckTag;

export * from "./src/check-tag";
