<template>
  <div class="photoList">
    <NavBar title="图文列表"/>
    <div class="category-list">
      <ul>
        <li v-for="(category, index) in categoryList" :key="index" @click="categoryIdHandler(index,category.id)">
          <a href="javascript:void(0)" :class='{active:index===currentIndex}'>{{ category.title }}</a>
        </li>
      </ul>
    </div>
    <!-- 图片展示区域 -->
    <div class="photo-list">
      <ul>
        <li v-for="(item, index) in imgList" :key="item.id">
          <a href="javascript.void(0)">
            <img :src="item.img_url" alt="" />
            <img v-lazy="item.img_url" >
          </a>
          <p>
            <span>{{ item.title }}</span>
            <span>{{ item.zhaiyao }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoList",
  data() {
    return {
      categoryList: [],
      imgList: [],
    };
  },
  methods: {
    loadImgByCategoryId(id) {
      this.$axios
        .get(`getimages/` + id)
        .then((res) => {
          this.imgList = res.data.messaage;
        })
        .catch((err) => {
          console.log("图文列表获取失败", err);
        });
    },
    categoryIdHandler(index,id){
      //动态路由跳转
      this.$router.push({name:'photo.list',params:{categoryId:id}})
      this.currentIndex=index
    }
  },
  beforeRouteEnter(to,from,next){
    //通过vm访问组件实例
    next(vm=>{
      vm.loadImgByCategoryId(to.params.categoryId)
    })
  },
  beforeRouteUpdate(to,from,next){
    console.log(to);
    this. loadImgByCategorId(to.params.categoryId)
    next()
  },
  created() {
    this.loadImgByCategoryId(0);
    //获取图文分享的分类信息
    this.$axios
      .get(`getimgcategory`)
      .then((res) => {
        this.categoryList = res.data.messaage;
        this.categoryList.unshift({"id":0,"title":'全部'})
      })
      .catch((err) => {
        console.log("分类信息获取失败", err);
      });
  },
};
</script>

<style lang="css" scoped>
.category-list ul li a.active{
  color:#FC0280
}
</style>