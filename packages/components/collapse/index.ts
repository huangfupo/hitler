import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Collapse from "./src/collapse.vue";
import CollapseItem from "./src/collapse-item.vue";

export const HtCollapse: SFCWithInstall<typeof Collapse> & {
  CollapseItem: typeof CollapseItem;
} = withInstall(Collapse, {
  CollapseItem
});

export const HtCollapseItem: SFCWithInstall<typeof CollapseItem> = withNoopInstall(CollapseItem);

export type CollapseInstance = InstanceType<typeof Collapse> & unknown;
export type CollapseItemInstance = InstanceType<typeof CollapseItem> & unknown;

export default HtCollapse;

export * from "./src/collapse";
export * from "./src/collapse-item";
