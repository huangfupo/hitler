import { backtopEmits as elBacktopEmits, backtopProps as elBacktopProps } from "element-plus";

export const backtopProps = {
  ...elBacktopProps
};

export const backtopEmits = {
  ...elBacktopEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
