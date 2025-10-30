<template>
  <el-menu-item v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
  </el-menu-item>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { menuItemEmits as elMenuItemEmits } from "element-plus";
import { menuItemEmits, menuItemProps } from "./menu-item";

defineOptions({
  name: "HtMenuItem"
});

const slots = useSlots();
const props = defineProps(menuItemProps);
const emit = defineEmits(menuItemEmits);
// 重发el的事件
const elEvents = getEvent(elMenuItemEmits, emit);
</script>
