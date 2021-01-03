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
    component: () => import('../components/planets/PlanetsList')
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
  linkActiveClass: 'active'
});

export default router;