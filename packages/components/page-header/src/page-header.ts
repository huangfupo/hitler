import { pageHeaderEmits as elPageHeaderEmits, pageHeaderProps as elPageHeaderProps } from "element-plus";

export const pageHeaderProps = {
  ...elPageHeaderProps
};

export const pageHeaderEmits = {
  ...elPageHeaderEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
