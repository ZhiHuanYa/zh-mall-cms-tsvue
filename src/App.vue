<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>

    <el-button>哈哈哈</el-button>
    <el-button type="primary">主要</el-button>
    <el-button type="danger">危险</el-button>
    <el-input></el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import { ElButton } from 'element-plus'
// 手动引入样式太烦躁
// import 'element-plus/theme-chalk/base.css'
// import 'element-plus/theme-chalk/el-button.css'
export default defineComponent({
  name: 'App',
  components: {
    // ElButton
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
