<template>
  <div id="home">
    <mt-swipe :auto="4000" style="height: 200px; background-color: red">
      <mt-swipe-item v-for="(item, index) in imgs" :key="index">
        <img :src="item.img" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <div class="list">
      <ul>
        <li v-for="(grid, index) in grids" :key="grid.id">
          <router-link :to="grid.router">
            <img :src="grid.src" alt="" />
          </router-link>
          <p>{{grid.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import src1 from "@/assets/logo.png";
import src2 from "@/assets/logo.png";
import src3 from "@/assets/logo.png";
import src4 from "@/assets/logo.png";
import src5 from "@/assets/logo.png";
import src6 from "@/assets/logo.png";
let grids = [
  { id: 1, src: src1, title: "新闻资讯",router:{name:'news.list'} },
  { id: 2, src: src2, title: "新闻资讯" ,router:{name:'news.list'}},
  { id: 3, src: src3, title: "新闻资讯",router:{name:'news.list'} },
  { id: 4, src: src4, title: "新闻资讯",router:{name:'news.list'} },
  { id: 5, src: src5, title: "新闻资讯",router:{name:'news.list'} },
  { id: 6, src: src6, title: "新闻资讯",router:{name:'news.list'} },
];
export default {
  name: "Home",
  data() {
    return {
      imgs: [],
      grids: grids,
    };
  },
  created() {
    this.$axios
      .get("getlunbo")
      .then((res) => {
        console.log(res.data.message);
        this.imgs = res.data.message;
      })
      .catch((err) => {
        console.log("萝卜图数据失败");
      });
  },
};
</script>

<style lang="css" scoped>
.list{
  width:100%;
  height:100%
}
.list ul{
  display:flex;
  flex-wrap:wrap
}
.list ul li{
  width:33%;
  height:100%;
  text-align:center;
  font-size:14px;
  margin-top:15px
}
.list ul li a{
  display:inline-block;
  width:50px;
  height:50px;
  margin:0 auto
}
.list ul li img{
  width:50px
}
</style>