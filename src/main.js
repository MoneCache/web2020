import Vue from "vue";
import App from "./App.vue";
// 测试 创建的model
// import create from './utils/create';
import create from '@/test/01-01/notice/create';
//测试自定义 router
// import router from '@/test/01-02/selfRouter/index'
import router from '@/router/router'

Vue.config.productionTip = false;
Vue.prototype.$create = create;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
