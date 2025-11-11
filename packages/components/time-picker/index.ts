import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import TimePicker from "./src/time-picker.vue";

export const HtTimePicker: SFCWithInstall<typeof TimePicker> = withInstall(TimePicker);

export type TimePickerInstance = InstanceType<typeof TimePicker> & unknown;

export default HtTimePicker;

export * from "./src/time-picker";
