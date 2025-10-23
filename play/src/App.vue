<template>
  <h1>Element plus 二次封装</h1>
  <ht-affix :offset="120">
    <ht-button type="primary">Offset top 120px</ht-button>
  </ht-affix>
  <ht-alert type="success" :show-icon="true">
    <template #title>成功提示的文案</template>
    <template #default>成功提示的文案描述</template>
  </ht-alert>
  <div class="common-layout">
    <ht-container>
      <ht-header>
        <ht-breadcrumb separator="/">
          <ht-breadcrumb-item :to="{ path: '/' }">homepage</ht-breadcrumb-item>
          <ht-breadcrumb-item>
            <a href="/">promotion management</a>
          </ht-breadcrumb-item>
          <ht-breadcrumb-item>promotion list</ht-breadcrumb-item>
          <ht-breadcrumb-item>promotion detail</ht-breadcrumb-item>
        </ht-breadcrumb>
      </ht-header>
      <ht-container>
        <ht-aside width="200px">Aside</ht-aside>
        <ht-container>
          <ht-main style="height: 300px">
            <el-avatar
              shape="square"
              :size="100"
              fit="fill"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            />
            <div style="margin: 0 12px">
              <ht-button-group class="ml-4">
                <ht-button type="primary" :icon="Edit" />
                <ht-button type="primary" :icon="Share" />
                <ht-button type="primary" :icon="Delete" />
              </ht-button-group>
            </div>
            <ht-badge :value="12" class="item">
              <ht-button>comments</ht-button>
            </ht-badge>
          </ht-main>
          <ht-footer>Footer</ht-footer>
        </ht-container>
      </ht-container>
    </ht-container>
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Share } from "@element-plus/icons-vue";
</script>
<style scoped>
.common-layout .el-header,
.common-layout .el-footer {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  text-align: center;
}
.common-layout .el-aside {
  background-color: var(--el-color-primary-light-8);
  color: var(--el-text-color-primary);
  text-align: center;
}

.common-layout .el-main {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-primary);
  text-align: center;
  height: 150px;
}

.common-layout .el-header,
.common-layout .el-footer,
.common-layout .el-main,
.common-layout .el-aside {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
