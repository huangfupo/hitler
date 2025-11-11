<template>
  <el-tree-select ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-tree-select>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { ElTreeSelect } from "element-plus";
import { elTreeSelectEmits, treeSelectEmits, treeSelectProps } from "./tree-select";

type TreeSelectInstance = InstanceType<typeof ElTreeSelect>;

defineOptions({
  name: "HtTreeSelect"
});

const slots = useSlots();
const props = defineProps(treeSelectProps);
const emit = defineEmits(treeSelectEmits);
// 重发el的事件
const elEvents = getEvent(elTreeSelectEmits, emit);

const elRef = ref<TreeSelectInstance>();
const exposeEvents = ["treeRef", "selectRef"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  elRef,
  ...exposeFns
});
</script>
