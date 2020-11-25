<template>
  <div>
    <button v-for="(item, idx) in girls" :key="idx" @click="handleSelect(idx)">{{item}}</button>
  </div>
  <div>你当前选择了{{select}}来保护你</div>

  <div><button @click="overAction">点餐完毕</button></div>
 <div>{{ overText }}</div>
 <div>{{ data.key }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  name: 'test01',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    console.log(props)
    console.log('props', {...props})
    // 在模板中使用的变量, 必须用 ref 包装一下
    const girls = ref(['张三', '李四', '王五'])
    const select = ref('')
    const overText = ref('红浪漫')
    const overAction = () => {
      overText.value = overText.value + '点餐完成'
      // document.title = overText.value
    }
    const handleSelect = (index: number) => {
      select.value = girls.value[index]
    }
    // 单个 watch , 监听单个数据
    // watch(overText, (newVal, old) => {
    //   console.log(old)
    //   document.title = newVal
    // })
    // 监听多个数据
    watch([overText, select], (newVal, old) => {
      console.log(old)
      document.title = newVal[1]
    })
    // 模板中需要用到的数据, 需要导出去
    return {
      girls,
      select,
      overText,
      handleSelect,
      overAction
    }
  }
})
</script>

<style>

</style>