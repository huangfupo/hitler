import { selectProps as htSelect, selectEmits as htSelectEmits } from "@hitler/components";
import { treeProps as htTree, elTreeEmits as htTreeEmits } from "@hitler/components";

export const treeSelectProps = {
  ...htSelect,
  ...htTree,
  cacheData: {
    type: Array,
    default: () => []
  }
};

export const elTreeSelectEmits = {
  ...htSelectEmits,
  ...htTreeEmits
};

export const treeSelectEmits = {
  ...elTreeSelectEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
