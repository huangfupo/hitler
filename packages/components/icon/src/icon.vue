<template>
  <el-icon ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-icon>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { iconProps } from "./icon";
import { IconInstance } from "element-plus";

defineOptions({
  name: "HtIcon"
});

const slots = useSlots();
const props = defineProps(iconProps);

const elRef = ref<IconInstance>();
defineExpose({
  elRef
});
</script>
