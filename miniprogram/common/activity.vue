<template>
  
</template>

<script>
  export default {
    data() {
      return {
        activityList:[],
        				
    }
  
  
 
  },
  onLoad(){
    this.getActivity();
  },
  
  methods:{
   async  getActivity(){
      this.activityList = await this.$api.getActivityList();
      if(res){
        // this.activityList=res;
      }
    }
  }
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
