import Vue from "vue"
import VueRouter from "vue-router"

import Dashboard from '../components/pages/Dashboard';
import Contact from '../components/pages/Contact';

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      component: Dashboard,
      name: 'Dashboard'
  },
  {
      path: '/contact',
      component: Contact,
      name: 'Contact'
  },
];

export default new VueRouter({
  routes
});
