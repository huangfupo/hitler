<template>
  <el-popconfirm v-bind="props" v-on="elEvents">
    <template v-if="slots.reference" #reference="slotValue">
      <slot name="reference" v-bind="slotValue" />
    </template>
    <template v-if="slots.actions" #actions="slotValue">
      <slot name="actions" v-bind="slotValue" />
    </template>
  </el-popconfirm>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { popconfirmEmits as elPopconfirmEmits } from "element-plus";
import { popconfirmEmits, popconfirmProps } from "./popconfirm";
import type { PopconfirmInstance } from "element-plus";

defineOptions({
  name: "HtPopconfirm"
});

const slots = useSlots();
const props = defineProps(popconfirmProps);
const emit = defineEmits(popconfirmEmits);
// 重发el的事件
const elEvents = getEvent(elPopconfirmEmits, emit);

const elRef = ref<PopconfirmInstance>();
const exposeNames = ["popperRef", "hide"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
