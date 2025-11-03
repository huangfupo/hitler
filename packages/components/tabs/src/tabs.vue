<template>
  <el-tabs ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots['add-icon']" #add-icon="slotValue">
      <slot name="add-icon" v-bind="slotValue" />
    </template>
  </el-tabs>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { tabsEmits as elTabsEmits } from "element-plus";
import { tabsEmits, tabsProps } from "./tabs";

defineOptions({
  name: "HtTabs"
});

const slots = useSlots();

const props = defineProps(tabsProps);
const emit = defineEmits(tabsEmits);
// 重发el的事件
const elEvents = getEvent(elTabsEmits, emit);
</script>
