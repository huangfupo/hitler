import { dropdownProps as elDropdownProps } from "element-plus";

export const dropdownProps = {
  ...elDropdownProps
};

// element-plus emit没有导出，只能手动复制一份
export const elDropdownEmits = {
  click: (event: MouseEvent) => !!event,
  command: (...args: any[]) => !!args,
  "visible-change": (value?: any) => value ?? true
};

export const dropdownEmits = {
  ...elDropdownEmits
  // 自定义事件
};
