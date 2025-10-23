import { anchorEmits as elAnchorEmits, anchorProps as elAnchorProps } from "element-plus";

export const anchorProps = {
  ...elAnchorProps
};

export const anchorEmits = {
  ...elAnchorEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
