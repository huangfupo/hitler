<template>
  <el-menu-item-group v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.title" #title="slotValue">
      <slot name="title" v-bind="slotValue" />
    </template>
  </el-menu-item-group>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { menuItemGroupProps } from "./menu-item-group";

defineOptions({
  name: "HtMenuItemGroup"
});

const slots = useSlots();
const props = defineProps(menuItemGroupProps);
</script>
