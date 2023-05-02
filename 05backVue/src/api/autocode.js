import request from '@/utils/request'

/**
 * 得到所有表格
 */
export function tablesAPI() {
  return request({
    url: '/api/code/tables',
    method: 'get'
  })
}

/**
 * 根据表名得到列名
 */
export function columnByTableAPI(tableName) {
  return request({
    url: '/api/code/columns/' + tableName,
    method: 'get'
  })
}

/**
 * 保存数据库配置信息
 */
export function tplSaveAPI(tableName, columnList) {
  // 数据构建
  const data = {
    'tableName': tableName,
    'columns': columnList
  }

  return request({
    url: '/api/code/tplcolumn/save',
    method: 'post',
    data: data
  })
}
