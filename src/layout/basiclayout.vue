<template>
  <div class="app">
    <h1>这个是顶级 layout</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "commonlayout"
}
</script>

<style>
.app {
  width: 0 auto;
  height: 100%;
}
</style>