<template>
  <div class="page-cinema">
    <div class="nav-header">
      <h1>影院</h1>
    </div>
    <div class="topbar">
      <div class="topbar-bg">
        <div class="city-entry">
          <span class="city-name"><router-link :to="{path: 'city'}">深圳</router-link></span>
          <i class="city-entry-arrow"></i>
        </div>
        <div class="search-input">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII="
          >
          <span>搜影院</span>
        </div>
      </div>
    </div>

    <van-dropdown-menu class="center-bar">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>

    <CinemaList :list="cinemaList"/>
  </div>
</template>

<script>
import CinemaList from '@/components/CinemaList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Cinema',

  data () {
    return {
      value1: 0,
      value2: 'a',
      value3: 'A',
      option1: [{ text: '全城', value: 0 }],
      option2: [{ text: '品牌', value: 'a' }],
      option3: [{ text: '特色', value: 'A' }]
    }
  },

  components: {
    CinemaList
  },

  computed: {
    ...mapState('cinema', ['cinemaList'])
  },

  methods: {
    ...mapActions('cinema', ['getCinemaList'])
  },

  created () {
    this.getCinemaList()
  }
}
</script>

 <style lang="less">
.topbar {
  border-bottom: 1px solid #e6e6e6;
  height: 44px;
}

.topbar-bg {
  display: flex;
  background: #f5f5f5;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  justify-content: space-between;
}

.city-entry {
  padding-left: 16px;
  font-size: 15px;
  color: #666;
  display: flex;
  align-items: center;
}

.city-entry-arrow {
  margin-right: 5px;
  width: 0;
  height: 0;
  border: 4px solid #b0b0b0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  display: inline-block;
  margin-left: 4px;
  margin-top: 5px;
}

.search-input {
  display: flex;
  width: 276px;
  justify-content: center;
  align-items: center;
  height: 28px;
  font-size: 13px;
  color: #b2b2b2;
  margin-left: 18px;
  border: 0.5px solid #e6e6e6;
  border-radius: 5px;
  margin-right: 15px;
  background-color: #fff;
}

img {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}

.van-dropdown-menu {
  height: 40px;
}
.van-dropdown-menu__title {
  font-size: 13px;
  color: #666;
}

.page-cinema {
  // display: flex;
  // flex-direction: column;
  height: 100%;
}
.cinema-list {
  // flex:1;
  height: calc(100% - 186px);
  overflow-y: auto;
}
.topbar,
.center-bar,
.tabbar {
  flex-shrink: 0;
}
.center-bar {
  height: 40px;
}
</style>
