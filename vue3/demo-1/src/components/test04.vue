<template>
  <div>
    <div>{{ nowTime }}</div>
<div><button @click="getNowTime">显示时间</button></div>

  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'test04',
  setup() {
    const nowTime = ref("00:00:00")
    const getNowTime = () => {
      const now = new Date();
      const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
      const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
      const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
      nowTime.value = `${hours}:${minutes}:${second}`
      setInterval(getNowTime, 1000);
    }

    return {
      nowTime,
      getNowTime
    }
  }
}
</script>

<style>

</style>