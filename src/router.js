import { createRouter, createWebHistory } from 'vue-router'

import Home from './page/Home.vue'
const Login  = () => import('./page/Login.vue')
const English = () => import('./page/English.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    {path: '/study-english', component: English}
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router