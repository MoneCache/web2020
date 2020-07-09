
let Vue;
class VueRouter {
  constructor(options) {
    this.$options = options
    //用于存放 component 和 path 映射关系
    this.routeMap = {}
    //current 保存当前 hash
    //vue 使其响应式
    this.app = new Vue({
      data: {
        current: "/"
      }
    })
  }
}