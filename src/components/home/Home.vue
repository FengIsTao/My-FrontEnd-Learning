<template>
  <div id="home">
    <mt-swipe :auto="4000" style="height: 200px; background-color: red">
      <mt-swipe-item v-for="(item, index) in imgs" :key="index">
        <img :src="item.img" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="list">
      <ul>
        <li v-for="(grid,index) in grids" :key="grid.id">
          <a href="javascript.vois(0);">
            <img :src="grid.src" alt="" />
          </a>
          <p></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
let grids = [
  { id: 1, src: "../../assets/logo.png", title: "新闻资讯" },
  { id: 1, src: "../../assets/logo.png", title: "新闻资讯" },
  { id: 1, src: "../../assets/logo.png", title: "新闻资讯" },
  { id: 1, src: "../../assets/logo.png", title: "新闻资讯" },
  { id: 1, src: "../../assets/logo.png", title: "新闻资讯" },
  { id: 1, src: "../../assets/logo.png", title: "新闻资讯" },
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

<style>
</style>