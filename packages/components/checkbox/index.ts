import { withInstall, withNoopInstall } from "@hitler/utils";
import Checkbox from "./src/checkbox.vue";
import CheckboxButton from "./src/checkbox-button.vue";
import CheckboxGroup from "./src/checkbox-group.vue";

import type { SFCWithInstall } from "@hitler/utils";

export const HtCheckbox: SFCWithInstall<typeof Checkbox> & {
  CheckboxButton: typeof CheckboxButton;
  CheckboxGroup: typeof CheckboxGroup;
} = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});

export const HtCheckboxButton: SFCWithInstall<typeof CheckboxButton> = withNoopInstall(CheckboxButton);
export const HtCheckboxGroup: SFCWithInstall<typeof CheckboxGroup> = withNoopInstall(CheckboxGroup);

export type CheckboxInstance = InstanceType<typeof Checkbox> & unknown;
export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup> & unknown;

export default HtCheckbox;

export * from "./src/checkbox-group";
export * from "./src/checkbox-button";
export * from "./src/checkbox";
