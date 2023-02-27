<template>
  <view class="page-details">
    <!-- 详情页顶部 -->
    <view class="wx-nav">
      <view class="iconfont icon-fanhui" @click="goBack()"> </view>
      <view style="width:700rpx; text-align: center;">
        商品详情
      </view>

    </view>
    <!-- 顶部结束 -->

    <!-- 轮播开始 -->
    <view class="top">
      <!-- 调用getgoodslist 拿到当前点击商品id下的所有数据，选择图片数据，在data中，src中写data中列表的名字 -->
      <image class="detail" :src="src">

      </image>
    </view>
     

		
    
    <!-- 积分与名称开始  -->
    <view class="details-goods">
      <view class="goods_name"></view>
      <view class="goods_points">
        100积分
      </view>
      <view class="goods_content">精品定制口罩精品定制口罩精品定制口罩精品定制口罩精品定制口罩精品定制口罩精品定制口罩精品定制口罩</view>
      <!-- 详情开始 -->
      <view>
        <view>
          <image class="detail-image" src="http://39.107.241.37:2020/static/images/home/goods/1.png" mode=""></image>
      
      
        </view>
      </view>
      <!-- 详情结束 -->
    </view>
    <!-- 积分与名称结束 -->

    

    <Card cardTitle='推荐活动'></Card>
    <CateList :CatesList="CatesList"></CateList>
    <!-- 底部导航开始 -->
    <view class="bottom-nav">
      <button class="add-cart" @click="btnBuy()">
        立即兑换
      </button>

    </view>
    <!-- 底部导航结束 -->
  </view>
</template>

<script>
  import Card from '@/common/Card.vue'
  import CateList from '@/common/CateList.vue'
  export default {
    data() {
      return {
        goodsId: '',
        src: 'http://39.107.241.37:2020/static/images/home/goods/1.png',
        CatesList: [

        ]
      };
    },
    onLoad(option) {
      console.log(option.id, '商品详情页');
      this.goodsId = option.id;
      this.getGoodsList()
    },
    methods: {
      async getGoodsList() {
        this.CatesList = await this.$api.getCatesList({
          cateType: 'goods',
          goodId: this.goodsId,
        });
      },
      //查找当前id的商品所有信息

      goBack() {
        uni.navigateBack({
          delta: 1
        })
      },
      btnBuy() {
        uni.showModal({
          title: '提示',
          content: '确认兑换 ？',
          success: async (res) => {
            if (res.confirm) {
              console.log('用户点击确定')
              const res1 = await this.$api.creatOrder({
                goodId: this.goodsId
              })
              console.log('res1', res1);
              uni.navigateTo({
                url: `/pages/commit_order/commit_order?orderId=${res1.insertId}`
              })
            } else {
              console.log('用户点击取消')
            }
          }
        })
      }
    },
    // 引入自定义组件需在components底下加入
    components: {
      Card,
      CateList
    }
  }
</script>

<style lang="scss">
  
.detail{
width: 100%;
height:200px;
// border-radius: 10px;
}
  .wx-nav {
    height: 60px;
  }

  .details-goods {
display: flex;
left:0;
margin-bottom: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    padding: 10rpx 0;

    .goods_content {
      font-size: 12px;
    }
  }

  .bottom-nav {
    height: 100rpx;
    background: #fff;
    width: 100%;
    display: flex;
    position: fixed; //定位
    left: 0;
    bottom: 0;

  }

  // flex等比例缩放
  .bottom-nav .add-cart {
    flex: 1;
    text-align: center;
    line-height: 100rpx;
    font-size: 36rpx;
    background: #ffcc00;
    padding: 10rpx;
    border-radius: 20px;
    color: #FFFFFF;
  }

  .bottom-nav .btn-buy {
    flex: 1;
    text-align: center;
    line-height: 100rpx;
    font-size: 36rpx;
    background: #FE7302;
    color: #FFFFFF;
  }
</style>
