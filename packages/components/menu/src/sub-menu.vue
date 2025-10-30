<template>
  <el-sub-menu v-bind="props">
    <template v-if="slots.default" #default>
      <slot />
    </template>
    <template v-if="slots.title" #title>
      <slot name="title" />
    </template>
  </el-sub-menu>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { subMenuProps } from "./sub-menu";

defineOptions({
  name: "HtSubMenu"
});

const slots = useSlots();
const props = defineProps(subMenuProps);
</script>
