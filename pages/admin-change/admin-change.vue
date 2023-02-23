<template>
 <view class="adminChange">
   <view class="uni-container">
     				<!-- 根据用户名查找用户订单 -->
     				<uni-forms ref="dynamicForm"  :modelValue="dynamicFormData">
     					<uni-forms-item label="用户名" required name="username">
     						<uni-easyinput v-model="dynamicFormData.username" placeholder="请输入姓名" />
     					</uni-forms-item>
     				</uni-forms>
     					<button type="primary" size="mini" @click="submit('dynamicForm')">搜索</button>
   			<uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据" @selection-change="selectionChange">
   				<uni-tr>
   					<uni-th width="50" align="center">订单编号</uni-th>
             <uni-th width="80" align="center">用户名</uni-th>
   					<uni-th width="80" align="center">日期</uni-th>
   					<uni-th align="center">地址</uni-th>
             <uni-th width="100" align="center">订单内容</uni-th>
             <uni-th width="80" align="center">订单状态</uni-th>
   					<uni-th width="150" align="center">设置</uni-th>
   				</uni-tr>
   				<uni-tr v-for="(item, index) in changeList" :key="index">
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
   			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
   		</view>
 </view>
</template>

<script>
  export default {
    data() {
      return {
        changeList:[],
      };
    },
    onShow() {
     this.getChangelist();
    },
    methods:{
      async getChangelist(){
        const res = await this.$api.getOrderList({isAdmin:true});
        if(res) {
        	this.changeList = res;
          
        	console.log(this.changeList,'changeList')
        }
        else{
          console.log('请求错误')
        }
      },
    }
  }
</script>

<style lang="scss">

</style>
