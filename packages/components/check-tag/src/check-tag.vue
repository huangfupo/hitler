<template>
  <el-check-tag ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-check-tag>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { checkTagEmits as elCheckTagEmits } from "element-plus";
import { checkTagEmits, checkTagProps } from "./check-tag";
import type { CheckTagInstance } from "element-plus";

defineOptions({
  name: "HtCheckTag"
});

const slots = useSlots();
const props = defineProps(checkTagProps);
const emit = defineEmits(checkTagEmits);
// 重发el的事件
const elEvents = getEvent(elCheckTagEmits, emit);

const elRef = ref<CheckTagInstance>();
defineExpose({
  elRef
});
</script>
