import request from '@/utils/request'

export function selectCom(params) {
  return request({
    url: 'http://localhost/demo2/api/product',
    method: 'get',
    params
  })
}

export function insertCom(data) {
  return request({
    url: 'http://localhost/demo2/api/insertcom',
    method: 'post',
    data
  })
}
