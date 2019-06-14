<template>
  <div class="cinema-list">
      <div class="cinema-block"
        v-for="cinemas in list"
        :key="cinemas.id">
        <div class="cinema-np">
          <span class="cinema-nm">{{cinemas.nm}}</span>
          <span class="cinema-price">{{cinemas.sellPrice}}<span class="price">元起</span></span>
        </div>
        <div class="cinema-ad box-flex">
          <span class="cinema-addr">{{cinemas.addr}}</span>
          <span class="distance">{{cinemas.distance}}</span>
        </div>
          <div class="label">
            <span class="allowRefund" v-if="cinemas.tag.allowRefund">退</span>
            <span class="endorse" v-if="cinemas.tag.endorse">改签</span>
            <span class="snack" v-if="cinemas.tag.snack">小吃</span>
            <span class="vipTag" v-if="cinemas.tag.vipTag">折扣卡</span>
            <span class="hallType" v-if="cinemas.tag.hallType">
              {{cinemas.tag.hallType[0]}}{{cinemas.tag.hallType[1]}}{{cinemas.tag.hallType[2]}}{{cinemas.tag.hallType[3]}}
            </span>
          </div>
           <div class="discount-label-text">{{cinemas.promotion.cardPromotionTag}}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style lang="less">
@import '~@/styles/common/mixins.less';
    .cinema-block{
      .border-bottom;
    padding: 18px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    }
    .cinema-nm{
      font-size: 16px;
      margin-right: 10px;
    }
    .cinema-price{
      color:red;
      font-size:18px;
    }

    .cinema-ad{
    margin-top: 8px;
    font-size: 13px;
    color: #666;
    }

    .box-flex {
    display: -webkit-box;
    display: flex;
}

    .cinema-addr{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex: 1;
    }

    .label{
    height: 18px;
    line-height: 18px;
    margin-top: 8px;
    margin-bottom: 10px;
    font-size: 13px;
    flex-shrink: 0;
    }

    .allowRefund {
    color: #589daf;
    border: 1px solid #589daf;
    margin-right: 5px;
    }

    .endorse, .hallType{
    color: #589daf;
    border: 1px solid #589daf;
    margin-right: 5px;
    }

    .snack, .vipTag {
    display: inline-block;
    margin-right: 5px;
    color: #f90;
    border: 1px solid #f90;
    }

    .discount-label-text {
    font-size: 12px;
    color:#666;
    margin-top: 4px;
    margin-bottom: 4px;
}

  .price{
    font-size: 10px;
    margin-left: 4px;
  }

</style>
