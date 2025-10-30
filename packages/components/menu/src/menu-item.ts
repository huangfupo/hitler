import { menuItemEmits as elMenuItemEmits, menuItemProps as elMenuItemProps } from "element-plus";

export const menuItemProps = {
  ...elMenuItemProps
};

export const menuItemEmits = {
  ...elMenuItemEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
