import Layout from '@/components/layout/index.vue'

const routesData = [
  {
    path: '/login',
    hidden: true,
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('../views/login/index.vue') 
  },
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        isTag: true,
        meta: { title: '首页', isTag: true, index: '1' },
        component: () => import('../views/home/index.vue')
      }
    ]
  },
  /* {
    path: '/setting',
    redirect: '/setting/index',
    component: Layout, 
    meta: { title: '设置', index: '2' },
    children: [
      {
        path: '/setting/index',
        name: 'SettingIndex',
        meta: { title: '主页设置', isTag: true, index: '2-1' },
        component: () => import('@/views/setting/index.vue'),
      }, 
      {
        path: '/setting/user',
        name: 'SettingUser',
        meta: { title: '用户设置', isTag: true, index: '2-2' },
        component: () => import('@/views/setting/user/index.vue'),
      }
    ]
  }, */
  {
    path: '/user',
    component: Layout, 
    children: [
      {
        path: '/user',
        name: 'User',
        isTag: true,
        meta: { title: '员工管理', isTag: true, index: '3' },
        component: () => import('../views/user/index.vue')
      }
    ]
  }
]

export default routesData