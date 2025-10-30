<template>
  <el-input ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.prefix" #prefix="slotValue">
      <slot name="prefix" v-bind="slotValue" />
    </template>
    <template v-if="slots.suffix" #suffix="slotValue">
      <slot name="suffix" v-bind="slotValue" />
    </template>
    <template v-if="slots.prepend" #prepend="slotValue">
      <slot name="prepend" v-bind="slotValue" />
    </template>
    <template v-if="slots.append" #append="slotValue">
      <slot name="append" v-bind="slotValue" />
    </template>
  </el-input>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { inputEmits as elInputEmits } from "element-plus";
import { inputEmits, inputProps } from "./input";
import type { InputInstance } from "element-plus";

defineOptions({
  name: "HtInput"
});

const slots = useSlots();
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);
// 重发el的事件
const elEvents = getEvent(elInputEmits, emit);

const elRef = ref<InputInstance>();
const exposeNames = [
  "blur",
  "clear",
  "focus",
  "input",
  "ref",
  "resizeTextarea",
  "select",
  "textarea",
  "textareaStyle",
  "isComposing"
] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
