<template>
  <el-popper ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.content" #content="slotValue">
      <slot name="content" v-bind="slotValue" />
    </template>
  </el-popper>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getExports } from "@hitler/utils";
import { popperProps } from "./popper";
import type { PopperInstance } from "element-plus";

defineOptions({
  name: "HtPopper"
});

const slots = useSlots();
const props = defineProps(popperProps);

const elRef = ref<PopperInstance>();
const exposeNames = ["popperRef", "contentRef", "isFocusInsideContent", "updatePopper", "onOpen", "onClose", "hide"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
