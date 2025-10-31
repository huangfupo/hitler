<template>
  <el-select-v2 ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot name="default" v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
    <template v-if="slots.footer" #footer="slotValue">
      <slot name="footer" v-bind="slotValue" />
    </template>
    <template v-if="slots.prefix" #prefix="slotValue">
      <slot name="prefix" v-bind="slotValue" />
    </template>
    <template v-if="slots.empty" #empty="slotValue">
      <slot name="empty" v-bind="slotValue" />
    </template>
    <template v-if="slots.tag" #tag="slotValue">
      <slot name="tag" v-bind="slotValue" />
    </template>
    <template v-if="slots.loading" #loading="slotValue">
      <slot name="loading" v-bind="slotValue" />
    </template>
    <template v-if="slots.label" #label="slotValue">
      <slot name="label" v-bind="slotValue" />
    </template>
  </el-select-v2>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { selectV2Emits as elSelectV2Emits } from "element-plus/es/components/select-v2/src/defaults";
import { selectV2Emits, selectV2Props } from "./select-v2";
import type { SelectV2Instance } from "element-plus";

defineOptions({
  name: "HtSelectV2"
});

const slots = useSlots();
const props = defineProps(selectV2Props);
const emit = defineEmits(selectV2Emits);
// 重发el的事件
const elEvents = getEvent(elSelectV2Emits, emit);

const elRef = ref<SelectV2Instance>();
const exposeNames = ["focus", "blur", "selectedLabel"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  ...exposeFns
});
</script>
