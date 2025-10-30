import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Empty from "./src/empty.vue";

export const HtEmpty: SFCWithInstall<typeof Empty> = withInstall(Empty);

export type EmptyInstance = InstanceType<typeof Empty> & unknown;

export default HtEmpty;

export * from "./src/empty";
