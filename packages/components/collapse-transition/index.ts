import { withInstall } from "@hitler/utils";
import CollapseTransition from "./src/collapse-transition.vue";

export const HtCollapseTransition = withInstall(CollapseTransition);
export type CollapseTransitionInstance = InstanceType<typeof CollapseTransition> & unknown;

export default HtCollapseTransition;
