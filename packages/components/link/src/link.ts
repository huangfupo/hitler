import { linkEmits as elLinkEmits, linkProps as elLinkProps } from "element-plus";

export const linkProps = {
  ...elLinkProps
};

export const linkEmits = {
  ...elLinkEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
