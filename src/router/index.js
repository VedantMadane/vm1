import Vue from 'vue'
import VueRouter from 'vue-router'
// import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/AddDatacenter',
    name: 'AddDatacenter',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AddDatacenter.vue')
  },
  {
    path: '/EmpDashboard',
    name: 'EmpDashboard',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/EmpDashboard.vue')
  },
  {
    path: '/VMreq',
    name: 'VMreq',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/VMreq.vue')
  },
  {
    path: '/AddEnvironment',
    name: 'AddEnvironment',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AddEnvironment.vue')
  },
  {
    path: '/ManageProgram',
    name: 'VManageProgram',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ManageProgram.vue')
  },
  {
    path: '/Homepage',
    name: 'Homepage',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Homepage.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/update/:key',
    name: 'UpdateDataCenter',
    component: () => import(/* webpackChunkName: "about" */'../components/Support/UpdateDataCenter.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
