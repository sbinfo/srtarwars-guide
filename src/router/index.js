import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../components/characters/CharactersList'),
    children: [
      {
        path: ':personName',
        name: 'character',
        component: () => import('../components/characters/CharacterDetails'),
        props: true
      },
    ]
  },
  {
    path: '/planets',
    name: 'Planets',
    component: () => import('../components/planets/PlanetsList'),
    children: [
      {
        path: ':planetName',
        name: 'planet',
        component: () => import('../components/planets/PlanetDetails'),
        props: true
      }
    ]
  },
  {
    path: '/starships',
    name: 'Starships',
    component: () => import('../components/starships/StarshipsList')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;