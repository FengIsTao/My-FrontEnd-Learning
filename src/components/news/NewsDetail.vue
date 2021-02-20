<template>
  <div class="detail">
    <NavBar title="新闻详情" />
    <div class="item">
      <p>{{detail.title}}</p>
      <div>
        <span>{{detail.click}}次点击</span>
        <span>分类：民生经济</span>
        <span>添加时间：{{detail.add_time | converTime('YYYY-MM-DD')}}</span>
      </div>
    </div>
    <div class="divider"></div>
    <div class="detail-content" v-html="detail.content"></div>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
  data(){
    return{
      detail:{}
    }
  },
  created(){
    let id=this.$route.query.id
    this.$axios.get(`getnew/${id}`)
    .then(res=>{
      this.detail=res.data.message[0]
    })
    .catch(err=>{
      console.log('新闻详情数据异常',err);
    })
  }
};
</script>

<style lang="css" scoped>
.detail {
  padding-bottom: 100px;
}
.item p {
  color: #66ccff;
  font-size: 24px;
}
</style>