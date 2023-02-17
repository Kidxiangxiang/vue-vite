import { createRouter, createWebHistory } from 'vue-router'
import routesData from './data'
import { systemStore } from '@/store/system.js'

const router = createRouter({
  history: createWebHistory(),
  routes: routesData
})

router.beforeEach((to, from) => {
  const { tagLists } = systemStore()
  const isTag = to.meta.isTag
  const tagIndex = tagLists.findIndex(item => item.path === to.path)
  
  /* 切换路由时判断tag列表中是否已经存在
  * 否：把路由信息添加到tag列表中 */
  if (isTag && tagIndex < 0) {
    const tag = {
      path: to.path,
      name: to.name,
      title: to.meta.title,
      index: to.meta.index
    }
    tagLists.push(tag)
    systemStore().tagActive = tagLists.length - 1
  }

  // 路由切换时路由已添加过tag列表，则激活对应tag
  if (tagIndex >= 0) systemStore().tagActive = tagIndex
})

export default router