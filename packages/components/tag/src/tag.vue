<template>
  <el-tag ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-tag>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { tagEmits as elTagEmits } from "element-plus";
import { tagEmits, tagProps } from "./tag";

defineOptions({
  name: "HtTag"
});

const slots = useSlots();
const props = defineProps(tagProps);
const emit = defineEmits(tagEmits);
// 重发el的事件
const elEvents = getEvent(elTagEmits, emit);
</script>
