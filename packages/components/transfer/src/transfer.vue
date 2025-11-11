<template>
  <el-transfer ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots['left-footer']" #left-footer="slotValue">
      <slot name="left-footer" v-bind="slotValue" />
    </template>
    <template v-if="slots['right-footer']" #right-footer="slotValue">
      <slot name="right-footer" v-bind="slotValue" />
    </template>
    <template v-if="slots['left-empty']" #left-empty="slotValue">
      <slot name="left-empty" v-bind="slotValue" />
    </template>
    <template v-if="slots['right-empty']" #right-empty="slotValue">
      <slot name="right-empty" v-bind="slotValue" />
    </template>
  </el-transfer>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { transferEmits as elTransferEmits } from "element-plus";
import { transferEmits, transferProps } from "./transfer";
import type { TransferInstance } from "element-plus";

defineOptions({
  name: "HtTransfer"
});

const slots = useSlots();
const props = defineProps(transferProps);
const emit = defineEmits(transferEmits);
// 重发el的事件
const elEvents = getEvent(elTransferEmits, emit);

const elRef = ref<TransferInstance>();
const exposeEvents = ["clearQuery", "leftPanel", "rightPanel"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  ...exposeFns
});
</script>
