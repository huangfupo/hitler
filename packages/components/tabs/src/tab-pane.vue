<template>
  <el-tab-pane ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.label" #label="slotValue">
      <slot name="label" v-bind="slotValue" />
    </template>
  </el-tab-pane>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { tabPaneProps } from "./tab-pane";
import type { TabPaneInstance } from "element-plus";

defineOptions({
  name: "HtTabPane"
});

const slots = useSlots();
const props = defineProps(tabPaneProps);
const elRef = ref<TabPaneInstance>();
defineExpose({
  elRef
});
</script>
