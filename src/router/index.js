// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
// 配置路由
let originPush = VueRouter.prototype.push;

// 重写push|replace
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        // call|apply区别
        // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{ },()=>{ })
    }
}

export default new VueRouter({
    // 配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search/:keyword",
            component:Search,
            meta:{show:true},
            name:"search"
        },        
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },        
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})