import { timeSelectProps as elTimeSelectProps } from "element-plus";
export const timeSelectProps = {
  ...elTimeSelectProps
};

export const elTimeSelectEmits = {
  "update:modelValue": (...arg: any[]) => !!arg,
  change: (...arg: any[]) => !!arg,
  blur: (...arg: any[]) => !!arg,
  focus: (...arg: any[]) => !!arg,
  clear: (...arg: any[]) => !!arg
};

export const timeSelectEmits = {
  ...elTimeSelectEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
