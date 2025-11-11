<template>
  <el-tour-step ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
  </el-tour-step>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { tourStepEmits as elTourStepEmits } from "element-plus/es/components/tour/index";
import { tourStepEmits, tourStepProps } from "./tour-step";

defineOptions({
  name: "HtTourStep"
});

const slots = useSlots();
const props = defineProps(tourStepProps);
const emit = defineEmits(tourStepEmits);
// 重发el的事件
const elEvents = getEvent(elTourStepEmits, emit);
</script>
