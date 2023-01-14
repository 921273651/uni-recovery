export default {
	config: {
		baseURL: 'http://192.168.31.63:3000/api/',
		// baseURL: 'http://localhost:3000/api/',
		// 处理token的方法
		getToken() {
			let token = uni.getStorageSync('token');
			// if (!token) {
			// 	return uni.reLaunch({
			// 		url: '/pages/login/login'
			// 	})
			// }
			return token
		},
		// 请求拦截器
		beforeRequest(options = {}) {
			return new Promise((resolve, reject) => {
			        options.url = this.baseURL + options.url;
			        options.method = options.method || 'GET';
			        // 封装自己的请求头
			        options.header = {
			          // token: this.getToken()
			          token: uni.getStorageSync('userInfo').userId
			        }
			        resolve(options)
			      })
		},
		// 响应拦截器
		handleResponse(data) {
			return new Promise((resolve, reject) => {
			        const [err, res] = data;
			        // 处理错误
			        if (res && res.statusCode !== 200) {
			          let msg = res.data.msg || '请求错误';
			          uni.showToast({
			            icon: 'none',
			            title: msg
			          });
					  return reject(msg);
			        }
			        if (err) {
			          uni.showToast({
			            icon: 'none',
			            title: '请求错误'
			          });
					  return reject(err);
			        }
					if (res && res.data && res.data.code!=='2000' && res.data.message) {
						uni.showToast({
						  icon: 'none',
						  title: res.data.message
						});
					}
					
			        return resolve(res.data)
			      })
		}
	},
	// request 请求
	request(options = {}) {
		return this.config.beforeRequest(options).then(opt => {
			return uni.request(opt);
		}).then(res => this.config.handleResponse(res))
	}
}
