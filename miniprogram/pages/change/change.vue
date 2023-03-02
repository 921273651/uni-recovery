<template>
  <view class="page">
    <uni-card title="用户名" :extra="`当前积分为${myPoint}`" :thumbnail="avatar" @click="onClick">
<!-- 10.11 -->

    </uni-card>
    <view class="advertise">
      <image src="http://39.107.241.37:2020/static/images/bg/shop-banner.jpg" mode="widthFix"></image>
    </view>
    <view class="cate-box" :style="{'height': height}">
      <view class="cate-title">
        <text>今日推荐</text>
      </view>
      <view class="container03">
        <view class="container02" >
            <view class="scroll-H">
              <uni-col :span="12" @tap='godetails(index)' v-for="(item,index) in itemList" :key="item.id"  :data-itemid="(item.id)">
              	<view class="demo-uni-col">
                  <image class="itemimg" :src="item.cateUrl"></image>
                  <text class="cateName">{{item.cateName}}</text>
                  <p class="catePrice">{{item.catePrice}}积分</p>
                </view>
              </uni-col>
              
            
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
        myPoint: 0,
        avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.VWRK3D4CN_uVkIhEsttI8wHaF2?w=246&h=194&c=7&r=0&o=5&dpr=1.88&pid=1.7',
        itemList:[],
        orderList:[],
      }
    },
    onLoad() {
     this.getPoints();
     this.getitemList();//获取商品列表
     // this.getOrderList()
      },
    methods: {
      // async getOrderList() {
      // 	const res = await this.$api.getRecycleOrderList();
      // 	if(res) {
      // 		this.orderList = res;
      // 		// this.orderList.map(i=>i.estimated_weight = i.estimated_weight.split(','))s
      // 	}
      // },
      async getPoints(){
        const res = await this.$api.getPoints({});
        console.log('res1111', res)
        this.myPoint = res.myPoint;
      },
      godetails(index){
        console.log(this.itemList[index].id);
        let goodsId=this.itemList[index].id;
        uni.navigateTo({
          url:'../details/details?id='+goodsId
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
      },
    async  getitemList(){
        this.itemList = await this.$api.getCatesList({cateType: 'goods'});
        
      },
      
    },
  }
</script>

<style lang="scss">
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
   border-radius: 50rpx;
  text-align: center;
   
  }

  .advertise image {
    /* margin-left:100rpx; */
    width: 90%;
  
    
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
  		height:180px;
      width:110px;
      margin:0px 10px 10px 10px;/*上右下左*/
      background-color: #e5e9f2;
      /* margin: 20rpx 20rpx 20rpx 20rpx; */
        padding:10rpx;
  		border-radius: 5px;
       margin-bottom: 20rpx;
       .itemimg{
         // border:1px  solid  red;
         width: 100%;
         height:120px;
       }
       .cateName{
         font-size: 12px;
       }
       .catePrice{
          font-size: 16px;
          color:#ff5500;
       }
  	}
  
  .light {
  	background-color: #e5e9f2;
    margin-bottom: 10rpx;
  
  }
</style>
