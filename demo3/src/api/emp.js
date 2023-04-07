import request from '@/utils/request'

export function allEmpInfo(data) {
  return request({
    url: '/api/allempinfo',
    method: 'post',
    data
  })
}

export function addEmp(data) {
  return request({
    url: '/api/addemp',
    method: 'post',
    data
  })
}

export function updateEmp(data) {
  return request({
    url: '/api/update',
    method: 'post',
    data
  })
}

export function allPolit() {
  return request({
    url: '/api/polit',
    method: 'get'
  })
}

export function allNation() {
  return request({
    url: '/api/nation',
    method: 'get'
  })
}

export function allJob() {
  return request({
    url: '/api/job',
    method: 'get'
  })
}

export function allDept() {
  return request({
    url: '/api/dept',
    method: 'get'
  })
}
