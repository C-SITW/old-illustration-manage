import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/:catchAll',
    name: '/404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: () => import('../views/ziluyou/welcome.vue') },
      { path: '/user', component: () => import('../views/user/user.vue') },
    ],
    component: () => import('../views/home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
