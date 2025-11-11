<template>
  <el-text ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-text>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { textProps } from "./text";

defineOptions({
  name: "HtText"
});

const slots = useSlots();
const props = defineProps(textProps);
</script>
