import axios from 'axios'


// create an axios instance
const service = axios.create({
  baseURL: 'https://www.tophub.fun:8888/v2', // url = base url + request url
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
    if (res.Code !== 0) {
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
