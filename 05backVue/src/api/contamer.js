import request from '@/utils/request'

/**
 * 查询
 * @param {Object} params
 */
export function dataAPI(params) {
  return request({
    url: '/api/contamer/data',
    method: 'get',
    params
  })
}
