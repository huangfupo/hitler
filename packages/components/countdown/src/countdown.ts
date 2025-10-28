import { countdownEmits as elCountdownEmits, countdownProps as elCountdownProps } from "element-plus";

export const countdownProps = {
  ...elCountdownProps
};

export const countdownEmits = {
  ...elCountdownEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
