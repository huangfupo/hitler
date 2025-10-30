<template>
  <el-input-tag ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.tag" #tag="slotValue">
      <slot name="tag" v-bind="slotValue" />
    </template>
    <template v-if="slots.prefix" #prefix="slotValue">
      <slot name="prefix" v-bind="slotValue" />
    </template>
    <template v-if="slots.suffix" #suffix="slotValue">
      <slot name="suffix" v-bind="slotValue" />
    </template>
  </el-input-tag>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { inputTagEmits as elInputTagEmits } from "element-plus";
import { inputTagEmits, inputTagProps } from "./input-tag";
import type { InputTagInstance } from "element-plus";

defineOptions({
  name: "HtInputTag"
});

const slots = useSlots();
const props = defineProps(inputTagProps);
const emit = defineEmits(inputTagEmits);
// 重发el的事件
const elEvents = getEvent(elInputTagEmits, emit);

const elRef = ref<InputTagInstance>();
const exposeNames = ["focus", "blur"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
