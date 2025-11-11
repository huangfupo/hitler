<template>
  <el-tour ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.indicators" #indicators="slotValue">
      <slot name="indicators" v-bind="slotValue" />
    </template>
  </el-tour>
</template>
<script lang="ts" setup>
import { useSlots, ref } from "vue";
import { getEvent } from "@hitler/utils";
import { tourEmits as elTourEmits } from "element-plus";
import { tourEmits, tourProps } from "./tour";
import type { TourInstance } from "element-plus";

defineOptions({
  name: "HtTour"
});

const props = defineProps(tourProps);
const emit = defineEmits(tourEmits);
// 重发el的事件
const elEvents = getEvent(elTourEmits, emit);

const slots = useSlots();

const elRef = ref<TourInstance>();
defineExpose({
  elRef
});
</script>
