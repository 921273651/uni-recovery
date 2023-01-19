import fetch from './request.js';

export default {
	//获取分类列表
	async getItemList() {
		const res = await fetch.request({
			url: 'item/getItemList',

		});
		if (res.code === '2000') {
			return res.data;
		}
		return [];
	},
	//获取地址
	async getAddressList(params) {
		const res = await fetch.request({
			url: 'address/getAddress',
			data: params
		});
		if (res.code === '2000') {
			return res.data;
		}
		return [];
	},
	//插入新地址
	async getInsertAddress(params) {
		const res = await fetch.request({
			url: 'address/getInsertAddress',
			method: 'POST',
			data: params
		});
		if (res.code === '2000') {
			return res.data;
		}
		return [];
	},

	//选择收货地址
	async selectAddress(params) {
		const res = await fetch.request({
			url: 'goods/selectAdress',
			method: 'POST',
			data: params
		});
		if (res.code === '2000') {
			return res.data;
		}
		return [];
	},
	
	//选择回收订单收货地址
	async selectRecycleAddress(params) {
		const res = await fetch.request({
			url: 'recycle/selectRecycleAddress',
			method: 'POST',
			data: params
		});
		if (res.code === '2000') {
			return res.data;
		}
		return [];
	},
	
	//生成订单
	async creatOrder(params) {
		console.log('params123', params)
		const res = await fetch.request({
			url: 'goods/creatOrder',
			method: 'POST',
			data: params
		});
		console.log('params123', res)
		if (res.code === '2000') {
			return res.data;
		}
		return [];
	},
	
	//生成回收订单
	async createRecycleOrder(params) {
		const res = await fetch.request({
			url: 'recycle/createRecycleOrder',
			method: 'POST',
			data: params
		});
		if (res.code === '2000') {
			return res;
		}
		return null;
	},
	
	//获取回收订单列表
	async getRecycleOrderList(params) {
		const res = await fetch.request({
			url: 'recycle/getRecycleOrderList',
			method: 'POST',
			data: params
		});
		if (res.code === '2000') {
			return res.data;
		}
		return [];
	},
	
	//提交订单
	async submitOrder(params) {
		const res = await fetch.request({
			url: 'goods/submitOrder',
			method: 'POST',
			data: params
		});
		console.log('params123', res)
		if (res.code === '2000') {
			return res.data;
		}
		return null;
	},
	
	//确认收货
	async checkOrder(params) {
		const res = await fetch.request({
			url: 'goods/checkOrder',
			method: 'POST',
			data: params
		})
		if (res.code === '2000') {
			return res;
		}
		return null;
	},

	//确认回收
	async checkRecycle(params) {
		const res = await fetch.request({
			url: 'recycle/checkRecycle',
			method: 'POST',
			data: params
		})
		if (res.code === '2000') {
			return res;
		}
		return null;
	},
	
	//获取订单列表
	async getOrderList() {
		const res = await fetch.request({
			url: 'goods/getOrderList',
		})
		if (res.code === '2000') {
			return res.data;
		}
		return [];
	},


	async getCatesList(params) {
		const res = await fetch.request({
			url: 'goods/getCatesList',
			data: params,
		});
		if (res.code === '2000') {
			return res.data;
			console.log('商品列表获取成功', res)
		}
		return [];
	},

	async login(params) {
		const res = await fetch.request({
			url: 'user/login',
			method: 'POST',
			data: params
		});
		if (res.code === '2000') {
			return res.data[0];
		}
		return null;
	},

	async register(params) {
		const res = await fetch.request({
			url: 'user/register',
			method: 'POST',
			data: params
		});
		if (res.code === '2000') {
			return res;
		}
		return null;
	},

	async submitRecycleOrder(params) {
		const res = await fetch.request({
			url: 'recycle/submitRecycleOrder',
			method: 'POST',
			data: params
		});
		if (res.code === '2000') {
			return res;
		}
		return null;
	}
}
