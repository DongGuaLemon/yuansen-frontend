import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import main from './components/main'
import HelloWorld from './components/HelloWorld'
import loading from './components/loading'
import quizgame from './components/quizgame'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter)

Vue.config.productionTip = false
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: main },
    { path:'/HelloWorld',component:HelloWorld},
    { path:'/quizgame',component:quizgame},
    { path:'/loading',component:loading}
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
