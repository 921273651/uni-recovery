<template>
	<view class="order-page">

		<view class="nav-box">
			<view class="nav">
				<view class="item">
					<view>全部</view>
				</view>
				<view class="item">
					<view>待服务</view>
				</view>
				<view class="item">
					<view>已完成</view>
				</view>
			</view>
		</view>
		<view class="list">
			<uni-card v-for="(item, index) in orderList" :key="item.order_id" :title="`订单编号 ${item.order_id}`" :extra="item.order_status==='0'?'订单待确认':item.order_status==='1'?'待上门':'已完成'" @click="gotoDetail(item.order_id,item.order_status,item.address_id)">
				<view class="uni-body">
					<p>{{item.address_username || ''}} {{item.address_phoneNumber || ''}}</p>
					<p>地址：{{item.address_city || '待填写'}}{{item.address_information || ''}}</p>
					<!-- <p>交易金额：35元</p> -->
				</view>
			</uni-card>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: []
			};
		},
		async onShow(){
			const res = await this.$api.getOrderList();
			if(res) {
				this.orderList = res;
			}
			console.log('res2',res)
		},
		methods:{
			gotoDetail(orderId, orderStatus, addressId) {
				uni.navigateTo({
					url:`/pages/commit_order/commit_order?orderId=${orderId}&orderStatus=${orderStatus}&addressId=${addressId}`
				})
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
</style>
