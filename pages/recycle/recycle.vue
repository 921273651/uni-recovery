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
       <p>{{item.item_name}}------{{item.item_price}}元/公斤</p>
      </view>
    </view>
    <!-- 价格展示结束 -->
    
    <!-- 详细信息开始 -->
    <view class="form">
      <view class="top">
        <span>预估重量({{idToName[category_id-1]}})：</span><input type="text" v-model="formdata.weightList[category_id-1]" style="width: 300rpx;" placeholder="单位为公斤" />
      </view>
      <view class="center">
        <view class="address">
          <view class="iconfont icon-dingwei" ></view>
          <text>预约地址：</text>
         <button>从地址簿选择</button>
        </view>
		<view class="top">
			<text>真实姓名：</text>
			<input type="text" v-model="formdata.realName" />
		</view>
		<view class="top">
			<text>上门地址：</text>
			<input type="text" v-model="formdata.address" />
		</view>
      </view>
      <view class="top">
        <text>手机号码：</text>
        <input type="text" v-model="formdata.cellPhone" />
      </view>
	  <view class="top">
	    <view class="uni-title uni-common-pl">预约上门日期：</view>
	    <view class="uni-list">
	      <view class="uni-list-cell">
	        <view class="uni-list-cell-db">
	          <picker mode="date" :value="formdata.date" @change="bindDateChange">
	            <view class="uni-input">{{formdata.date || '请选择'}}</view>
	          </picker>
	        </view>
	      </view>
	    </view>
	  </view>
      <view class="top">
        <view class="uni-title uni-common-pl">预约上门时间：</view>
        <view class="uni-list">
          <view class="uni-list-cell">
            <view class="uni-list-cell-db">
              <picker mode="time" :value="formdata.time" start="09:01" end="21:01" @change="bindTimeChange">
                <view class="uni-input">{{formdata.time || '请选择'}}</view>
              </picker>
            </view>
          </view>
        </view>
      </view>
      <view class="beizhu">备注：</view>
      <view class="top">
        <textarea v-model="formdata.remark" placeholder="请输入" />
      </view>
    </view>
    <!-- 详细信息结束 -->
    
    <!-- 按钮开始 -->
    <view class="button-group">
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
		formdata: {
			weightList:[],
			realName:'',
			address:'',
			cellPhone:'',
			time: '',
			date: '',
			remark: ''
		},
        category_id: 1,
        categoryList: [],
        itemList:[],
        activeIndex: 0,
		idToName:[
			'纸品类',
			'衣物类',
			'塑料类',
			'金属类',
			'家具类',
			'电器类'
		]
      }
    },

    onLoad(option) {
      this.getcateList();
      // console.log(option.id,'回收页');
      // this.category_id=option.id;


    },
    methods: {
      
      //拿到分类列表数据
      getcateList() {
        uni.request({
          url: 'http://localhost:3000/api/item/getItemList', //获取分类列表接口
          success: (res) => {
            console.log(res, '分类列表接口返回的信息');
            if (res.data.code == 2000) {
              this.categoryList = res.data.data;
			  this.category_id=this.categoryList[0].id;
			  this.formdata.weightList = new Array(this.categoryList.length).fill(0);
			  this.getDetail();
            }
          }
        })
      },
      
      //拿到当前分类id以及分类下的数据
      getDetail() {
        uni.request({
          url: 'http://localhost:3000/api/item/getInformation', //获取分类列表接口
          data: {
            category_id: this.category_id
          },
          success: (res) => {
            console.log(res, 'item接口返回的信息');
            if (res.data.code == 2000) {
              this.itemList=res.data.data;
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
        this.formdata.time = e.detail.value
      },
	  bindDateChange: function(e) {
	    this.formdata.date = e.detail.value
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
		  const res = await this.$api.orderRecycle({...this.formdata, orderType: type});
		  console.log('formdata',this.formdata)
	  }
    }

  }
</script>

<style lang="scss" scoped>
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
    border-top: 1px solid green;
    padding-top: 10px;

    .top {
      display: flex;
      flex-wrap: nowrap;
      margin-bottom: 20rpx;
    }

    image {
      width: 50rpx;
      height: 50rpx;
    }
  }

  .price {
    margin: 10px;
    // border-bottom: 1px solid green;
  }
.beizhu{
  margin-bottom: 10rpx;
}

  .center {
    margin-bottom: 20rpx;
    
    .address{
      display: flex;
      flex-wrap:nowrap;
      margin-bottom:10rpx ;
      button{
        width:30%;
        height: 60rpx;
        margin:0;
        font-size:12px;
        line-height: 23px;
        border: 1px solid green;
        padding:0;
      }
    }
    .icon-dingwei{
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
    border-bottom: 1px solid green;

    .scroll-view_H .scroll-view-item_H.active {
      color: hotpink;
    }
  }
</style>
