<template>
  <el-result v-bind="props">
    <template v-if="slots.icon" #icon="slotValue">
      <slot name="icon" v-bind="slotValue" />
    </template>
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
    <template v-if="slots['sub-title']" #sub-title="slotValue">
      <slot name="sub-title" v-bind="slotValue" />
    </template>
    <template v-if="slots.extra" #extra="slotValue">
      <slot name="extra" v-bind="slotValue" />
    </template>
  </el-result>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { resultProps } from "./result";

defineOptions({
  name: "HtResult"
});

const slots = useSlots();
const props = defineProps(resultProps);
</script>
