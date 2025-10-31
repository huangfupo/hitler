import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Popconfirm from "./src/popconfirm.vue";

export const HtPopconfirm: SFCWithInstall<typeof Popconfirm> = withInstall(Popconfirm);

export type PopconfirmInstance = InstanceType<typeof Popconfirm> & unknown;

export default HtPopconfirm;

export * from "./src/popconfirm";
