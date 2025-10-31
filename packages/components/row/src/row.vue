<template>
  <el-row v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-row>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { rowProps } from "./row";

defineOptions({
  name: "HtRow"
});

const slots = useSlots();
const props = defineProps(rowProps);
</script>
