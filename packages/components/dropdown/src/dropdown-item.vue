<template>
  <el-dropdown-item v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-dropdown-item>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { dropdownItemProps } from "./dropdown-item";

defineOptions({
  name: "HtDropdownItem"
});

const slots = useSlots();
const props = defineProps(dropdownItemProps);
</script>
