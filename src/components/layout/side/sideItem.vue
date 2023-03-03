<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <el-menu-item :index="onlyOneChild.meta.index" @click="toLink(item.path)">
        <component :is='onlyOneChild.meta.icon'></component>
        <span>{{ onlyOneChild.meta.title }}</span>
      </el-menu-item>
    </template>

    <el-sub-menu v-else :index="item.path">
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <sideItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basePath="child.path"
      />
    </el-sub-menu>
  </div>
</template>

<script>
import User from '../icon/user.vue'

export default {
  components: {
    User
  }
}
</script>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  item: Object,
  basePath: String
})
const router = useRouter()
let onlyOneChild = ref(null)

const hasOneShowingChild = (child, parent) => {
  if (!child) child = []

  const showChildren = child.filter(item => {
    if (item.hidden) {
      return false
    } else {
      onlyOneChild = item
      return true
    }
  })

  // 子集只有一个
  if (showChildren.length === 1) return true

  // 没有子集
  if (showChildren.length === 0) {
    onlyOneChild = { ... parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

const toLink = path => {
  router.push(path)
}
</script>

<style scoped>
</style>