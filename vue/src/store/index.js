import Vue from "vue"
import Vuex from "vuex"



// 1.这里是模块引入
import basic from './basic'
// 1.1 如果这里 不需要模块导入的话,就不用写 modules


Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    basic
  }
})

export default store



