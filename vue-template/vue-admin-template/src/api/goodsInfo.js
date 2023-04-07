/*
* 只负责提供对各种后端服务调用的api
* */
import request from '@/utils/request'

export function selectGoods(params) {
  return request(
    {
      url: 'http://localhost:8080/web/api/goods',
      method: 'GET',
      params
    }
  )
}

export function submitGoodsInfo(data) {
  return request({
    url: 'http://localhost:8080/web/api/goods',
    method: 'POST',
    data
  })
}

export function deleteGoodsByPK(data) {
  return request({
    url: 'http://localhost:8080/web/api/delete',
    method: 'POST',
    data
  })
}

export function selectAllEmployees(params) {
  return request({
    url: 'http://localhost/exam/api/employee',
    method: 'GET',
    params
  })
}

export function deleteEmployeeByPK(data) {
  return request({
    url: 'http://localhost/exam/api/delete',
    method: 'POST',
    data
  })
}

export function addEmployee(data) {
  return request({
    url: 'http://localhost/exam/api/employee',
    method: 'POST',
    data
  })
}
