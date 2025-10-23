<template>
  <el-button-group ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-button-group>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { buttonGroupProps } from "./button-group";
import type { ButtonGroupInstance } from "element-plus";

defineOptions({
  name: "HtButtonGroup"
});

const slots = useSlots();
const props = defineProps(buttonGroupProps);

const elRef = ref<ButtonGroupInstance>();
defineExpose({
  elRef
});
</script>
