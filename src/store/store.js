import Vue from 'vue'
import Vuex from 'vuex'

import city from './city/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    city

import cinema from './cinema'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cinema

  }
})
