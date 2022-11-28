import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Auth from '@/components/Auth.vue'
import Register from '@/components/Register.vue'
import RecipesList from '@/components/RecipesList'

//import RecipeList from '@/components/RecipeList'
//import RecipeCreate from '@/components/RecipeCreate'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/recipes-list',
    name: 'RecipesList',
    component: RecipesList
  },
 
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
