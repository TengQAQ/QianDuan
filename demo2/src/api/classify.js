import request from '@/utils/request'

export function addCate(data) {
  return request({
    url: 'http://localhost/demo2/api/addCate',
    method: 'post',
    data
  })
}

export function selectCate(params) {
  return request({
    url: 'http://localhost/demo2/api/addCate',
    method: 'get',
    params
  })
}

export function refreshData() {
  return request({
    url: 'http://localhost/demo2/api/category',
    method: 'get'
  })
}

export function DelCate(data) {
  return request({
    url: 'http://localhost/demo2/api/DelCate',
    method: 'post',
    data
  })
}

// export function isAllowAdd(data) {
//   return request({
//     url: 'http://localhost/demo2/api/category',
//     method: 'post',
//     data
//   })
// }
