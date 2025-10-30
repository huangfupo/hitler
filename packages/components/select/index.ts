import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Select from "./src/select.vue";
import Option from "./src/option.vue";
import OptionGroup from "./src/option-group.vue";

export const HtSelect: SFCWithInstall<typeof Select> & {
  Option: typeof Option;
  OptionGroup: typeof OptionGroup;
} = withInstall(Select, {
  Option,
  OptionGroup
});

export const HtOption: SFCWithInstall<typeof Option> = withNoopInstall(Option);
export const HtOptionGroup: SFCWithInstall<typeof OptionGroup> = withNoopInstall(OptionGroup);

export type SelectInstance = InstanceType<typeof Select> & unknown;
export type OptionInstance = InstanceType<typeof Option> & unknown;
export type OptionGroupInstance = InstanceType<typeof OptionGroup> & unknown;

export default HtSelect;

export * from "./src/select";
export * from "./src/option";
export * from "./src/option-group";
