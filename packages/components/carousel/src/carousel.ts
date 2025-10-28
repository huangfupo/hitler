import {
  carouselContextKey as elCarouselContextKey,
  carouselEmits as elCarouselEmits,
  carouselProps as elCarouselProps
} from "element-plus";

export const carouselProps = {
  ...elCarouselProps
};

export const carouselEmits = {
  ...elCarouselEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};

export const carouselContextKey = elCarouselContextKey;
