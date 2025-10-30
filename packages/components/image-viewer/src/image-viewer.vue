<template>
  <el-image-viewer ref="elRef" v-bind="props" v-on="elEvents" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { imageViewerEmits as elImageViewerEmits } from "element-plus";
import { imageViewerEmits, imageViewerProps } from "./image-viewer";
import type { ImageViewerInstance } from "element-plus";

defineOptions({
  name: "HtImageViewer"
});

const props = defineProps(imageViewerProps);
const emit = defineEmits(imageViewerEmits);
// 重发el的事件
const elEvents = getEvent(elImageViewerEmits, emit);

const elRef = ref<ImageViewerInstance>();
const exposeNames = ["setActiveItem"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
