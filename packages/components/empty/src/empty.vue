<template>
  <el-empty ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.image" #image="slotValue">
      <slot name="image" v-bind="slotValue" />
    </template>
    <template v-if="slots.description" #description="slotValue">
      <slot name="description" v-bind="slotValue" />
    </template>
  </el-empty>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { emptyProps } from "./empty";

defineOptions({
  name: "HtEmpty"
});

const slots = useSlots();
const props = defineProps(emptyProps);
</script>
