<template>
    <div id="app">
       <div class="top">
           <h1>快猫电影</h1>
       </div>
       <div class="nav">
         <van-tabs v-model="active" sticky>
        <van-tab disabled=""></van-tab>
          <van-tab title="正在热映" class="film" >
            <filmlist film-type="nowPlaying" :list="filmList"/>

         </van-tab>
        <van-tab title="即将上映">
            <!-- <filmlist film-type="comingSoon" :list="filmList"/> -->
            <h1>太多人想看快猫了</h1>

             <div class="imgbox">

                 <img src="https://p0.meituan.net/170.230/moviemachine/262f95bad79b6ae45b978593157cb68550938.jpg" alt="" class="img1"
                 v-for="ing  in 10"
                 :key="ing">
             </div>
        </van-tab>
        <van-tab  disabled=""></van-tab>
        </van-tabs>
       </div>

    </div>
</template>
<script>
import filmlist from '@/components/filmlist.vue'
import {mapActions,mapState, mapMutations} from 'vuex'
export default {
   data () {
        return {
            active:1,
        }
    },
  components : {
    filmlist
  },

  computed : {
      ...mapState('film',['filmList']),
      ...mapState('film',['morefilmList']),

  },
   methods :{
     ...mapActions('film',['getFilmList']),
     ...mapActions('film',['moregetFilmList']),

      //滚动事件  加载更多数据

      onScroll () {
        //   console.log('cp3')
        //判断当前是否滚到了底部,距离顶部的距离
        let scrollTop=document.documentElement.scrollTop;
        //页面的高度
        let scrollHeight=document.body.scrollHeight;
        //可视高度
        let clientHeight=document.documentElement.clientHeight;
        // console.log(scrollTop,scrollHeight,clientHeight)
        if((scrollHeight-clientHeight)-scrollTop<50) {
            console.log('曹尼玛');


        }
      }



   },


   created (){
    this.getFilmList();
    this.moregetFilmList();
    window.addEventListener('scroll',this.onScroll)
   }
}
</script>


<style lang="less">
@import '~@/styles/common/mixins.less';
@import '~@/styles/common/variable.less';


*{
    margin: 0;
    padding: 0;
}
 html,body{
     height: 100%;
 }
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top{
   flex-shrink: 0;
   height: 50px;
   background: gold;
}
h1{
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
}
// .film{
//     flex-shrink: 0;
//     height: 40px;
//     background: green;
//     padding-bottom: 50px;
// }

.film-item{
    padding:14px;
    display: flex;
    height: 90px;
    max-height: 90px;
    position: relative;
    align-items: center;
    .border-bottom;
}
.film-img{
    width: 64px;
}
.film-info{
    flex: 1;
    margin-left: 10px;
    font-size: 15px;
    line-height: 1;


}
.nav{
    background: yellowgreen;
}
.film-buy{
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
}
.van-tab__pane {
    overflow-y: auto;
    padding-bottom: 50px;
}
.film{
    background: pink;
    overflow: hidden;
}
.img1{
    width: 85px;
    height: 115px;
    padding: 0 5px;
}
.imgbox{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}
</style>

