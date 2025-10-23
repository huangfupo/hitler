<template>
  <el-avatar ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
  </el-avatar>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent } from "@hitler/utils";
import { avatarEmits as elAvatarEmits } from "element-plus";
import { avatarEmits, avatarProps } from "./avatar";
import type { AvatarInstance } from "element-plus";

defineOptions({
  name: "HtAvatar"
});

const slots = useSlots();
const props = defineProps(avatarProps);
const emit = defineEmits(avatarEmits);
// 重发el的事件
const elEvents = getEvent(elAvatarEmits, emit);

const elRef = ref<AvatarInstance>();
defineExpose({
  elRef
});
</script>
