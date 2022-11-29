<template>
  <view class="page-details" >
    <!-- 详情页顶部 -->
    <view class="wx-nav">
      <view class="iconfont icon-fanhui" @click="goBack()"> </view>
     <view  style="width:700rpx; text-align: center;">
       商品详情
     </view>
    
    </view>
    <!-- 顶部结束 -->
    
    <!-- 轮播开始 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
      <swiper-item v-for='(item,index) in swiperlist' :key='index'>
        <view class="swiper-item">
          <image :src="item.imgUrl"></image>
        
        </view>
      </swiper-item>
      
    </swiper>
   <!-- 轮播结束 -->
   <!-- 积分与名称开始 -->
   <view class="details-goods">
     <view class="details-points"> </view>
     <view class="goods_name">精品定制口罩</view>
     <view class="goods_points">
       100积分
     </view>
     <view class="goods_content">精品定制口罩精品定制口罩精品定制口罩精品定制口罩精品定制口罩精品定制口罩精品定制口罩精品定制口罩</view>
   </view>
   <!-- 积分与名称结束 -->
   
   <!-- 详情开始 -->
   <view>
     <view>
       <image class="detail-image" src="../../static/images/home/goods/1.png" mode=""></image>
        <image class="detail-image" src="../../static/images/home/goods/2.png"></image>
         <image class="detail-image" src="../../static/images/home/goods/3.png"></image>
          <image class="detail-image" src="../../static/images/home/goods/4.png"></image>
           <image class="detail-image" src="../../static/images/home/goods/5.png"></image>
     </view>  
      </view> 
     <!-- 详情结束 -->
    
     <Card cardTitle='推荐活动'></Card>
    <CateList :CatesList="CatesList"></CateList>
    <!-- 底部导航开始 -->
    <view class="bottom-nav">
       <button class="add-cart" @click="btnBuy()">
       立即兑换
       </button>
       
     </view>
     <!-- 底部导航结束 -->
  </view>
</template>

<script>
  import Card from '@/common/Card.vue'
  import CateList from '@/common/CateList.vue'
  export default {
    data() {
      return {
        
        swiperlist:[
          {imgUrl:"../../static/advertise1.jpg"},
          {imgUrl:"../../static/advertise2.jpg"},
        ],
        
        CatesList:[
         
        ]
      };
    },
    onLoad() {
    this.getGoodsList()
    },
    methods:{
      getGoodsList(){
        uni.request({
          url:'http://localhost:3000/api/goods/getCatesList',
          data: {
            cateType: 'goods'
          },
          success:(res) =>{
            console.log(res,'商品详情接口返回的信息');
            if(res.data.code==2000){
             this.CatesList=res.data.data;
            
              console.log(res.data.data,'商品列表')
            }
          }
        })
      },
      goBack(){
        uni.navigateBack({
          delta:1
        })
      },
      btnBuy(){
        uni.showModal({
          title: '提示',
                      content: '确认兑换 ？',
                      success: function (res) {
                          if (res.confirm) {
                              console.log('用户点击确定')
                              uni.navigateTo({
                                url:'/pages/commit_order/commit_order'
                              })
                          }else{
                             console.log('用户点击取消')
                          }
          
                      }
        })
      }
    },
    // 引入自定义组件需在components底下加入
    components:{
      Card,
      CateList
    }
  }
</script>

<style lang="scss">
swiper{
  width: 100%;
  height: 580rpx;
}
.wx-nav{
  height:60px;
}
.details-goods{
  
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding:10rpx 0;
  .goods_content{
    font-size: 12px;
  }
}

.bottom-nav{
  height: 100rpx;
  background: #fff;
  width: 100%;
  display: flex;
  position: fixed;//定位
  left: 0;
  bottom: 0;
  
}
// flex等比例缩放
.bottom-nav .add-cart{
  flex:1;
  text-align: center;
  line-height: 100rpx;
  font-size: 36rpx;
  background: #ffcc00;
  padding:10rpx;
  border-radius: 20px;
  color: #FFFFFF;
}

.bottom-nav .btn-buy{
  flex:1;
  text-align: center;
  line-height: 100rpx;
  font-size: 36rpx;
  background: #FE7302;
  color: #FFFFFF;
}
</style>
