/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import store from "./store"
import router from "./router"

//require('./store/modules/subscriber')

//require('./store/modules/currentUser')
// import Vuex from 'vuex'
// Vue.use(Vuex)


// const store = new Vuex.Store(
//    storeData
// )

Vue.component('app-container', require('./components/AppContainer.vue').default);
Vue.component('login-form', require('./components/loginForm.vue').default);

const app = new Vue({
    store,
    router,
    el: '#app',

});

// store.dispatch('currentUser/attempt', localStorage.getItem('token')).then(()=>{
//   new Vue({
//     //router,
//     store,
//     el: '#app',
// })
// })
