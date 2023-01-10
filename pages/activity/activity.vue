<template>
  <view class="activity-card">
   <view class="activity-box">
     <view class="img" >
       <image :src="cover" mode="widthFix"></image>
       <view class="text">
       </view>
       <text style="opacity: 1;" class="mask-text">今日活动</text>
     </view>
     
   </view>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
       cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
    }
  },
  methods: {
  			
  		},
  }
</script>

<style lang="scss">
  .activity-card{
    position:relative;
     // margin: 0 auto;
     text-align: center;
    
  }
.activity-box{
   border-radius: 10px;
  position:relative;
  margin:2vw;
  width: 96vw;
  height: 62vw;
  overflow: hidden;
  // height:60px;
  img {
    width: 100%;
  }
  
  .text{
    position: absolute;
    bottom: 0;
    width: 100%;
    height:40px;
    background-color: #000000;
    opacity: 0.3;
    z-index: 10;
  }
  .mask-text {
    left:10rpx ;
    opacity: 1;
    color:#FFFFFF;
    position: absolute;
    bottom: 0;
    line-height: 40px;
    z-index: 100;
  }
}
</style>
