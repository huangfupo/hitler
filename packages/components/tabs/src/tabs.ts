import { tabsEmits as elTabsEmits, tabsProps as elTabsProps } from "element-plus";

export const tabsProps = {
  ...elTabsProps
};

export const tabsEmits = {
  ...elTabsEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
