import Vue from 'vue'
import VueRouter from 'vue-router'
import saveAs from 'file-saver'
import App from './App'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [
  {path: '/', component: Home},
  {path: '/dashboard', component: Dashboard}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
