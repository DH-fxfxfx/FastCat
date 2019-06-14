import Vue from 'vue'
import Vuex from 'vuex'
import film from './film/index.js'
import city from './city/index'
import cinema from './cinema'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
  },
  mutations: 
  },
  actions: {
  },
  modules: {
    city,
     film,
     cinema
  }
})
