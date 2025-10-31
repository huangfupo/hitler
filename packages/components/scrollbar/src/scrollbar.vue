<template>
  <el-scrollbar ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { scrollbarEmits as elScrollbarEmits } from "element-plus";
import { scrollbarEmits, scrollbarProps } from "./scrollbar";
import type { ScrollbarInstance } from "element-plus";

defineOptions({
  name: "HtScrollbar"
});

const slots = useSlots();
const props = defineProps(scrollbarProps);
const emit = defineEmits(scrollbarEmits);
// 重发el的事件
const elEvents = getEvent(elScrollbarEmits, emit);

const elRef = ref<ScrollbarInstance>();
const exposeNames = ["handleScroll", "scrollTo", "setScrollTop", "setScrollLeft", "update", "wrapRef"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
