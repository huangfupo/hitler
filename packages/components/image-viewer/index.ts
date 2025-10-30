import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import ImageViewer from "./src/image-viewer.vue";

export const HtImageViewer: SFCWithInstall<typeof ImageViewer> = withInstall(ImageViewer);

export type ImageViewerInstance = InstanceType<typeof ImageViewer> & unknown;

export default HtImageViewer;

export * from "./src/image-viewer";
