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
    /* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
    @font-face {
      font-family: "iconfont"; /* Project id 3523521 */
      src: url('//at.alicdn.com/t/c/font_3523521_wf4hrb5crpa.woff2?t=1669975522450') format('woff2'),
           url('//at.alicdn.com/t/c/font_3523521_wf4hrb5crpa.woff?t=1669975522450') format('woff'),
           url('//at.alicdn.com/t/c/font_3523521_wf4hrb5crpa.ttf?t=1669975522450') format('truetype');
    }
    
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .icon-_clothes:before {
      content: "\e60b";
    }
    
    .icon-_zhixiang:before {
      content: "\e627";
    }
    
    .icon-fanhui:before {
      content: "\e601";
    }
    
    .icon-dingwei:before {
      content: "\e8ba";
    }
    
    .icon-clothes:before {
      content: "\e8c7";
    }
    
    .icon-dianqi:before {
      content: "\e634";
    }
    
    .icon-suliao:before {
      content: "\e63e";
    }
    
    .icon-_jiaju:before {
      content: "\e609";
    }
    
    .icon-zhongjinshu:before {
      content: "\e81a";
    }
    
    .icon-zhixiang:before {
      content: "\e61e";
    }
    
    .icon-_suliao:before {
      content: "\e8c8";
    }
    
    .icon-_zhongjinshu:before {
      content: "\e8cb";
    }
    
    .icon-_dianqi:before {
      content: "\e8ca";
    }
    
    .icon-jiaju:before {
      content: "\e8c9";
    }
    
    .icon-mine:before {
      content: "\e600";
    }
    
    .icon-shenghuodianmianduihuan:before {
      content: "\e645";
    }
    
    .icon-dingdan:before {
      content: "\e649";
    }
    
    .icon-xunhuan:before {
      content: "\e608";
    }
    
    .icon-shouye:before {
      content: "\e605";
    }
    
    .icon-tubiao-:before {
      content: "\e603";
    }
    
    .icon-jifenduihuan:before {
      content: "\e60a";
    }

  //放置公共文件，颜色属性
  .yellow{
     color: #ff4d00;
  }
</style>
