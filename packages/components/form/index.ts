import { withInstall, withNoopInstall } from "@hitler/utils";
import Form from "./src/form.vue";
import FormItem from "./src/form-item.vue";

import type { SFCWithInstall } from "@hitler/utils";

export const HtForm: SFCWithInstall<typeof Form> & {
  FormItem: typeof FormItem;
} = withInstall(Form, {
  FormItem
});

export const HtFormItem: SFCWithInstall<typeof FormItem> = withNoopInstall(FormItem);

export type FormInstance = InstanceType<typeof Form> & unknown;
export type FormItemInstance = InstanceType<typeof FormItem> & unknown;

export default HtForm;

export * from "./src/form";
export * from "./src/form-item";
