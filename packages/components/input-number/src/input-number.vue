<template>
  <el-input-number ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots['decrease-icon']" #decrease-icon="slotValue">
      <slot name="decrease-icon" v-bind="slotValue" />
    </template>
    <template v-if="slots['increase-icon']" #increase-icon="slotValue">
      <slot name="increase-icon" v-bind="slotValue" />
    </template>
    <template v-if="slots.prefix" #prefix="slotValue">
      <slot name="prefix" v-bind="slotValue" />
    </template>
    <template v-if="slots.suffix" #suffix="slotValue">
      <slot name="suffix" v-bind="slotValue" />
    </template>
  </el-input-number>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { inputNumberEmits as elInputNumberEmits } from "element-plus";
import { inputNumberEmits, inputNumberProps } from "./input-number";
import type { InputNumberInstance } from "element-plus";

defineOptions({
  name: "HtInputNumber"
});

const slots = useSlots();
const props = defineProps(inputNumberProps);
const emit = defineEmits(inputNumberEmits);
// 重发el的事件
const elEvents = getEvent(elInputNumberEmits, emit);

const elRef = ref<InputNumberInstance>();
const exposeNames = ["focus", "blur"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
