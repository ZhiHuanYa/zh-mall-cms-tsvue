<template>
  <div class="user">
    <div class="serach">
      <zh-form class="zh-form" v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ZhForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    ZhForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
