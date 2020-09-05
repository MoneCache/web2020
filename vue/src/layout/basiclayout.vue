<template>
  <div class="app">
    <pageHeader></pageHeader>
    <el-container>
      <h3 class="text-left"
          style="font-size: 30px">es6相关</h3>
      <el-header>
        <menu-head :menus="menuConfig.menus"></menu-head>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import menuConfig from '@/assets/statics/menu/menu'
import pageHeader from '@/components/menu/pageHeader'
import menuHead from '@/components/menu/index'
export default {
  name: "basiclayout",
  components: {
    pageHeader,
    menuHead
  },
  data () {
    return {
      menuConfig
    }
  }
}
</script>

<style>
.app {
  width: 0 auto;
  height: 100%;
}
</style>