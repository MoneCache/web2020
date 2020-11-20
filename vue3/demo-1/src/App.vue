<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <button v-for="(item, idx) in girls" :key="idx" @click="handleSelect(idx)">{{item}}</button>
  </div>
  <div>你当前选择了{{select}}来保护你</div>
</template>

<script lang="ts">
import { reactive,toRefs  } from 'vue';
// 增加类型注解
interface propsData  {
  girls: string [];
  select: string;
  handleSelect: (index: number) => void
}
export default ({
  name: 'App',
  setup() {
    const data:propsData = reactive({
      girls: ['张三', '李四', '王五'],
      select: "",
      handleSelect: (index: number) => {
        data.select = data.girls[index]
      }
    })
    const refData = toRefs(data)
    
    return {
      ...refData
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
