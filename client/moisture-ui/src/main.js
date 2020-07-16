import Vue from 'vue'
import App from './App.vue'
import 'skeleton-css/css/skeleton.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
