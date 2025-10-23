<template>
  <el-autocomplete ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
    <template v-if="slots.footer" #footer="slotValue">
      <slot name="footer" v-bind="slotValue" />
    </template>
    <template v-if="slots.prefix" #prefix="slotValue">
      <slot name="prefix" v-bind="slotValue" />
    </template>
    <template v-if="slots.suffix" #suffix="slotValue">
      <slot name="suffix" v-bind="slotValue" />
    </template>
    <template v-if="slots.prepend" #prepend="slotValue">
      <slot name="prepend" v-bind="slotValue" />
    </template>
    <template v-if="slots.append" #append="slotValue">
      <slot name="append" v-bind="slotValue" />
    </template>
    <template v-if="slots.loading" #loading="slotValue">
      <slot name="loading" v-bind="slotValue" />
    </template>
  </el-autocomplete>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { autocompleteEmits as elAutocompleteEmits } from "element-plus";
import { autocompleteEmits, autocompleteProps } from "./autocomplete";

defineOptions({
  name: "HtAutocomplete"
});

const slots = useSlots();
const props = defineProps(autocompleteProps);
const emit = defineEmits(autocompleteEmits);
// 重发el的事件
const elEvents = getEvent(elAutocompleteEmits, emit);

const elRef = ref();
defineExpose({
  elRef
});
</script>
