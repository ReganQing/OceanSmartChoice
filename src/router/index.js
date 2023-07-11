// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import HomePage from '@/pages/Home/index'
import SearchPage from '@/pages/Search/SearchPage'
import LoginPage from '@/pages/Login/LoginPage'
import RegisterPage from '@/pages/Register/RegisterPage'
// 把原路由push|replace备份一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push|replace方法
// 第一个参数：告诉原来的push放法，往哪里跳转（传递哪些参数）
// 第二个参数：成功回调函数
// 第三个参数：失败的回调函数

// call||apply区别
// 相同点，都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call与apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);    
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}

VueRouter.prototype.replace = function (location, resolve, reject){
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}
// 使用插件
Vue.use(VueRouter);

// 配置路由器

const router = new VueRouter({
    // 配置路由
    routes: [
        {
            path: '/home',
            component: HomePage,
            meta: { title: '主页',show: true}
        },
        {
            name:'search',
            path: '/search/:keyword?',
            component: SearchPage,
            meta: { title: '搜索',show: true}
        },
        {
            path: '/login',
            component: LoginPage,
            meta: { title: '登录',show: false}
        },
        {
            path: '/register',
            component: RegisterPage,
            meta: { title: '注册',show: false}
        },
    ]
})
export default router