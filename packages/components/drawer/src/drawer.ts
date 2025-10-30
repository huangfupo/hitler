import { drawerEmits as elDrawerEmits, drawerProps as elDrawerProps } from "element-plus";

export const drawerProps = {
  ...elDrawerProps
};

export const drawerEmits = {
  ...elDrawerEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
