<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <test01></test01>
  <test02></test02>
</template>

<script lang="ts">
import { defineComponent  } from 'vue';
import test01 from './components/test01.vue'
import test02 from './components/test02.vue'

export default defineComponent({
  name: 'App',
  components: {
    test01,
    test02
  },
});
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
