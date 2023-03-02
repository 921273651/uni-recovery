<template>
  <view class="order-page">
  	
  	<view class="list">
  		<uni-card v-for="(item, index) in orderList" :key="item.order_id" :title="`订单编号 ${item.order_id}`" :extra="item.order_status==='0'?'订单待确认':item.order_status==='1'?'待发货':item.order_status==='2'?'送货上门中':'已收货'" @click="gotoDetail(item.order_id,item.order_status,item.address_id)">
  			<view class="uni-body">
  				<p>兑换商品：{{item.cateName}}</p>
  				<p>{{item.address_username || ''}} {{item.address_phoneNumber || ''}}</p>
  				<p>地址：{{item.address_city || '待填写'}}{{item.address_information || ''}}</p>
  				<div class="list-box-bot"><p>花费积分：{{item.catePrice}}</p><button v-if="item.order_status==='2'" @click.stop="checkGoods(item.order_id)">确认收货</button>
           <button v-else style="background-color: #ffca4c;color:white;" @click.stop="deleteOrder(item.order_id)">删除</button>
          </div>
  			</view>
  		</uni-card>
  
  	</view>
  </view>
</template>

<script>
  export default {
  	data() {
  		return {
  			orderList: [],
        typeValue: 1
  		};
  	},
  	mounted(){
  		this.getOrderList();
  	},
  	methods:{
      
  		async getOrderList() {
  			const res = await this.$api.getOrderList();
  			if(res) {
  				this.orderList = res;
  			}
  		},
  		gotoDetail(orderId, orderStatus, addressId) {
  			uni.navigateTo({
  				url:`/pages/commit_order/commit_order?orderId=${orderId}&orderStatus=${orderStatus}&addressId=${addressId}`
  			})
  		},
      //删除数据
     async deleteOrder(orderId){
        const res = await this.$api.deleteOrder({orderId:orderId});
        if (res) {
        	uni.showToast({
        		title: '删除成功！',
        		icon: 'success',
        		duration: 1000
        	})
        	this.getOrderList()
        }
      },
  		async checkGoods(orderId) {
  			const res = await this.$api.checkOrder({orderId:orderId});
  			if (res) {
  				uni.showToast({
  					title: '确认收货成功！',
  					icon: 'success',
  					duration: 1000
  				})
  				this.getOrderList();
  			}
  		}
  	}
  }
</script>

<style lang="scss">
  .nav-box .nav {
  	/* 元素加了浮动之后，记得给父元素清除浮动 */
  	width: 100%;
  	display: flex;
  }
  
  .nav-box .nav .item {
  	// width: 100rpx;
  	flex: 1;
  	height: 60rpx;
  	border: solid 2rpx #eee;
  	text-align: center;
  	font-size: 32rpx;
  	line-height: 60rpx;
  	margin-left: 20rpx;
  	float: left;
  	border-radius: 20rpx;
  }
  
  .nav-box .nav .item.active {
  	/* 没有空格时，两个元素同时存在时，才会生效，在类中既有item 又有active*/
  	color: hotpink;
  }
  
  .list-box-bot {
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	margin-top: 30rpx;
  	button {
  		font-size: 32rpx;
  		margin: 0;
  	}
  }
</style>
