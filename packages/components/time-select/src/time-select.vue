<template>
  <el-time-select ref="elRef" v-bind="props" v-on="elEvents"></el-time-select>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { ElTimeSelect } from "element-plus";
import { elTimeSelectEmits, timeSelectEmits, timeSelectProps } from "./time-select";
import type { TimeSelectInstance } from "element-plus";

defineOptions({
  name: "HtTimeSelect"
});

const props = defineProps(timeSelectProps);
const emit = defineEmits(timeSelectEmits);
// 重发el的事件
const elEvents = getEvent(elTimeSelectEmits, emit);
const elRef = ref<TimeSelectInstance>();
const exposeEvents = ["focus", "blur"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
