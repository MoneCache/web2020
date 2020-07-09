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
  </div>
</template>

<script>
import checkbox from './checkbox'
export default {
  name: "vmodelandasync",
  components: {
    checkbox
  },
  data () {
    return {
      inputVal: "333",
      selectItem: ""
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