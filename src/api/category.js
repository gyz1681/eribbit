// 定义首页需要的接口函数
import request from '@/utils/request'

/**
 *获取所有分类(顶级，二级，)
 * 获取首页头部分类数据
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
