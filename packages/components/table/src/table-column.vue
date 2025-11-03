<template>
  <el-table-column v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
    <template v-if="slots['filter-icon']" #filter-icon="slotValue">
      <slot name="filter-icon" v-bind="slotValue" />
    </template>
    <template v-if="slots.expand" #expand="slotValue">
      <slot name="expand" v-bind="slotValue" />
    </template>
  </el-table-column>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { tableColumnProps } from "./table-column";

defineOptions({
  name: "HtTableColumn"
});

const slots = useSlots();
const props = defineProps(tableColumnProps);
</script>
