import { rateEmits as elRateEmits, rateProps as elRateProps } from "element-plus";

export const rateProps = {
  ...elRateProps
};

export const rateEmits = {
  ...elRateEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
