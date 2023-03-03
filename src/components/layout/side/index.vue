<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="systemStoreObj.menuActive" class="el-menu-vertical-demo"
      style="height: 100vh;" background-color="rgb(78 87 107)"
      :collapse="systemStoreObj.isCollapse"
      text-color="rgb(153 153 153)" active-text-color="#ffffff"
      :router="false"
    >
      <sideItem
        v-for="(route, index) in routerData"
        :key="route.path + index"
        :item="route"
        :basePath="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { ref } from 'vue'
import { systemStore } from '@/store/system.js'
import { useRoute } from 'vue-router'
import sideItem from './sideItem.vue'
import routerData from '@/router/data.js'

const systemStoreObj = systemStore()
const route = useRoute()

systemStoreObj.menuActive = route.meta.index

// 监听窗口，窗口宽度小于900，自动折叠菜单
const overSize = () => {
  window.onresize = () => {
    const w = document.documentElement.clientWidth
    if (w < 900) {
      systemStoreObj.isCollapse = true
    }
  }
}

// overSize()
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 235px;
}
.scrollbar-wrapper {
  overflow-x: hidden !important;
}
</style>