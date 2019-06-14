import Vue from 'vue'
import Vuex from 'vuex'
import cinema from './cinema'
import city from './city/index'
import film from './film'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    city,
      cinema,
      film

  }
})
