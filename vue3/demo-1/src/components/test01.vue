<template>
  <div>
    <button v-for="(item, idx) in girls" :key="idx" @click="handleSelect(idx)">{{item}}</button>
  </div>
  <div>你当前选择了{{select}}来保护你</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'test01',
  setup() {
    // 在模板中使用的变量, 必须用 ref 包装一下
    const girls = ref(['张三', '李四', '王五'])
    const select = ref('')
    const handleSelect = (index: number) => {
      select.value = girls.value[index]
    }
    // 模板中需要用到的数据, 需要导出去
    return {
      girls,
      select,
      handleSelect
    }
  }
})
</script>

<style>

</style>