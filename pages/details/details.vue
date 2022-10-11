<template>
  <view class="page-details" >
    <!-- 详情页顶部 -->
    <view class="wx-nav">
      <view class="iconfont icon-fanhui"> </view>
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
     <view class="goods-name">精品定制口罩</view>
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
  height: 700rpx;
}
.details-goods{
  text-align: center;
  font-weight: bold;
  font-size: 18rpx;
  padding:10rpx 0;
}

</style>
