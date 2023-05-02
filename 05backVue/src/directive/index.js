// 定义 模块
import AdminPermission from './permissions/admin.js'
import BusinessPermission from './permissions/business'
import Vue from 'vue'

// 声明一个函数，构造自定义指令
const install = function(Vue) {
  Vue.directive('admin', AdminPermission)
  Vue.directive('shop', BusinessPermission)
}

if (window.Vue) {
  window['admin'] = AdminPermission
  window['shop'] = BusinessPermission
  // 把指令注册给vue,变为全局指令，你就可以使用 v-指令名
  Vue.use(install)
}

export default install
