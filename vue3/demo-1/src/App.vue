<template>
  <test01 :data="{key: 'xiaoming'}"></test01>
  <test02></test02>
  <test03></test03>
  <test04></test04>
  <test05></test05>
  <!-- teleport 组件, 通常用于 dom 需要独立于 页面 dom的时候, (即全局弹框) -->
  <teleport to="#app">
    <test06></test06>
  </teleport>
  <!-- suspense 组件, 用于异步请求组件, 并且该组件需要 返回一个 promise 对象 -->
  <suspense>
    <template #default>
    <test07></test07>
    </template>
    <template #fallback>
      <div>Loading........</div>
    </template>
  </suspense>
</template>

<script lang="ts">
import test01 from './components/test01.vue'
import test02 from './components/test02.vue'
import test03 from './components/test03.vue'
import test04 from './components/test04.vue'
import test05 from './components/test05.vue'
import test06 from './components/test06.vue'
import test07 from './components/test07.vue'

export default{
  name: 'App',
  components: {
    test01,
    test02,
    test03,
    test04,
    test05,
    test06,
    test07
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
