import request from '@/utils/request'

export function allAddr(data) {
  return request({
    url: '/api/allAddr',
    method: 'post',
    data
  })
}

export function addAddr(data) {
  return request({
    url: '/api/addAddr',
    method: 'post',
    data
  })
}

export function updateAddr(data) {
  return request({
    url: '/api/update',
    method: 'post',
    data
  })
}

export function deleteAddr(data) {
  return request({
    url: '/api/deleteAddr',
    method: 'post',
    data
  })
}
