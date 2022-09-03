<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>

    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    //
    LoginAccount,
    LoginPhone
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 150px;

  .title {
    text-align: center;
  }
}
</style>
