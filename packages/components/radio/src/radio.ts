import { radioEmits as elRadioEmits, radioProps as elRadioProps } from "element-plus";

export const radioProps = {
  ...elRadioProps
};

export const radioEmits = {
  ...elRadioEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
