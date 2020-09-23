import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  icon: 'fa'
})

new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
