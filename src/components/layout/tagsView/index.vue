<template>
  <div>
    <el-scrollbar :always="true">
      <div class="scrollbar-flex-content">
        <el-button
          v-for="(item, index) in systemObject.tagLists"
          :key="item.path" size="small"
          :type="systemObject.tagActive === index ? 'primary' : ''"
          :plain="systemObject.tagActive !== index"
        >
          <p @click="ativeTag(item, index)">{{ item.title }}</p>
          <div v-if="index > 0" style="margin-left: 5px;">
            <el-icon
              v-show="!closeStatus || activeIndex !== index"
              @mouseenter="canClose(index)"
            > <Close /> </el-icon>
            <el-icon
              v-show="closeStatus && activeIndex === index"
              @mouseleave="hideClose" @click="sureClose(index)"
            > <CircleCloseFilled /> </el-icon>
          </div>
        </el-button>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Close, CircleCloseFilled } from '@element-plus/icons-vue'
import { systemStore } from '@/store/system.js'

let closeStatus = ref(false)
let activeIndex = ref(0) // 当前操作的tag下标，用于进行关闭操作
const systemObject = systemStore()
const router = useRouter()

const canClose = (index) => {
  activeIndex.value = index
  closeStatus.value = true
}

const hideClose = () => {
  closeStatus.value = false
}

// 关闭tag
const sureClose = (index) => {
  systemObject.tagLists.splice(index, 1)

  /* 判断是否关闭的tag是否是激活的tag
  * 是：关闭后激活前一个tag 
  * 否：保持激活tag还是激活状态 */
  if (index === systemObject.tagActive) {
    router.push(systemObject.tagLists[index - 1].path)
  }
}

// 激活tag
const ativeTag = (item, index) => {
  activeIndex.value = index
  systemObject.menuActive = item.index
  router.push(item.path)
}

</script>

<style scoped>
.scrollbar-flex-content {
  display: flex;
  background-color: #ffffff;
  padding: 10px;
}
</style>