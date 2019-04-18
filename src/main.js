import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/store";

// 统一默认样式
import "./assets/style/reset.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
