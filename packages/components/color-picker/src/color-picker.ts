import { colorPickerEmits as elColorPickerEmits, colorPickerProps as elColorPickerProps } from "element-plus";

export const colorPickerProps = {
  ...elColorPickerProps
};

export const colorPickerEmits = {
  ...elColorPickerEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
