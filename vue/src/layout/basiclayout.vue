<template>
  <div class="app">
    <el-container>
      <el-header>
        <menu-head></menu-head>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import menuHead from '@/components/menu/index'
export default {
  name: "commonlayout",
  components: {
    menuHead
  }
}
</script>

<style>
.app {
  width: 0 auto;
  height: 100%;
}
</style>