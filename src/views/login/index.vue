<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="账号">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import md5 from 'blueimp-md5'
import { useStore } from '@/store/use.js'

const useStoreObj = useStore()
const router = useRouter()
const form = reactive({
  name: '', password: ''
})

const onSubmit = () => {
  useStoreObj.getToken({
    username: form.name,
    password: md5(form.password),
    grant_type: 'uc_password',
    verify_code: '',
    applicationType: 1,
    companyTraderId: 1
  }).then(res => {
    console.log(res)
    // console.log(useStoreObj.useToken)
    ElMessage({
      message: '登录成功',
      type: 'success',
    })
    router.push('/info')
  })
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
