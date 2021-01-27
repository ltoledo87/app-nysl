import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/v-calendar'
import App from './App.vue'
import router from './router'
import "@/firebase.js"
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
