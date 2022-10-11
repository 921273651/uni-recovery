<template>
  <view class="cateList">
    <!-- 商品列表组件 -->
    <!-- catesList为传值名称 -->
    <!-- <Cates :catesList='CatesList'></Cates> -->
    <ul class="goods-wrap">
      <li v-for="(item,index) in CatesList" class="good-item">
        <image class="good-img" :src="item.Url" object-fit="cover"></image>
        <h5>{{item.cateName}}</h5>
        <h5>{{item.catePrice}}</h5>
      </li>
    </ul>
  </view>
</template>

<script>
  import Cates from './Cates.vue'
  export default{
    props:['CatesList'],
    data(){
      return{
        
      }
    },
    components:{
      Cates
    }
    
  }
</script>

<style lang="scss">
  .goods-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 12px;
  }
  .good-item {
    width: 45vw !important;
    .good-img {
      width: 45vw !important;
    }
    h5 {
      font-size: 14px;
      padding: 2px;
    }
  }
</style>
