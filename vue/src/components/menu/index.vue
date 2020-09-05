<template>
  <div class="full-width">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item v-for="(item,idx) in menus"
                    :key="'menu'+idx"
                    :index="item.id">{{item.label}}</el-menu-item>
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
</style>