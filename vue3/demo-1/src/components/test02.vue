<template>
  <div>
    <button v-for="(item, idx) in girls" :key="idx" @click="handleSelect(idx)">{{item}}</button>
  </div>
  <div>你当前选择了{{select}}来保护你</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
// 增加类型注解
interface propsData  {
  girls: string [];
  select: string;
  handleSelect: (index: number) => void
}
export default ({
  name: 'test02',
  setup() {
    const data: propsData = reactive({
      girls: ['朱武', '李刘', '找齐'],
      select: '',
      handleSelect: (index: number) => {
        data.select = data.girls[index]
      }
    })

// 使用结构运算符后, 数据 不在变成响应式
// 解决办法 toRefs 方法
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
})
</script>

<style>

</style>