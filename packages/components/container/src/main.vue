<template>
  <el-main ref="elRef">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-main>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import type { MainInstance } from "element-plus";

defineOptions({
  name: "HtMain"
});
const slots = useSlots();

const elRef = ref<MainInstance>();
defineExpose({
  elRef
});
</script>
