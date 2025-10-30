<template>
  <el-dialog ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
    <template v-if="slots.footer" #footer="slotValue">
      <slot name="footer" v-bind="slotValue" />
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { dialogEmits as elDialogEmits } from "element-plus";
import { dialogEmits, dialogProps } from "./dialog";
import type { DialogInstance } from "element-plus";

defineOptions({
  name: "HtDialog"
});

const slots = useSlots();
const props = defineProps(dialogProps);
const emit = defineEmits(dialogEmits);
// 重发el的事件
const elEvents = getEvent(elDialogEmits, emit);

const elRef = ref<DialogInstance>();
defineExpose({
  elRef
});
</script>
