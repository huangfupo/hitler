import { popconfirmEmits as elPopconfirmEmits, popconfirmProps as elPopconfirmProps } from "element-plus";

export const popconfirmProps = {
  ...elPopconfirmProps
};

export const popconfirmEmits = {
  ...elPopconfirmEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
