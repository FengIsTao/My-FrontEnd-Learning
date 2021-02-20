// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from 'axios'

import Moment from 'moment'

Vue.config.productionTip = false;

//引入自己书写的全局css样式
import '../static/css/global.css'

//引入Mint-UI
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

//配置公共的URL
Axios.defaults.baseURL='http://www.sinya.online/api/'

//配置axios
Vue.prototype.$axios=Axios

//注册全局的导航栏组件
import NavBar from '@/components/common/NavBar.vue'
Vue.component(NavBar.name,NavBar)

//定义Moment过滤器
Vue.filter('converTime',function(date,formatStr){
  return Moment(date).format(formatStr)
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
