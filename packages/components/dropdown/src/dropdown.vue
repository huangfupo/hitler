<template>
  <el-dropdown ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.dropdown" #dropdown="slotValue">
      <slot name="dropdown" v-bind="slotValue" />
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { dropdownEmits, dropdownProps, elDropdownEmits } from "./dropdown";
import type { DropdownInstance } from "element-plus";

defineOptions({
  name: "HtDropdown"
});
const slots = useSlots();
const props = defineProps(dropdownProps);
const emit = defineEmits(dropdownEmits);
// 重发el的事件
const elEvents = getEvent(elDropdownEmits, emit);

const elRef = ref<DropdownInstance>();
const exposeNames = ["handleOpen", "handleClose"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
