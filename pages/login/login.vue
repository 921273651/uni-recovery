<template>
  <view class="page_login">
    <view class="v1">
      <!-- v2父容器 子view使用绝对布局-->
      <view class="v2">
        <view class="dltext">登录</view>

        <!-- 账号 -->
        <view class="phoneCs">
          <i class="iconfont icon-mine"></i>
          <input v-model="cellPhone" placeholder="请输入账号" type="text" bindtap="content" />
        </view>

        <!-- 密码 -->
        <view class="passwordCs">
          <i class="iconfont icon-jiesuo"></i>
          <input v-model="password" placeholder="请输入密码" type="password" bindtap="password" />
          <image src="/images/eye-open.png" class="eye"></image>
        </view>

        <!-- 注册和 忘记密码 -->
        <view class="zhuce">
          <navigator url="/pages/register/register">立即注册</navigator>
          <navigator url="">忘记密码</navigator>
        </view>

        <view class="denglu">
          <button class="btn-dl" type="primary" @click="login">登录</button>
        </view>
        <view class="control">
          <button class="btn-dl" type="primary" size="mini" @click="manage">商家登录</button>
        </view>
        <!-- 协议区 -->
        <view class="xieyi">
          <checkbox-group @change="checked = !checked;">
            <checkbox class="isXY" :checked="checked"></checkbox>
            <span class="text-xy" bindtap="goxieyi">同意小程序的《平台协议》</span>
          </checkbox-group>
        </view>
      </view>

      <!-- 其他登录方式 -->


    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        cellPhone: '',
        password: '',
        username:'',
        checked: false
      }
    },
    onShow() {
      wx.hideHomeButton();
    },

    methods: {
      async login() {
        console.log("写入登陆方法");
        if (!(this.cellPhone && this.password)) {
          uni.showToast({
            title: '请填写表单内容！',
            icon: 'none',
            duration: 2000
          })
          return;
        }
        if (!this.checked) {
          uni.showToast({
            title: '请阅读并勾选平台协议！',
            icon: 'none',
            duration: 2000
          })
          return;
        }

        const userInfo = await this.$api.login({
          cellphone: this.cellPhone,
          password: this.password,
          username:this.username,
        });
        if (userInfo) {
          uni.showToast({
            title: '登录成功！',
            icon: 'success',
            duration: 1000,
            success: () => {
              uni.setStorageSync('userInfo', userInfo);
              setTimeout(() => {
                uni.reLaunch({
                  url: '/pages/home/home'
                })
              }, 500)
            }
          })
        }

       

      },
      //商家登录方法
     async manage(){
          console.log("写入商家登陆方法");
          if (!(this.cellPhone && this.password)) {
            uni.showToast({
              title: '请填写表单内容！',
              icon: 'none',
              duration: 2000
            })
            return;
          }
          if (!this.checked) {
            uni.showToast({
              title: '请阅读并勾选平台协议！',
              icon: 'none',
              duration: 2000
            })
            return;
          }
        
          const userInfo = await this.$api.manage({
            cellphone: this.cellPhone,
            password: this.password,
          });
          if (userInfo) {
            uni.showToast({
              title: '登录成功！',
              icon: 'success',
              duration: 1000,
              success: () => {
                uni.setStorageSync('userInfo', userInfo);
                setTimeout(() => {
                  uni.reLaunch({
                    url: '/pages/admin/admin'
                  })
                }, 500)
              }
            })
          
        }
      },
    },
  }
</script>

<style lang="scss">
  * {
  	margin: 0;
  	padding: 0;
  }
  
  .v1 {
  	display: block;
  	position: absolute;
  	width: 100%;
  	height: 550px;
  	background: #356363;
  
  	/* 换图片 */
  	.v2 {
  		position: relative;
  		margin-top: 150rpx;
  		left: 100rpx;
  		width: 545rpx;
  		height: 750rpx;
  		background: #FFFFFF;
  		border-radius: 50rpx;
  
  		.dltext {
  			margin-top: 50rpx;
  			position: absolute;
  			margin-left: 80rpx;
  			width: 150rpx;
  			height: 100rpx;
  			font-size: 60rpx;
  			font-family: Helvetica;
  			color: #000000;
  			line-height: 100rpx;
  			letter-spacing: 2rpx;
  		}
  
  		.phoneCs {
  			margin-top: 170rpx;
  			margin-left: 35rpx;
  			position: absolute;
  			display: flex;
  			width: 450rpx;
  			height: 80rpx;
  			border-bottom: 3rpx solid rgb(58, 57, 57);
  
  			.icon-mine {
  				margin-top: 30rpx;
  				margin-left: 30rpx;
  				width: 55rpx;
  				height: 55rpx;
  			}
  
  			input {
  				width: 400rpx;
  				font-size: 25rpx;
  				margin-top: 25rpx;
  				margin-left: 30rpx;
  			}
  		}
  
  		.passwordCs {
  			margin-top: 270rpx;
  			margin-left: 35rpx;
  			position: absolute;
  			display: flex;
  			width: 450rpx;
  			height: 80rpx;
  			border-bottom: 3rpx solid rgb(58, 57, 57);
  		}
  
  		.icon-jiesuo {
  			margin-top: 30rpx;
  			margin-left: 30rpx;
  			width: 55rpx;
  			height: 55rpx;
  		}
  
  		.passwordCs input {
  			width: 400rpx;
  			font-size: 25rpx;
  			margin-top: 25rpx;
  			margin-left: 30rpx;
  		}
  
  		.zhuce {
  			font-size: 25rpx;
  			margin-left: 85rpx;
  			width: 370rpx;
  			margin-top: 410rpx;
  			position: absolute;
  			display: flex;
  			justify-content: space-between;
  		}
  
  		.denglu {
  			width: 350rpx;
  			height: 80rpx;
  			position: absolute;
  			margin-top: 470rpx;
  			margin-left: 85rpx;
  
  			button {
  				padding: 0rpx;
  				line-height: 70rpx;
  				font-size: 30rpx;
  				width: 100%;
  				height: 100%;
  				border-radius: 30rpx;
  			}
  		}
      .control{
        width: 200rpx;
        height: 50rpx;
        position: absolute;
        margin-top: 570rpx;
        margin-left: 155rpx;
        
        button {
        	padding: 0rpx;
        	line-height: 50rpx;
        	font-size: 20rpx;
        	width: 100%;
        	height: 100%;
        	// border-radius: 30rpx;
        }
      }
  
  		.xieyi {
  			margin-left: 10rpx;
  			margin-top: 650rpx;
  			width: 400rpx;
  			display: flex;
  			position: absolute;
  			color: rgb(0, 119, 255);
  
  			.isXY {
  				margin-left: 85rpx;
  				/* 修改复选框的大小 */
  				transform: scale(.6);
  			}
  
  			.text-xy {
  				margin-left: 10rpx;
  				margin-top: 20rpx;
  				color: #000000;
  				font-size: 19rpx;
  			}
  		}
  	}
  
  	.v3 {
  		padding-left: 100rpx;
  		display: flex;
  		position: relative;
  		width: 100%;
  		height: 60rpx;
  		padding-top: 50rpx;
  
  		.line {
  			margin-left: 5rpx;
  			margin-top: 18rpx;
  			width: 120rpx;
  			height: 3rpx;
  			background-color: #FFFFFF;
  		}
  
  		.lText {
  			color: #FFFFFF;
  			font-size: 25rpx;
  		}
  
  	}
  
  }
</style>
