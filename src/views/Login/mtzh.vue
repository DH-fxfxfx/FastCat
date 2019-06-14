<template>
  <div>
    <div class="back">
    <input type="text" placeholder="账户名/手机号" class="text-back" :value="value" @input="abc"> <br>
    </div>
    <div class="back">
    <input type="password" placeholder="请输入您的密码" class="pws-back" :value="values" @input="efg">
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      values: ''
    }
  },
  methods: {
    abc (event) {
      // console.log(event.target.value)
      this.$emit('inputs', event.target.value)
    },
    efg (event) {
      // console.log(event.target.value)
      this.$emit('input', event.target.value)
    }
  }
}
</script>


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
.text-back{


}
</style>
