import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Works from './views/Works.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
