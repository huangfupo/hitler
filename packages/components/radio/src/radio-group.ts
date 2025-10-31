import { radioGroupEmits as elRadioGroupEmits, radioGroupProps as elRadioGroupProps } from "element-plus";

export const radioGroupProps = {
  ...elRadioGroupProps
};

export const radioGroupEmits = {
  ...elRadioGroupEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
