import Vue from "vue";
import App from "./App.vue";
// import create from './utils/create';
import create from '@/test/01-01/notice/create';
import router from '@/router/router'

Vue.config.productionTip = false;
Vue.prototype.$create = create;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
