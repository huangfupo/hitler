<template>
  <el-mention ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.label" #label="slotValue">
      <slot name="label" v-bind="slotValue" />
    </template>
    <template v-if="slots.loading" #loading="slotValue">
      <slot name="loading" v-bind="slotValue" />
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
    <template v-if="slots.suffix" #suffix="slotValue">
      <slot name="suffix" v-bind="slotValue" />
    </template>
    <template v-if="slots.prepend" #prepend="slotValue">
      <slot name="prepend" v-bind="slotValue" />
    </template>
    <template v-if="slots.append" #append="slotValue">
      <slot name="append" v-bind="slotValue" />
    </template>
  </el-mention>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { mentionEmits as elMentionEmits } from "element-plus";
import { mentionEmits, mentionProps } from "./mention";
import type { MentionInstance } from "element-plus";

defineOptions({
  name: "HtMention"
});

const slots = useSlots();
const props = defineProps(mentionProps);
const emit = defineEmits(mentionEmits);
// 重发el的事件
const elEvents = getEvent(elMentionEmits, emit);

const elRef = ref<MentionInstance>();
const exposeNames = ["input", "tooltip", "dropdownVisible"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
