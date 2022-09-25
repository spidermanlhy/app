import Vue from "vue";
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex);

import home from './home'
import search from "./search";
export default new Vuex.Store({
    // 注册
    modules:{
        home,
        search
    }
})