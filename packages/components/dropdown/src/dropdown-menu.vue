<template>
  <el-dropdown-menu v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-dropdown-menu>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { dropdownMenuProps } from "./dropdown-menu";

defineOptions({
  name: "HtDropdownMenu"
});

const slots = useSlots();
const props = defineProps(dropdownMenuProps);
</script>
