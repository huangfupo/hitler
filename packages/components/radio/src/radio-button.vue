<template>
  <el-radio-button v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-radio-button>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { radioButtonProps } from "./radio-button";

defineOptions({
  name: "HtRadioButton"
});

const slots = useSlots();
const props = defineProps(radioButtonProps);
</script>
