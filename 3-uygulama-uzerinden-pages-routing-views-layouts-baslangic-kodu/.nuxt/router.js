import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42015054 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0e8ff3d8 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _44188aca = () => interopDefault(import('../pages/admin/new-post.vue' /* webpackChunkName: "pages/admin/new-post" */))
const _a0ecdd02 = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _140e7103 = () => interopDefault(import('../pages/posts/_postId/index.vue' /* webpackChunkName: "pages/posts/_postId/index" */))
const _4f516694 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/admin",
    component: _42015054,
    name: "admin"
  }, {
    path: "/posts",
    component: _0e8ff3d8,
    name: "posts"
  }, {
    path: "/admin/new-post",
    component: _44188aca,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _a0ecdd02,
    name: "admin-postId"
  }, {
    path: "/posts/:postId",
    component: _140e7103,
    name: "posts-postId"
  }, {
    path: "/",
    component: _4f516694,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
