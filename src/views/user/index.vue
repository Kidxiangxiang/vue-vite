<template>
  <div class="content-mian user-content">
    <!-- 搜索表单-开始 -->
    <el-form :inline="true" :model="userData" class="demo-form-inline form-box">
      <el-form-item label="员工名称">
        <el-input v-model="userData.name" placeholder="请输入员工名称" clearable />
      </el-form-item>
      <el-form-item label="员工手机号">
        <el-input v-model="userData.mobile" placeholder="请输入员工手机号" clearable />
      </el-form-item>
      <el-form-item>
        <el-button
          class="sub-btn" type="primary"
          :icon="Search" @click="search"
        > 查询 </el-button>
      </el-form-item>
    </el-form>
    <!-- 搜索表单-结束 -->

    <div class="btn-list">
      <el-button type="success" :icon="Plus" @click="addUser">新增</el-button>
    </div>

    <!-- 员工列表-开始 -->
    <lee-table
      :loading="loading" :data="list" :total="total"
      :pageSize="pageSize" :pageNum="pageNum"
      @sizeChange="sizeChange" @currentChange="currentChange"
    >
      <el-table-column prop="name" label="员工名称" />
      <el-table-column prop="date" label="员工手机号" />
      <el-table-column prop="date" label="员工类型" />
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

    <!-- 员工信息弹窗-开始 -->
    <el-dialog
      v-model="userDialog" :title="dialogTitle" width="30%"
      :close-on-click-modal="false" :close-on-press-escape="false"
    >
      <el-form :model="usetInfo" label-position="top">
        <el-form-item label="员工姓名">
          <el-input v-model="usetInfo.name" />
        </el-form-item>
        <el-form-item label="员工手机号" >
          <el-input v-model="usetInfo.mobile" />
        </el-form-item>
        <el-form-item label="员工类型">
          <el-select
            v-model="usetInfo.type" placeholder="请选择员工类型"
            style="width: 100%;"
          >
            <el-option label="内部员工" :value="1" />
            <el-option label="外部员工" :value="2" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button>取消</el-button>
          <el-button type="primary">提交</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 员工信息弹窗-结束 -->
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Search, Plus } from '@element-plus/icons-vue'

let loading = false
let total = ref(20)
let pageNum = ref(1)
let pageSize = ref(10)
let userDialog = ref(false)
let dialogTitle = ''
const userData = reactive({
  name: '', mobile: ''
})
const usetInfo = reactive({
  name: '', mobile: '', type: null
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
  pageSize.value = val
}

const currentChange = (val) => {
  console.log(val)
  pageNum.value = val
}

const search = () => {
  console.log(11)
}

// 点击新增员工
const addUser = () => {
  dialogTitle = '新增员工'
  userDialog.value = true
}
</script>

<style lang="less" scoped>
.user-content {
  .demo-form-inline {
    margin-bottom: 20px;
  }
  .btn-list {
    margin-bottom: 20px;
}
}
</style>