<template>
  <el-time-picker ref="elRef" v-bind="props" v-on="elEvents"></el-time-picker>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { ElTimePicker } from "element-plus";
import { timePickerEmits, timePickerProps } from "./time-picker";
type timePicker = InstanceType<typeof ElTimePicker>;

defineOptions({
  name: "HtTimePicker"
});

const props = defineProps(timePickerProps);
const emit = defineEmits(timePickerEmits);
// 重发el的事件
const elEvents = getEvent(timePickerEmits, emit);

const elRef = ref<timePicker>();
const exposeEvents = ["focus", "blur", "handleOpen", "handleClose"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  elRef,
  ...exposeFns
});
</script>
