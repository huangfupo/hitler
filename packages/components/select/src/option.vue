<template>
  <el-option v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-option>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { optionProps } from "./option";

defineOptions({
  name: "HtOption"
});

const slots = useSlots();
const props = defineProps(optionProps);
</script>
