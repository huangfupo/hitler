import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Radio from "./src/radio.vue";
import RadioButton from "./src/radio-button.vue";
import RadioGroup from "./src/radio-group.vue";

export const HtRadio: SFCWithInstall<typeof Radio> & {
  RadioButton: typeof RadioButton;
  RadioGroup: typeof RadioGroup;
} = withInstall(Radio, {
  RadioButton,
  RadioGroup
});

export const HtRadioGroup: SFCWithInstall<typeof RadioGroup> = withNoopInstall(RadioGroup);
export const HtRadioButton: SFCWithInstall<typeof RadioButton> = withNoopInstall(RadioButton);

export type RadioInstance = InstanceType<typeof Radio> & unknown;
export type RadioButtonInstance = InstanceType<typeof RadioButton> & unknown;
export type RadioGroupInstance = InstanceType<typeof RadioGroup> & unknown;

export default HtRadio;

export * from "./src/radio";
export * from "./src/radio-group";
export * from "./src/radio-button";
