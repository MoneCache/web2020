<template>
  <div>
      <h1>vmodel演示</h1>
      <div>
          <input type="text" v-model="inputVal">
      </div>

      <div style="margin-top: 20px">
          当前input 中的值为 {{inputVal}}
      </div>

      <h1>vmodel语法糖演示</h1>
      <div>
          <input type="text" :value="inputVal" @input="handleInput">
      </div>

      
  </div>
</template>

<script>
export default {
    name: "vmodelandasync",
    data () {
        return {
            inputVal: "333"
        }
    },
    methods: {
        handleInput (e) {
            console.log(e)
            this.inputVal = e.target.value
        }
    }
}
</script>

<style>

</style>