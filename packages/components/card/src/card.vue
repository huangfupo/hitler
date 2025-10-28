<template>
  <el-card ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
    <template v-if="slots.footer" #footer="slotValue">
      <slot class="footer" v-bind="slotValue" />
    </template>
  </el-card>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { cardProps } from "./card";
import type { CardInstance } from "element-plus";

defineOptions({
  name: "HtCard"
});

const slots = useSlots();
const props = defineProps(cardProps);

const elRef = ref<CardInstance>();
defineExpose({
  elRef
});
</script>
