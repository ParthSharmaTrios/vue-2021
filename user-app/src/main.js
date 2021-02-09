import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/index'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSpinners from 'vue-spinners'

Vue.use(VueSpinners)
Vue.use(VueRouter)

const router = new VueRouter({
  mode : 'history',
  routes
})

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
