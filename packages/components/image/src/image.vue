<template>
  <el-image ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.placeholder" #placeholder="slotValue">
      <slot name="placeholder" v-bind="slotValue" />
    </template>
    <template v-if="slots.error" #error="slotValue">
      <slot name="error" v-bind="slotValue" />
    </template>
    <template v-if="slots.viewer" #viewer="slotValue">
      <slot name="viewer" v-bind="slotValue" />
    </template>
  </el-image>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { imageEmits as elImageEmits } from "element-plus";
import { imageEmits, imageProps } from "./image";
import type { ImageInstance } from "element-plus";

defineOptions({
  name: "HtImage"
});

const slots = useSlots();
const props = defineProps(imageProps);
const emit = defineEmits(imageEmits);
// 重发el的事件
const elEvents = getEvent(elImageEmits, emit);

const elRef = ref<ImageInstance>();
defineExpose({
  elRef
});
</script>
