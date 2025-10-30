import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Image from "./src/image.vue";

export const HtImage: SFCWithInstall<typeof Image> = withInstall(Image);

export type ImageInstance = InstanceType<typeof Image> & unknown;

export default HtImage;

export * from "./src/image";
