<template>
  <el-statistic ref="elRef" v-bind="props">
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
    <template v-if="slots.suffix" #suffix="slotValue">
      <slot name="suffix" v-bind="slotValue" />
    </template>
    <template v-if="slots.prefix" #prefix="slotValue">
      <slot name="prefix" v-bind="slotValue" />
    </template>
  </el-statistic>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getExports } from "@hitler/utils";
import { statisticProps } from "./statistic";
import type { StatisticInstance } from "element-plus";

defineOptions({
  name: "HtStatistic"
});

const slots = useSlots();
const props = defineProps(statisticProps);

const elRef = ref<StatisticInstance>();
const exposeEvents = ["displayValue"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  elRef,
  ...exposeFns
});
</script>
