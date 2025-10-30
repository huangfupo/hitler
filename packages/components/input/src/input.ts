import { inputEmits as elInputEmits, inputProps as elInputProps } from "element-plus";
import type { ExtractPropTypes } from "vue";

export const inputProps = {
  ...elInputProps
};

export const inputEmits = {
  ...elInputEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
