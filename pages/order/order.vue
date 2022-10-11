<template>
  <view class="order-page">
    
      <view class="nav-box">
          <view class="nav">
            <view class="item" >
             <view>全部</view>
            </view>
            <view class="item" >
             <view>待服务</view>
            </view>
            <view class="item" >
             <view>已完成</view>
            </view>
      </view>
       </view>
    <view class="list">
      			<uni-card title="订单编号" extra="已完成">
      				<view class="uni-body">
               <p>znl 123456788</p> 
             <p>地址：重庆市沙坪坝区</p>
             <p>交易金额：35元</p>
              </view>
      			</uni-card>
      		
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.nav-box .nav{
  /* 元素加了浮动之后，记得给父元素清除浮动 */
  width: 100%;
  display: flex;

}
.nav-box .nav .item{ 
  // width: 100rpx;
  flex: 1;
  height: 60rpx;
  border:solid 2rpx #eee;
  text-align: center;
  font-size: 32rpx;
  line-height: 60rpx;
  margin-left: 20rpx;
  float:left;
  border-radius: 20rpx;
}
.nav-box .nav .item.active{
  /* 没有空格时，两个元素同时存在时，才会生效，在类中既有item 又有active*/
color: hotpink;
}

</style>
