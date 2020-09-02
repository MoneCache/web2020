let Vue;

function install (_Vue) {
  Vue = _Vue

  // 这样store执行的时候, 就有了 Vue, 不用 import
  // 这也是为啥 Vue.use() 必须在新建store 之前
  Vue.minxin({
    beforeCreate() {
      // 这样才能获得到传递进来的 store
      // 只有root元素才有store, 所以判断一下
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}


// 实现 store
class Store {

  constructor(options = {}) {
    this.state = new Vue({
      data: options.state
    })
    this.mutations = options.mutations || {}
    this.commit = this.commit.bind(this)
    this.actions = options.actions
    options.getters && this.handleGetters(options.getters)
  }


  commit(type, arg) {
    this.mutations[type](this.state, arg)
  }

  // 实现 actions
  dispatch(type, arg) {
    const store = this // 把store作为上下文传入action 备用
    return this.actions[type](store, arg)
  }

  handleGetters(getters) {
    this.getters = {} // 定义this.getters
    // 遍历getters选项, 为this.getters 定义 property
    // 属性名就是选项中的key, 只能定义get 函数保证其只读性
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    })
  }
}


export default {
  Store,
  install
}
