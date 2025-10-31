import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Space from "./src/space.vue";

export const HtSpace: SFCWithInstall<typeof Space> = withInstall(Space);

export type SpaceInstance = InstanceType<typeof Space> & unknown;

export default HtSpace;

export * from "./src/space";
