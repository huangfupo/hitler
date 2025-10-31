<template>
  <el-radio-group v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default>
      <slot />
    </template>
  </el-radio-group>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { radioGroupEmits as elRadioGroupEmits } from "element-plus";
import { radioGroupEmits, radioGroupProps } from "./radio-group";

defineOptions({
  name: "HtRadioGroup"
});
const slots = useSlots();
const props = defineProps(radioGroupProps);
const emit = defineEmits(radioGroupEmits);
// 重发el的事件
const elEvents = getEvent(elRadioGroupEmits, emit);
</script>
