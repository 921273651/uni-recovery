<template>
 <view class="page_activity">
   <view class="activity-card">
    <view class="activity-box" v-for="(item,index) in activityList" :key="item.id" :data-itemid="(item.id)">
      <view class="img" >
        <image :src="item.img" mode="widthFix"></image>
        <view class="text">
        </view>
        <text style="opacity: 1;" class="mask-text">{{item.title}}</text>
      </view>
      
    </view>
    
   </view>
 </view>
</template>

<script>
    
  export default {

    data() {
      return {
       activityList:[],
    }
  },
  
  onLoad(){
    this.getActivity()
  },
  methods: {
  			async  getActivity(){
  			   this.activityList = await this.$api.getActivityList();
  			 }
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
