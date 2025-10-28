import { checkboxGroupEmits as elCheckboxGroupEmits, checkboxGroupProps as elCheckboxGroupProps } from "element-plus";

export const checkboxGroupProps = {
  ...elCheckboxGroupProps
};

export const checkboxGroupEmits = {
  ...elCheckboxGroupEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
