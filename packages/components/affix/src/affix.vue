<template>
  <el-affix ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-affix>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { affixEmits as elAffixEmits } from "element-plus";
import { affixEmits, affixProps } from "./affix";
import type { AffixInstance } from "element-plus";

defineOptions({
  name: "HtAffix"
});

const slots = useSlots();
const props = defineProps(affixProps);
const emit = defineEmits(affixEmits);
// 重发el的事件
const elEvents = getEvent(elAffixEmits, emit);

const elRef = ref<AffixInstance>();
defineExpose({
  elRef
});
</script>
