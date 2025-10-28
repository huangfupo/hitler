<template>
  <el-carousel-item ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-carousel-item>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { carouselItemProps } from "./carousel-item";

defineOptions({
  name: "HtCarouselItem"
});

const slots = useSlots();
const props = defineProps(carouselItemProps);
</script>
