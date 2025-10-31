<template>
  <el-step v-bind="props">
    <template v-if="slots.icon" #icon="slotValue">
      <slot name="icon" v-bind="slotValue" />
    </template>
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
    <template v-if="slots.description" #description="slotValue">
      <slot name="description" v-bind="slotValue" />
    </template>
  </el-step>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { stepProps } from "./step";

defineOptions({
  name: "HtStep"
});

const slots = useSlots();
const props = defineProps(stepProps);
</script>
