<template>
  <el-option-group v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-option-group>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { optionGroupProps } from "./option-group";

defineOptions({
  name: "HtOptionGroup"
});

const slots = useSlots();
const props = defineProps(optionGroupProps);
</script>
