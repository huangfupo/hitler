<template>
  <el-form ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-form>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { formEmits as elFormEmits } from "element-plus";
import { formEmits, formProps } from "./form";
import type { FormInstance } from "element-plus";

defineOptions({
  name: "HtForm"
});

const slots = useSlots();
const props = defineProps(formProps);
const emit = defineEmits(formEmits);
// 重发el的事件
const elEvents = getEvent(elFormEmits, emit);

const elRef = ref<FormInstance>();
const exposeNames = ["validate", "validateField", "resetFields", "clearValidate", "scrollToField", "fields", "getField"] as const;

const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  elRef,
  ...exposeFns
});
</script>
