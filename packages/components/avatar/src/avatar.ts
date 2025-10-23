import { avatarEmits as elAvatarEmits, avatarProps as elAvatarProps } from "element-plus";

export const avatarProps = {
  ...elAvatarProps
};

export const avatarEmits = {
  ...elAvatarEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
