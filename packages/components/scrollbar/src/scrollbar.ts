import { scrollbarEmits as elScrollbarEmits, scrollbarProps as elScrollbarProps } from "element-plus";

export const scrollbarProps = {
  ...elScrollbarProps
};

export const scrollbarEmits = {
  ...elScrollbarEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
