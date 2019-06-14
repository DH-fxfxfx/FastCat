// 影院数据仓库
import axios from 'axios'

export default {
  namespaced: true,

  state: {
    cinemaList: []
  },

  mutations: {
    SETCINEMALIST (state, list) {
      state.cinemaList = list
    }
  },

  actions: {
    getCinemaList ({ commit, state }) {
      axios.get('http://localhost:8080/maoyan/ajax/cinemaList', {
        params: {
          day: '2019-06-13',
          offset: 0,
          limit: 20,
          districtId: -1,
          lineId: -1,
          hallType: -1,
          brandId: -1,
          serviceId: -1,
          areaId: -1,
          stationId: -1,
          item: '',
          updateShowDay: true,
          reqId: 1560390181800,
          cityId: 30
        } })
        .then(response => {
          commit('SETCINEMALIST', response.data.cinemas)
          // console.log(response)
        })
    }
  }
}
