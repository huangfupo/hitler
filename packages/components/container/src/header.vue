<template>
  <el-header ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-header>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { headerProps } from "./props";
import type { HeaderInstance } from "element-plus";

defineOptions({
  name: "HtHeader"
});
const slots = useSlots();
const props = defineProps(headerProps);

const elRef = ref<HeaderInstance>();
defineExpose({
  elRef
});
</script>
