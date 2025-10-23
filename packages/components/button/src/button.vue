<template>
  <el-button ref="elRef" v-bind="props" :type="disabled ? 'info' : type" v-on="elEvents">
    <template v-if="slots.loading" #loading="slotValue">
      <slot name="loading" v-bind="slotValue" />
    </template>
    <template v-if="slots.default" #default>
      <slot />
    </template>
    <template v-if="slots.icon" #icon="slotValue">
      <slot name="icon" v-bind="slotValue" />
    </template>
  </el-button>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { buttonEmits as elButtonEmits } from "element-plus";
import { buttonEmits, buttonProps } from "./button";
import type { ButtonInstance } from "element-plus";

defineOptions({
  name: "HtButton"
});

const slots = useSlots();
const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);
// 重发el的事件
const elEvents = getEvent(elButtonEmits, emit);

const elRef = ref<ButtonInstance>();
defineExpose({
  elRef
});
</script>
