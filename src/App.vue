<template>
  <div class="container">
    <TopHeader/>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <BottomFooter v-show="$route.meta.show"/>
    
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import BottomFooter from "./components/BottomFooter.vue";
export default {
  name: 'App',
  components: {
    TopHeader,
    BottomFooter
  }
}
</script>

<style>
/* 基础设置 */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

</style>
