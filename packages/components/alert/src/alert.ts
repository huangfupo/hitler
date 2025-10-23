import { alertEffects as elAlertEffects, alertEmits as elAlertEmits, alertProps as elAlertProps } from "element-plus";

export const alertProps = {
  ...elAlertProps
};

export const alertEmits = {
  ...elAlertEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};

export const alertEffects = [...elAlertEffects];
