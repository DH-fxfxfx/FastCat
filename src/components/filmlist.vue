//影片列表组件
<template>
  <ul class="film-list">
                 <li class="film-item"
                 v-for="film in list"
                 :key="film.id">
                     <img class="film-img" :src="film.img" alt="">
                     <div class="film-info">
                        <p class="film-info_name">{{film.nm}}</p>
                        <p class="film-info_grade">{{film.wish}}<span>想看</span></p>
                        <p class="film-info_actors">{{film.star}}</p>
                        <p class="film-info_detail">{{film.showInfo}}</p>
                     </div>
                     <div class="film-buy" :style="{background:film.globalReleased?'red':'blue'}">{{film.globalReleased?'购票':'预约'}}</div>

                 </li>


            </ul>
</template>


<script>
export default {
  //  data :{
  //    return:{
  //      activecolor:'blue'
  //    }
  //  },

   props: {
    filmType: {
      validator (value) {
        return ['nowPlaying','comingSoon'].indexOf(value)!==-1
      }
    },
    list: {
      type: Array

    },

    list2 : {
      Array
    }
  },

}

</script>

