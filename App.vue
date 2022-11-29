<script>
	export default {
    
		onLaunch: function() {
      
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
  @import "./node_modules/uview-ui/index.scss";
  @import './components/wx-nav.css';
  @import './components/cate-title.css';
  @import url("./components/ifont-icon.css");
  
  @font-face {
      font-family: "iconfont"; /* Project id 3381719 */
      src: url('//at.alicdn.com/t/font_3381719_i4zxlym9z0g.woff2?t=1651884184921') format('woff2'),
           url('//at.alicdn.com/t/font_3381719_i4zxlym9z0g.woff?t=1651884184921') format('woff'),
           url('//at.alicdn.com/t/font_3381719_i4zxlym9z0g.ttf?t=1651884184921') format('truetype');
    }
    
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .icon-shop:before {
      content: "\e736";
    }
    
    .icon-star:before {
      content: "\e8b9";
    }
    
    .icon-map:before {
      content: "\e786";
    }
    
    .icon-chat:before {
      content: "\e606";
    }
    
    .icon-share:before {
      content: "\e8b0";
    }

  //放置公共文件，颜色属性
  .yellow{
     color: #ff4d00;
  }
</style>
