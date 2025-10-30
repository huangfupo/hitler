import { formEmits as elFormEmits, formProps as elFormProps } from "element-plus";

export const formProps = {
  ...elFormProps
};

export const formEmits = {
  ...elFormEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
