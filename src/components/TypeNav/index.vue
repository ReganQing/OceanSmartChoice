<template>
    <div @mouseleave="leaveIndex">
        <!-- 主导航 -->
        <div class="main-nav">
            <ul class="menu clearfix">
                <!-- 菜单 -->
                <li><h2>全部商品分类</h2></li>
                
                <li><a href="#">智选超市</a></li>
                <li><a href="#">智选优惠</a></li>
                <li><a href="#">智选探索</a></li>
                <li><a href="#">智选家电</a></li>
                <li><a href="#">智选生鲜</a></li>
                <li><a href="#">智选会员</a></li>
                <li><a href="#">进口好物</a></li>
                <li><a href="#">大牌闪购</a></li>
                <li><a href="#">好货竞拍</a></li>
                <li><a href="#">五金商店</a></li>
            </ul>
        </div>
        <!-- 主要内容区 -->
        <!-- 三级联动 -->
        <div class="main-content">
            <div class="container clearfix">
                <!-- 侧边导航 -->
                <ul class="left-side-bar leftfix">
                    <li v-for="(c1, index) in categoryList" :key="c1.categoryList" :class="{cur:currentIndex==index}" @click="goSearch">
                        <!-- 一级菜单 -->
                        <h3 @mouseenter="changeIndex(index)">
                            <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId" href="#" @click="getIndex(c1.categoryName, index)">{{ c1.categoryName }}</a>
                        </h3>
                        <!-- 二级菜单 -->
                        <!-- 二、三级分类 -->
                        <div class="second-menu" :style="{display: currentIndex==index?'block':'none'}">
                            <dl class="clearfix" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                                <dt>
                                    <a :data-categoryName="c2.categoryName" :data-category1Id="c2.categoryId" href="#" @click="getIndex(c2.categoryName, index)"> {{ c2.categoryName }} </a>
                                </dt>
                                <dd>
                                    <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                                        <a :data-categoryName="c3.categoryName" :data-category1Id="c3.categoryId" href="#" @click="getIndex(c3.categoryName, index)"> 
                                            {{ c3.categoryName }} 
                                        </a>
                                    </em>                                    
                                </dd>
                            </dl>
                        </div>
                    </li>
                </ul>
                <ListContainer />
            </div>

        </div>
    </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import { mapState } from "vuex";
// 这种引入方式是把所有函数都引入，最好的引用是按需引用
import throttle from "lodash/throttle";
export default {
    name: 'TypeNav',
    components: {
        ListContainer,
    },
    data(){
        return {
            currentIndex: -1,
        }
    },
    // 组件挂载完毕，可以向服务器发送请求
    mounted(){
        // 通知Vuex发送请求，获取数据，存储到仓库之中
        this.$store.dispatch('categoryList');
    },
    computed: {
        ...mapState({
            // 右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
            // 注入一个参数state,其实即为大仓库中的数据
            categoryList: state => state.home.categoryList
        })
    },
    methods: {
        getIndex(item, index) {
            console.log(item,  index);
        },
        // 鼠标进入修改相应式数据currentIndex属性
        changeIndex: throttle(function(index){
                        // index: 鼠标移上某一个一级分类的元素的索引值
            // 正常情况（用户慢慢操作）：鼠标进入每一级分类都会触发
            // 非正常情况（用户快速操作）：鼠标移动过快，导致是少数一级分类被触发

            this.currentIndex = index;
        }),
        // 鼠标移出修改相应式数据currentIndex属性-1
        leaveIndex(){
            this.currentIndex = -1;
        },
        goSearch(event){
            // 最好的方法是：编程式导航 + 事件委派
            let element = event.target  // 获取事件对象的元素
            let {categoryname,category1id,category2id,category3id} = element.dataset // 获取节点的自定义属性与属性值

            if (categoryname){
                // 整理路由跳转参数
                let location = {name:"search"};
                let query = {categoryName: categoryname};
                // 继续判断Id,分辨一级、二级、三级标签
                if (category1id) {
                    // 传递参数给路由
                    query.category1Id = category1id;
                } else if(category2id) {
                    query.category2Id = category2id;
                } else {
                    query.category3Id = category3id;
                }
                // 整理完参数之后，传递给页面根目录的search请求页面
                location.query = query;
                // 路由跳转
                this.$router.push(location);

            }


        }
    }

}
</script>

<style scoped>
/* #region主导航start */
.main-nav {
    height: 48px;
    line-height: 48px;
    font-size: 0;
}

.main-nav ul li {
    font-size: 16px;
    margin-right: 20px;
    float: left;
    text-align: center;

}

.main-nav ul li:first-child {
    width: 190px;
    background-color: #258edf;
    margin-right: 10px;
}

/* #endregion主导航end */

/* #region侧边导航start */
.main-content {
    /* height: 458px; */
    margin-top: 10px;

}

.main-content .left-side-bar,
.main-content .banner,
.main-content .right-side-bar,
.main-content .left-side-bar li .second-menu {
    height: 478px;
}
.main-content .left-side-bar, .cur {
    background-color: #258edf;
}
.main-content .left-side-bar {
    width: 190px;
    background-color: #ECECEC;
    position: relative;
}


.main-content .left-side-bar li {
    font: 14px #333;
    height: 28px;
    line-height: 28px;
    padding-left: 10px;

}

/* .main-content .left-side-bar li:hover {
    background-color: #258edf;
} */

.main-content .left-side-bar li>a:hover {
    color: #fff;
}

.main-content .left-side-bar li .second-menu {
    width: 680px;
    position: absolute;
    left: 190px;
    top: 0;
    padding-left: 10px;
    background-color: #ffffff;
    display: none;

}

/* .main-content .left-side-bar li:hover .second-menu {
    display: block;
} */

.main-content .left-side-bar li .second-menu a:hover {
    color: #258edf;
}

.second-menu dl {
    height: 36px;
    line-height: 36px;


}

.second-menu dl:first-child {
    margin-top: 10px;

}

.second-menu dl dt {
    width: 70px;
    float: left;
    font-weight: bold;
    margin-right: 10px;
}

.second-menu dl dd {
    float: left;
}

.second-menu dl dd a {
    padding: 0 10px;
    border-left: 1px black solid;
}

/* #endregion侧边导航end */</style>