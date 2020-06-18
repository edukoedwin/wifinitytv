import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueRouter from 'vue-router'
import Routes from './routes'

//added modules
Vue.use(vueRouter)
const router=new vueRouter({
  routes:Routes
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router
}).$mount('#app')
