<template>
    <div>
        <!-- 轮播图 -->
        <div class="banner leftfix">
            <img src="./images/tree.jpg" alt="tree">
        </div>
        <!-- 右边区域 -->
        <div class="right-side-bar leftfix">
            <!-- 消息框 -->
            <div class="news">
                <div class="message clearfix">
                    <span class="leftfix">智选消息</span>
                    <a href="#" class="rightfix">更多&nbsp;&gt;</a>
                </div>
                <div class="msg-list">
                    <ul>
                        <li><a href="">[青花瓷] 天青色等烟雨</a></li>
                        <li><a href="">[青花瓷] 而我在等你</a></li>
                        <li><a href="">[青花瓷] 炊烟袅袅升起</a></li>
                        <li><a href="">[青花瓷] 晕开了结局</a></li>
                    </ul>
                </div>
            </div>
            <!-- 图标框 -->
            <div class="marks">
                <ul class="clearfix">
                    <li>
                        <div class="picture"></div>
                        <span>话费</span>
                    </li>
                    <li>
                        <div class="picture"></div>
                        <span>火车票</span>
                    </li>
                    <li>
                        <div class="picture"></div>
                        <span>加油卡</span>
                    </li>
                    <li>
                        <div class="picture"></div>
                        <span>白条</span>
                    </li>
                </ul>
                <ul class="clearfix">
                    <li>
                        <div class="picture"></div>
                        <span>电影票</span>
                    </li>
                    <li>
                        <div class="picture"></div>
                        <span>酒店</span>
                    </li>
                    <li>
                        <div class="picture"></div>
                        <span>理财</span>
                    </li>
                    <li>
                        <div class="picture"></div>
                        <span>机票</span>
                    </li>
                </ul>
                <ul class="clearfix">
                    <li>
                        <div class="picture"></div>
                        <span>礼品卡</span>
                    </li>
                    <li>
                        <div class="picture"></div>
                        <span>彩票</span>
                    </li>
                    <li>
                        <div class="picture"></div>
                        <span>游戏</span>
                    </li>
                    <li>
                        <div class="picture"></div>
                        <span>众筹</span>
                    </li>
                </ul>



            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListContainer',
}
</script>

<style scoped>
/* 主内容区开始 */
/* #region轮播图start */

.banner {
    width:690px;

    margin: 0 10px;
}
.banner img {
    width: 690px;
    height: 458px;
    
}
/* #endregion轮播图end */

/* #region右侧导航开始 */
.right-side-bar {
    width:290px;

}

.right-side-bar .news {
    width: 260px;
    height: 156px;
    padding: 0 14px;
    border: 1px #258edf solid;
   
}
.right-side-bar .news .message {
    height: 38px;
    line-height: 38px;
    border-bottom: 1px black solid;
}

.right-side-bar .news .message span {
    font-size: 14px;
}
.right-side-bar .news .message a {
    font-size: 12px;
}  

.right-side-bar .news .msg-list ul li {
    width: 262px;
    height: 14px;
    line-height: 14px;
    margin-bottom: 12px;
}
.right-side-bar .news .msg-list ul li a {
    font-size: 12px;
}
.right-side-bar .news .msg-list ul li a:hover {
    color: #258edf;
}
.right-side-bar .news .msg-list ul li:first-child {
    margin-top: 8px;
}

.right-side-bar .news .msg-list ul li:last-child {
    margin-bottom: 18px;
}


.right-side-bar .marks {
    width: 290px;
    height: 290px;
    margin-top: 10px;
    overflow: hidden;
}
.right-side-bar .marks ul:first-child {
    margin-top: 16px;
}

.right-side-bar .marks ul:nth-child(2) {
    margin: 17px 0;
}

.right-side-bar .marks ul li{
    width: 48px;
    height: 70px;
    float: left;
    margin: 0 11px;
    text-align: center;
    cursor: pointer;
}
.right-side-bar .marks ul li:first-child {
    margin-left: 16px;
}

.right-side-bar .marks .picture {
    width: 48px;
    height: 48px;
    background-image: url('./images/精灵图-侧边功能.png');
}
.marks ul:nth-child(1) li:nth-child(1) .picture {
    background-position: 0 0;
}
.marks ul:nth-child(1) li:nth-child(2) .picture {
    background-position: -48px 0;
}
.marks ul:nth-child(1) li:nth-child(3) .picture {
    background-position: -96px 0;
}
.marks ul:nth-child(1) li:nth-child(4) .picture {
    background-position: -144px 0;
}

.marks ul:nth-child(2) li:nth-child(1) .picture {
    background-position: -0px -48px;
}
.marks ul:nth-child(2) li:nth-child(2) .picture {
    background-position: -48px -48px;
}
.marks ul:nth-child(2) li:nth-child(3) .picture {
    background-position: -96px -48px;
}
.marks ul:nth-child(2) li:nth-child(4) .picture {
    background-position: -144px -48px;
}

.marks ul:nth-child(3) li:nth-child(1) .picture {
    background-position: -0px -96px;
}
.marks ul:nth-child(3) li:nth-child(2) .picture {
    background-position: -48px -96px;
}
.marks ul:nth-child(3) li:nth-child(3) .picture {
    background-position: -96px -96px;
}
.marks ul:nth-child(3) li:nth-child(4) .picture {
    background-position: -144px -96px;
}
/* #endregion右侧导航结束 */

/* 主内容区结束 */
</style>