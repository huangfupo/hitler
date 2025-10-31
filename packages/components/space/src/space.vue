<template>
  <el-space v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-space>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { spaceProps } from "./space";

defineOptions({
  name: "HtSpace"
});

const slots = useSlots();
const props = defineProps(spaceProps);
</script>
