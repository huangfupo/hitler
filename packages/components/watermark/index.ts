import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Watermark from "./src/watermark.vue";

export const HtWatermark: SFCWithInstall<typeof Watermark> = withInstall(Watermark);

export type WatermarkInstance = InstanceType<typeof Watermark> & unknown;

export default HtWatermark;

export * from "./src/watermark";
