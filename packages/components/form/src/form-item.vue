<template>
  <el-form-item ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.label" #label="slotValue">
      <slot name="label" v-bind="slotValue" />
    </template>
    <template v-if="slots.error" #error="slotValue">
      <slot name="error" v-bind="slotValue" />
    </template>
  </el-form-item>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getExports } from "@hitler/utils";
import { formItemProps } from "./form-item";
import type { FormItemInstance } from "element-plus";

defineOptions({
  name: "HtFormItem"
});

const slots = useSlots();
const props = defineProps(formItemProps);

const elRef = ref<FormItemInstance>();
const exposeNames = ["size", "validateMessage", "validateState", "validate", "resetField", "clearValidate"] as const;

const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  ...exposeFns
});
</script>
