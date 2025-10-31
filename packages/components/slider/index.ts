import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Slider from "./src/slider.vue";

export const HtSlider: SFCWithInstall<typeof Slider> = withInstall(Slider);

export type SliderInstance = InstanceType<typeof Slider> & unknown;

export default HtSlider;

export * from "./src/slider";
