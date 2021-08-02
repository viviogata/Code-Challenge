import Vue from 'vue'
import VueRouter from 'vue-router'
import createEmails from '../components/createEmails.vue'
import emailsList from '../components/emailsList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Create Emails',
    component: createEmails
  },
  {
    path: '/list',
    name: 'Emails List',
    component: emailsList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
