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
		<div>
			<button type="default" v-if="!isCreated" @click="createRecycleOrder()">预约上门回收</button>
		</div>
		<view class="list">
			<uni-card v-for="(item, index) in orderList" :key="item.order_id" :title="`订单编号 ${item.order_id}`" :extra="statusToName[item.order_status]" @click="gotoDetail(item.order_id,item.order_status,item.address_id)">
				<view class="uni-body">
					<p v-for="(iitem,iindex) in item.estimated_weight">回收{{categoryList[iindex].category}}：{{iitem}}kg</p>
					<p>{{item.address_username || ''}} {{item.address_phoneNumber || ''}}</p>
					<p>地址：{{item.address_city || '待填写'}}{{item.address_information || ''}}</p>
					<!-- <div class="list-box-bot"><p>花费积分：{{item.catePrice}}</p></div> -->
					<div class="list-box-bot"><p>回收类型：{{item.order_type==='1'?'公益捐赠':'正常'}}</p><button v-if="item.order_status==='2'" @click.stop="checkRecycle(item.order_id)">确认回收</button></div>
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
				categoryList: [],
				statusToName: {
					'0': '待确认',
					'1': '等待商家接单',
					'2': '上门回收中',
					'3': '已回收',
					'4': '商家已拒单',
				}
			};
		},
		onShow(){
			this.getOrderList();
			this.getcateList();
		},
		methods:{
			getcateList() {
				uni.request({
					url: 'http://localhost:3000/api/item/getItemList', //获取分类列表接口
					success: (res) => {
						console.log(res, '分类列表接口返回的信息');
						if (res.data.code == 2000) {
							this.categoryList = res.data.data;
							console.log('this.categoryList',this.categoryList)
						}
					}
				})
			},
			async getOrderList() {
				const res = await this.$api.getRecycleOrderList();
				if(res) {
					this.orderList = res;
					this.orderList.map(i=>i.estimated_weight = i.estimated_weight.split(','))
				}
			},
			gotoDetail(orderId, orderStatus, addressId) {
				uni.navigateTo({
					url:`/pages/recycle/recycle?orderId=${orderId}&orderStatus=${orderStatus}`
				})
			},
			createRecycleOrder() {
				uni.showModal({
					title: '提示',
					content: '是否生成回收订单 ？',
					success: async (res) => {
						if (res.confirm) {
							console.log('用户点击确定')
							const res1 = await this.$api.createRecycleOrder()
							if (res1) {
								uni.showToast({
									title: '成功生成订单~',
									icon: 'success',
									duration: 1000
								})
								uni.navigateTo({
									url: `/pages/recycle/recycle?orderId=${res1.data.insertId}&orderStatus=0`
								})
							}
						} else {
							console.log('用户点击取消')
						}
					}
				})
			},
			async checkRecycle(orderId) {
				const res = await this.$api.checkRecycle({orderId:orderId});
				if (res) {
					uni.showToast({
						title: '确认回收成功！',
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
