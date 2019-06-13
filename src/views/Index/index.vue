<template>
  <div class="top1">
    <router-view></router-view>
    <Tabbar :tabs="tabs" />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  data () {
    return {
      tabs: [
        { id: 1, name: '电影', icon: 'icon-films', href: '/movie' },
        { id: 2, name: '影院', icon: 'icon-cinemas', href: '/cinema' },
        { id: 3, name: '我的', icon: 'icon-center', href: '/center' }
      ]
    }
  },

  components: {
    Tabbar
  }
}
</script>

<style lang="less">
  @import '~@/styles/common/mixins.less';
  .top1{
    height:100%;
  }
</style>
