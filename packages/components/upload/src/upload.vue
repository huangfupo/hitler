<template>
  <el-upload ref="elRef" v-bind="props" @update:file-list="emit('update:fileList', $event)">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.trigger" #trigger="slotValue">
      <slot name="trigger" v-bind="slotValue" />
    </template>
    <template v-if="slots.tip" #tip="slotValue">
      <slot name="tip" v-bind="slotValue" />
    </template>
    <template v-if="slots.file" #file="slotValue">
      <slot name="file" v-bind="slotValue" />
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getExports } from "@hitler/utils";
import { uploadEmits, uploadProps } from "./upload";
import type { UploadInstance } from "element-plus";

defineOptions({
  name: "HtUpload"
});

const slots = useSlots();
const props = defineProps(uploadProps);
const emit = defineEmits(uploadEmits);

const elRef = ref<UploadInstance>();
const exposeEvents = ["abort", "submit", "clearFiles", "handleStart", "handleRemove"] as const;
const { exposeFns } = getExports(elRef, exposeEvents);

defineExpose({
  ...exposeFns
});
</script>
