<template>
  <div class="content-mian">
    <!-- 搜索表单-开始 -->
    <el-form :inline="true" :model="userData" class="demo-form-inline">
      <el-form-item label="员工名称">
        <el-input v-model="userData.name" placeholder="请输入员工名称" clearable />
      </el-form-item>
      <el-form-item label="员工手机号">
        <el-input v-model="userData.mobile" placeholder="请输入员工手机号" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 搜索表单-结束 -->

    <!-- 员工列表-开始 -->
    <lee-table
      :loading="loading" :data="list" :total="total"
      @sizeChange="sizeChange" @currentChange="currentChange"
    >
      <el-table-column prop="name" label="员工名称" />
      <el-table-column prop="date" label="员工手机号" />
      <el-table-column prop="date" label="员工创建时间" />
      <el-table-column prop="date" label="员工修改时间" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button link type="danger" size="small">
            删除
          </el-button>
          <el-button link type="primary" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </lee-table>
    <!-- 员工列表-结束 -->
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

let loading = false
let total = ref(20)
const userData = reactive({
  name: '', mobile: ''
})
let list = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
])

const sizeChange = (val) => {
  console.log(val)
}

const currentChange = () => {
  console.log(222)
}

defineExpose({
  sizeChange, currentChange
})
</script>

<style lang="less" scoped>
.demo-form-inline {
  margin-bottom: 20px;
}
</style>