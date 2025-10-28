import { checkTagEmits as elCheckTagEmits, checkTagProps as elCheckTagProps } from "element-plus";

export const checkTagProps = {
  ...elCheckTagProps
};

export const checkTagEmits = {
  ...elCheckTagEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
