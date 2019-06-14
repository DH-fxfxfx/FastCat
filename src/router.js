import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/index.vue'
import Mtzh from './views/Login/mtzh.vue'
import Sjyz from './views/Login/sjyz.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const router = new Router({
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
          component: () => import('./views/Index/center.vue'),
          meta: {
            requireLogin: true
          }
        },
        {
          path: '',
          redirect: '/movie'
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: 'mtzh',
          component: Mtzh
        },
        {
          path: 'sjyz',
          component: Sjyz
        },
        {
          path: '',
          redirect: 'mtzh'
        }
      ]
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Login/signup.vue'),
      beforeEnter: (to, from, next) => {
        // console.log(from.fullPath)
        // console.log(from)
        // console.log(to)
        next()
      }
    }
  ]
})

/**
 * 全局前置守卫beforeEach
 * 参数：to from next
 */
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)
  // next()
  NProgress.start()
  if (to.path === '/signup') {
    console.log(from.path)
    next()
  }
  if (to.meta.requireLogin) {
    if (window.localStorage.getItem('userInfo')) {
      next()
    } else {
      console.log(1)
      next({
        path: '/login',
        query: {
          redirect: from.fullPath
        }
      })
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // console.log(from)
  setInterval(() => {
    NProgress.done()
  }, 2000);

})
export default router
