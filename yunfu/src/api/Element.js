import request from '@/utils/request'

export function selectAllElement(params) {
  return request({
    url: 'http://localhost/yunfu/api/ele',
    method: 'GET',
    params
  })
}

export function selectTableName(tableName) {
  return request({
    url: 'http://localhost/yunfu/api/search',
    method: 'GET',
    params: { tableName }
  })
}

export function selectOccupation(occupation) {
  return request({
    url: 'http://localhost/yunfu/api/occupation',
    method: 'GET',
    params: { occupation }
  })
}

export function insertEle(data) {
  return request({
    url: 'http://localhost/yunfu/api/ele',
    method: 'POST',
    data
  })
}

export function viewScope(data) {
  return request({
    url: 'http://localhost/yunfu/api/hus',
    method: 'POST',
    data
  })
}
