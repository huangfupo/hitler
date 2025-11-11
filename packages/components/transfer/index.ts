import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Transfer from "./src/transfer.vue";

export const HtTransfer: SFCWithInstall<typeof Transfer> = withInstall(Transfer);

export type TransferInstance = InstanceType<typeof Transfer> & unknown;

export default HtTransfer;

export * from "./src/transfer";
