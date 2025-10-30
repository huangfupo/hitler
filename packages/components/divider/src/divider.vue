<template>
  <el-divider ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-divider>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { dividerProps } from "./divider";
import { DividerInstance } from "element-plus";

defineOptions({
  name: "HtDivider"
});
const slots = useSlots();
const props = defineProps(dividerProps);

const elRef = ref<DividerInstance>();
defineExpose({
  elRef
});
</script>
