import request from '@/utils/request'

export function selectAllDepartments(params) {
  return request({
    url: 'http://localhost/exam/api/org',
    method: 'GET',
    params
  })
}
