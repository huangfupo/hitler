import { affixEmits as elAffixEmits, affixProps as elAffixProps } from "element-plus";

export const affixProps = {
  ...elAffixProps
};

export const affixEmits = {
  ...elAffixEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
