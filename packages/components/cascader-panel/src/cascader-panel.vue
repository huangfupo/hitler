<template>
  <el-cascader-panel ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.empty" #empty="slotValue">
      <slot name="empty" v-bind="slotValue" />
    </template>
  </el-cascader-panel>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { cascaderPanelEmits as elCascaderPanelEmits } from "element-plus";
import { cascaderPanelEmits, cascaderPanelProps } from "./cascader-panel";
import type { CascaderPanelInstance } from "element-plus";

defineOptions({
  name: "HtCascaderPanel"
});

const slots = useSlots();
const props = defineProps(cascaderPanelProps);
const emit = defineEmits(cascaderPanelEmits);
// 重发el的事件
const elEvents = getEvent(elCascaderPanelEmits, emit);

const elRef = ref<CascaderPanelInstance>();
const exposeEvents = ["getCheckedNodes", "clearCheckedNodes"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
