<template>
  <div>
    <el-descriptions-item ref="elRef" v-bind="props">
      <template v-if="slots.default" #default="slotValue">
        <slot v-bind="slotValue" />
      </template>
      <template v-if="slots.label" #label="slotValue">
        <slot name="label" v-bind="slotValue" />
      </template>
    </el-descriptions-item>
  </div>
</template>
<script lang="ts" setup>
import { useSlots } from "vue";
import { descriptionItemProps } from "./descriptions-item";

defineOptions({
  name: "HtDescriptionsItem"
});

const slots = useSlots();
const props = defineProps(descriptionItemProps);
</script>
