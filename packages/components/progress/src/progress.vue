<template>
  <el-progress ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-progress>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { progressProps } from "./progress";
import type { ProgressInstance } from "element-plus";

defineOptions({
  name: "HtProgress"
});

const slots = useSlots();
const props = defineProps(progressProps);

const elRef = ref<ProgressInstance>();
defineExpose({
  elRef
});
</script>
