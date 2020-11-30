/*
 * @Author: 左太宇
 * @Date: 2020-07-27 14:27:27
 * @LastEditTime: 2020-11-30 17:17:50
 * @LastEditors: 左太宇
 * @message:
 */
import axios from 'axios'

// interface 请求结果 {

// }

// create an axios instance
const service = axios.create({
  baseURL: 'https://api.dingdong.ztyuu.com/api/v1', // url = base url + request url
  timeout: 15000, // 请求超时
});

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    if (res.code !== 100) {
      return Promise.reject(new Error(res.Message || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
