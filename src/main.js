import Vue from 'vue'
import App from './App.vue'
import router from './router'
import notice from './utils/novice'

Vue.config.productionTip = false

Vue.use(notice)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
