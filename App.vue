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
</style>
