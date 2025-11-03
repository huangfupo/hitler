<template>
  <el-table ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot name="default" v-bind="slotValue" />
    </template>
    <template v-if="slots.append" #append="slotValue">
      <slot name="append" v-bind="slotValue" />
    </template>
    <template v-if="slots.empty" #empty="slotValue">
      <slot name="empty" v-bind="slotValue" />
    </template>
  </el-table>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { elTableEmits, tableEmits, tableProps } from "./table";
import type { TableInstance } from "element-plus";

defineOptions({
  name: "HtTable"
});

const elRef = ref<TableInstance>();
const slots = useSlots();
const props = defineProps(tableProps);

const emit = defineEmits(tableEmits);
// 重发el的事件
const elEvents = getEvent(elTableEmits, emit);

const exposeEvents = [
  "clearSelection",
  "getSelectionRows",
  "toggleRowSelection",
  "toggleAllSelection",
  "toggleRowExpansion",
  "setCurrentRow",
  "clearSort",
  "clearFilter",
  "doLayout",
  "sort",
  "scrollTo",
  "setScrollTop",
  "setScrollLeft",
  "columns",
  "updateKeyChildren"
] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  elRef,
  ...exposeFns
});
</script>
