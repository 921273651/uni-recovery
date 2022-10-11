<template>
  <view class="page-Card">
    <slot>
    <view class="cate-title">
      {{cardTitle}}
    </view>
    </slot>
  </view>
  
</template>

<script>
  export default{
    props:{
      cardTitle:String
    }
  }

</script>

<style lang="scss">
  
</style>
