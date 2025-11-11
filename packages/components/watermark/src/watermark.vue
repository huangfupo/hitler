<template>
  <el-watermark ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-watermark>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { watermarkProps } from "./watermark";
import type { WatermarkInstance } from "element-plus";

defineOptions({
  name: "HtWatermark"
});

const slots = useSlots();
const props = defineProps(watermarkProps);

const elRef = ref<WatermarkInstance>();
defineExpose({
  elRef
});
</script>
