<template>
  <view class="page_addPath">
    <view class="path_item">
        <view>收件人</view>
        <input type="text" v-model="address_name" placeholder="收件人姓名" />
    </view>
   <view class="path_item">
       <view>手机号</view>
       <input type="text" v-model="address_phoneNumber" placeholder="请输入11位手机号" />
   </view>
   <view class="path_item">
       <view>所在地址</view>
      <view @click="showCityPicker()">{{cityName}}</view>
      <mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault"  @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
   </view>
   <view class="path_item">
       <view>详细地址</view>
       <input type="text" v-model="address_information" placeholder="5-60个字符" />
   </view>
   <view class="path_item">
       <view>设为默认地址</view>
       <label class="radio"></label>
       <radio v-model="address_default" color="#FF3333"/><text></text>
   </view>
   <view class="add_path">
     <view class="add_path_btn" @click="addPath()">
      完成
     </view>
     
   </view>
  </view>
</template>

<script> 
import mpvueCityPicker from'../../components/mpvue-citypicker/mpvueCityPicker.vue'
  export default {
    data() {
      return {
        cityName:"请选择 >",
        pickerValueDefault:[0,0,1],
        address_name: '', 
        address_phoneNumber: '', 
        address_city: '', 
        address_information: '2', 
        address_default: 0
      };
    },
    components:{
      mpvueCityPicker
    },
    onShow(){
        wx.hideHomeButton();//消除返回首页按钮
      },
      onNavigationBarButtonTap() {
        uni.navigateBack({
          delta:1
        })
      },
      methods:{
        showCityPicker(){
          this.$refs.mpvueCityPicker.show();
        },
        onConfirm(e){
          this.address_city=e.label;
          this.cityName=e.label;
        },
        addPath(){
          console.log('111',this.address_name, this.address_phoneNumber, this.address_city, this.address_information, this.address_default)
          uni.request({
            url:'http://localhost:3000/api/address/getInsertAddress',
            method:'POST',
            data:{
              address_name:this.address_name, 
              address_phoneNumber:this.address_phoneNumber, 
              address_city:this.address_city, 
              address_information:this.address_information,
              address_default:this.address_default
            },
            success:(res) =>{
              console.log(res,'地址接口返回的信息');
              if(res.data.code==2000){
               this.addressList=res.data.data;
              
                console.log(res.data.data,'地址列表')
              }
            }
          })
        }
      }
  }
</script>

<style lang="scss">
.page_addPath{
  font-size: 14px;
  padding-left:20rpx ;
}
.path_item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:16rpx 0;
  width: 100%;
 border-bottom: 2rpx solid #CCCCCC;
}
 .path_item input{
    flex: 1;
    text-align: left;
    padding-left: 10rpx;
  }
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
</style>
