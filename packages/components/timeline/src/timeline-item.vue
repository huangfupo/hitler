<template>
  <el-timeline-item ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.dot" #dot="slotValue">
      <slot name="dot" v-bind="slotValue" />
    </template>
  </el-timeline-item>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { timelineItemProps } from "./timeline-item";
import type { TimelineItemInstance } from "element-plus";

defineOptions({
  name: "HtTimelineItem"
});

const slots = useSlots();
const props = defineProps(timelineItemProps);

const elRef = ref<TimelineItemInstance>();
defineExpose({
  elRef
});
</script>
