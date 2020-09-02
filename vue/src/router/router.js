import Vue from 'vue'
import Router from 'vue-router'
import basicLayout from '@/layout/basiclayout'
import commonLayout from '@/layout/commonlayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '',
        name: '',
        redirect: '/form',
      },
      {
        path: '/index',
        name: 'index',
        redirect: '/form',
      },
      {
        path: '/',
        name: 'basic',
        redirect: '/form',
        component: basicLayout,
        children: [
          {
            path: 'form',
            name: 'form',
            component: () => import('@/test/01-01/form/index')
          },
          {
            path: 'vuex',
            name: 'vuex',
            component: () => import('@/test/01-03/index')
          }
        ]
      },
      {
        path: '/router',
        name: 'router',
        component: () => import('@/test/01-02/selfRouter/testMyRouter')
      },
      
      {
        path: '/common',
        name: 'common',
        component: commonLayout,
        children: [
          {
            path: 'interview',
            name: 'interview',
            component: () => import('@/pages/interview/index')
          }
        ]
      }
    ]
})
