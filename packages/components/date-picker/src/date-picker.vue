<template>
  <el-date-picker ref="elRef" v-bind="props" :shortcuts="shortcutList" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots['range-separator']" #range-separator="slotValue">
      <slot name="range-separator" v-bind="slotValue" />
    </template>
  </el-date-picker>
</template>
<script lang="ts" setup>
import { computed, ref, useSlots } from "vue";
import { getDateShortcuts, getEvent, getExports } from "@hitler/utils";
import { datePickerEmits, datePickerProps, elDatePickerEmits } from "./date-picker";
import type { DatePickerInstance } from "element-plus";

defineOptions({
  name: "HtDatePicker"
});

const slots = useSlots();
const props = defineProps(datePickerProps);
const emit = defineEmits(datePickerEmits);
// 重发el的事件
const elEvents = getEvent(elDatePickerEmits, emit);

const elRef = ref<DatePickerInstance>();
const exposeEvents = ["focus", "handleOpen", "handleClose"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);

const shortcutList = computed(() => (Array.isArray(props.shortcuts) ? props.shortcuts : getDateShortcuts(props.type)));

defineExpose({
  elRef,
  ...exposeFns
});
</script>
