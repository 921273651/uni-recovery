<template>
  <view class="admin-page" style="background: url(../../static/images/bg/admin-bg.jpg) no-repeat; background-size: contain; ">
    <button class="order" type="default">管理订单页 </button>
    <button class="change" type="default">管理兑换页 </button>
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
