import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/quadras',
    name: 'quadras',
    component: () => import('../views/QuadrasView.vue')
  },
  {
    path: '/locais',
    name: 'locais',
    component: () => import('../views/MenuDoUserView.vue')
  },
  
  {
    path: '/quadras/:id',
    name: 'quadraDetails',
    component: () => import('../views/QuadraDetailsView.vue')
  },
  {
    path: '/quadras/new',
    name: 'quadrasCadastro',
    component: () => import('../views/CadastreQuadrasView.vue')
  },
  {
    path: '/politic',
    name: 'politic',
    component: () => import('../views/PoliticView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
