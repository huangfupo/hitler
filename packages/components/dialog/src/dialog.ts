import { dialogEmits as elDialogEmits, dialogProps as elDialogProps } from "element-plus";
import type { ExtractPropTypes } from "vue";

export const dialogProps = {
  ...elDialogProps
};

export const dialogEmits = {
  ...elDialogEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};

export type DialogProps = ExtractPropTypes<typeof dialogProps>;
