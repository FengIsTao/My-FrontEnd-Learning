<template>
  <div class="news">
    <NavBar title="新闻列表" />
    <div class="newList">
      <ul>
        <li v-for="(news, index) in newsList" :key="news.id">
          <router-link :to="{name:'detail',query:{id:news.id}}">
            <div class="new_img">
              <img :src="news.img_url" alt="" />
            </div>
            <div class="content">
              <p class="title">{{ news.title }}</p>
              <div class="news-desc">
                <p class="summary">{{ news.zhaiyao }}</p>
                <p>
                  <span class="praise">点赞数:{{ news.click }}</span>
                  <span class="time">发表时间:{{ news.add_time | converTime('YYYY-MM-DD') }}</span>
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    this.$axios
      .get("getnewslist")
      .then((res) => {
        this.newsList = res.data.message;
        console.log(this.newsList);
      })
      .catch((err) => {
        console.log("新闻列表数据拿取异常", err);
      });
  },
};
</script>

<style lang="css" scoped>
.news {
  padding-top: 40px;
  padding-bottom: 50px;
}
.newList {
  width: 100%;
  border-bottom: 1px solid #cccccc;
  font-size: 12px;
}
.newList ul li {
  position: relative;
}
.newList ul li a {
  display: block;
  width: 100%;
}
</style>