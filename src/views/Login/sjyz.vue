<template>
  <div>
    <div class="back">
    <input type="text" placeholder="请输入手机号" > <br>
    </div>
    <div class="back">
    <input type="text" placeholder="请输入短信验证码" >
    </div>
    <!-- <button @click="handleLogin" id="hand-but">登录</button>
    <div class="register-find">
      <a class="register">立即注册</a>
      <a class="find">找回密码</a>
    </div> -->
  </div>
</template>

<style lang="less" scoped>
.back{
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 35px;
  position: relative;
  z-index: 5;
  &::after {
    content: '';
    transform: scale(.5);
    position: absolute;
    border-bottom: 2px solid #ccc;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
  }

}
input{
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
input:hover{
  background-color: #ccc
}
</style>
