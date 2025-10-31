import { segmentedEmits as elSegmentedEmits, segmentedProps as elSegmentedProps } from "element-plus";

export const segmentedProps = {
  ...elSegmentedProps
};

export const segmentedEmits = {
  ...elSegmentedEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
