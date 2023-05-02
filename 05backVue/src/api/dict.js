import request from '@/utils/request'

/**
 * 查询
 * @param {Object} params
 */
export function findByDictNameAPI(params) {
  return request({
    url: '/api/dict/bynames',
    method: 'get',
    params
  })
}
