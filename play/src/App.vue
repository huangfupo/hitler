<template>
  <h1>Element plus 二次封装</h1>
  <ht-alert type="success" :show-icon="true">
    <template #title>成功提示的文案</template>
    <template #default>成功提示的文案描述</template>
  </ht-alert>
  <p></p>
  <div class="common-layout">
    <ht-container>
      <ht-header>Header</ht-header>
      <ht-container>
        <ht-aside width="200px">Aside</ht-aside>
        <ht-container>
          <ht-main style="height: 300px">Main</ht-main>
          <ht-footer>Footer</ht-footer>
        </ht-container>
      </ht-container>
    </ht-container>
  </div>
</template>
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
