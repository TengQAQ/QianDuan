import request from '@/utils/request'

export function airth() {
  return request({
    url: '/api/captcha',
    method: 'get'
  })
}
