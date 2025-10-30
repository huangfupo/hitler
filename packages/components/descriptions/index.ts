import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Descriptions from "./src/descriptions.vue";
import DescriptionsItem from "./src/descriptions-item.vue";

export const HtDescriptions: SFCWithInstall<typeof Descriptions> & {
  DescriptionsItem: typeof DescriptionsItem;
} = withInstall(Descriptions, {
  DescriptionsItem: DescriptionsItem
});

export const HtDescriptionsItem: SFCWithInstall<typeof DescriptionsItem> = withNoopInstall(DescriptionsItem);

export type DescriptionsInstance = InstanceType<typeof Descriptions> & unknown;
export type DescriptionsItemInstance = InstanceType<typeof DescriptionsItem> & unknown;

export default HtDescriptions;

export * from "./src/descriptions";
export * from "./src/descriptions-item";
