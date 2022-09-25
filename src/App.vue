<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在Home、Search显示，在登录、注册隐藏 -->
    <Footer v-show="this.$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: "App",
  // 注册组件
  components: {
    Header,
    Footer
  },
};
</script>

<style>
  
</style>
