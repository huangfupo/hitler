import { inputTagEmits as elInputTagEmits, inputTagProps as elInputTagProps } from "element-plus";

export const inputTagProps = {
  ...elInputTagProps
};

export const inputTagEmits = {
  ...elInputTagEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
