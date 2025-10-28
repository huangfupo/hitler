<template>
  <el-calendar ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.dateCell" #date-cell="slotValue">
      <slot name="date-cell" v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
  </el-calendar>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { calendarEmits as elCalendarEmits } from "element-plus";
import { calendarEmits, calendarProps } from "./calendar";
import type { CalendarInstance } from "element-plus";

defineOptions({
  name: "HtCalendar"
});

const slots = useSlots();
const props = defineProps(calendarProps);
const emit = defineEmits(calendarEmits);
// 重发el的事件
const elEvents = getEvent(elCalendarEmits, emit);

const elRef = ref<CalendarInstance>();

const exposeEvents = ["selectedDay", "pickDay", "selectDate", "calculateValidatedDateRange"] as const;

const { exposeFns } = getExports(elRef, exposeEvents);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
