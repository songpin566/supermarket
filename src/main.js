// import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import router from './router'
// require('vue.config.js')

Vue.config.productionTip=false
// createApp(App).mount('#app')
new Vue({
  render:h=>h(App),
  router
}).$mount('#app')

