<template>
  <el-steps v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-steps>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { stepsEmits as elStepsEmits } from "element-plus";
import { stepsEmits, stepsProps } from "./steps";

defineOptions({
  name: "HtSteps"
});

const slots = useSlots();
const props = defineProps(stepsProps);
const emit = defineEmits(stepsEmits);
// 重发el的事件
const elEvents = getEvent(elStepsEmits, emit);
</script>
