import {
  selectV2Props as elSelectV2Props,
  selectV2Emits as elSelectV2Emits
} from "element-plus/es/components/select-v2/src/defaults";
import type { ExtractPropTypes } from "vue";

export const selectV2Props = {
  ...elSelectV2Props
};

export const selectV2Emits = {
  ...elSelectV2Emits
  // 自定义事件
  // submit: (value: any) => !!value,
};

export type SelectV2Props = ExtractPropTypes<typeof selectV2Props>;
