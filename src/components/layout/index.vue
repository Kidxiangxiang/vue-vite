<template>
  <div class="common-layout">
    <el-container class="container">
      <Side></Side>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main class="main">
          <tags-view></tags-view>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { provide } from 'vue'
import Side from './side/index.vue'
import Header from './header/index.vue'
import TagsView from './tagsView/index.vue'

const titleObj = {
  name: 'lee',
  data: [
    { key: 1 }
  ]
}
provide('titleObj', titleObj)

</script>

<style scoped>
.common-layout {
  height: 100vh;
  width: 100vw;
}
.common-layout .container {
  height: 100%;
  width: 100%;
}

.common-layout .container .main {
  padding: 0;
  overflow: auto;
}
</style>