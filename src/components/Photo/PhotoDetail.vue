<template>
  <div>
    <div class="photo-title">
      <p>图片标题</p>
      <span>发起日期:2021-02-20</span>
      <span>0次浏览</span>
      <span>分类：民生经济</span>
      <div class="photo-desc">
        <p v-html=""></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoDetail",
  data() {
    return {};
  },
  created() {
    let id = this.$route.query.id;
    //获取图文详情
    function getImageInfo() {
      return this.$axios.get("getimageinfo/" + id);
    }
    //获取图片列表
    function getThumImages() {
      return this.$axios.get("getthumimages/" + id);
    }
    this.$axios.all([getImageInfo(), getThumImages()]).then(
      axios.spread((acct, perms)=> {
        // 两个请求现在都执行完成
        console.log(acct);
        console.log(perms);
      })
    );
  },
};
</script>

<style lang="css" scoped>
.photo-title p {
  font-size: 20px;
  font-weight: 600;
  color: #0f80ff;
  margin: 15px 0;
}
.photo-title span {
  padding: 10px 5px;
}
.photo-desc p {
  font-size: 18px;
  color: #333333;
}
</style>