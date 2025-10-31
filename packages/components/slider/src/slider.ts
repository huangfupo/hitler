import { sliderEmits as elSliderEmits, sliderProps as elSliderProps } from "element-plus";

export const sliderProps = {
  ...elSliderProps
};

export const sliderEmits = {
  ...elSliderEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
