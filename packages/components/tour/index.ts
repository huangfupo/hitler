import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Tour from "./src/tour.vue";
import TourStep from "./src/tour-step.vue";

export const HtTour: SFCWithInstall<typeof Tour> & {
  TourStep: typeof TourStep;
} = withInstall(Tour, {
  TourStep
});

export const HtTourStep: SFCWithInstall<typeof TourStep> = withNoopInstall(TourStep);

export type TourInstance = InstanceType<typeof Tour> & unknown;
export type TourStepInstance = InstanceType<typeof TourStep> & unknown;

export default HtTour;

export * from "./src/tour";
export * from "./src/tour-step";
