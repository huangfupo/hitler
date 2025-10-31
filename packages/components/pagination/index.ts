import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Pagination from "./src/pagination.vue";

export const HtPagination: SFCWithInstall<typeof Pagination> = withInstall(Pagination);

export type PaginationInstance = InstanceType<typeof Pagination> & unknown;

export default HtPagination;

export * from "./src/pagination";
