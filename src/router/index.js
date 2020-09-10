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
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
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
 */
export const constantRoutes = [{
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
      meta: {
        title: 'Dashboard',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/orderManage',
    component: Layout,
    name: 'orderManage',
    meta: {
      title: '订单管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'orderDetail',
        name: 'orderDetail',
        component: () => import('@/views/orderManage/orderDetail'),
        hidden: true,
        meta: {
          title: '订单详情',
        }
      },
      {
        path: 'orderCount',
        name: 'orderCount',
        component: () => import('@/views/orderManage/orderCount'),
        meta: {
          title: '订单统计',
        }
      },
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('@/views/orderManage/orderList'),
        meta: {
          title: '订单列表',
        }
      },
      {
        path: 'refundAudit',
        name: 'refundAudit',
        component: () => import('@/views/orderManage/refundAudit'),
        meta: {
          title: '退款审核',
        }
      },
      {
        path: 'refundOrder',
        name: 'refundOrder',
        component: () => import('@/views/orderManage/refundOrder'),
        meta: {
          title: '退款订单',
        }
      },
      {
        path: 'writeOffOrder',
        name: 'writeOffOrder',
        component: () => import('@/views/orderManage/writeOffOrder'),
        meta: {
          title: '核销订单',
        }
      },
    ]
  },
  {
    path: '/physicalExaminationManage',
    component: Layout,
    name: 'physicalExaminationManage',
    redirect: '/physicalExaminationManage/hospitalManage',
    meta: {
      title: '体检管理',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'addHospital',
      name: 'addHospital',
      component: () => import('@/views/physicalExaminationManage/addHospital'),
      hidden: true,
      meta: {
        title: '新增医院',
      }
    },
      {
        path: 'hospitalManage',
        name: 'hospitalManage',
        component: () => import('@/views/physicalExaminationManage/hospitalManage'),
        meta: {
          title: '医院管理',
        }
      },
      {
        path: 'gobalPhysicalExaminationManage',
        name: 'gobalPhysicalExaminationManage',
        component: () => import('@/views/physicalExaminationManage/gobalPhysicalExaminationManage'),
        meta: {
          title: '全局体检日管理',
        }
      },
    ]
  },
  {
    path: '/standardDatabase',
    component: Layout,
    name: 'standardDatabase',
    alwaysShow: true,
    redirect: '/standardDatabase/checkItemStandardLibrary',
    meta: {
      title: '标准数据库',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'checkItemStandardLibrary',
      name: 'checkItemStandardLibrary',
      component: () => import('@/views/standardDatabase/checkItemStandardLibrary'),
      meta: {
        title: '检查项标准库',
      }
    }]
  },
  {
    path: '/templateManage',
    component: Layout,
    name: 'templateManage',
    alwaysShow: true,
    redirect: '/templateManage/medicalPackageTemplate',
    meta: {
      title: '模板管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'medicalPackageTemplate',
        name: 'medicalPackageTemplate',
        component: () => import('@/views/templateManage/medicalPackageTemplate'),
        meta: {
          title: '体检套餐模板',
        }
      },
      {
        path: 'medicalItemTemplate',
        name: 'medicalItemTemplate',
        component: () => import('@/views/templateManage/medicalItemTemplate'),
        meta: {
          title: '体检项模板',
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
