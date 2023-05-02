import request from '@/utils/request'

/**
 * 查询
 * @param {Object} params
 */
export function dataApi(params) {
  return request({
    url: '/api/merchandiseclass/data',
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
    url: '/api/merchandiseclass',
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
    url: '/api/merchandiseclass',
    method: 'put',
    data
  })
}

/** 根据主键查询
 * @param {Object} id
 */
export function findByIdApi(id) {
  return request({
    url: '/api/merchandiseclass/' + id,
    method: 'get'
  })
}
