<template>
  <el-anchor ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-anchor>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { anchorEmits as elAnchorEmits } from "element-plus";
import { anchorEmits, anchorProps } from "./anchor";
import type { AnchorInstance } from "element-plus";

defineOptions({
  name: "HtAnchor"
});
const slots = useSlots();
const props = defineProps(anchorProps);
const emit = defineEmits(anchorEmits);
// 重发el的事件
const elEvents = getEvent(elAnchorEmits, emit);

const elRef = ref<AnchorInstance>();

defineExpose({
  elRef
});
</script>
