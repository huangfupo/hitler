import { collapseEmits as elCollapseEmits, collapseProps as elCollapseProps } from "element-plus";

export const collapseProps = {
  ...elCollapseProps
};

export const collapseEmits = {
  ...elCollapseEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
