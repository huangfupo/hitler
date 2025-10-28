<template>
  <el-col ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-col>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { colProps } from "./col";
import type { ColInstance } from "element-plus";

defineOptions({
  name: "HtCol"
});

const slots = useSlots();
const props = defineProps(colProps);

const elRef = ref<ColInstance>();
defineExpose({
  elRef
});
</script>
