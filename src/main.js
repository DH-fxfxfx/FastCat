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

import './styles/common/reset.less'
import { Swipe, SwipeItem, Tab, Tabs, NavBar, IndexBar, IndexAnchor, Cell } from 'vant'
Vue
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(NavBar)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Cell)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
