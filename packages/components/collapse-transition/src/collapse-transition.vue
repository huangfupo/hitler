<template>
  <el-collapse-transition>
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-collapse-transition>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";

defineOptions({
  name: "HtCollapseTransition"
});

const slots = useSlots();
</script>
