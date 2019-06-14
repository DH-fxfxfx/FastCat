import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import './styles/common/reset.less'
import './styles/base.less'
import { Swipe, SwipeItem, Tab, Tabs, NavBar, IndexBar, IndexAnchor, Cell , DropdownMenu, DropdownItem } from 'vant'
Vue
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(NavBar)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Cell)
 .use(DropdownMenu)
  .use(DropdownItem)


Vue.config.productionTip = false

// import axios from 'axios'
// axios.defaults.baseURL='http://127.0.0.1:8080'; //设置一个类似base_url的请求路径
// global.axios=axios;  //设置一个全局axios便于调用
// axios.defaults.headers.post['Content-Type'] = 'application/json';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// vm.$on('abc',() => {
//   console.log("1111")
// })
