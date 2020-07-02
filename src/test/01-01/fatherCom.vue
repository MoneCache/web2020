<template>
  <div>
    <h1>我是father</h1>
    <p>{{message}}</p>
    <button @click="handleClick">click</button>
    <son></son>
  </div>
</template>

<script>
import son from './sonCom'
export default {
  name: 'father',
  components: {
    son
  },
  inject: {
    message: {
      default: () => { }
    }
  },
  methods: {
    handleClick () {
      this.message.msg = 222
    }
  }
}
</script>

<style>
</style>