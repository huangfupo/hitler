import {
  buttonEmits as elButtonEmits,
  buttonNativeTypes as elButtonNativeTypes,
  buttonProps as elButtonProps,
  buttonTypes as elButtonTypes,
  buttonGroupContextKey as elButtonGroupContextKey
} from "element-plus";

export const buttonProps = {
  ...elButtonProps
};

export const buttonEmits = {
  ...elButtonEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};

export const buttonTypes = [...elButtonTypes];

export const buttonNativeTypes = [...elButtonNativeTypes];

export const buttonGroupContextKey = elButtonGroupContextKey;
