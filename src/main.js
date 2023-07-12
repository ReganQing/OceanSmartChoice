import Vue from 'vue'
import App from './App.vue'
// 三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component('TypeNav', TypeNav);


// 引入VueRouter和routers
import VueRouter from 'vue-router'
import router from '@/router/index'

// 应用VueRouter
Vue.use(VueRouter)
// 关闭生产提示
Vue.config.productionTip = false

// 引入仓库
import store from '@/store'
// 引入mockServer.js——mock数据
import '@/mock/mockServer.js'
import "swiper/css/bundle";
// 测试
import { reqCategoryList } from "@/api";
reqCategoryList();

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库: 组件多了一个$store属性
  store,
}).$mount('.container')
