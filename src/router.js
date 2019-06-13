import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Index/index.vue'),
      children: [
        {
          path: 'movie',
          name: 'movie',
          component: () => import('./views/Index/movie.vue')
        },
        {
          path: 'cinema',
          name: 'cinema',
          component: () => import('./views/Index/cinema.vue')
        },
        {
          path: 'center',
          name: 'center',
          component: () => import('./views/Index/center.vue')
        },
        {
          path: '',
          redirect: '/movie'
        }
      ]
    },
    {
      path: '/city',
      component: () => import('./views/city/index1.vue')
    }
  ]
})
