<template>
  <el-anchor-link ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.subLink" #sub-link="slotValue">
      <slot name="sub-link" v-bind="slotValue" />
    </template>
  </el-anchor-link>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { anchorLinkProps } from "./anchor-link";

defineOptions({
  name: "HtAnchorLink"
});

const slots = useSlots();
const props = defineProps(anchorLinkProps);

const elRef = ref<HTMLElement | null>(null);

defineExpose({
  elRef
});
</script>
