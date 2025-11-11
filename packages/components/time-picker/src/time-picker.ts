import { timePickerDefaultProps as elTimePickerProps } from "element-plus";

export const timePickerProps = {
  ...elTimePickerProps
};

// timePickerEmits as elTimePickerEmits,
export const timePickerEmits = {
  "update:modelValue": (...arg: any[]) => !!arg,
  change: (...arg: any[]) => !!arg,
  blur: (...arg: any[]) => !!arg,
  focus: (...arg: any[]) => !!arg,
  clear: (...arg: any[]) => !!arg,
  "visible-change": (...arg: any[]) => !!arg
  // ...elTimePickerEmits,
  // 自定义事件
  // submit: (value: any) => !!value,
};
