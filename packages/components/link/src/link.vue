<template>
  <el-link v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.icon" #icon="slotValue">
      <slot name="icon" v-bind="slotValue" />
    </template>
  </el-link>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { linkEmits as elLinkEmits } from "element-plus";
import { linkEmits, linkProps } from "./link";

defineOptions({
  name: "HtLink"
});

const slots = useSlots();
const props = defineProps(linkProps);
const emit = defineEmits(linkEmits);
// 重发el的事件
const elEvents = getEvent(elLinkEmits, emit);
</script>
