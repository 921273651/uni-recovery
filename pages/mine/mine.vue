<template>
  <view class="container_mine">

    <!-- 用户信息开始 -->
    <view class="user-box">
      <view class="getuserInfo" v-if="JSON.stringify(user)=== '{}'">
        <button type="primary" size="mini" class="btn_getuserInfo" @click="getuserInfo">点击登录</button>

      </view>
      <view class="user-info" v-else>
        <!-- 用户头像 -->
        <view class="avatar">
          <image :src="'{{user.avatarUrl}}'" class="avatorImage"></image>
        </view>
        <!-- 用户名称 -->
        <view class="username">
          <view class="user_name">{{user.nickName}}</view>
        </view>

      </view>
    </view>
    <!-- 活动开始 -->
    <view class="activity">
      <view class="iconfont icon-dingdan">活动</view>
    </view>
    <!-- 底部活动导航开始 -->
    <view class="list-container">
      <view class="navList">
        <view class="nav">
          <i class="iconfont icon-shenghuodianmianduihuan">积分商城</i>
        </view>
        <view class="nav"><i class="iconfont icon-dizhi">收货地址</i></view>
        <view class="nav"><i class="iconfont icon-dingdan">我的订单</i></view>
        <view class="nav"><i class="iconfont icon-zhiyuanzhaomu">回收员招募</i></view>
        <view class="nav"><i class="iconfont icon--kefu">客服</i></view>
      </view>
    </view>
    <!-- 底部活动导航结束 -->

  </view>
</template>
<script>
  export default {
    data() {
      return {
        appid: 'wx08f2162c5c1ee872',
        secret: 'd589d32e12a1b91cd39b5de31d3a80f2',
        user: {

        }
      }
    },

    methods: {
      getuserInfo() {
        wx.login({
           success (res) {
              if (res.code) {
                //发起网络请求
                wx.request({
                  url: 'https://example.com/onLogin',
                  data: {
                    code: res.code
                  }
                })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
        })
    }
  },
  }

</script>
<style lang="scss">
  page {
    background-image: url(../../static/user-bg.jpg);

  }

  .getuserInfo {
    margin-top: 20%;
    text-align: center;
    border-bottom: #6B8E23 1px solid;
    height: 100px;
  }

  .user-info {
    height: 150px;
  }

  .avatar {
    text-align: center;
  }

  .avatorImage {

    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    margin-bottom: 20rpx;
  }

  .user_name {
    text-align: center;
  }

  .activity {
    background-color: #FDF5E6;
    margin-bottom: 30rpx;
    height: 90rpx;
    border-bottom: #DCDCDC 1px solid;
  }

  .navList {
    background-color: #FDF5E6;
    height: 300px;
    border: #C0C0C0 1px solid;
    margin: 30rpx;
    border-radius: 30rpx;
    box-shadow: 10px 10px 5px #888888;
    font-size: 10px;

    .nav {
      border-bottom: #DCDCDC 1px solid;
      margin: 30rpx 50rpx;

    }
  }
</style>
