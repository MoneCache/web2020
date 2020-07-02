<template>
  <div>
    <h2>我是son</h2>
    <p>{{message}}</p>
    <button @click="handleClick">我是一个按钮</button>
    <grandson></grandson>
  </div>
</template>

<script>
import grandson from './grandson'
export default {
  name: 'son',
  components: {
    grandson
  },
  inject: ["message"],
  methods: {
    handleClick () {
      this.message.msg = '888'
    }
  }
}
</script>

<style>
</style>