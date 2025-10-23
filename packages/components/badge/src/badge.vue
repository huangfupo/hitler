<template>
  <el-badge ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-badge>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { badgeProps } from "./badge";
import type { BadgeInstance } from "element-plus";

defineOptions({
  name: "HtBadge"
});

const slots = useSlots();
const props = defineProps(badgeProps);

const elRef = ref<BadgeInstance>();
defineExpose({
  elRef
});
</script>
