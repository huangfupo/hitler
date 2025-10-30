import { menuEmits as elMenuEmits, menuProps as elMenuProps } from "element-plus";

export const menuProps = {
  ...elMenuProps
};

export const menuEmits = {
  ...elMenuEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
