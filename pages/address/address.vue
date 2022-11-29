<template>
  <!-- 地址管理 -->
  <view class="page_myAddress">
    <!-- 地址列表开始 -->
    <view class="path_list" >
      <view class='path_item' v-for="(item,index) in addressList " :key='index'>
        <view class="item_main">
          <view class="item_name">{{item.address_name}}</view>
          <view>{{item.address_phoneNumber}}</view>
        </view>
        <view class="item_main">
        <view class="active" v-if="item.address_default">默认</view>
        <view>{{item.address_information}}</view>
        </view>
      </view>
     
    </view>
    <!-- 地址列表结束 -->
    <!-- 新增地址开始 -->
    
    <view class="add_path">
      <view class="add_path_btn" @click="addPath()">
       新增地址
      </view>
      
    </view>
    <!-- 新增地址结束 -->
  </view>
</template>

<script>
  export default {
    data() {
    
      return {
        addressList:[],
      };
    },
    onLoad(){
     this.getAddressList()
    },
    onShow(){
        wx.hideHomeButton();//消除返回首页按钮
      },
    methods:{
      addPath(){
        uni.navigateTo({
          url:'/pages/my_add_path/my_add_path'
        })
      },
     getAddressList(){
       uni.request({
         url:'http://localhost:3000/api/address/getAddress',
         success:(res) =>{
           console.log(res,'地址接口返回的信息');
           if(res.data.code==2000){
            this.addressList=res.data.data;
           
             console.log(res.data.data,'地址列表')
           }
         }
       })
     }
    },
    
    
  }
</script>

<style lang="scss">
.add_path{
  padding: 30rpx 20rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  .add_path_btn{
    border:2px solid #49BDFB;
    color:#49BDFB;
    font-size: 16px;
    border-radius: 30rpx;
    padding: 6rpx 60rpx;
  }
}
.path_list{
  padding-left:20rpx ;
  .path_item{
    font-size: 14px;
    padding:10rpx;
    border-bottom:2rpx solid #CCCCCC;
  }
  .item_main
  {
    font-size: 14px;
    display:flex;
    align-items: center;
  }
  .active{
    padding-right:10rpx;
    background-color: #49BDFB;
    color: #FFFFFF;
    border-radius: 26rpx;
    font-size: 24rpx;
    text-align: center;
  }
  .item_name{
    padding-right:10rpx;
    
  }
}

</style>
