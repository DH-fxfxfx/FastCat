<template>
  <div>
    <h1 class="nav-header head-fanhui">
      <div class="fanhui" @click="afanhui">&lt;-</div>猫眼电影
    </h1>
    <div class="switcher">
      <router-link to="/login/mtzh" replace class="mtzh_sjyz" @click.native="isOk=true">美团账号登录</router-link>
      <router-link to="/login/sjyz" replace class="mtzh_sjyz" @click.native="isOk=false">手机验证登录</router-link>
      <span id="aspan" v-if="isOk"></span>
      <span id="bspan" v-else></span>
    </div>
    <router-view v-model="names" :value="name" @inputs="name = $event"></router-view>
    <button @click="handleLogin" id="hand-but">登录</button>
    <div class="register-find">
      <router-link class="register" :to="{name: 'signup',query: {redirect: '/login'}}">立即注册</router-link>
      <a class="find">找回密码</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isOk: true,
      phone: "",
      name: "",
      names: ""
    };
  },
  methods: {
    handleLogin() {
      // console.log(555);http://localhost:3000/account
      // axios.get("./api/db.json").then(resolve => {
        // let res = resolve.data;
        // console.log(res)
        // if (res.code === 0) {
          // console.log(res.account)
          // let objlist = res.account;
          // objlist.forEach(item => {
          // let user = item.user;
          // let pws = item.pws;
          // console.log(user)
          // console.log(pws)
          // console.log(item)
          if(this.name == '' && this.names == ''){
            alert("賬號或密碼不能為空！")
            return
          }
          if (this.name != '' && this.names != '') {

            alert("登录成功！");
            let userInfo = {
              name: this.name,
              pwd: this.names
            };

            window.localStorage.setItem("userInfo", JSON.stringify(userInfo));

            // 登录成功，跳转回首页 - 编程式导航
            // this.$router.replace('/card');
            let redirect = this.$route.query.redirect || "/center";
            this.$router.replace(redirect);
          } else {
            console.log("密碼或賬號錯誤！")
          }


        // });
        // } else {
        //   console.log(resolve.msg)
        // }

      // });
      // setTimeout(() => {
      //   let userInfo = {
      //     name: this.name,
      //     pwd: this.names
      //   };

      //   window.localStorage.setItem("userInfo", JSON.stringify(userInfo));

      //   // 登录成功，跳转回首页 - 编程式导航
      //   // this.$router.replace('/card');
      //   let redirect = this.$route.query.redirect || "/center";
      //   this.$router.replace(redirect);
      // }, 2000);
    },
    afanhui() {
      console.log(3333);
      let redirect = this.$route.query.redirect || "/movie";
      // let redirect = "/movie";
      this.$router.replace(redirect);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
