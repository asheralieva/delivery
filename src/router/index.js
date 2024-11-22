import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'authorization',
      component: () => import('../components/Authorization.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../components/Registration.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../components/Home/Order.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../components/Account.vue')
    },
    
  ]
})

export default router
