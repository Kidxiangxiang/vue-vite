<template>
  <div class="header">
    <div class="collapse" @click="setCollapse">
      <el-icon size="18"><Menu /></el-icon>
    </div>
    
    <!-- <div class="breadcrumb-nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/">promotion management</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->

    <div class="flex-box right-box">
      <p>Kid翔翔</p>
      <div class="exit-btn" @click="exit">
        <el-icon style="margin-right: 5px;"><SwitchButton /></el-icon>
        退出
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, SwitchButton } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { systemStore } from '@/store/system.js'

const router = useRouter()
const systemStoreObj = systemStore()

const setCollapse = () => {
  systemStoreObj.isCollapse = !systemStoreObj.isCollapse
}

const exit = () => {
  router.replace('/login')
}
</script>

<style scoped>
.header {
  width: 100vw;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 15px;
}
.collapse {
  margin-left: 10px;
  padding-top: 7px;
  cursor: pointer;
}

.right-box {
  margin-left: auto;
}
.exit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  margin-left: 20px;
  background-color: #6290ff;
  cursor: pointer;
}
.breadcrumb-nav {
  margin-left: 10px;
}
</style>