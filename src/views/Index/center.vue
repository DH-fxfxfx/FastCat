<template>
<div>
     <h1 class='nav-header'>我的</h1>
    <div class="headx">
        <div class="imgdx"><img src="https://img.meituan.net/maoyanuser/80cdf9a184d40eb9ecc0e5d170f3e45d11928.png" alt=""></div>
    </div>

    <div class="container">
        <div class="group">
            <!-- <div class="mb-outline-tb"> -->
                <!-- <div class="orders"> -->
                    <div class="title">我的订单</div>
                    <!-- <div class="mb-outline-b title-line"></div> -->
                    <div class="list list-two">
                    <!-- TODO 演出开发完毕后，改成下面注释内容 -->
                    <!-- <div class="list list list-three"> -->
                        <div class="order-item movie">
                            <i class="iconfont icon-films"></i>
                            <router-link to="/movie">电影</router-link>
                        </div>
                        <!-- TODO 演出开发完毕后，改成下面注释内容 -->
                        <!--                             <div class="order-item show"><a data-link="https://m.maoyan.com/myshow/fe/movieshoworder/order-list.html?fromTag=ordercenter"><p>演出</p></a></div>
 -->

                        <div class="order-item store">
                            <i class="iconfont icon-cinemas"></i>
                            <router-link to="/cinema">影院</router-link>
                        </div>
                    </div>
                <!-- </div> -->
            <!-- </div> -->
        </div>
        <div class="group">
            <div class="mb-outline-tb">
                    <div class="coupon item mb-line-b"><a data-link="/vod/order?$from=canary"><span>在线观影</span></a></div>
                    <div class="coupon item mb-line-b"><a data-link="/myCoupon?$from=canary"><span>优惠券</span></a></div>
                    <div class="membercard item mb-line-b"><a data-link="/membercard/mylist?version=4&amp;$from=canary"><span>折扣卡</span></a></div>
            </div>
        </div>



    </div>

</div>
</template>

<style scoped>
.headx{
    height: 150px;
    width: 100%;
    background-color: #f03d37;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgdx{
    width: 64px;
    height: 64px;
}
.imgdx img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
}
.container{
    background-color: #ccc;
}
.group{
    margin-top: 10px;
    background: #fff;
    width: 100%;
    height: 150px;
}
.title{
    text-align: center;
}
.list-two{
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.list-two .order-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.mb-line-b{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    line-height: 40px;
    text-indent: 1rem;
}
.iconfont{
    font-size: 30px;
}
</style>

     <h1 class='nav-header'>猫眼电影</h1>
</div>

</template>

