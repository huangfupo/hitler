<template>
  <el-radio v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-radio>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { radioEmits as elRadioEmits } from "element-plus";
import { radioEmits, radioProps } from "./radio";

defineOptions({
  name: "HtRadio"
});
const slots = useSlots();
const props = defineProps(radioProps);
const emit = defineEmits(radioEmits);
// 重发el的事件
const elEvents = getEvent(elRadioEmits, emit);
</script>
