import { stepsEmits as elStepsEmits, stepsProps as elStepsProps } from "element-plus";

export const stepsProps = {
  ...elStepsProps
};

export const stepsEmits = {
  ...elStepsEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
