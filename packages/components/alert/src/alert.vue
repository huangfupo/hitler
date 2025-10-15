<template>
  <el-alert ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
    <template v-if="slots.icon" #icon="slotValue">
      <slot name="icon" v-bind="slotValue" />
    </template>
  </el-alert>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { alertEmits as elAlertEmits } from "element-plus";
import { alertEmits, alertProps } from "./alert";
import type { AlertInstance } from "element-plus";

defineOptions({
  name: "HtAlert"
});

const slots = useSlots();

console.log(slots);
const props = defineProps(alertProps);
const emit = defineEmits(alertEmits);
// 重发el的事件
const elEvents = getEvent(elAlertEmits, emit);

const elRef = ref<AlertInstance>();
defineExpose({
  elRef
});
</script>
