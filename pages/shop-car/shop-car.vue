<template>
  <view class="page-box">
    <!-- 头部 start -->
    <view class="top-box">
      <view class="iconfont icon-fanhui" @click="goBack()"> </view>
      <view class="top-right">
        <view class="left">共一件商品</view>
        <view class="right" @click="()=> {isDelete = !isDelete}"> {{isDelete ? '完成' : '编辑'}} </view>
      </view>
    </view>
    <!-- 头部end -->
    
    <!-- 购物车商品列表 -->
    <view class="item-list">
      <view class="item">
        <checkbox-group name="">
          <checkbox :value="1" checked="false" />
        </checkbox-group>

        <view class="pic">
          <image src="../../static/catfood1.jpg" mode=""></image>
        </view>
        <view class="content">
          <view class="title">优质猫粮优质猫粮优质猫粮优质猫粮</view>
          <view class="desc">
            规格：标准
          </view>
          <view class="price-info">
            <view class="price yellow">￥88</view>

            <view class="oper">
              <view class="reduce">
                -
              </view>
              <input type="text" value="2" />
              <view class="add">+</view>

            </view>
          </view>
        </view>
      </view>
      <!-- <view class="item">
       <checkbox-group name="">
           <checkbox :value="1" checked="false" /> </checkbox-group>
       
       <view class="pic">
         <image src="../../static/catfood1.jpg" mode=""></image>
       </view>
       <view class="content">
         <view class="title">优质猫粮优质猫粮优质猫粮优质猫粮</view>
         <view class="desc">
           规格：标准
         </view>
         <view class="price-info">
           <view class="price yellow">￥88</view>
        
         <view class="oper">
           <view class="reduce">
             -
           </view>
           <input type="text" value="2" />
           <view class="add">+</view>
           
         </view>
          </view>
       </view>
     </view>
     <view class="item">
       <checkbox-group name="">
           <checkbox :value="1" checked="false" /> </checkbox-group>
       
       <view class="pic">
         <image src="../../static/catfood1.jpg" mode=""></image>
       </view>
       <view class="content">
         <view class="title">优质猫粮优质猫粮优质猫粮优质猫粮</view>
         <view class="desc">
           规格：标准
         </view>
         <view class="price-info">
           <view class="price yellow">￥88</view>
        
         <view class="oper">
           <view class="reduce">
             -
           </view>
           <input type="text" value="2" />
           <view class="add">+</view>
           
         </view>
          </view>
       </view>
     </view>
     <view class="item">
       <checkbox-group name="">
           <checkbox :value="1" checked="false" /> </checkbox-group>
       
       <view class="pic">
         <image src="../../static/catfood1.jpg" mode=""></image>
       </view>
       <view class="content">
         <view class="title">优质猫粮优质猫粮优质猫粮优质猫粮</view>
         <view class="desc">
           规格：标准
         </view>
         <view class="price-info">
           <view class="price yellow">￥88</view>
        
         <view class="oper">
           <view class="reduce">
             -
           </view>
           <input type="text" value="2" />
           <view class="add">+</view>
           
         </view>
          </view>
       </view>
       
     </view> -->

    </view>

    <!-- 列表end -->

    <!-- 底部结算start -->
    <view class="total-box">
      <view class="all">
        <label>
          <checkbox :value="1" :checked="false" /><text></text>
        </label>
        <text>全选</text>
      </view>
      <view class="total-price">
        总价：<text class="price yellow">￥0</text>
      </view>
      <view class="btn">
        <view :class="totalPrice>0 ? 'btn-primary':'btn-default'" @click="deleteOrSubmit(isDelete)">{{isDelete ? '删除' : '去结算'}}</view>
      </view>
    </view>

    <!-- 底部结算end -->
  </view>


</template>

<script>
  export default {
    data() {
      return {
        totalPrice: 0,
        carsId: '', //返回的商品id
        imgList: [], //返回商品图片
        basicInfo: {}, //返回商品信息
        content: {},
        isDelete: false
      };
    },
    onLoad(option) {
      console.log(option.id, '购物车页');
      this.carsid = option.id;
      this.getcar();
    },

    methods: {
      getcar() {
        uni.request({
          url: 'https://api.it120.cc/Milk00/shop/goods/detail',
          data: {
            id: this.carsid
          },
          success: (res) => {
            console.log(res, '商品详情接口返回的信息');

            if (res.data.code == 0) {
              this.imgList = res.data.data.pics2;
              this.basicInfo = res.data.data.basicInfo;
              this.content = res.data.data.content;
              // this.numInfo=res.data.data.properties[0];
              // this.numList=this.numInfo.childsCurGoods;
              // console.log(this.numList,'数量列表')


            }
            if (res.data && res.data.success) {
              uni.showToast({

                title: '加入成功',
                icon: 'none',
                duration: '2000'

              })
            }
          }
        })
      },
      goBack() {
        uni.navigateBack({
          delta: 1
        })
      },
      deleteOrSubmit(isDelete) {
        if(isDelete){
          console.log('删除');
        }else {
          console.log('结算');
        }
      }

    },
  }
</script>

<style lang="scss">
  .page-box {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #F5F5F5;

  }

  .top-box {
    display: flex;
    // width: calc(100vw - 120px);
    height: 160rpx;
    line-height: 180rpx;
    background: #eee;
    padding: 0 30rpx; //上下为零，左右为30rpx
    padding-right: 100px;
    font-size: 32rpx;
    .top-right {
      flex: 1;
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
    }
  }

  .item-list .item {
    background: #FFFFFF;
    padding: 20rpx;
    display: flex; //将子元素排成一整行
    align-items: center; //垂直居中
  }

  .item-list .item .pic image {
    width: 160rpx;
    height: 160rpx;
  }

  .item-list .item .content {
    margin-left: 20rpx
  }

  .item-list .item .content .title {
    font-size: 32rpx;
  }

  .item-list .item .content .desc {
    font-size: 28rpx;
    color: #999;
  }

  .item-list .item .content .price-info {
    display: flex;
  }

  .item-list .item .content .price-info .price {
    width: 65%;
    font-size: 36rpx;
  }

  .item-list .item .content .price-info .oper {
    display: flex;
    border: solid 2rpx #ccc;
    border-radius: 10rpx;
  }

  .item-list .item .content .price-info .add {
    width: 50rpx;
    text-align: center;
    border-left: solid 2rpx #ccc;
  }

  .item-list .item .content .price-info .reduce {
    width: 50rpx;
    text-align: center;
    border-right: solid 2rpx #ccc;
  }

  .item-list .item .content .price-info .oper input {
    width: 80rpx;
    text-align: center;
    font-size: 24rpx;
  }

  .total-box {
    display: flex;
    position: fixed;
    left: 0;
    height: 110rpx;
    bottom: 0;
    background: #FFFFFF;
    width: 100%;
    align-items: center;
    padding: 0 20rpx;
    box-sizing: border-box; //宽度超出后可设置box-sizing
  }

  .total-box .all {
    font-size: 24rpx;
    width: 200rpx;
    margin-top: 15rpx;
  }

  .total-box .total-price {
    font-size: 24rpx;
    flex: 1; //撑开盒子
  }

  .total-box .total-price .price {
    font-size: 36rpx;

  }

  .total-box .btn {
    width: 130rpx;
    height: 70rpx;
    font-size: 32rpx;
    line-height: 70rpx;
    text-align: center;
    border-radius: 10rpx;
  }

  .total-box .btn-default {
    background: #EEEEEE;
    color: #666666;
  }

  .total-box .btn-primary {
    background-color: #ff4d00;
    color: #FFFFFF;
  }
</style>
