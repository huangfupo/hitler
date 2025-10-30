import { selectProps as elSelectProps, selectEmits as elSelectEmits } from "element-plus";

export const selectProps: any = {
  ...elSelectProps
};

export const selectEmits = {
  ...elSelectEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
