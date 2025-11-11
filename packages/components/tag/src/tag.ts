import { tagEmits as elTagEmits, tagProps as elTagProps } from "element-plus";

export const tagProps = {
  ...elTagProps
};

export const tagEmits = {
  ...elTagEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
