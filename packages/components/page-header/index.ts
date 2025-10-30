import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import PageHeader from "./src/page-header.vue";

export const HtPageHeader: SFCWithInstall<typeof PageHeader> = withInstall(PageHeader);

export type PageHeaderInstance = InstanceType<typeof PageHeader> & unknown;

export default HtPageHeader;

export * from "./src/page-header";
