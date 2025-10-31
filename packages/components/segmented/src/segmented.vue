<template>
  <el-segmented ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-segmented>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { segmentedEmits as elSegmentedEmits } from "element-plus";
import { segmentedEmits, segmentedProps } from "./segmented";
import type { SegmentedInstance } from "element-plus";

defineOptions({
  name: "HtSegmented"
});

const slots = useSlots();
const props = defineProps(segmentedProps);
const emit = defineEmits(segmentedEmits);
// 重发el的事件
const elEvents = getEvent(elSegmentedEmits, emit);

const elRef = ref<SegmentedInstance>();
defineExpose({
  elRef
});
</script>
