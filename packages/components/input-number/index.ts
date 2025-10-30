import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import InputNumber from "./src/input-number.vue";

export const HtInputNumber: SFCWithInstall<typeof InputNumber> = withInstall(InputNumber);

export type InputNumberInstance = InstanceType<typeof InputNumber> & unknown;

export default HtInputNumber;

export * from "./src/input-number";
