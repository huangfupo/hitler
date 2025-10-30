<template>
  <el-descriptions ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
    <template v-if="slots.extra" #extra="slotValue">
      <slot name="extra" v-bind="slotValue" />
    </template>
  </el-descriptions>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { descriptionsProps } from "./descriptions";

defineOptions({
  name: "HtDescriptions"
});

const slots = useSlots();
const props = defineProps(descriptionsProps);
</script>
