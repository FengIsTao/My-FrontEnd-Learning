<template>
  <div id="app">
    <mt-header fixed title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view />
    <!-- 顶部栏 -->
    <mt-tabbar v-model="selected" :fixed="fixed">
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
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: "",
      fixed:true
    };
  },
  watch: {
    selected: function (newV, oldV) {
      console.log(newV, oldV);
      console.log(this.selected);
      this.$router.push({ name: "this.selected" });
    },
  },
};
</script>

<style scoped>

</style>
