<template>
  <div class="header">
    <h3 @click="goBack" class="back">返回</h3>
    <h3  class="desc_title">{{title}}</h3>
  </div>
</template>

<script>
export default {
name:'NavBar',
props:['title'],
methods:{
  goBack(){
    this.$router.go(-1)
  }
}
}
</script>

<style lang="css" scoped>
.header{
  width:100%;
  height:40px;
  line-height:40px;
  position: relative;
}
</style>