import Vue from 'vue'

export default function create (Component, props) {
  const vm = new Vue({
    render(h) {
      return h(Component, {props})
    }
  }).$mount()

  document.body.appendChild(vm.$el)

  //获取组件实例
  const comp = vm.$children[0]

  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}