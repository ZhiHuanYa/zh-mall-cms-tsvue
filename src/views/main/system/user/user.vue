<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </page-content>
    <div class="page-modal">
      <page-modal
        ref="pageModalRef"
        pageName="users"
        :defaultInfo="defaultInfo"
        :modalConfig="modalConfigComputed"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [
      //
      pageContentRef,
      handleResetBtnClick,
      handleQueryBtnClick
    ] = usePageSearch()

    // 1. 处理密码的逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }

    // 2. 动态添加部门和角色列表
    const store = useStore()
    const modalConfigComputed = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )

      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id, label: item.name }
      })

      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )

      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id, label: item.name }
      })

      return modalConfig
    })

    // 3. 调用hook获取公共变量和函数
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    const [
      //
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    ] = usePageModal(newCallback, editCallback)

    return {
      contentTableConfig,
      searchFormConfig,
      pageContentRef,
      handleResetBtnClick,
      handleQueryBtnClick,
      modalConfigComputed,
      pageModalRef,
      handleNewData,
      handleEditData,
      defaultInfo
    }
  }
})
</script>

<style scoped lang="less"></style>
