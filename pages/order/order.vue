<template>
  <view>
    
  <view class="typeNav" >
    <view :class="typeValue===1?'typeItem':''" @click="toggleType(1)">回收订单</view>
    <view :class="typeValue===2?'typeItem':''" @click="toggleType(2)">兑换订单</view>
  </view>
  <view v-if="typeValue===1">
    <RecycleOrder />
  </view>
  <view v-if="typeValue===2">
    <ShopOrder />
  </view>
</view>
</template>

<script>
  import RecycleOrder from '../../common/RecycleOrder.vue';
  import ShopOrder from '../../common/ShopOrder.vue';
  export default {
    data() {
    	return {
        typeValue: 1,
        typeNav:0,
    	};
    },
    components: {
      RecycleOrder,
      ShopOrder
    },
    onShow() {
      console.log('show')
      this.typeValue = 0;
      setTimeout(()=>{
        this.typeValue = 1;
      },500)
      
    },
    methods: {
      toggleType(typeValue) {
        this.typeValue = typeValue;
      }
    }
  }
</script>

<style lang="scss">
  .typeItem{
    color: #279941;
  }
  .typeNav{
    display: flex;
    justify-content: space-around;
  }
  .typeNav.choose{
    color:#aaaaff;
  }
  .nav-box .nav {
    /* 元素加了浮动之后，记得给父元素清除浮动 */
    width: 100%;
    display: flex;
  }

  .nav-box .nav .item {
    // width: 100rpx;
    flex: 1;
    height: 60rpx;
    border: solid 2rpx #eee;
    text-align: center;
    font-size: 32rpx;
    line-height: 60rpx;
    margin-left: 20rpx;
    float: left;
    border-radius: 20rpx;
  }

  .nav-box .nav .item.active {
    /* 没有空格时，两个元素同时存在时，才会生效，在类中既有item 又有active*/
    color: hotpink;
  }

  .list-box-bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30rpx;

    button {
      font-size: 32rpx;
      margin: 0;
    }
  }
</style>
