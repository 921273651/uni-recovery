<template>
  <view class="page">
    <!-- 幻灯片start -->
   <view class="uni-margin-wrap">
   			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
   				:duration="duration">
           <block :wx:for="background" wx:key="*this">
   				<swiper-item>
   				<image :src="item" ></image>
   				</swiper-item>
          </block>
   			</swiper>
  </view>
  <!-- 幻灯片end -->
  
  <!-- 公告栏start -->
  <view class="swiper-list">
  
  					<uni-notice-bar show-icon scrollable
  						text="今日全城废品回收价格创新高,争做环保爱好者" />
  				
  			<view class="gonggao">
  				<view class="location">定位标签</view>
  			
  			</view>
  		</view>
  
  <!-- 公告栏end -->
  
  
  <!-- 分类列表start -->
  <view class="example-body">
  				<uni-row class="demo-uni-row" :width="nvueWidth">
  					<uni-col :span="12" v-for="(item,index) in itemList" :key="item.id"  :data-itemid="(item.id)" >
  						<view class="demo-uni-col light" @click="goItem(index)">
                <text>{{item.category}}</text>
              </view>
  					</uni-col>
  					
  				</uni-row>
          </view>
  <!-- 分类列表end -->
  <!-- 活动板块start -->
  <view class="cate-box" :style="{'height': height}">
  <view class="cate-title">
      <text>活动中心</text>
  </view>
  <uni-col :span="12">
  	<view class="demo-uni-col light" @click="goChange()">
      <text>积分商城</text>
    </view>
  </uni-col>
  <uni-col :span="12">
  	<view class="demo-uni-col light">
      <text>活动中心</text>
    </view>
  </uni-col>
  <uni-col :span="12">
  	<view class="demo-uni-col light" @click="goVideo()">
      <text>视频专区</text>
    </view>
  </uni-col>
  <uni-col :span="12">
  	<view class="demo-uni-col light">
      <text>客服咨询</text>
    </view>
  </uni-col>
  </view>
  <!-- 活动板块end -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
          background: ['/static/haibao1.jpg', '/static/haibao2.jpg', '/static/haibao3.jpg'],
                    indicatorDots: true,
                    autoplay: true,
                    interval: 2000,
                    duration: 500,
                    gutter: 0,
                   nvueWidth: 730,
                   itemList:[],
      };
    },
    onLoad() {
     this.getItemList();//获取回收分类列表
      },
    methods:{
      //根据index跳转到对应下单详情
      //uni.switch跳转tab页面不能进行传参，要使用uni.relanch
      goItem(index){
      console.log(this.itemList[index].id);
      let itemId=this.itemList[index].id;
       uni.reLaunch({
         url: '/pages/recycle/recycle?id=' + itemId
       }) 
      },
      
      //获取itemList
      getItemList(){
        uni.request({
          url:'http://localhost:3000/api/item/getItemList',//获取分类列表接口
          success:(res) =>{
            console.log(res,'分类列表接口返回的信息');
            if(res.data.code==2000){
             this.itemList=res.data.data;
              console.log(res.data.data,'分类列表')
            }
          }
        })  
      },
      goChange(){
        uni.switchTab({
          url: '/pages/change/change'
        }) 
      },
      goVideo(){
        uni.navigateTo({
          url: '/pages/video/video'
        }) 
      }
    }
  }
</script>

<style lang="scss">
.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}
	.swiper {
		height: 300rpx;
    
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
  
  .swiper-list {
  		margin-top: 40rpx;
  		margin-bottom: 0;
  	}
  	.gonggao{
    
    }
    .example-body {
    		/* #ifndef APP-NVUE */
    		display: block;
    		/* #endif */
    		padding: 5rpx 10rpx 0;
    		overflow: hidden;
    	}
     
    .demo-uni-row {
    		margin-bottom: 10px;
    
    		// 组件在小程序端display为inline
    		// QQ、字节小程序文档写有 :host，但实测不生效
    		// 百度小程序没有 :host
    		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
    		display: block;
    		/* #endif */
    	}
      .demo-uni-col {
      		height: 80px;
          margin: 20rpx 20rpx 20rpx 20rpx;
            padding:10rpx;
      		border-radius: 5px;
      	}
      
      	.dark_deep {
      		background-color: #99a9bf;
      	}
  
      	.light {
      		background-color: #e5e9f2;
          margin-bottom: 10rpx;
        
      	}
        ::v-deep .uni-row {
        		margin-bottom: 5px;
        	}
          
          // 活动中心
          
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
          
          
          
</style>
