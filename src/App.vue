<template>
  <div id="app">
    <mt-header fixed title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view />
<<<<<<< HEAD
    <div class="tabBar">
      <ul>
        <li>
          
=======

    <div class="tabBar">
      <ul>
        <li v-for="(tab, index) in tabs" :key="tab.id">
          <router-link
            :to="tab.routerName"
            exact
            @click.native="changeHash(index)"
            :class="{ 'link-active': index === currentIndex }"
          >
            <img :src="tab.imgSrc" alt="" />
            <p>{{ tab.title }}</p>
          </router-link>
>>>>>>> fa1517c449a6b32ec2a635fd09d06a4f86de5260
        </li>
      </ul>
    </div>
    <!-- 底部栏 -->
    <!-- <mt-tabbar v-model="selected" :fixed="fixed">
      <mt-tab-item id="home">
        <img slot="icon" src="../src/assets/logo.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="../src/assets/logo.png" />
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="../src/assets/logo.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="../src/assets/logo.png" />
        查找
      </mt-tab-item>
    </mt-tabbar> -->
  </div>
</template>

<script>
import index from "./assets/logo.png";
import vip from "./assets/logo.png";
import shopcart from "./assets/logo.png";
import search from "./assets/logo.png";

let tabs = [
  { id: 1, title: "首页", imgSrc: index, routerName: { name: "home" } },
  { id: 1, title: "会员", imgSrc: vip, routerName: { name: "vip" } },
  { id: 1, title: "购物车", imgSrc: shopcart, routerName: { name: "cart" } },
  { id: 1, title: "查找", imgSrc: search, routerName: { name: "search" } },
];

export default {
  name: "App",
  data() {
    return {
      selected: "",
      fixed: true,
      tabs: tabs,
      currentIndex: 0,
    };
  },
  methods: {
    changeHash(index) {
      this.currentIndex = index;
    },
  },
  watch: {
    selected: function (newV, oldV) {
      console.log(newV, oldV);
      console.log(this.selected);
      this.$router.push({ name: this.selected });
    },
  },
};
</script>

<style lang="css" scoped>
.tabBar ul {
  width: 100%;
  overflow: hidden;
}

.tabBar ul li {
  float: left;
  width: 25%;
  height: 55px;
  text-align: center;
}
.tabBar ul li a.link-active {
  background-color: #fff;
}
.tabBar ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-top: 10px;
}
.tabBar ul li a img {
  width: 20px;
  height: 25px;
}
</style>
