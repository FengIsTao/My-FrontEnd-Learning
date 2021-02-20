// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from 'axios'

Vue.config.productionTip = false;

//引入自己书写的全局css样式
import '../static/css/global.css'


//引入Mint-UI
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

//配置公共的URL
Axios.defaults.baseURL='http://127.0.0.1:8899/api/'
//配置axios
Vue.prototype.$axios=Axios

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
