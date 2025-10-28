import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import DatePicker from "./src/date-picker.vue";

export const HtDatePicker: SFCWithInstall<typeof DatePicker> = withInstall(DatePicker);

export type DatePickerInstance = InstanceType<typeof DatePicker> & unknown;

export default HtDatePicker;

export * from "./src/date-picker";
