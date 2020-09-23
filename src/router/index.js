import Vue from 'vue'
import VueRouter from 'vue-router'
import TopRatedMovies from '../components/Movies/TopRatedMovies.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/top-rated-movies',
    name: 'TopRatedMovies',
    component: TopRatedMovies,
  },
  {
    path: '/upcoming-movies',
    name: 'UpcomingMovies',
    component: () => import(/* webpackChunkName: "about" */ '../components/Movies/UpcomingMovies.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
