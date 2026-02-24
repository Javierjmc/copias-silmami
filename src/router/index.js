import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegistroView.vue'),
    },
    // {
    //   path: '/perfil',
    //   name: 'perfil',
    //   component: () => import('../views/PerfilView.vue'),
    // },
    {
      path: '/conocenos',
      name: 'conocenos',
      component: () => import('../views/ConocenosView.vue'),
    },
    {
      path: '/tienda',
      name: 'tienda',
      component: () => import('../views/TiendaView.vue'),
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/ServiciosView.vue'),
    },
  ],
})

export default router
