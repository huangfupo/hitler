import { inputNumberEmits as elInputNumberEmits, inputNumberProps as elInputNumberProps } from "element-plus";

export const inputNumberProps = {
  ...elInputNumberProps
};

export const inputNumberEmits = {
  ...elInputNumberEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
