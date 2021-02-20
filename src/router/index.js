import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Vip from '../components/vip/Vip.vue'
import Search from '../components/search/Search.vue'
import Cart from '../components/cart/Cart.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsDetail from '../components/news/NewsDetail.vue'
import PhotoList from '../components/Photo/PhotoList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    {
      path: '/news/detail',
      name: 'detail',
      component: NewsDetail
    },
    {
      path: '/photos/list/:categoryId',
      name: 'photo.list',
      component: PhotoList
    },
  ],
  linkActiveClass:'link-active',
})
