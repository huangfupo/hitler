import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Result from "./src/result.vue";

export const HtResult: SFCWithInstall<typeof Result> = withInstall(Result);

export type ResultInstance = InstanceType<typeof Result> & unknown;

export default HtResult;

export * from "./src/result";
