<template>
  <el-aside ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-aside>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { asideProps } from "./props";
import type { AsideInstance } from "element-plus";

defineOptions({
  name: "HtAside"
});
const slots = useSlots();
const props = defineProps(asideProps);

const elRef = ref<AsideInstance>();
defineExpose({
  elRef
});
</script>
