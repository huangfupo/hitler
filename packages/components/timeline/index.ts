import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Timeline from "./src/timeline.vue";
import TimelineItem from "./src/timeline-item.vue";

export const HtTimeline: SFCWithInstall<typeof Timeline> & {
  TimelineItem: typeof TimelineItem;
} = withInstall(Timeline, {
  TimelineItem
});

export const HtTimelineItem: SFCWithInstall<typeof TimelineItem> = withNoopInstall(TimelineItem);

export type TimelineInstance = InstanceType<typeof Timeline> & unknown;
export type TimelineItemInstance = InstanceType<typeof TimelineItem> & unknown;

export default HtTimeline;

export * from "./src/timeline-item";
