<template>
  <el-backtop ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-backtop>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { backtopEmits as elBacktopEmits } from "element-plus";
import { backtopEmits, backtopProps } from "./backtop";
import type { BacktopInstance } from "element-plus";

defineOptions({
  name: "HtBacktop"
});

const slots = useSlots();
const props = defineProps(backtopProps);
const emit = defineEmits(backtopEmits);
// 重发el的事件
const elEvents = getEvent(elBacktopEmits, emit);

const elRef = ref<BacktopInstance>();
defineExpose({
  elRef
});
</script>
