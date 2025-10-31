import { switchEmits as elSwitchEmits, switchProps as elSwitchProps } from "element-plus";

export const switchProps = {
  ...elSwitchProps
};

export const switchEmits = {
  ...elSwitchEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
