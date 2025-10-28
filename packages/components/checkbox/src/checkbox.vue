<template>
  <el-checkbox ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-checkbox>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { checkboxEmits as elCheckboxEmits } from "element-plus";
import { checkboxEmits, checkboxProps } from "./checkbox";
import type { CheckboxInstance } from "element-plus";

defineOptions({
  name: "HtCheckbox"
});

const slots = useSlots();
const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);
// 重发el的事件
const elEvents = getEvent(elCheckboxEmits, emit);

const elRef = ref<CheckboxInstance>();
defineExpose({
  elRef
});
</script>
