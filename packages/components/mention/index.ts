import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Mention from "./src/mention.vue";

export const HtMention: SFCWithInstall<typeof Mention> = withInstall(Mention);

export type MentionInstance = InstanceType<typeof Mention> & unknown;

export default HtMention;

export * from "./src/mention";
