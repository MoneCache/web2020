<template>
  <h1>{{result}}</h1>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'test07',
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({ result: "请求成功"})
      }, 2000);
    })
  }
})
</script>

<style>

</style>