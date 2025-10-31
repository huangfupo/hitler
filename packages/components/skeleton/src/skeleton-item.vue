<template>
  <el-skeleton-item v-bind="props" />
</template>
<script lang="ts" setup>
import { skeletonItemProps } from "./skeleton-item";

defineOptions({
  name: "HtSkeletonItem"
});

const props = defineProps(skeletonItemProps);
</script>
