import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import ColorPicker from "./src/color-picker.vue";

export const HtColorPicker: SFCWithInstall<typeof ColorPicker> = withInstall(ColorPicker);

export type ColorPickerInstance = InstanceType<typeof ColorPicker> & unknown;

export default HtColorPicker;

export * from "./src/color-picker";
