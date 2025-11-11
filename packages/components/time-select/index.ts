import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import TimeSelect from "./src/time-select.vue";

export const HtTimeSelect: SFCWithInstall<typeof TimeSelect> = withInstall(TimeSelect);

export type TimeSelectInstance = InstanceType<typeof TimeSelect> & unknown;

export default HtTimeSelect;

export * from "./src/time-select";
