import { treeProps as elTreeProps, treeEmits as elTreeEmits } from "element-plus/es/components/tree-v2/src/virtual-tree";

export const treeV2Props = {
  ...elTreeProps
};

export const treeV2Emits = {
  ...elTreeEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
