<template>
  <el-slider v-bind="props" v-on="elEvents"></el-slider>
</template>
<script lang="ts" setup>
import { getEvent } from "@hitler/utils";
import { sliderEmits as elSliderEmits } from "element-plus";
import { sliderEmits, sliderProps } from "./slider";

defineOptions({
  name: "HtSlider"
});

const props = defineProps(sliderProps);
const emit = defineEmits(sliderEmits);
// 重发el的事件
const elEvents = getEvent(elSliderEmits, emit);
</script>
