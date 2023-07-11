<template>
    <div>
        <!-- 顶部导航条 -->
        <div class="topbar">
            <!-- 版心 -->
            <div class="container clearfix">
                <!-- 左侧欢迎区 -->
                <div class="welcome leftfix">
                    <span class="hello">Ocean智选欢迎您</span>
                    <span>请</span>
                    <router-link to="/login" class="login">登录</router-link>
                    <router-link to="/register" class="register">免费注册</router-link>
                </div>
                <!-- 右侧导航区 -->
                <div class="topbar-nav rightfix">
                    <ul class="list clearfix">
                        <li><a href="#">我的订单</a></li>
                        <li><a href="#">我的购物车</a></li>
                        <li><a href="#">我的智选</a></li>
                        <li><a href="#">智选会员</a></li>
                        <li><a href="#">企业采购</a></li>
                        <li><a href="#">关注Ocean智选</a></li>
                        <li><a href="#">合作招商</a></li>
                        <li><a href="#">商家后台</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 头部 -->
        <div class="header">
            <div class="container clearfix">
                <!-- 左侧logo区 -->
                <router-link class="mark leftfix" to="/home">
                    <img src="../assets/logo.png" alt="logo">
                </router-link>
                <!-- 右侧搜索区 -->
                <div class="search rightfix">
                    <label form="search"></label>
                    <form action="#" id="search">
                        <label><input type="text" placeholder="搜索" v-model="keyword"></label>
                        <button type="submit" aria-label="btn-search" @click="goSearch"></button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopHeader',
    data() {
        return {
            keyword: '',
        }
    },
    methods: {
        goSearch() {
            // 路由传递参数
            // 字符串形式和模板字符串
            // 第三种，对象写法

            // 第二种情况：如果路由跳转的时候，带有query参数，应捎带传递query参数
            if (this.$route.query) {
                let location = { name: 'search', params: { keyword: this.keyword || undefined } }
                location.query = this.$route.query;
                this.$router.push(location);
                
            }
        }
    }
}
</script>

<style scoped>
.topbar {
    height: 30px;
    background-color: #ECECEC;
    font-size: 0;
}

.welcome {
    height: 30px;
    line-height: 30px;
    font-size: 0;
    color: #666;
}

.welcome span,
.welcome a {
    font-size: 12px;
}

.welcome .hello {
    margin-right: 28px;
}

.welcome .login {
    padding-right: 10px;
    border-right: 1px solid #666;
}

.welcome .register {
    padding-left: 10px;
}

.topbar-nav .list {
    height: 30px;
    line-height: 30px;
}

.topbar-nav .list li {
    float: left;
    font-size: 12px;

}

.topbar-nav .list li a {
    padding-right: 15px;
    padding-left: 15px;
    border-right: 1px solid #666;
}

.topbar-nav .list li:first-child a {
    padding-left: 0;
}

.topbar-nav .list li:last-child a {
    padding-right: 0;
    border-right: none;
}

/* #region头部start */
.header {
    height: 120px;
}

.header .container .mark img {
    height: 120px;
}

.header .search form {
    margin-top: 42px;
    font-size: 0;
}

.header .search input {
    width: 508px;
    height: 34px;
    border: 1px solid #258edf;
}

.header .search button {
    width: 80px;
    height: 36px;
    background-color: #258edf;
    vertical-align: top;
    background-image: url('../assets/serch_icon.png');
    background-repeat: no-repeat;
    background-position: 28px 6px;
}


/* #endregion头部end */
</style>