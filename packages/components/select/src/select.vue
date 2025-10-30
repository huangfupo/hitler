<template>
  <el-select ref="elRef" v-bind="props" v-on="elEvents">
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
  </el-select>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { selectEmits, selectProps } from "./select";
import { selectEmits as elSelectEmits } from "element-plus";

defineOptions({
  name: "HtSelect"
});

const slots = useSlots();
const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);
// 重发el的事件
const elEvents = getEvent(elSelectEmits, emit);

const elRef = ref();
const exposeNames = ["focus", "blur", "selectEmits"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
