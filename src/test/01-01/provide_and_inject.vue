<template>
  <div>
    <h1>演示 provide 和 inject 的效果</h1>

    <button @click="handleClick">点击我</button>
    <p>{{message.msg}}</p>
    <father></father>
    <!-- 1. 以第一种形式传参时 (searchModel)
    1.1 当这里点击修改 provide 后, 所有后代子组件, 都不会实时响应这个值
    1.2 并且子组件中修改了 inject 接受的值, 其父组件, 也不会跟着跟新 -->

    <!-- 2. 以第二种方式传参数时 (message)
    2.1 无论在父组件 还是父组件中修改 provide 的值 或者 子组件 inject 的值, 这个值都会同步更新 -->
  </div>
</template>

<script>
import father from './fatherCom'
export default {
  name: 'provideandinject',
  components: {
    father
  },
  // provide () {
  //   return this.searchModel
  // },
  provide () {
    return {
      message: this.message
    }
  },
  data () {
    return {
      searchModel: {
        foo: '123',
        temp: 'hah'
      },
      message: {
        msg: '1234'
      }
    }
  },
  methods: {
    handleClick () {
      // this.searchModel.foo = '3000'
      // this.searchModel.temp = 'ssss'
      this.message.msg = "99999"
    }
  }
}
</script>

<style>
</style>