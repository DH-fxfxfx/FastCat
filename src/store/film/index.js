import axios from 'axios'


export default {
  namespaced:true,

  state :{
    filmList:[],

  },
  mutations :{
    SETFILMLIST (state,list) {
      state.filmList=list;
    }
  },

  actions :{
    getFilmList ({commit}) {
      // console.log(999);
     axios.get('http://localhost:8080/ajax/movieOnInfoList?token=""')
     .then (response=> {
       let res=response.data.movieList;
      //  console.log(res)
      var newData=res.map(item=>{
        return {
          ...item,
          img:item.img.replace('w.h','128.180')
        }
      })
      // console.log(newData)
       commit('SETFILMLIST',newData)
     })
    }
  }
}
