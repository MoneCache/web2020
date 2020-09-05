<template>
  <div class="full-width">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item v-for="(item,idx) in menus"
                    :key="'menu'+idx"
                    :route="item.path"
                    :index="item.id">{{item.label}}</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3"
                    disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me"
           target="_blank">订单管理</a></el-menu-item> -->
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'menuindex',
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (keyPath && this.menus[key - 1]) {
        this.$router.push({
          path: this.menus[key - 1].path
        })
      }
    }
  }
}
</script>

<style>
.full-width: {
  width: 100%;
}
</style>