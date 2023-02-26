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
       previewVideo(){
         wx.previewMedia({
               sources: [{
                 url: e.currentTarget.dataset.current, //视频播放路径
                 type: 'video'//video视频 image图片
               }]
             })
     
       }
    },
    
    components:{
      CateList
    }
  }
</script>

<style lang="scss">

</style>
