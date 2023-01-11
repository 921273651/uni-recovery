import fetch from './request.js';

export default {
	async getItemList() {
		const res = await fetch.request({
			url: 'item/getItemList'
		});
		if (res.code === '2000') {
			return res.data;
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
	}
}
