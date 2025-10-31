<template>
  <el-switch ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots['active-action']" #active-action="slotValue">
      <slot name="active-action" v-bind="slotValue" />
    </template>
    <template v-if="slots['inactive-action']" #inactive-action="slotValue">
      <slot name="inactive-action" v-bind="slotValue" />
    </template>
  </el-switch>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { switchEmits as elSwitchEmits } from "element-plus";
import { switchEmits, switchProps } from "./switch";
import type { SwitchInstance } from "element-plus";

defineOptions({
  name: "HtSwitch"
});

const slots = useSlots();
const props = defineProps(switchProps);
const emit = defineEmits(switchEmits);
// 重发el的事件
const elEvents = getEvent(elSwitchEmits, emit);

const elRef = ref<SwitchInstance>();
const exposeEvents = ["focus"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
