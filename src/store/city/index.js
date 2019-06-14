// 城市相关的仓库数据

import { Toast } from 'vant'
import axios from 'axios'
export default {
  namespaced: true,
  state: {
    cityList: [] // 城市列表数据
  },
  getters: {
    newCityList (state) {
      let index = 0
      let hash = {}
      let result = []

      state.cityList.forEach(city => {
        let py = city.pinyin.charAt(0).toUpperCase()
        if (hash[py]) {
          result[hash[py] - 1].list.push(city)
        } else {
          // 让他下次碰到首字母相同的，让他走到if条件
          hash[py] = ++index
          // 构建我们需要的数据结构
          let obj = {
            py: py,
            list: [city]
          }
          // 将构建的额数据追加到result里面
          result.push(obj)
        }
      })
      return result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt())
    },
    hotList (state) {
      return state.cityList.filter(item => item.isHot)
    },
    indexList (state, getters) {
      return getters.newCityList.map(item => item.py)
    }
  },
  mutations: {
    SETCITYLIST (state, list) {
      state.cityList = list
    }
  },
  actions: {
    getCityList ({ commit }) {
      // console.log(1)
      Toast.loading({
        duration: 0,
        message: '加载中。。。'
      })
      axios.get('https://m.maizuo.com/gateway?k=8614157', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15598019575862630360538"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(response => {
        let res = response.data
        console.log(res.data.cities)
        console.log(1)
        commit('SETCITYLIST', res.data.cities)
        Toast.clear()
      })
    }
  }
}
