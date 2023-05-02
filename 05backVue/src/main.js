import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

// 全局组件
import DictDataTag from '@/components/DictDataTag/index.vue'

// 引用文件下载方法
import { download } from '@/utils/request'
// 自定义全局指令
import myDirective from '@/directive/index.js'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)
// 注册全局组件中
Vue.component('DictTag', DictDataTag)
// 挂载
Vue.use(myDirective)

Vue.config.productionTip = false
// 将引入的download挂载到全局文件当中
Vue.prototype.download = download

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
