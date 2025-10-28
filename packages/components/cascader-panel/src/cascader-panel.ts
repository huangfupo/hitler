import { cascaderPanelProps as elCascaderPanelProps, cascaderPanelEmits as elCascaderPanelEmits } from "element-plus";

export const cascaderPanelProps = {
  ...elCascaderPanelProps
};

export const cascaderPanelEmits = {
  ...elCascaderPanelEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
