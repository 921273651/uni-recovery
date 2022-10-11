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
  					<uni-col :span="12">
  						<view class="demo-uni-col light">
                <text>纸品类</text>
              </view>
  					</uni-col>
  					<uni-col :span="12">
  						<view class="demo-uni-col light">
                 <text>衣物类</text>
              </view>
  					</uni-col>
            <uni-col :span="12">
            	<view class="demo-uni-col light">
                 <text>塑料类</text>
              </view>
            </uni-col>
            <uni-col :span="12">
            	<view class="demo-uni-col light">
                 <text>金属类</text>
              </view>
            </uni-col>
            <uni-col :span="12">
            	<view class="demo-uni-col light">
                 <text>家具类</text>
              </view>
            </uni-col>
            <uni-col :span="12">
            	<view class="demo-uni-col light">
                 <text>废旧电器类</text>
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
  	<view class="demo-uni-col light">
      <text>积分商城</text>
    </view>
  </uni-col>
  <uni-col :span="12">
  	<view class="demo-uni-col light">
      <text>活动中心</text>
    </view>
  </uni-col>
  <uni-col :span="12">
  	<view class="demo-uni-col light">
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
                   nvueWidth: 730
      };
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
