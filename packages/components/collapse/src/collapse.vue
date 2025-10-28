<template>
  <el-collapse ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-collapse>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { collapseEmits as elCollapseEmits } from "element-plus";
import { collapseEmits, collapseProps } from "./collapse";
import type { CollapseInstance } from "element-plus";

defineOptions({
  name: "HtCollapse"
});

const slots = useSlots();
const props = defineProps(collapseProps);
const emit = defineEmits(collapseEmits);
// 重发el的事件
const elEvents = getEvent(elCollapseEmits, emit);

const elRef = ref<CollapseInstance>();
defineExpose({
  elRef
});
</script>
