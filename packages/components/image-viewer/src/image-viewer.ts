import { imageViewerEmits as elImageViewerEmits, imageViewerProps as elImageViewerProps } from "element-plus";

export const imageViewerProps = {
  ...elImageViewerProps
};

export const imageViewerEmits = {
  ...elImageViewerEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
