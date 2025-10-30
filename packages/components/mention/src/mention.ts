import { mentionEmits as elMentionEmits, mentionProps as elMentionProps } from "element-plus";

export const mentionProps = {
  ...elMentionProps
};

export const mentionEmits = {
  ...elMentionEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
