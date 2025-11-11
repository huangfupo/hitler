<template>
  <el-tree ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.empty" #empty="slotValue">
      <slot name="empty" v-bind="slotValue" />
    </template>
  </el-tree>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { elTreeEmits, treeEmits, treeProps } from "./tree";
import type { TreeInstance } from "element-plus/es/components/tree";

defineOptions({
  name: "HtTree"
});

const slots = useSlots();
const props = defineProps(treeProps);
const emit = defineEmits(treeEmits);
// 重发el的事件
const elEvents = getEvent(elTreeEmits, emit);

const elRef = ref<TreeInstance>();
const exposeEvents = [
  "filter",
  "updateKeyChildren",
  "getCheckedNodes",
  "setCheckedNodes",
  "getCheckedKeys",
  "setCheckedKeys",
  "setChecked",
  "getHalfCheckedNodes",
  "getHalfCheckedKeys",
  "getCurrentKey",
  "getCurrentNode",
  "setCurrentKey",
  "setCurrentNode",
  "getNode",
  "remove",
  "append",
  "insertBefore",
  "insertAfter"
] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  elRef,
  ...exposeFns
});
</script>
