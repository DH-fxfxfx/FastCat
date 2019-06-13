import Vue from 'vue'
import Vuex from 'vuex'
import film from './film/index.js'
import cinema from './cinema/index.js'




Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    cinema,


  }
})
