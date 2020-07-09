<template>
  <div>
    <h1>vmodel演示</h1>
    <div>
      <input type="text"
             v-model="inputVal">
    </div>

    <div style="margin-top: 20px">
      当前input 中的值为 {{inputVal}}
    </div>

    <h1>vmodel语法糖演示</h1>
    <div>
      <input type="text"
             :value="inputVal"
             @input="handleInput">
    </div>
    <hr />
    <checkbox v-model="selectItem"></checkbox>
    <p>当前选中{{selectItem}}</p>

    <hr />
    <h1>.sync演示</h1>
    <sync :foo.sync="inputVal1"></sync>
    <p>当前父组件中input的值为 {{inputVal1}}</p>

    <!-- 1.总结 :
    1.1. v-model 是 :value 和 @input 事件的语法糖
    1.2. .sync 是 :foo.sync 和 @update:foo 事件的语法糖 (foo, 可以更改为任何字符串属性)
    1.3. v-model 通常用在表单组件身上, 而, .sync修饰符,通常用在 自定义组件身上
    1.4 v-model 控制能力在子组件是哪个, .sync 控制能力在父组件上 -->
  </div>
</template>

<script>
import checkbox from './checkbox'
import sync from './sync'
export default {
  name: "vmodelandasync",
  components: {
    checkbox,
    sync
  },
  data () {
    return {
      inputVal: "333",
      inputVal1: "22",
      selectVal: [],
      selectItem: [
        {
          label: "第一",
          value: 'first',
          checked: true
        },
        {
          label: "第二",
          value: 'second',
          checked: false
        },
        {
          label: "第三",
          value: 'three',
          checked: false
        }
      ]
    }
  },
  methods: {
    handleInput (e) {
      this.inputVal = e.target.value
    }
  }
}
</script>

<style>
</style>