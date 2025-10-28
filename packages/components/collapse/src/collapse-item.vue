<template>
  <el-collapse-item ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
  </el-collapse-item>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { collapseItemProps } from "./collapse-item";
import type { CollapseItemInstance } from "element-plus";

defineOptions({
  name: "HtCollapseItem"
});

const slots = useSlots();
const props = defineProps(collapseItemProps);

const elRef = ref<CollapseItemInstance>();
defineExpose({
  elRef
});
</script>
