<template>
	<!-- 地址管理 -->
	<view class="page_myAddress" >
		<!-- 地址列表开始 -->
		<view class="path_list">
			<view class='path_item' v-for="(item,index) in addressList " :key='index'
				@click="selectAddress(item.address_id)">
				<view class="item_main">
					<view class="item_name">{{item.address_username}}</view>
					<view>{{item.address_phoneNumber}}</view>
				</view>
				<view class="item_main">
					<view class="active" v-if="item.address_default==='1'">默认</view>
					<view>{{item.address_city}}{{item.address_information}}</view>
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
				addressList: [],
				addressId: '',
				fromPath: ''
			};
		},
		onLoad(option) {
			this.fromPath = option.fromPath;
			console.log('地址页', option);
			this.orderId = option.orderId;
		},
		onShow() {
			this.getAddressList();
			wx.hideHomeButton(); //消除返回首页按钮
		},
		methods: {
			addPath() {
				uni.navigateTo({
					url: `/pages/my_add_path/my_add_path?orderId=${this.orderId}`
				})
			},

			async getAddressList() {
				this.addressList = await this.$api.getAddressList();
			},

			async selectAddress(addressId) {
				if (this.fromPath === 'goods') {
					const res = await this.$api.selectAddress({
						orderId: this.orderId,
						addressId: addressId,
					})
					uni.navigateTo({
						url: '../commit_order/commit_order?addressId=' + addressId + '&orderId=' + this.orderId
					})
				} else if (this.fromPath === 'recycle') {
					const res = await this.$api.selectRecycleAddress({
						orderId: this.orderId,
						addressId: addressId,
					})
					// uni.navigateTo({
					// 	url: '/pages/recycle/recycle?orderId=' + this.orderId
					// })
					uni.navigateBack();
				}
			}
			
		},
	}
</script>

<style lang="scss">
  body{
    background: url(http://39.107.241.37:2020/static/images/bg/green1.jpg);
    background-size:cover; 
    
  }
	.add_path {
		padding: 30rpx 20rpx;
		width: 100%;
		display: flex;
		justify-content: center;

		.add_path_btn {
			border: 2px solid #DAA520;
			color: #DAA520;
			font-size: 16px;
			border-radius: 30rpx;
			padding: 6rpx 60rpx;
		}
	}

	.path_list {
		padding-left: 20rpx;

		.path_item {
			font-size: 14px;
			padding: 10rpx;
			border-bottom: 2rpx solid #DAA520;
		}

		.item_main {
			font-size: 14px;
			display: flex;
			align-items: center;
		}

		.active {
			padding-right: 10rpx;
			background-color: #49BDFB;
			color: #FFFFFF;
			border-radius: 26rpx;
			font-size: 24rpx;
			text-align: center;
		}

		.item_name {
			padding-right: 10rpx;

		}
	}
</style>
