<template>
  <view class="page">
    <uni-card title="用户名" extra="当前积分为:30" :thumbnail="avatar" @click="onClick">

    </uni-card>
    <view class="advertise">
      <image :src="url" mode="widthFix"></image>
    </view>
    <view class="cate-box" :style="{'height': height}">
      <view class="cate-title">
        <text>今日推荐</text>
      </view>
      <view class="container03">
        <view class="container02" >
            <view class="scroll-H">
              <uni-col :span="12" @tap='godetails()'>
              	<view class="demo-uni-col light">
                  <text>防疫口罩</text>
                </view>
              </uni-col>
              <uni-col :span="12">
              	<view class="demo-uni-col light">
                   <text>购物袋</text>
                </view>
              </uni-col>
              <uni-col :span="12">
              	<view class="demo-uni-col light">
                   <text>兑换话费</text>
                </view>
              </uni-col>
              <uni-col :span="12">
              	<view class="demo-uni-col light">
                   <text>优惠券</text>
                </view>
              </uni-col>
            </image>
            </view>
       
      </view>
    </view>
  </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.uhbXYV8AJqA879-E_eHGDgHaC_?w=186&h=80&c=7&r=0&o=5&dpr=1.88&pid=1.7',
        avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.VWRK3D4CN_uVkIhEsttI8wHaF2?w=246&h=194&c=7&r=0&o=5&dpr=1.88&pid=1.7',

        extraIcon: {
          color: '#4cd964',
          size: '22',
          type: 'gear-filled',

        },
        
      }
    },
    methods: {
      godetails(){
        uni.navigateTo({
          url:'../details/details'
        })
      },
      onClick(e) {
        console.log(e)
      },
      actionsClick(text) {
        uni.showToast({
          title: text,
          icon: 'none'
        })
      }
    },
  }
</script>

<style>
  .container03 {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }

  .scroll-H {
    margin-left: 20rpx;
    border-radius: 10rpx;
  }

  image {
    width: 300rpx;
    border-radius: 10rpx;
  }

  scroll-view {
    padding-top: 50rpx;
  }

  .search-result {
    padding-top: 10px;
    padding-bottom: 20px;
    text-align: center;
  }

  .search-result-text {
    text-align: center;
    font-size: 14px;
    color: #666;
  }

  .example-body {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    padding: 0px;
  }

  .uni-mt-10 {
    margin-top: 10px;
  }

  .advertise {
    width: 100%;
  }

  .advertise image {
    /* margin-left:100rpx; */
    width: 100%;
  }

  .cate-box {
    height: 100%;
    padding: 40rpx;
    box-sizing: border-box;
  }

  .cate-title {
    position: relative;
    height: 30rpx;
    line-height: 30rpx;
    padding: 30rpx 0 55rpx;
    text-align: center;
    color: #AB956D;
    font-size: 28rpx;
  }

  .cate-title::before {
    position: absolute;
    left: 130rpx;
    top: 43rpx;
    content: '';
    width: 70rpx;
    height: 4rpx;
    background: #AB956D;
  }

  .cate-title::after {
    position: absolute;
    right: 130rpx;
    top: 43rpx;
    content: '';
    width: 70rpx;
    height: 4rpx;
    background: #AB956D;
  }
  
  .demo-uni-col {
  		height: 150px;
      margin: 20rpx 20rpx 20rpx 20rpx;
        padding:10rpx;
  		border-radius: 5px;
  	}
  
  .light {
  	background-color: #e5e9f2;
    margin-bottom: 10rpx;
  
  }
</style>
