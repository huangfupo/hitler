import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Breadcrumb from "./src/breadcrumb.vue";
import BreadcrumbItem from "./src/breadcrumb-item.vue";

export const HtBreadcrumb: SFCWithInstall<typeof Breadcrumb> & {
  BreadcrumbItem: typeof BreadcrumbItem;
} = withInstall(Breadcrumb, {
  BreadcrumbItem
});

export const HtBreadcrumbItem: SFCWithInstall<typeof BreadcrumbItem> = withNoopInstall(BreadcrumbItem);

export type BreadcrumbInstance = InstanceType<typeof Breadcrumb> & unknown;
export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem> & unknown;

export default HtBreadcrumb;

export * from "./src/breadcrumb";
export * from "./src/breadcrumb-item";
