<template>
  <el-popover v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.reference" #reference="slotValue">
      <slot name="reference" v-bind="slotValue" />
    </template>
  </el-popover>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { popoverEmits as elPopoverEmits } from "element-plus";
import { popoverEmits, popoverProps } from "./popover";
import type { PopoverInstance } from "element-plus";

defineOptions({
  name: "HtPopover"
});

const slots = useSlots();
const props = defineProps(popoverProps);
const emit = defineEmits(popoverEmits);

const elEvents = getEvent(elPopoverEmits, emit);

const elRef = ref<PopoverInstance>();
const exposeNames = ["hide"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
