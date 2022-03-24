<template>
  <!-- 顶部通栏 -->
  <AppTopnav/>
  <!-- 头部组件 -->
  <AppHeader/>
  <!-- 内容容器 -->
  <div class="app-body">
      <!-- 二级路由 -->
      <RouterView />
  </div>
  <!-- 底部组件 -->
 <AppFooter/>
 <!-- 吸顶头部 -->
 <AppHeaderSticky/>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getLIst')
  }
}
</script>

<style>
.app-body {
  height: 600px;
}
</style>
