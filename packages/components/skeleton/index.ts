import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Skeleton from "./src/skeleton.vue";
import SkeletonItem from "./src/skeleton-item.vue";

export const HtSkeleton: SFCWithInstall<typeof Skeleton> & {
  SkeletonItem: typeof SkeletonItem;
} = withInstall(Skeleton, {
  SkeletonItem
});
export const HtSkeletonItem: SFCWithInstall<typeof SkeletonItem> = withNoopInstall(SkeletonItem);

export type SkeletonInstance = InstanceType<typeof Skeleton> & unknown;
export type SkeletonItemInstance = InstanceType<typeof SkeletonItem> & unknown;

export default HtSkeleton;

export * from "./src/skeleton";
export * from "./src/skeleton-item";
