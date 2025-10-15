<template>
  <el-footer ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-footer>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { footerProps } from "./props";
import type { FooterInstance } from "element-plus";

defineOptions({
  name: "HtFooter"
});
const slots = useSlots();
const props = defineProps(footerProps);

const elRef = ref<FooterInstance>();
defineExpose({
  elRef
});
</script>
