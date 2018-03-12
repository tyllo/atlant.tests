import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/fraction',
    },
    {
      path: '/fraction',
      name: 'fraction',
      component: () => import(/* webpackChunkName: "fraction" */ '@/views/Fraction/Index'),
    },
    {
      path: '/websocket',
      name: 'websocket',
      component: () => import(/* webpackChunkName: "websocket" */ '@/views/Websocket/Index'),
    },
  ],
});

export default router;
