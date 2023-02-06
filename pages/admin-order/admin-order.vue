<template>
  
  <view class="adminOrder">
    <view class="uni-container">
      				<uni-forms ref="dynamicForm" :modelValue="dynamicFormData">
      					<uni-forms-item label="用户名" required name="username">
      						<uni-easyinput v-model="dynamicFormData.username" placeholder="请输入姓名" />
      					</uni-forms-item>
      				</uni-forms>
      					<button type="primary" size="mini" @click="submit">搜索</button>
    			<uni-table ref="table" border stripe type="selection" emptyText="暂无更多数据" @selection-change="selectionChange">
    				<uni-tr>
    					<uni-th width="150" align="center">订单编号</uni-th>
              <uni-th width="150" align="center">用户名</uni-th>
    					<uni-th width="150" align="center">日期</uni-th>
    					<uni-th align="center">地址</uni-th>
              <uni-th width="150" align="center">订单内容</uni-th>
              <uni-th width="150" align="center">订单状态</uni-th>
    					<uni-th width="204" align="center">设置</uni-th>
    				</uni-tr>
    				<uni-tr v-for="(item, index) in orderList" :key="index">
    					<uni-td class="id">{{ item.order_id }}</uni-td>
              <uni-td>
              	<view class="username">{{ item.username }}</view>
              </uni-td>
    					<uni-td>
    						<view class="data">{{ item.data }}</view>
    					</uni-td>
              <uni-td align="center" class="address">{{ item.address }}</uni-td>
              <uni-td>
              	<view  class="content">{{ item.content }}</view>
              </uni-td>
              <uni-td>
              	<view class="status" >{{ item.status }}</view>
              </uni-td>
    					<uni-td>
    						<view class="uni-group">
    							<button class="uni-button" size="mini" type="primary">修改</button>
    							<button class="uni-button" size="mini" type="warn">删除</button>
    						</view>
    					</uni-td>
    				</uni-tr>
    			</uni-table>
    			<view class="uni-pagination-box" v-if="!loading">{{pageCurrent}}<uni-pagination show-icon :page-size="pageSize" v-model="pageCurrent" :total="total" @change="change" /></view>
    		</view>
  </view>
</template>

<script>
  export default {
    
    data() {
      return {
        orderList:[],
        dynamicFormData:{
          username:""
        },
        searchVal: '',
        			
        			// 每页数据量
        			pageSize: 2,
        			// 当前页
        			pageCurrent: 1,
        			// 数据总量
        			total: 0,
        			loading: false
      };
    },
    onLoad() {
    		this.selectedIndexs = []
    	},
      onShow(){
        this.getOrderlist(this.pageCurrent)
      },
     methods:{
       //获取订单列表
       async getOrderlist(pageCurrent){
         const res = await this.$api.getRecycleOrderList({isAdmin:true, searchData: this.dynamicFormData, pageCurrent, pageSize: this.pageSize});
         if(res) {
          this.orderList = res.data;
          this.total = res.total;
         	console.log(this.orderList,'orderList')
         }
         else{
           console.log('请求错误')
         }
       },
	   submit(){
			 this.loading = true;
			 this.pageCurrent = 1;
			 this.loading = false;
			 this.getOrderlist(1)
	   },
       change(e){
         this.getOrderlist(e.current)
       }
     }
      
      		// 多选处理
      		// selectedItems() {
      		// 	return this.selectedIndexs.map(i => this.tableData[i])
      		// },
      		// // 多选
      		// selectionChange(e) {
      		// 	console.log(e.detail.index)
      		// 	this.selectedIndexs = e.detail.index
      		// },
      		// //批量删除
      		// delTable() {
      		// 	console.log(this.selectedItems())
      		// },
      		// 分页触发
      		
      		// 搜索
      	
      		// 获取数据
      		
      		// 伪request请求
      	
  }
</script>

<style lang="scss">
.uni-group {
	display: flex;
	align-items: center;
}
.form-item {
		display: flex;
		align-items: center;
	}
</style>
