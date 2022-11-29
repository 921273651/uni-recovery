<template>
  <view class="cate-box" >
    <!-- 单个商品组件 -->
    <view class="cates-item" v-for="(item,index) in catesList" :key='index'>
      <image  class="cates-img" :src="item.imgUrl"  mode=""></image>
      <view class="cates-content">
        <text class="cates-name">
          {{item.name}}
        </text>
        <view >
          <text class="cates-price" >{{item.price}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import CateList from './CateList.vue'
  export default{
    
    props:{
      catesList:Array
    }
  }
</script>

<style scoped>
  .cate-box{
    display: flex;
    flex-wrap: warp;
  }
  .cates-item{
   
    width:375rpx;
    padding-bottom: 20rpx;
  }
  .cates-img{
    width: 100%;
    height: 375rpx;
  }
  .cates-content{
    text-align: center;
  }
  .cates-name{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    color: #3333;
    word-break: break-all;
    padding: 6rpx 20rpx;
  }
  .cates-price{
    /* 文字上横线 */
    /* text-decoration: line-through; */
    font-size: 24rpx;
    color: 999999;
  }
</style>
