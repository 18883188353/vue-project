import pizza from '@/plugin/axios/axios.pizza'
// 评价接口
export default function (obj) {
  return pizza.call(this, 'api/sample/fault', obj, {}, true, 'ws')
}
