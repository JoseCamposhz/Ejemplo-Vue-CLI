import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('../App'),
        children: [
          {
            path: '/',
            name: 'Inicio',
            component: () => import('../views/Inicio')
          }
          ,
          {
            path: '/form',
            name: 'Formulario',
            component: () => import('../views/Form')
          }
          ,
          {
            path: '/paises',
            name: 'Paises',
            component: () => import('../views/Paises')
          }
        ]
      },
      {
        path:'*',
        redirect: '/'
      }
    ]
})

export default router