<template>
  <view class="recycle-page">
  	<!-- 分类选择开始 -->
  	<view class="nav">
  		<view>
  			<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="10">
  				<view id="demo3" class="scroll-view-item_H" v-for="(item,index) in categoryList" :key="index"
  					@click="pick(index)" :class="activeIndex == index ? 'active' : ''">
  					<p>{{item.category}}</p>
  				</view>
  			</scroll-view>
  		</view>
  	</view>
  	<!-- 分类选择结束 -->
  
  	<!-- 价格展示开始 -->
  	<view class="price">
  		<p>今日指导价</p>
  		<view class="title" v-for="(item,index) in itemList" :key="index">
  			<p class="item">{{item.item_name}}------{{item.item_price}}元/公斤</p>
  		</view>
  	</view>
  	<!-- 价格展示结束 -->
  
  	<!-- 详细信息开始 -->
  	<view class="form">
  		
  		<view class="center">
  			<view class="address">
  				<view class="iconfont icon-dingwei"></view>
  				<text>预约地址：</text>
  				<button @click="gotoAddress" :disabled="!isEdit">从地址簿选择</button>
  			</view>
  			<view class="address-info-box">
  				<view class="row1">
  					<view class="row1-left">
  						<view class="username">收货人:{{formdata.address_username || ''}} </view>
  					</view>
  					<view class="row1-right">
  						<view class="phone">电话：{{formdata.address_phoneNumber || ''}}</view>
  						<!-- <uni-icons type="arrowright" size=16></uni-icons> -->
  					</view>
  				</view>
  				<view class="row2">
  					<view class="row2-left">
  						收货地址：
  					</view>
  					<view class="row2-right">
  						{{formdata.address_city || ''}}{{formdata.address_information || ''}}
  					</view>
  				</view>
  			</view>
  		</view>
  		<view>
  			<view class="subscrible">
          <view class="top">
          	<span>预估重量({{idToName[category_id-1]}})：</span><input type="number" :disabled="!isEdit"
          		v-model="weightList[category_id-1]" style="width: 300rpx;" placeholder="单位为公斤" />
          </view>
  				<p class="uni-title uni-common-pl">预约上门日期：</p>
  				<view class="uni-list">
  					<view class="uni-list-cell">
  						<view class="uni-list-cell-db">
  							<picker mode="date" :value="formdata.call_date" @change="bindDateChange"
  								:disabled="!isEdit">
  								<view class="uni-input">{{formdata.call_date || '请选择'}}</view>
  							</picker>
  						</view>
  					</view>
  				</view>
  				<view class="uni-title uni-common-pl">预约上门时间：</view>
  				<view class="uni-list">
  					<view class="uni-list-cell">
  						<view class="uni-list-cell-db">
  							<picker mode="time" :value="formdata.call_time" start="09:01" end="21:01"
  								@change="bindTimeChange" :disabled="!isEdit">
  								<view class="uni-input">{{formdata.call_time || '请选择'}}</view>
  							</picker>
  						</view>
  					</view>
  				</view>
  			</view>
  			<view class="beizhu">备注：
  			<view class="textare">
  				<textarea  class="shuru"  style="border-radius: 10px; border:1px solid white;"v-model="formdata.remark" placeholder="请输入" :disabled="!isEdit" />
  			</view>
        </view>
  		</view>
  	</view>
  	<!-- 详细信息结束 -->
  
  	<!-- 按钮开始 -->
  	<view class="button-group" v-if="orderStatus==='0'">
  		<button type="primary" plain="true" @click="submit(1)">公益捐赠</button>
  		<button type="primary" plain="true" @click="submit(2)">确定下单</button>
  	</view>
  	<!-- 按钮结束 -->
  
  
  </view>
</template>

<script>
  export default {
    data() {
    	return {
    		formdata: {},
    		weightList: [],
    		isLoading: true,
    		orderId: '',
    		orderStatus: '0',
    		addressId: '',
    		address: {},
    		category_id: 1,
    		categoryList: [],
    		itemList: [],
    		activeIndex: 0,
    		idToName: [
    			'纸品类',
    			'衣物类',
    			'塑料类',
    			'金属类',
    			'家具类',
    			'电器类'
    		],
    		isEdit: false
    	}
    },
    async onShow() {
      this.isLoading = true;
      const res = await this.$api.createRecycleOrder();
      if (res) {
        this.orderId = res.data.insertId || res.data[0].order_id;
      }
      this.orderStatus = '0';
      this.isEdit = this.orderStatus === '0';
      await this.getcateList();
      await this.getOrderList({
      	orderId: this.orderId
      });
      this.isLoading = false;
    	if (!this.isLoading) {
    		const res = await this.$api.getRecycleOrderList({
    			orderId: this.orderId
    		});
    		this.formdata.address_username = res[0].address_username;
    		this.formdata.address_phoneNumber = res[0].address_phoneNumber;
    		this.formdata.address_city = res[0].address_city;
    		this.formdata.address_information = res[0].address_information;
    	}
    },
    methods: {
    	async getOrderList(params) {
    		const res = await this.$api.getRecycleOrderList(params);
    		if (res) {
    			this.formdata = res[0];
    			this.weightList = res[0].estimated_weight.split(',');
    		}
    	},
    
    	//拿到分类列表数据
    	getcateList() {
    		uni.request({
    			url: 'http://39.107.241.37:8808/api/item/getItemList', //获取分类列表接口
    			success: (res) => {
    				console.log(res, '分类列表接口返回的信息');
    				if (res.data.code == 2000) {
    					this.categoryList = res.data.data;
    					this.category_id = this.categoryList[0].id;
    					this.formdata.weightList = new Array(this.categoryList.length).fill(0);
    					this.getDetail();
    				}
    			}
    		})
    	},
    
    	//拿到当前分类id以及分类下的数据
    	getDetail() {
    		uni.request({
    			url: 'http://39.107.241.37:88088808/api/item/getInformation', //获取分类列表接口
    			data: {
    				category_id: this.category_id
    			},
    			success: (res) => {
    				console.log(res, 'item接口返回的信息');
    				if (res.data.code == 2000) {
    					this.itemList = res.data.data;
    					console.log(res.data.data, '分类详细列表')
    				}
    			}
    		})
    	},
    
    	//时间选择器
    	bindPickerChange: function(e) {
    		console.log('picker发送选择改变，携带值为', e.detail.value)
    		this.index = e.detail.value
    	},
    	bindTimeChange: function(e) {
    		this.formdata.call_time = e.detail.value
    	},
    	bindDateChange: function(e) {
    		this.formdata.call_date = e.detail.value
    	},
    	//从index找到对应的分类id，方便后续传值
    	pick(index) {
    		console.log(this.categoryList[index].id);
    		this.category_id = this.categoryList[index].id;
    		this.activeIndex = index;
    		console.log(index, this.activeIndex, '我点击了分类标题');
    		this.getDetail()
    	},
    
    	async submit(type) {
    		this.formdata.estimated_weight = this.weightList.join(',');
    		const res = await this.$api.submitRecycleOrder({
    			...this.formdata,
    			orderType: type
    		});
    		uni.showToast({
    			title: '成功下单~',
    			icon: 'success',
    			duration: 1000,
    			success: () => {
    			  setTimeout(() => {
    			    uni.reLaunch({
    			      url: '/pages/order/order'
    			    })
    			  }, 500)
    			}
    		})
    		console.log('formdata', this.formdata)
    	},
    	gotoAddress() {
    		uni.navigateTo({
    			url: `/pages/address/address?orderId=${this.orderId}&fromPath=recycle`
    		})
    	}
    }
  }
</script>

<style lang="scss">
	.recycle-page{
	    background-color: #d5ebe1;
	  }
		.address-info-box {
			// border: 1px solid red;
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
	.subscrible{
	  background-color: #ffffff;
	  border-radius: 10px;
	}
		.iconfont {
			font-size: 100rpx;
		}
	
		.scroll-view_H {
			white-space: nowrap;
			width: 100%;
			height: 85rpx;
		}
	
		.scroll-view-item {
			height: 170rpx;
			text-align: center;
			font-size: 36rpx;
		}
	
		.scroll-view-item_H {
			display: inline-block;
			width: 200rpx;
			height: 85rpx;
			text-align: center;
			font-size: 36rpx;
		}
	
		.form {
			margin: 10px;
			// border-top: 1px solid green;
			// padding-top: 10px;
	
			.top {
				display: flex;
				flex-wrap: wrap;
				margin-bottom: 20rpx;
			}
	
			image {
				width: 50rpx;
				height: 50rpx;
			}
		}
	
		.price {
			// margin: 10px;
			border-bottom: 1px solid green;
      border-top: 1px solid green;
	    background-color: #fff9e4;
	    border-radius: 10px;
	    .item{
	      width: 280px;
	      background-color: #ffffff;
	      border-radius: 10px;
	      margin:10px;
	      
	    }
		}
	
		.beizhu {
      margin-top: 10px;
      background-color: #ffffff;
       border-radius: 10px;
			margin-bottom: 10rpx;
     
		}
	.textare{
	   border-radius: 10px;
     .shuru{
       width: 95%;
     }
	}
		.center {
			margin-bottom: 20rpx;
	background-color: #ffffff;
	border-radius: 10px;
			.address {
				display: flex;
				flex-wrap: nowrap;
				margin-bottom: 10rpx;
	
				button {
					width: 30%;
					height: 60rpx;
					margin: 0;
					font-size: 12px;
					line-height: 23px;
					border: 1px solid green;
					padding: 0;
				}
			}
	
			.icon-dingwei {
				width: 60rpx;
				height: 60rpx;
				font-size: 40rpx;
			}
	
		}
	
		input {
			border: 1px solid black;
		}
	
		textarea {
			border: 1px solid black;
			margin: 0 auto;
		}
	
		.button-group {
			display: flex;
			flex-wrap: nowrap;
	
			button {
				width: 40%;
			}
		}
	
		.nav {
			// border-bottom: 1px solid green;
	
			.scroll-view_H .scroll-view-item_H.active {
				color: hotpink;
			}
		}
</style>

