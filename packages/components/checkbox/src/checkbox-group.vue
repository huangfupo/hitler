<template>
  <el-checkbox-group ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-checkbox-group>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { checkboxGroupEmits as elCheckboxGroupEmits } from "element-plus";
import { checkboxGroupEmits, checkboxGroupProps } from "./checkbox-group";
import type { CheckboxGroupInstance } from "element-plus";

defineOptions({
  name: "HtCheckboxGroup"
});

const slots = useSlots();
const props = defineProps(checkboxGroupProps);
const emit = defineEmits(checkboxGroupEmits);
// 重发el的事件
const elEvents = getEvent(elCheckboxGroupEmits, emit);

const elRef = ref<CheckboxGroupInstance>();
defineExpose({
  elRef
});
</script>
