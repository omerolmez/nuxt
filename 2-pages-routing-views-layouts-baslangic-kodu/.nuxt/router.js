import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3cfc3621 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _1cdeaf9f = () => interopDefault(import('../pages/products/edit/_productId.vue' /* webpackChunkName: "pages/products/edit/_productId" */))
const _e0cedba2 = () => interopDefault(import('../pages/products/_productId/index.vue' /* webpackChunkName: "pages/products/_productId/index" */))
const _fd117342 = () => interopDefault(import('../pages/products/_productId/details.vue' /* webpackChunkName: "pages/products/_productId/details" */))
const _af194cf0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/products",
    component: _3cfc3621,
    name: "products"
  }, {
    path: "/products/edit/:productId?",
    component: _1cdeaf9f,
    name: "products-edit-productId"
  }, {
    path: "/products/:productId",
    component: _e0cedba2,
    name: "products-productId"
  }, {
    path: "/products/:productId/details",
    component: _fd117342,
    name: "products-productId-details"
  }, {
    path: "/",
    component: _af194cf0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
