<template>
  <el-timeline ref="elRef">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-timeline>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import type { TimelineInstance } from "element-plus";

defineOptions({
  name: "HtTimeline"
});

const slots = useSlots();

const elRef = ref<TimelineInstance>();
defineExpose({
  elRef
});
</script>
