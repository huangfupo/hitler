<template>
  <el-rate ref="elRef" v-bind="props" v-on="elEvents" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { rateEmits as elRateEmits } from "element-plus";
import { rateEmits, rateProps } from "./rate";
import type { RateInstance } from "element-plus";

defineOptions({
  name: "HtRate"
});

const props = defineProps(rateProps);
const emit = defineEmits(rateEmits);
// 重发el的事件
const elEvents = getEvent(elRateEmits, emit);

const elRef = ref<RateInstance>();
const exposeNames = ["setCurrentValue", "resetCurrentValue"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
