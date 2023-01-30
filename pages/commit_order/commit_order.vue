<template>
	<view>
		<!-- 发货确定订单 -->
		<view class="page_commitOrder">
			<!-- 顶部信息页开始 -->
			<view class="inform">
				<view class="order_top">
					<view>收货信息</view>
				</view>

				<view class="order_info">
					<!-- 选择地址盒子 -->
					<!-- 用v-if 和v-else来控制出现的盒子 如果address内容为空，则显示选择收货地址盒子 -->
					<view class="address-choose-box" v-if="JSON.stringify(address)=== '{}'">
						<button type="primary" size="mini" class="btn_chooseAddress" @click="pickAddress">
							请选择收获地址+
						</button>

					</view>
					<!-- 默认地址的节点 -->
					<view class="address-info-box" v-else @click="pickAddress">
						<view class="row1">
							<view class="row1-left">
								<view class="username">收货人:{{address.address_username}} </view>
							</view>
							<view class="row1-right">
								<view class="phone">电话：{{address.address_phoneNumber}}</view>
								<uni-icons type="arrowright" size=16></uni-icons>
							</view>
						</view>
						<view class="row2">
							<view class="row2-left">
								收货地址：
							</view>
							<view class="row2-right">
								{{address.address_city}}{{address.address_information}}
							</view>
						</view>
					</view>
					<!-- <view class="order_name"></view>
        <view class="order_phone"></view>
        <view class="order_address"></view> -->

				</view>

				<!-- 顶部信息页结束 -->
				<!-- 中间商品列表开始 -->

				<!-- <view class="order_center">
        <view class="center_img"></view>
        <view class="center_content"></view>
        <view class="center_num"></view>
        <view class="center_price"></view>
      </view> -->


				<!-- 中间商品列表结束 -->
				<!-- 底部结算开始 -->
				<view class="order_bottom">
					<button v-if="orderStatus==='0'" type="primary" size="mini" class="ordbtn"
						@click="submitOrder">确认提交</button>

				</view>
				<!-- 底部结算结束 -->

			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				address: {

				},
				orderId: '',
				addressId: '',
				orderStatus: '0'
			};
		},
		async onLoad(option) {
			this.orderId = option.orderId;
			this.addressId = option.addressId;
			this.orderStatus = option.orderStatus || '0';
			console.log('addressId', this.addressId)
			if (option.addressId) {
				const res = await this.$api.getAddressList({
					addressId: this.addressId
				});
				if (res) {
					console.log('res', res);
					this.address = res[0];
				}
			}

		},
		onShow() {
			wx.hideHomeButton(); //消除返回首页按钮
		},
		methods: {
			pickAddress() {
				if (this.orderStatus === '0') {
					uni.navigateTo({
						url: `/pages/address/address?orderId=${this.orderId}&fromPath=goods`
					})
				}
			},
			async submitOrder() {
				console.log('or', this.orderId)
				if (this.addressId && this.addressId!=='null') {
					const res = await this.$api.submitOrder({
						orderId: this.orderId
					});
					if (res) {
						uni.reLaunch({
							url: '/pages/order/order'
						})
					}
				} else {
					uni.showToast({
						title: '未选择收货地址',
						icon: 'none',
						duration: 1000,
					})
				}
			}
			// async chooseAddress() {
			//   const [err, succ]  = await uni.chooseAddress().catch(err => err)
			//   if (err === null && succ.errMsg === 'chooseAddress:ok') {
			//     console.log('succ', succ)
			//     this.address=succ
			//   }
			//   // console.log(res)
			// },
		},
		computed: {
			// 计算属性，收货地址的拼接
			addstr() {
				if (!this.address.provinceName) return ''

				return this.address.provinceName + this.address.cityName + this.address.countyName + this.address
					.detailInfo
			}
		}
	}
</script>

<style lang="scss">
	.order_top {
		height: 35px;
		background-color: #D3D3D3;
	}

	.order_info {
		border-bottom: 1px solid red;
		margin: auto;
		font-size: 12px;
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 5px;

		.row1 {
			display: flex;
			justify-content: space-between;

			.row1-right {
				display: flex;
				justify-content: space-between;

				.phone {}
			}

			.row1-left {
				.username {}
			}
		}

		.row2 {
			display: flex;

			align-items: center;
			margin-top: 10px;

			.row2-left {
				white-space: nowrap;
			}

			.row2-right {}
		}

		.address-choose-box {
			text-align: center;
		}

	}

	.order_bottom {
		margin-top: 100rpx;
		display: flex;
		justify-content: center;
	}
</style>
