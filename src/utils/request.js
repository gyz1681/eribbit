// 1 初始化axios实例
// 2 请求拦截器，带token
// 3 响应拦截器，剥离无效数据，拦截token失效
// 4 导出一个函数调用当前的axios实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 导出基准地址，原因 可能其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
// 获取用户信息对象

  const { profile } = store.state.user
  //  拦截业务逻辑
  // 进行请求配置的修改
  // 如果本地有token就在头部携带
  //   判断是否有token
  if (profile.token) {
    //   设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})
// res => res.data 取出data数据，将来调用接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(res => res.data, err => {
// 401状态码 进入该函数
  if (err.response && err.response.status === 401) {
    //   清空无效用户信息
    // 跳转到登录页码
    // 跳转需要传参(当前路由地址)给登录页码
    store.commit('user/serUser', {})
    // 当前路由地址
    // 组件里头拿路由地址： `/user?age=10` 用$route.path 只能拿到/usr ?后面的值拿不到   用$route.fullPath 可以拿全部地址
    // js模块中:router.currentRoute.value.fullPath 就是当前的路由地址，router.currentRoute 是ref响应式的
    // 原生JS encodeURIComponent() 转换uri编码 防止传过来的参数浏览器无法识别
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 求情工具函数
export default (url, method, submitData) => {
//  负责发请求，请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    // 1、如果是get请求，需要使用params来传递submitData
    // 2. 如果不是get请求，需要使用data来传递submitData
    // []设置一个动态的Key,写Js表达式，js表达式的执行结果当做key
    // toLowerCase() 统一把method设置为小写，防止出现大写不进行判断
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
