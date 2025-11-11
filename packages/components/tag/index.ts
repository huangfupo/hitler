import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Tag from "./src/tag.vue";

export const HtTag: SFCWithInstall<typeof Tag> = withInstall(Tag);

export type TagInstance = InstanceType<typeof Tag> & unknown;

export default HtTag;

export * from "./src/tag";
