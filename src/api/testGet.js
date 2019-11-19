import pizza from '@/plugin/axios/axios.pizza'

export default function (po) {
  return pizza.call(this, 'query/queryIndexs', false, po)
    /*
  * 接口共四个参数
  * 依次是  1：链接地址  2：是get还是post 不传值默认 post 3：data传的参数 4：要切换的IP地址 添加IP地址到env.js 文件 不传值默认host IP
  * $axios.call(this, '/api/sample/login', '', obj，'test')
  * */
}


