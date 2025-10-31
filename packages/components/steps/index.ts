import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Steps from "./src/steps.vue";
import Step from "./src/step.vue";

export const HtSteps: SFCWithInstall<typeof Steps> & {
  Step: typeof Step;
} = withInstall(Steps, {
  Step
});

export const HtStep: SFCWithInstall<typeof Step> = withNoopInstall(Step);

export type StepsInstance = InstanceType<typeof Steps> & unknown;
export type StepItemInstance = InstanceType<typeof Step> & unknown;

export default HtSteps;

export * from "./src/step";
export * from "./src/steps";
