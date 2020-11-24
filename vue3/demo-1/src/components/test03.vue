<template>
  <h1>组件的生命周期</h1>
  <div>
    <button v-for="(item, idx) in girls" :key="idx" @click="handleSelect(idx)">{{item}}</button>
  </div>
  <div>你当前选择了{{select}}来保护你</div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, 
// onRenderTracked,
 onRenderTriggered 
 } from 'vue'

interface propsData {
  girls: string [];
  select: string;
  handleSelect: (index: number) => void
}
export default {
  name: 'test03',
  setup() {
    const data: propsData = reactive({
      girls: ['西施', '窦娥', '妲己'],
      select: '',
      handleSelect: (index: number) => {
        data.select = data.girls[index]
      }
    });

    console.log('1-开始创建组件 ------ setup() ');
    onBeforeMount(() => {
      console.log('2-组件挂载到节点之前执行 ---- onBeforeMount()')
    });
    onMounted(() => {
      console.log('3-组件挂载到页面之后执行 ---- onMounted()')
    });
    onBeforeUpdate(() => {
      console.log('4-组件更新之前执行 ---- onBeforeUpdate()')
    })
    onUpdated(() => {
      console.log('5-组件更新之后执行 ---- onUpdated()')
    })
    // 监听所有 数据变动
    // onRenderTracked((event) => {
    //   console.log(event)
    // })
    // 只监听 当前变动的数据
    onRenderTriggered((event) => {
      console.log(event)
    })
    const refData = toRefs(data)

    return {
      ...refData
    }
  },
  beforeCreate() {
    console.log('1.1 组件创建之前执行 --- beforeCreate()')
  },
  created () {
    console.log('1.2 组件开始创建 --- created()')
  },
  beforeMount() {
    console.log('2.1 组件挂在到页面之前 --- beforeMount()')
  },
  mounted() {
    console.log('3.1 组件挂在到页面之后 --- mounted()')
  },
  beforeUpdate() {
    console.log('4.1 组件更新到页面之前 --- beforeUpdate()')
  },
  updated() {
    console.log('5.1 组件更新到页面之后 --- updated()')
  }
}
</script>

<style>

</style>