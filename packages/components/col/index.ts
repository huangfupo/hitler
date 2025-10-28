import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Col from "./src/col.vue";

export const HtCol: SFCWithInstall<typeof Col> = withInstall(Col);

export type ColInstance = InstanceType<typeof Col> & unknown;

export default HtCol;

export * from "./src/col";
