<template>
  <el-cascader ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.empty" #empty="slotValue">
      <slot name="empty" v-bind="slotValue" />
    </template>
    <template v-if="slots.prefix" #prefix="slotValue">
      <slot name="prefix" v-bind="slotValue" />
    </template>
    <template v-if="slots.suggestionItem" #suggestion-item="slotValue">
      <slot name="suggestion-item" v-bind="slotValue" />
    </template>
    <template v-if="slots.tag" #tag="slotValue">
      <slot name="tag" v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
    <template v-if="slots.footer" #footer="slotValue">
      <slot name="footer" v-bind="slotValue" />
    </template>
  </el-cascader>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { cascaderEmits as elCascaderEmits } from "element-plus";
import { cascaderEmits, cascaderProps } from "./cascader";
import type { CascaderInstance } from "element-plus";

defineOptions({
  name: "HtCascader"
});

const slots = useSlots();
const props = defineProps(cascaderProps);
const emit = defineEmits(cascaderEmits);
// 重发el的事件
const elEvents = getEvent(elCascaderEmits, emit);

const elRef = ref<CascaderInstance>();

const exposeEvents = ["getCheckedNodes", "cascaderPanelRef", "togglePopperVisible", "contentRef"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);

defineExpose({
  ...exposeFns
});
</script>
