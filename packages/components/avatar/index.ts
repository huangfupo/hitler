import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Avatar from "./src/avatar.vue";

export const HtAvatar: SFCWithInstall<typeof Avatar> = withInstall(Avatar);

export type AvatarInstance = InstanceType<typeof Avatar> & unknown;

export default HtAvatar;

export * from "./src/avatar";
