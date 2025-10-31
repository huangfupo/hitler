<template>
  <el-skeleton v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.template" #template="slotValue">
      <slot name="template" v-bind="slotValue" />
    </template>
  </el-skeleton>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { skeletonProps } from "./skeleton";

defineOptions({
  name: "HtSkeleton"
});

const slots = useSlots();
const props = defineProps(skeletonProps);
</script>
