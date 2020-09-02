import Vue from "vue";
import App from "./App.vue";

import store from './store/index'
//测试自定义 router
// import router from '@/test/01-02/selfRouter/index'
import router from '@/router/router'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
