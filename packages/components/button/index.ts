import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Button from "./src/button.vue";
import ButtonGroup from "./src/button-group.vue";

export const HtButton: SFCWithInstall<typeof Button> & {
  ButtonGroup: typeof ButtonGroup;
} = withInstall(Button, {
  ButtonGroup
});

export const HtButtonGroup: SFCWithInstall<typeof ButtonGroup> = withNoopInstall(ButtonGroup);

export type ButtonInstance = InstanceType<typeof Button> & unknown;
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup> & unknown;

export default HtButton;

export * from "./src/button";
export * from "./src/button-group";
