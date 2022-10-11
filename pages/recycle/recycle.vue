<template>
  <view class="recycle-page">
    <view class="nav">
      <view>
      				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="10">
                
      					<view id="demo1" class="scroll-view-item_H ">
                  <image src="/static/source/paper.png" mode=""></image>
                 <p>纸品</p> 
                  </view>
                  
      					<view id="demo2" class="scroll-view-item_H ">
                  <image src="/static/source/suliao.png" mode=""></image>
                  <p>塑料</p></view>
      					<view id="demo3" class="scroll-view-item_H ">
                  <image src="/static/source/jingshu.png" mode=""></image>
                  <p>金属</p></view>
                <view id="demo3" class="scroll-view-item_H ">
                  <image src="/static/source/jiaju.png" mode=""></image>
                  <p>家具</p></view>
                <view id="demo3" class="scroll-view-item_H ">
                  <image src="/static/source/dianqi-01.png" mode=""></image>
                  <p>电器</p>
                  </view>
                
                <view id="demo3" class="scroll-view-item_H ">
                  <image src="/static/source/cloth.png" mode=""></image>
                  <p>衣物</p>
                  </view>
      				</scroll-view>
      			</view>
    </view>
    
    <view class="price">
      <view class="title">
        <p>今日指导价</p>
        <p>报纸------0.5/公斤</p>
        <p>纸箱------0.8/公斤</p>
        <p>书纸------0.5/公斤</p>
      </view>
    </view>
    <view class="form">
      <view class="top">
         <span>预估重量：</span><input type="text" value=""  style="width: 300rpx;"/>
      </view>
      <view class="center">
        <image src="/static/source/dingwei.png" mode=""></image>
        <text>预约地址：</text>
        <text>重庆市沙坪坝区</text>
        <input type="text" value="" />
      </view>
    <view class="top">
      <text>手机号码：</text>
      <input type="text" value="" style=""/>
    </view>
    <view class="top">
      <view class="uni-title uni-common-pl">预约上门时间：</view>
      		<view class="uni-list">
      			<view class="uni-list-cell">
      				<view class="uni-list-cell-db">
      					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
      						<view class="uni-input">{{time}}</view>
      					</picker>
      				</view>
      			</view>
      		</view>
    </view>
     <view class="top">
       <textarea value="" placeholder="请输入" />
     </view>
    </view>
    <view class="button-group">
     <button type="primary" plain="true">公益捐赠</button>
      <button type="primary" plain="true">确定下单</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        time: '12:01'
      }
    },
    methods:{
       bindPickerChange: function(e) {
                  console.log('picker发送选择改变，携带值为', e.detail.value)
                  this.index = e.detail.value
              },
              bindTimeChange: function(e) {
                  this.time = e.detail.value
              },
      
    }
  }
</script>

<style lang="scss">
.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item {
		height: 170rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 200rpx;
		height: 170rpx;
		text-align: center;
		font-size: 36rpx;
    image{
      width: 100rpx;
      height: 100rpx;
    }
	}
  .form {
    margin: 10px;
    border-top: 1px solid green;
    padding-top: 10px;
    .top{
      display: flex;
      flex-wrap: nowrap;
      margin-bottom: 20rpx;
    }
    image{
      width: 50rpx;
      height: 50rpx;
    }
  }
  .price {
    margin: 10px;
    // border-bottom: 1px solid green;
  }
  .center{
    
    margin-bottom: 20rpx;
  }
  
  input{
    border: 1px solid black;
  }
  textarea{
     border: 1px solid black;
     margin:0 auto;
  }
  .button-group{
    display: flex;
    flex-wrap: nowrap;
    button{
      width: 40%;
    }
  }
  .nav{
    border-bottom:1px solid green ;
  }
  .scroll-view_H {
    height: 170rpx;
  }
</style>
