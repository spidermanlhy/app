import Vue from 'vue'
import App from './App.vue'
// 三级联动组件——全局组件
import TypeNav from '@/components/TypeNav'

Vue.component(TypeNav.name,TypeNav)
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
