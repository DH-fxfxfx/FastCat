import axios from 'axios'


export default {
  namespaced:true,

  state :{
    filmList:[],
    morefilmList:[]

  },
  mutations :{
    SETFILMLIST (state,list) {
      state.filmList=list;
    },

    MORESETFILMLIST (state,list) {
      state.morefilmList=list;
    },
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
    },

    moregetFilmList ({commit,state}) {
      console.log(111)
      axios.get('http://localhost:8080/ajax/moreComingList?token=&movieIds=341987%2C1196188%2C1226516%2C345444%2C1220829%2C346629%2C1184910%2C1218727%2C1197934%2C1254277')
      .then(res=>{
        let cp3=res.data.coming;
        var moreData=cp3.map(item2=>{
          return {
            ...item2,
            img:item2.img.replace('w.h','128.180')
          }
        });

          commit('MORESETFILMLIST',moreData)
        let newData= [...state.filmList,...state.morefilmList]

          commit('SETFILMLIST',newData)

        console.log(newData);
      })
    }
  }
}
