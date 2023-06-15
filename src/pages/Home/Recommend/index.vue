<template>
    <!-- 推荐专区 -->
    <div class="discount">
        <div class="discount-img container">
            <ul class="clearfix">
                <li><img src="./images/dio1.png" alt=""></li>
                <li><img src="./images/dio2.png" alt=""></li>
                <li><img src="./images/dio3.png" alt=""></li>
                <li><img src="./images/dio4.png" alt=""></li>
                <li><img src="./images/dio5.png" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RecommendProducts',
    }
</script>

<style scoped>
/* #region推荐专区开始 */
.discount {
    height: 190px;
    margin-top: 10px;
}
.discount .discount-img ul li {
    width: 239px;
    margin-left: 10px;
    float: left;
    cursor: pointer;
}

.discount .discount-img ul li:first-child {
    width: 190px;
    margin-left: 0;
}
.discount .discount-img ul li img {
    width: 239px;
    height: 190px;
}
.discount .discount-img ul li:first-child img {
    width: 190px;
}

/* #endregion推荐专区结束 */
</style>