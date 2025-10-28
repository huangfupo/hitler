<template>
  <el-carousel ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default">
      <slot />
    </template>
  </el-carousel>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { carouselEmits as elCarouselEmits } from "element-plus";
import { carouselEmits, carouselProps } from "./carousel";
import type { CarouselInstance } from "element-plus";

defineOptions({
  name: "HtCarousel"
});

const slots = useSlots();
const props = defineProps(carouselProps);
const emit = defineEmits(carouselEmits);
// 重发el的事件
const elEvents = getEvent(elCarouselEmits, emit);

const elRef = ref<CarouselInstance>();
const exposeEvents = ["activeIndex", "setActiveItem", "prev", "next"] as const;

const { exposeFns } = getExports(elRef, exposeEvents);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
