import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/props/parent.vue')
    },
    {
      path: '/emit',
      name: 'emit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/emit/parent.vue')
    },
    {
      path: '/sync',
      name: 'sync',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/sync/parent.vue')
    },
    {
      path: '/model',
      name: 'model',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/model/parent.vue')
    },
    {
      path: '/parentandchildren',
      name: 'parentandchildren',
      component: () => import(/* webpackChunkName: "about" */ './components/parentandchildren/parent.vue')
    },
    {
      path: '/refs',
      name: 'refs',
      component: () => import(/* webpackChunkName: "about" */ './components/refs/parent.vue')
    },
    {
      path: '/dispatch',
      name: 'dispatch',
      component: () => import(/* webpackChunkName: "about" */ './components/dispatch/parent.vue')
    },
    {
      path: '/attrandlisteners',
      name: 'attrandlisteners',
      component: () => import(/* webpackChunkName: "about" */ './components/attrandlisteners/parent.vue')
    },
    {
      path: '/provide',
      name: 'provide',
      component: () => import(/* webpackChunkName: "about" */ './components/provide/parent.vue')
    },
    {
      path: '/EventBus',
      name: 'EventBus',
      component: () => import(/* webpackChunkName: "about" */ './components/EventBus/parent.vue')
    },
    {
      path: '/Vuex',
      name: 'Vuex',
      component: () => import(/* webpackChunkName: "about" */ './components/vuex/parent.vue')
    }
  ]
})
