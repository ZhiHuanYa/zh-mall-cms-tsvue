<template>
  <div class="login-phone">
    <el-form label-width="60px" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button class="get-button" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })

    return { phone }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;

  .get-button {
    margin-left: 8px;
  }
}
</style>
