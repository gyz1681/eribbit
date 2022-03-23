import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home')

const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home }
    ]
  }
]
// vue2.0new vuerouter({}) 创建路由实例
//  vue3.0 createRouter({}) 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
