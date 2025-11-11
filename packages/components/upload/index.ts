import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Upload from "./src/upload.vue";

export const HtUpload: SFCWithInstall<typeof Upload> = withInstall(Upload);

export type UploadInstance = InstanceType<typeof Upload> & unknown;

export default HtUpload;

export * from "./src/upload";
