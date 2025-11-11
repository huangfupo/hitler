import { tourStepEmits as elTourStepEmits, tourStepProps as elTourStepProps } from "element-plus";

export const tourStepProps: Record<string, any> = {
  ...elTourStepProps
};

export const tourStepEmits = {
  ...elTourStepEmits
  // 自定义事件
};
