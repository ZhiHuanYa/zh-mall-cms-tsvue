<template>
  <div class="page-content">
    <ZhTable
      :listData="dataList"
      v-bind="contentTableConfig"
      @selectionChange="getSelectionChange"
    >
      <!-- 1. header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
        <el-button icon="Refresh"></el-button>
      </template>
      <!-- 2. 列中插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle>
        <div class="handle-btns">
          <el-button icon="Edit" size="small" type="success"> 编辑 </el-button>
          <el-button icon="Delete" size="small" type="danger"> 删除 </el-button>
        </div>
      </template>
    </ZhTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import ZhTable from '@/base-ui/table'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    ZhTable
  },
  setup(props) {
    const store = useStore()

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 从vuex中获取数据

    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )

    const getSelectionChange = (payload: any) => {
      console.log(payload[payload.length - 1].id)
    }

    return {
      dataList,
      dataCount,
      getSelectionChange,
      getPageData
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
