<template>
  <el-pagination v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-pagination>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { paginationEmits as elPaginationEmits } from "element-plus";
import { paginationEmits, paginationProps } from "./pagination";

defineOptions({
  name: "HtPagination"
});

const slots = useSlots();
const props = defineProps(paginationProps);
const emit = defineEmits(paginationEmits);
// 重发el的事件
const elEvents = getEvent(elPaginationEmits, emit);
</script>
