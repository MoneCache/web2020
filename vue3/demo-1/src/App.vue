<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <button v-for="(item, idx) in girls" :key="idx" @click="handleSelect(idx)">{{item}}</button>
  </div>
  <div>你当前选择了{{select}}来保护你</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const girls = ref(['张三', '李四', '王五'])
    const select = ref('')
    const handleSelect = (index: number) => {
      select.value = girls.value[index]
    }

    return {
      girls,
      select,
      handleSelect
    }
  }
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
