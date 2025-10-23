<template>
  <el-breadcrumb ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { breadcrumbProps } from "./breadcrumb";
import type { BreadcrumbInstance } from "element-plus";

defineOptions({
  name: "HtBreadcrumb"
});

const slots = useSlots();
const props = defineProps(breadcrumbProps);

const elRef = ref<BreadcrumbInstance>();
defineExpose({
  elRef
});
</script>
