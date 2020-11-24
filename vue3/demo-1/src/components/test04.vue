<template>
  <div>
    <div>{{ nowTime }}</div>
<div><button @click="getNowTime">显示时间</button></div>

  </div>
</template>

<script lang="ts">
import { nowTime, getNowTime } from '../hooks/useNowTime'
export default {
  name: 'test04',
  setup() {
    return {
      nowTime,
      getNowTime
    }
  }
}
</script>

<style>

</style>