import { cascaderEmits as elCascaderEmits, cascaderProps as elCascaderProps } from "element-plus";
import type { ExtractPropTypes } from "vue";

export const cascaderProps = {
  ...elCascaderProps
};

export const cascaderEmits = {
  ...elCascaderEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};

export type CascaderProps = ExtractPropTypes<typeof cascaderProps>;
