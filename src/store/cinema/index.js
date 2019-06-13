import http from '@/utils/http'

export default {
  namespaced : true,

  state : {
    cinemaList :[]
  },
  mutations :{
    SETCINEMALIST (state,list) {
      state.cinemaList=list
    }
  },
  actions: {
    getCinemaList ({commit}){

    }
  }
}
