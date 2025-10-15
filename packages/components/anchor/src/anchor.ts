import { anchorEmits as elAnchorEmits, anchorProps as elAnchorProps } from "element-plus";
// import type { ExtractPropTypes } from 'vue';

export const anchorProps = {
  ...elAnchorProps
};

export const anchorEmits = {
  ...elAnchorEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
