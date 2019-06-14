<template>
  <div>
    <h1 class="nav-header head-fanhui">
      <div class="fanhui" @click="afanhui">&lt;-</div>猫眼电影
    </h1>
    <div id="headline">输入手机号 > 设置密码 > 阅读并同意</div>
    <div class="back">
      <input type="text" placeholder="账户名/手机号" class="text-back" v-model="text">
      <br>
    </div>
    <div class="back">
      <input type="password" placeholder="设置密码" class="pws-back" v-model="pws">
    </div>
    <div class="protocol">
      <input type="checkbox" class="check" checked @click="checked=!checked">我已阅读并同意
      <a>《香蕉船用户协议》</a>
    </div>
    <button @click="register" id="hand-but">注册</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      checked: false,
      disabled: true,
      text: "",
      pws: ""
    };
  },
  methods: {
    afanhui() {
      // let redirect = this.$route.query.redirect || '/movie';
      console.log(this.$route.query.redirect);
      // this.$router.replace(redirect);
      this.$router.back();
    },
    register() {
      // console.log(444)
      console.log(this.text);
      console.log(this.pws);
      let obj = {
        user: this.text,
        pws: this.pws
      }
      // let aobj = JSON.stringify(obj)
      axios
        .post("http://localhost:3000/account",obj)
        .then(resolve => {
          // console.log(resolve);
          let res = resolve.data;
          // console.log(res)
          // if (res.code === 0) {
            alert("註冊成功");
            let redirect = "/login";
            this.$router.replace(redirect);
          // }
        })
        .catch(error => {
          alert("新增失败");
        });
    },
    checkeds() {}
  },
  created() {}
};
</script>

<style lang="less" scoped>
.back {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 35px;
  position: relative;
  z-index: 5;
  &::after {
    content: "";
    transform: scale(0.5);
    position: absolute;
    border-bottom: 2px solid #ccc;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
  }
}
.pws-back,
.text-back {
  position: absolute;
  z-index: 9;
  left: 5%;
  top: 10%;
  border: none;
  width: 90%;
  height: 25px;
  outline: none;
  font-size: 14px;
}
input:hover {
  background-color: #ccc;
}
#headline {
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 35px;
  border-bottom: 1px solid #ccc;
}
.protocol {
  height: 45px;
  line-height: 45px;
}
.protocol .check {
  background-color: #df2d2d;
  color: #fff;
  padding: 5px;
  width: 20px;
  height: 20px;
}
.protocol a {
  color: #df2d2d;
}
</style>
