import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []
// vue2.0new vuerouter({}) 创建路由实例
//  vue3.0 createRouter({}) 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
