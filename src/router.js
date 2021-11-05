import { createRouter, createWebHistory } from 'vue-router'

import Home from './page/home/index.vue'
const Login  = () => import('./page/Login.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router