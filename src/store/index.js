import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 三个模块
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'
export default createStore({
  modules: {
    cart,
    category,
    user
  },
  // 配置插件
  plugins: [createPersistedState({
    key: 'erabbit-client-pc-123-store',
    paths: ['user', 'cart']
  })]
})
