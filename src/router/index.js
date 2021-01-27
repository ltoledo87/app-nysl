import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/register",
    name: "Register",
    component: () => import('../views/Register.vue'),

  },
  {
    path: "/",
    name: "Login",
    component: () => import('../views/Login.vue'),

  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue'),
    meta: {
      requiresAuth: true
    },
  }
  ,
  {
    path: '/game_info',
    name: 'Game_Info',
    component: () => import(/* webpackChunkName: "about" */ '../views/Game_Info.vue'),
    meta: {
      requiresAuth: true
    },
  }
  ,
  {
    path: '/rules',
    name: 'Rules',
    component: () => import(/* webpackChunkName: "about" */ '../views/Rules.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatRoom.vue'),
    meta: {
      requiresAuth: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  console.log(user);
  console.log(requiresAuth);
  

  if(requiresAuth) {
    firebase.auth().onAuthStateChanged( (user) => {
      if (!user) next('/')
      else next();
    })
  } else next()
});
