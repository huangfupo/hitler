<template>
  <el-breadcrumb-item ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-breadcrumb-item>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { breadcrumbItemProps } from "./breadcrumb-item";
import type { BreadcrumbItemInstance } from "element-plus";

defineOptions({
  name: "HtBreadcrumbItem"
});

const slots = useSlots();
const props = defineProps(breadcrumbItemProps);

const elRef = ref<BreadcrumbItemInstance>();
defineExpose({
  elRef
});
</script>
