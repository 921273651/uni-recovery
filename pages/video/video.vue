<template>
  <view class="video-page">
    <view class="video">
      <CateList :CatesList="videoList"></CateList>
    </view>
    
  </view>
</template>

<script>
  import CateList from '@/common/CateList.vue'
  export default {
    data() {
      return {
        videoList:[
         
        ]
      };
    },
    onLoad() {
    this.getVideoList()
    },
    methods:{
      getVideoList(){
        uni.request({
          url:'http://39.107.241.37:8808/api/goods/getCatesList',
          data: {
            cateType: 'videos'
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
     
      
    },
    
    components:{
      CateList
    }
  }
</script>

<style lang="scss">

</style>
