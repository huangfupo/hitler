<template>
  <el-tooltip ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.content" #content="slotValue">
      <slot name="content" v-bind="slotValue" />
    </template>
  </el-tooltip>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { tooltipEmits as elTooltipEmits } from "element-plus";
import { tooltipEmits, tooltipProps } from "./tooltip";
import type { TooltipInstance } from "element-plus";

defineOptions({
  name: "HtTooltip"
});

const slots = useSlots();
const props = defineProps(tooltipProps);
const emit = defineEmits(tooltipEmits);
// 重发el的事件
const elEvents = getEvent(elTooltipEmits, emit);

const elRef = ref<TooltipInstance>();
const exposeEvents = ["popperRef", "contentRef", "isFocusInsideContent", "updatePopper", "onOpen", "onClose", "hide"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);
defineExpose({
  ...exposeFns
});
</script>
