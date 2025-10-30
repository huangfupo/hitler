import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Input from "./src/input.vue";

export const HtInput: SFCWithInstall<typeof Input> = withInstall(Input);

export type InputInstance = InstanceType<typeof Input> & unknown;

export default HtInput;

export * from "./src/input";
