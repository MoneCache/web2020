
let Vue;
class KVueRouter {
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

  init() {
    this.bindEvents()
    this.createRouteMap()
    this.initComponent()
  }

  // hash值变更检测
  bindEvents() {
    window.addEventListener("load", this.onHashChange.bind(this), false)
    window.addEventListener("hashchange", this.onHashChange.bind(this), false)
  }

  // 路径变更处理
  onHashChange() {
    this.app.current = window.location.hash.slice(1) || "/"
  }

  // 创建路由映射表
  createRouteMap() {
    this.$options.routes.forEach(item => {
      this.routeMap[item.path] = item
    })
  }

  // router-link 和 router-view 声明
  initComponent() {
    Vue.component("router-link", {
      props:{
        to: String
      },
      render(h) {
        return h('a', { attrs: { href: '#' + this.to } }, [this.$slots.default])
      }
    })

    Vue.component("router-view", {
      render:(h) => {
        let component = this.routeMap[this.app.current].component
        return h(component)
      }
    })
  }
}

 //插件注册逻辑
 KVueRouter.install = function (_Vue) {
   Vue = _Vue
   Vue.mixin({
    beforeCreate() {
      //router 选项存在确定是根组件
      if (this.$options.router) {
        //执行一次, 将router实例放到vue实例原型, 以后所有组件实例就均有$router
        Vue.prototype.$router = this.$options.router
        this.$options.router.init()
      }
    }
   })
 }

 export default KVueRouter