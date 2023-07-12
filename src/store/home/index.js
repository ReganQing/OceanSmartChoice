import { reqCategoryList, reqBannerList } from "@/api";

// 存储home页面数据
const state = {
    categoryList: [],
    bannerList: []
};
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList =  bannerList;
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if (result.code === 200){
            commit("CATEGORYLIST", result.data);
        }
            
    },
    // 获取轮播图数据
    async getBannerList({commit}) {
        let result = await reqBannerList();
        if (result.code === 200) {
            commit("BANNERLIST", result.data);
        }
    }

};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}