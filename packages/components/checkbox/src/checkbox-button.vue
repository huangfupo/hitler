<template>
  <el-checkbox-button ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-checkbox-button>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { checkboxEmits as elCheckboxButtonEmits } from "element-plus";
import { checkboxButtonEmits, checkboxButtonProps } from "./checkbox-button";
import type { CheckboxInstance } from "element-plus";

defineOptions({
  name: "HtCheckboxButton"
});

const slots = useSlots();
const props = defineProps(checkboxButtonProps);
const emit = defineEmits(checkboxButtonEmits);
// 重发el的事件
const elEvents = getEvent(elCheckboxButtonEmits, emit);

const elRef = ref<CheckboxInstance>();
defineExpose({
  elRef
});
</script>
