import { imageEmits as elImageEmits, imageProps as elImageProps } from "element-plus";

export const imageProps = {
  ...elImageProps
};

export const imageEmits = {
  ...elImageEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
