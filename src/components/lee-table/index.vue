<template>
  <div>
    <el-table
      v-loading="loading" :data="data" :border="border"
      element-loading-text="加载中..." style="width: 100%"
    >
      <slot></slot>
      <template #empty>
        <div style="white-space:nowrap">暂无数据</div>
      </template>
    </el-table>

    <el-pagination
      v-if="!hidePagination && data && data.length"
      class="lee-pagination" background
      layout="total, prev, pager, next, sizes"
      :total="total"
      :page-size="pageSize"
      :current-page="pageNum"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      :page-sizes="[10, 20, 50, 100, 200]"
    />
  </div>
</template>

<script setup name="LeeTable">
const props = defineProps({
  loading: Boolean,
  data: Array,
  hidePagination: Boolean,
  border: {
    type: Boolean,
    default: false
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    default: 10,
    type: Number
  },
  pageNum: {
    default: 1,
    type: Number
  }
})

const emit = defineEmits(['sizeChange', 'currentChange'])

const onSizeChange = (val) => {
  emit('sizeChange', val)
}

const onCurrentChange = (val) => {
  emit('currentChange', val)
}
</script>

<style lang="less" scoped>
.lee-pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>