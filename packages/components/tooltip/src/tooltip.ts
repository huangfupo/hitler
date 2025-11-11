import { tooltipEmits as elTooltipEmits, useTooltipProps as elTooltipProps } from "element-plus";

export const tooltipProps = {
  ...elTooltipProps
};

export const tooltipEmits = {
  ...elTooltipEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
