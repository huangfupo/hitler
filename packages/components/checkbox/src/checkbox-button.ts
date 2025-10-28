import { checkboxEmits as elCheckboxButtonEmits, checkboxProps as elCheckboxButtonProps } from "element-plus";

export const checkboxButtonProps = {
  ...elCheckboxButtonProps
};

export const checkboxButtonEmits = {
  ...elCheckboxButtonEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
