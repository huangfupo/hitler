<template>
  <el-menu ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-menu>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { menuEmits as elMenuEmits } from "element-plus";
import { menuEmits, menuProps } from "./menu";
import type { MenuInstance } from "element-plus";

defineOptions({
  name: "HtMenu"
});

const slots = useSlots();
const props = defineProps(menuProps);
const emit = defineEmits(menuEmits);
// 重发el的事件
const elEvents = getEvent(elMenuEmits, emit);

const elRef = ref<MenuInstance>();
const exposeNames = ["open", "close", "handleResize", "updateActiveIndex"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
