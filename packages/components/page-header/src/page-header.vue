<template>
  <el-page-header ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.icon" #icon="slotValue">
      <slot name="icon" v-bind="slotValue" />
    </template>
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
    <template v-if="slots.content" #content="slotValue">
      <slot name="content" v-bind="slotValue" />
    </template>
    <template v-if="slots.extra" #extra="slotValue">
      <slot name="extra" v-if="slotValue" />
    </template>
    <template v-if="slots.breadcrumb" #breadcrumb="slotValue">
      <slot name="breadcrumb" v-bind="slotValue" />
    </template>
    <template v-if="slots.default" #default="slotValue">
      <slot name="default" v-bind="slotValue" />
    </template>
  </el-page-header>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { pageHeaderEmits as elPageHeaderEmits } from "element-plus";
import { pageHeaderEmits, pageHeaderProps } from "./page-header";

defineOptions({
  name: "HtPageHeader"
});

const slots = useSlots();
const props = defineProps(pageHeaderProps);
const emit = defineEmits(pageHeaderEmits);
// 重发el的事件
const elEvents = getEvent(elPageHeaderEmits, emit);
</script>
