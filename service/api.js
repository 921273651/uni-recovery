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
  
 async getAddressList(){
   const res = await fetch.request({
   	url: 'address/getAddress',
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
      data:params
		});
		if (res.code === '2000') {
			return res.data;
		}
		return [];
	},
//获取商品详情

async getCatesList(params) {
		const res = await fetch.request({
			url: 'goods/getCatesList',
      data: params,
		});
		if (res.code === '2000') {
			return res.data;
      console.log('商品列表获取成功',res)
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
