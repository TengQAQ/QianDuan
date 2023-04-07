import request from '@/utils/request'

export function allDel(data) {
  return request({
    url: '/api/allDel',
    method: 'post',
    data
  })
}

export function addDel(data) {
  return request({
    url: '/api/addDel',
    method: 'post',
    data
  })
}

export function updateDel(data) {
  return request({
    url: '/api/updateDel',
    method: 'post',
    data
  })
}

export function deleteDel(data) {
  return request({
    url: '/api/deleteDel',
    method: 'post',
    data
  })
}
