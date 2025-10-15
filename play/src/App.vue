<template>
  <h1>Element plus 二次封装</h1>
  <ht-alert type="success" :show-icon="true">
    <template #title>成功提示的文案</template>
    <template #default>成功提示的文案描述</template>
    <template #icon>
      <el-icon><Plus /></el-icon>
    </template>
  </ht-alert>
  <p></p>
  <ht-alert title="消息提示的文案" type="info"> </ht-alert>
  <p></p>
  <ht-alert title="警告提示的文案" type="warning"> </ht-alert>
  <p></p>
  <ht-alert title="错误提示的文案" type="error"> </ht-alert>
  <p style="height: 4px"></p>
</template>

<script setup lang="ts">
import { Plus } from "@element-plus/icons-vue";
</script>

<style scoped></style>
