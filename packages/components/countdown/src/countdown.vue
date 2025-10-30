<template>
  <el-countdown ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
    <template v-if="slots.prefix" #prefix="slotValue">
      <slot name="prefix" v-bind="slotValue" />
    </template>
    <template v-if="slots.suffix" #suffix="slotValue">
      <slot name="suffix" v-bind="slotValue" />
    </template>
  </el-countdown>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { countdownEmits as elCountdownEmits } from "element-plus";
import { countdownEmits, countdownProps } from "./countdown";
import type { CountdownInstance } from "element-plus";

defineOptions({
  name: "HtCountdown"
});

const slots = useSlots();
const props = defineProps(countdownProps);
const emit = defineEmits(countdownEmits);
// 重发el的事件
const elEvents = getEvent(elCountdownEmits, emit);

const elRef = ref<CountdownInstance>();
const exposeEvents = ["displayValue"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  elRef,
  ...exposeFns
});
</script>
