<template>
  <div>
    <h2>当前页面共有{{num}} 炸弹</h2>
    <hr />

    <div>
      <button @click="reduce">拆除一个</button>
      <button @click="add">增加一个</button>
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
  mapGetters
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
    reduce () {
      return this.$store.getters.reduce
    },
    add () {
      return this.$store.getters.add
    }
  }
}
</script>

<style>
</style>