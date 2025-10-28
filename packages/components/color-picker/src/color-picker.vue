<template>
  <el-color-picker ref="elRef" v-bind="props" v-on="elEvents" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { colorPickerEmits as elColorPickerEmits } from "element-plus";
import { colorPickerEmits, colorPickerProps } from "./color-picker";

defineOptions({
  name: "HtColorPicker"
});

const props = defineProps(colorPickerProps);
const emit = defineEmits(colorPickerEmits);
// 重发el的事件
const elEvents = getEvent(elColorPickerEmits, emit);

const elRef = ref();
const exposeEvents = ["color", "show", "hide", "focus", "blur"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
