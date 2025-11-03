<template>
  <el-table-v2 ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.cell" #cell="slotValue">
      <slot name="cell" v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
    <template v-if="slots.headerCell" #headerCell="slotValue">
      <slot name="headerCell" v-bind="slotValue" />
    </template>
    <template v-if="slots.row" #row="slotValue">
      <slot name="row" v-bind="slotValue" />
    </template>
    <template v-if="slots.footer" #footer="slotValue">
      <slot name="footer" v-bind="slotValue" />
    </template>
    <template v-if="slots.empty" #empty="slotValue">
      <slot name="empty" v-bind="slotValue" />
    </template>
    <template v-if="slots.overlay" #overlay="slotValue">
      <slot name="overlay" v-bind="slotValue" />
    </template>
  </el-table-v2>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { elTableV2Emits, tableV2Emits, tableV2Props } from "./table-v2";
import type { TableV2Instance } from "element-plus";

defineOptions({
  name: "HtTableV2"
});

const elRef = ref<TableV2Instance>();
const slots = useSlots();

const props = defineProps(tableV2Props);

const emit = defineEmits(tableV2Emits);
// 重发el的事件
const elEvents = getEvent(elTableV2Emits, emit);

const exposeEvents = ["scrollTo", "scrollToLeft", "scrollToTop", "scrollToRow"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  elRef,
  ...exposeFns
});
</script>
