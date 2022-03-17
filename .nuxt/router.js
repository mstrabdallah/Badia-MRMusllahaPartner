import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14c0bb3b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _34789600 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _03bf8dd2 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _b3b69736 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _40f1cf23 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _74811fd4 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _b5ae3c28 = () => interopDefault(import('../pages/UserProfile.vue' /* webpackChunkName: "pages/UserProfile" */))
const _e841836a = () => interopDefault(import('../pages/services/_id.vue' /* webpackChunkName: "pages/services/_id" */))

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
    path: "/register",
    component: _b3b69736,
    name: "register___en"
  }, {
    path: "/services",
    component: _40f1cf23,
    name: "services___en"
  }, {
    path: "/test",
    component: _74811fd4,
    name: "test___en"
  }, {
    path: "/UserProfile",
    component: _b5ae3c28,
    name: "UserProfile___en"
  }, {
    path: "/ar/about",
    component: _14c0bb3b,
    name: "about___ar"
  }, {
    path: "/ar/login",
    component: _03bf8dd2,
    name: "login___ar"
  }, {
    path: "/ar/register",
    component: _b3b69736,
    name: "register___ar"
  }, {
    path: "/ar/services",
    component: _40f1cf23,
    name: "services___ar"
  }, {
    path: "/ar/test",
    component: _74811fd4,
    name: "test___ar"
  }, {
    path: "/ar/UserProfile",
    component: _b5ae3c28,
    name: "UserProfile___ar"
  }, {
    path: "/ar/services/:id",
    component: _e841836a,
    name: "services-id___ar"
  }, {
    path: "/services/:id",
    component: _e841836a,
    name: "services-id___en"
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
