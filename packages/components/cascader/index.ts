import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Cascader from "./src/cascader.vue";

export const HtCascader: SFCWithInstall<typeof Cascader> = withInstall(Cascader);

export type CascaderInstance = InstanceType<typeof Cascader> & unknown;

export default HtCascader;

export * from "./src/cascader";
