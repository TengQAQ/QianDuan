import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 *                                路由对应的页面不会显示在侧边栏
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 *                                重定向
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 *                                路由的名称必须设置
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 * 整个项目都是在此处配置路由表
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/yunfu',
    name: 'Yunfu',
    component: Layout,
    children: [{
      path: '/index',
      name: 'Index',
      meta: { title: '孕妇管理界面', icon: 'el-icon-user'},
      component: () => import('@/views/yunfu/index.vue')
    }]
  },

  {
    path: '/user',
    component: Layout,
    name: 'User',
    // meta: { title: '用户', icon: 'el-icon-user' },
    children: [
      {
        // 设置路径
        path: 'userManager',
        name: 'userManager',
        component: () => import('@/views/user/index.vue'),
        meta: { title: '用户管理', icon: 'el-icon-user' }
        // 是否隐藏左边框
        // hidden: true
      }
    ]
  },

  {
    path: '/org',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Index',
      component: () => import('@/views/org/index.vue'),
      meta: { title: '公司管理', icon: 'el-icon-eleme' }
    }]
  },

  {
    path: '/goods',
    name: 'goods',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/goodsinfo/index'),
        meta: { title: '商品', icon: 'el-icon-user' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
