<template>
  <div>
    <h3>我是grandson</h3>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'grandson',
  inject: ["message"]
}
</script>

<style>
</style>