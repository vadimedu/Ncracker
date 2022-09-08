import { createRouter, createWebHashHistory, isNavigationFailure } from 'vue-router'

import MainPage from '../pages/MainPage.vue'
import FilmCard from '../pages/FilmCard.vue'
import NotFoundPage from '../pages/NotFoundPage'
import { state } from '../store/index'
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/film',
    name: 'film',
    component: FilmCard
  },
  {
    path: "/:catchAll(.*)",
    name: 'notFound',
    component: NotFoundPage
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
