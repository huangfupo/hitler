import { transferEmits as elTransferEmits, transferProps as elTransferProps } from "element-plus";

export const transferProps = {
  ...elTransferProps
};

export const transferEmits = {
  ...elTransferEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
