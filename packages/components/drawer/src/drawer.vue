<template>
  <el-drawer ref="elRef" v-bind="props" v-on="elEvents">
    <template v-if="slots.default" #default="slotValue">
      <slot v-bind="slotValue" />
    </template>
    <template v-if="slots.header" #header="slotValue">
      <slot name="header" v-bind="slotValue" />
    </template>
    <template v-if="slots.footer" #footer="slotValue">
      <slot name="footer" v-bind="slotValue" />
    </template>
  </el-drawer>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { getEvent, getExports } from "@hitler/utils";
import { ElDrawer, drawerEmits as elDrawerEmits } from "element-plus";
import { drawerEmits, drawerProps } from "./drawer";
type DrawerInstance = InstanceType<typeof ElDrawer>;

defineOptions({
  name: "HtDrawer"
});

const slots = useSlots();
const props = defineProps(drawerProps);
const emit = defineEmits(drawerEmits);
// 重发el的事件
const elEvents = getEvent(elDrawerEmits, emit);

const elRef = ref<DrawerInstance>();
const exposeNames = ["handleClose"] as const;
const { exposeFns } = getExports(elRef, exposeNames);

defineExpose({
  ...exposeFns
});
</script>
