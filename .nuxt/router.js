import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14c0bb3b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _34789600 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _03bf8dd2 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3977276a = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _1bb9b452 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _b3b69736 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _74811fd4 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _14c0bb3b,
    name: "about___en"
  }, {
    path: "/ar",
    component: _34789600,
    name: "index___ar"
  }, {
    path: "/login",
    component: _03bf8dd2,
    name: "login___en"
  }, {
    path: "/orders",
    component: _3977276a,
    name: "orders___en"
  }, {
    path: "/profile",
    component: _1bb9b452,
    name: "profile___en"
  }, {
    path: "/register",
    component: _b3b69736,
    name: "register___en"
  }, {
    path: "/test",
    component: _74811fd4,
    name: "test___en"
  }, {
    path: "/ar/about",
    component: _14c0bb3b,
    name: "about___ar"
  }, {
    path: "/ar/login",
    component: _03bf8dd2,
    name: "login___ar"
  }, {
    path: "/ar/orders",
    component: _3977276a,
    name: "orders___ar"
  }, {
    path: "/ar/profile",
    component: _1bb9b452,
    name: "profile___ar"
  }, {
    path: "/ar/register",
    component: _b3b69736,
    name: "register___ar"
  }, {
    path: "/ar/test",
    component: _74811fd4,
    name: "test___ar"
  }, {
    path: "/",
    component: _34789600,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
