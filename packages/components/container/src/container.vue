<template>
  <el-container ref="elRef" :direction="direction">
    <template v-if="slots.default" #default>
      <slot />
    </template>
  </el-container>
</template>
<script lang="ts" setup>
import { computed, ref, useSlots } from "vue";
import { containerProps } from "./props";

import type { Component, VNode } from "vue";
import type { ContainerInstance } from "element-plus";

defineOptions({
  name: "HtContainer"
});

const slots = useSlots();
const props = defineProps(containerProps);

const isVertical = computed(() => {
  if (props.direction === "vertical") {
    return true;
  } else if (props.direction === "horizontal") {
    return false;
  }
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default();
    return vNodes.some(vNode => {
      const tag = (vNode.type as Component).name || "";
      return ["ElHeader", "ElFooter", "HtHeader", "HtFooter"].includes(tag);
    });
  } else {
    return false;
  }
});

const direction = computed(() => {
  return isVertical.value ? "vertical" : "horizontal";
});

const elRef = ref<ContainerInstance>();
defineExpose({
  elRef
});
</script>
