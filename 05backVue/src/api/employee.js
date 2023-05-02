import request from '@/utils/request'

/**
 * 查询
 * @param {Object} params
 */
export function dataApi(params) {
  return request({
    url: '/api/employee/data',
    method: 'get',
    params
  })
}

/**
 * 新增
 * @param {Object} data
 */
export function addApi(data) {
  return request({
    url: '/api/employee',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param {Object} data
 */
export function editApi(data) {
  return request({
    url: '/api/employee',
    method: 'put',
    data
  })
}

export function deleteByIdApi(data) {
  return request({
    url: '/api/employee',
    method: 'delete',
    data
  })
}

/** 根据主键查询
 * @param {Object} id
 */
export function findByIdApi(id) {
  return request({
    url: '/api/employee/' + id,
    method: 'get'
  })
}

export function downloadExcel(data) {
  return request({
    url: '/api/employee/download' + data,
    method: 'post',
    data: data
  })
}
