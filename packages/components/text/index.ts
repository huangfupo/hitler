import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Text from "./src/text.vue";

export const HtText: SFCWithInstall<typeof Text> = withInstall(Text);

export type TextInstance = InstanceType<typeof Text> & unknown;

export default HtText;

export * from "./src/text";
