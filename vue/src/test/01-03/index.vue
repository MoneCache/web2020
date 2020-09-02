<template>
  <div>
    <h2>当前页面共有{{num}} 炸弹</h2>
    <hr />

    <div>
      <button @click="reduce">拆除一个</button>
      <button @click="add({count: 10})">增加一个</button>
      <button @click="asyncModifyNum">异步增加</button>
    </div>
    <hr />

    <div>
      <p>这个是 原始数组 的值 {{listData}}</p>
      <p>这个是 getters 计算得到的值 {{mylistData}}</p>
      <p>这个是 getters 计算得到的值 {{sum}}</p>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from "vuex"
export default {
  name: 'testvuex',
  computed: {
    num () {
      return this.$store.state.basic.num
    },
    ...mapState({
      listData: (state) => state.basic.listData
    }),
    ...mapGetters(["mylistData", "sum"])
  },
  mounted () {
  },
  methods: {
    // 1.2映射方式提交
    ...mapMutations([
      "reduce",
      "add"
    ]),
    // reduce () {
    //   this.$store.commit('reduce')
    // },
    // add () {
    //   //1. 普通方式提交
    //   // this.$store.commit('add', 10)

    //   //1.1 对象方式提交
    //   this.$store.commit({
    //     type: "add",
    //     count: 10
    //   })
    // }
    // 2.1 映射方式提交
    // ...mapActions(['asyncModifyNum'])
    // 2. 提交actions
    asyncModifyNum () {
      // 2.2 普通方式提交
      // this.$store.dispatch('asyncModifyNum')
      // 2.3 对象方式提交
      this.$store.dispatch({
        type: 'asyncModifyNum'
      })
    }
  }
}
</script>

<style>
</style>