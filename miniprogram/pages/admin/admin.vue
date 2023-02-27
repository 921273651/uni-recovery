<template>
  <view class="admin-page" style="background: url(http://39.107.241.37:2020/static/images/bg/admin-bg.jpg) no-repeat; background-size: contain; ">
    <button class="order" type="default" @click="checkOrder">管理订单页 </button>
    <button class="change" type="default" @click="checkChange">管理兑换页 </button>
  </view>
</template>

<script>
  export default {
    
    data() {
      return {
        
      };
    },
    onShow() {
      wx.hideHomeButton(); 
    },
    methods:{
      checkOrder(){
        uni.navigateTo({
          url:'../admin-order/admin-order'
        })
      },
      checkChange(){
        uni.navigateTo({
          url:'../admin-change/admin-change'
        })
      },
    },
    
  }
</script>

<style lang="scss">
  *{
    margin:0;
    padding:0;
  }
.admin-page{
  height:500px;
  width: 100%;
  position: absolute;
  .order{
    width:200px;
    height:40px;
    font-size: 14px;
    margin-top: 50px;
    background-color: #ADD8E6;
  }
  .change{
    width:200px;
    height:40px;
    font-size: 14px;
     margin-top: 50px;
     background-color: #ADD8E6;
  }
}

</style>
