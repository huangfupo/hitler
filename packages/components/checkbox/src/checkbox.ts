import { checkboxEmits as elCheckboxEmits, checkboxProps as elCheckboxProps } from "element-plus";

export const checkboxProps = {
  ...elCheckboxProps
};

export const checkboxEmits = {
  ...elCheckboxEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
