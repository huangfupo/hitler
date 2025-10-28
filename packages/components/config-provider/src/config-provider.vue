<template>
  <el-config-provider ref="elRef" v-bind="props">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-config-provider>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { configProviderProps } from "./config-provider";
import type { ConfigProviderInstance } from "element-plus";

defineOptions({
  name: "HtConfigProvider"
});

const slots = useSlots();
const props = defineProps(configProviderProps);
const elRef = ref<ConfigProviderInstance>();

defineExpose({
  elRef
});
</script>
