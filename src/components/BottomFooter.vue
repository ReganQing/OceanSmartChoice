<template>
    <div>
        <!-- 页脚 -->
        <div class="footer">
            <div class="container">
                <!-- 顶部链接 -->
                <div class="top-links clearfix">
                    <ul>
                        <li><a href="#">常见问题</a></li>
                        <li><a href="#">联系客服</a></li>
                        <li><a href="#">加入社群</a></li>
                        <li><a href="#">友情链接</a></li>
                        <li><a href="#">官方ins</a></li>
                        <li><a href="#">官方微博</a></li>
                        <li><a href="#">官方微信公众号</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">热门资讯</a></li>
                        <li><a href="#">热门产品</a></li>
                        <li><a href="#">文章标签</a></li>
                        <li><a href="#">快讯标签</a></li>
                        <li><a href="#">我要入驻</a></li>
                        <li><a href="#">寻求合作</a></li>
                        <li><a href="#">投资者关系</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">商品举报</a></li>
                        <li><a href="#">商品宣传</a></li>
                        <li><a href="#">隐私政策</a></li>
                        <li><a href="#">营业执照</a></li>
                        <li><a href="#">智选招聘</a></li>
                        <li><a href="#">商家后台</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="#">最新功能</a></li>
                        <li><a href="#">开发者中心</a></li>

                    </ul>
                    <ul>
                        <li><a href="#">物流配送</a></li>
                        <li><a href="#">作者入驻</a></li>
                        <li><a href="#">设计工具</a></li>
                        <li><a href="#">原型工具</a></li>
                        <li><a href="#">PRD文档</a></li>

                    </ul>
                    <ul>
                        <li><a href="#">开源周刊</a></li>
                        <li><a href="#">市场合作</a></li>
                        <li><a href="#">自主推广</a></li>

                        <li><a href="#">引用中文内容需注明本站及链接作为出处，英文内容和示例代码均遵从源站授权协议。</a></li>
                    </ul>

                </div>
                <!-- 分隔线 -->
                <div class="line"></div>
                <!-- 底部链接 -->
                <div class="bottom-links">
                    <ul class="clearfix">
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">加入我们</a></li>
                        <li><a href="#">合作招商</a></li>
                        <li><a href="#">隐私政策</a></li>
                        <li><a href="#">服务条款</a></li>
                        <li><a href="#">校园推广</a></li>
                        <li><a href="#">用户交流群</a></li>
                        <li><a href="#">品牌指南</a></li>
                        <li><a href="#">特别鸣谢</a></li>
                    </ul>
                </div>
                <div class="copyright">沪ICP12345678910</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BottomFooter'
}
</script>

<style scoped>
.footer {
    height: 440px;
    margin-top: 48px;
    background-color: #23471e;
}

.footer .top-links {
    margin-top: 48px;
}

.footer .top-links ul {
    margin-top: 48px;

    width: 190px;
    float: left;
    margin-right: 10px;
}

.footer .top-links ul:last-child {
    margin-right: 0;
}

.footer .top-links ul li a {
    font-size: 14px;
    color: #fff;
}

.footer .top-links ul li a:hover {
    color: #258edf;
}

.footer .line {
    height: 1px;
    background-color: #ffffff;
    margin-top: 22px;

}

.bottom-links {
    margin-top: 47px;
    text-align: center;
}

.bottom-links ul {
    display: inline-block;
}

.bottom-links ul li {
    float: left;
    font-size: 0;

}

.bottom-links ul li a {
    padding: 0 26px;
    font-size: 12px;
    color: #fff;

    border-left: 1px #fff solid;
}

.bottom-links ul li a:hover {
    color: #258edf;
}

.bottom-links ul li:first-child a {
    border: none;
}

.copyright {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: #fff;
}</style>