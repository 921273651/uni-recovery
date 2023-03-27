<template>
  
  <view class="cateList">
    <!-- 商品列表组件 -->
    <!-- catesList为传值名称 -->
    <!-- <Cates :catesList='CatesList'></Cates> -->
    <ul class="goods-wrap">
      <li v-for="(item,index) in CatesList" class="good-item">
        <video class="good-img" :src="item.cateUrl" object-fit="cover"  ></video>
        <h5 class="cateName">{{item.cateName}}</h5>
      </li>
    </ul>
  </view>
</template>

<script>
  // import Cates from './Cates.vue'
  export default{
    props:['CatesList'],
    data(){
      return{
        CatesList:[]
      }
    },
    
    onLoad() {
    
    },
    methods:{
      
    }
  }
</script>

<style lang="scss">
  .goods-wrap {
    display: flex;
    flex-wrap:wrap;
    // height:200px;
    // width: 20px;
    justify-content: space-between;
    padding: 0 12px;
    position: relative;
  }
  .good-item {
    width: 45vw !important;
    margin-bottom: 30px;
    .good-img {
      width: 45vw !important;
      border-radius: 10px;
     position: relative;
    }
    .cateName{
      // z-index: 1;
      font-size: 14px;
      padding: 2px;
      // bottom: 50px;
       position: absolute;
    }
   
  }
</style>
