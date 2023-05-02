import axios from 'axios'
import { MessageBox, Message, Loading } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
// 实现对二进制流数据存储操作
import { saveAs } from 'file-saver'
import qs from 'qs'

let downloadLoadingInstance

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  // config是一个请求配置对象，它包含了发起请求时的各种配置选项
  // method：指定请求方法，例如GET、POST、PUT等。
  // baseURL：指定请求的基础URL，用于简化请求URL的书写。
  // timeout：指定请求的超时时间，单位为毫秒。
  // responseType：指定响应数据的类型，例如json、text、blob等。
  // transformRequest：指定请求数据的转换函数，用于将请求数据转换为指定格式。
  // transformResponse：指定响应数据的转换函数，用于将响应数据转换为指定格式。
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = getToken()
    }
    if (config.method === 'get' && config.params) {
      const getParams = config.params
      const paramsString = qs.stringify(getParams, { arrayFormat: 'repeat' })
      // 把参数值给它删除掉
      config.params = {}

      // 把你自定义的参数，拼接到url，判断url是不是已经包含了?
      const oldUrl = config.url
      // oldUrl=/dev-api/api/employee/data?1=2          paramsString=page=1&size=10'
      if (oldUrl.lastIndexOf('?') > 0) {
        config.url = oldUrl + '&' + paramsString
      } else {
        // oldUrl=/dev-api/api/employee/data             paramsString=page=1&size=10
        config.url = oldUrl + '?' + paramsString
      }
    }
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
    // 输出格式是不是blob，如果是blob，不要往下面执行
    if (response.request.responseType === 'blob' || response.request.responseType === 'arraybuffer') {
      return response.data
    }
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 619 || res.code === 614 || res.code === 611) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

/** 通用下载方法
 * @param {Object} url  下载后台地址
 * @param {Object} data  参数
 * @param {Object} filename 文件名.xlsx
 * @param {Object} config   其它配置
 */
export function download(url, data, filename, config) {
  // 调用 element-ui动画模块
  downloadLoadingInstance = Loading.service({ text: '正在下载数据，请稍候', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, 0.7)' })

  console.log(data)
  // axios发送的post请求
  return service.post(url, data, {
    responseType: 'blob',
    ...config
  }).then(async(response) => {
    // 判断是不是blob数据类型
    const isBlobType = await blobValidate(response)
    if (isBlobType) {
      const blob = new Blob([response])
      saveAs(blob, filename)
    } else {
      const resText = await response.text()
      const rspObj = JSON.parse(resText)
      const errMsg = rspObj.msg
      Message.error(errMsg)
    }
    // 关闭动画
    downloadLoadingInstance.close()
  }).catch((r) => {
    console.error(r)
    Message.error('下载文件出现错误，请联系管理员！')
    // 关闭动画
    downloadLoadingInstance.close()
  })
}

// 验证是否为blob格式
async function blobValidate(data) {
  try {
    const text = await data.text()
    JSON.parse(text)
    return false
  } catch (error) {
    return true
  }
}

export default service
