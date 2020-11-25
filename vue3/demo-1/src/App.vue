<template>
  <test01 :data="{key: 'xiaoming'}"></test01>
  <test02></test02>
  <test03></test03>
  <test04></test04>
  <test05></test05>
</template>

<script lang="ts">
import test01 from './components/test01.vue'
import test02 from './components/test02.vue'
import test03 from './components/test03.vue'
import test04 from './components/test04.vue'
import test05 from './components/test05.vue'

export default{
  name: 'App',
  components: {
    test01,
    test02,
    test03,
    test04,
    test05
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
