<template>
  <view class="page_recommand">
    <Cates :recommand="catesList"> </Cates>
  </view>
</template>

<script>
  import Cates from './Cates.vue'
  export default {
    data() {
      return {
        props:{
          Cates:String
        }
      };
    }
  }
</script>

<style lang="scss">

</style>
