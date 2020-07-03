<template>
  <div>
    <h1>演示 provide 和 inject 的效果</h1>

    <button @click="handleClick">点击我</button>
    <p>{{message.msg}}</p>
    <father></father>
    <!-- 1. 以第一种形式传参时 ( searchModel )
    1.1 当这里点击修改 provide 后, 所有后代子组件, 都不会实时响应这个值
    1.2 并且子组件中修改了 inject 接受的值, 其父组件, 也不会跟着更新 -->

    <!-- 2. 以第二种方式传参数时 ( message )
    2.1 无论在父组件 还是父组件中修改 provide 的值 或者 子组件 inject 的值, 这个值都会同步更新 -->

    <!-- 3. 当传递一个对象 到子组件中时, 提供这个 对象的( provide ), 若直接改变了对象, 而不是对象中的某个值, 这样是无法传递到子组件中的
    3.1 例如: (provide) 提供者组件 修改 this.message = { msg: 666 }, 此时, message 这个对象, 不会响应 inject;
    3.2 若想要响应, (provide) 提供者, 只能修改 message 对象中的某个属性, 才行. 如: this.message.msg === xxx -->
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
        msg: ''
      }
    }
  },
  methods: {
    handleClick () {
      // this.searchModel.foo = '3000'
      // this.searchModel.temp = 'ssss'
      this.message = {
        msg: '6666'
      }
    }
  }
}
</script>

<style>
</style>