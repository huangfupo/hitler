import { tourEmits as elTourEmits, tourProps as elTourProps } from "element-plus";

export const tourProps: Record<string, any> = {
  ...elTourProps
};

export const tourEmits = {
  ...elTourEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
