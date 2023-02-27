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
    // components:{
    //   Cates
    // },
    onLoad() {
    this.getVideoList()
    },
    methods:{
      getVideoList(){
        uni.request({
          url:'http://localhost:8000/api/goods/getCatesList',
          data: {
            cateType: 'video'
          },
          success:(res) =>{
            console.log(res,'商品详情接口返回的信息');
            if(res.data.code==2000){
             this.videoList=res.data.data;
              console.log(res.data.data,'视频列表')
            }
          }
        })
      },
      // previewVideo(){
      //   wx.previewMedia({
      //         sources: [{
      //           url: e.currentTarget.dataset.current, //视频播放路径
      //           type: 'video'//video视频 image图片
      //         }]
      //       })

      // }
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
