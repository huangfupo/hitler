<template>
  <el-tree-v2 ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-tree-v2>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { ElTreeV2 } from "element-plus";
import { treeEmits as elTreeEmits } from "element-plus/es/components/tree-v2/src/virtual-tree";
import { treeV2Emits, treeV2Props } from "./tree-v2";

type TreeV2Instance = InstanceType<typeof ElTreeV2>;

defineOptions({
  name: "HtTreeV2"
});

const slots = useSlots();
const props = defineProps(treeV2Props);
const emit = defineEmits(treeV2Emits);
// 重发el的事件
const elEvents = getEvent(elTreeEmits, emit);

const elRef = ref<TreeV2Instance>();
const exposeEvents = [
  "filter",
  "getCheckedNodes",
  "getCheckedKeys",
  "setCheckedKeys",
  "setChecked",
  "setExpandedKeys",
  "getHalfCheckedNodes",
  "getHalfCheckedKeys",
  "getCurrentKey",
  "getCurrentNode",
  "setCurrentKey",
  "getNode",
  "expandNode",
  "collapseNode",
  "setData",
  "scrollTo",
  "scrollToNode"
] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  elRef,
  ...exposeFns
});
</script>
