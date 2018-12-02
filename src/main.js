import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import main from './components/main'
import HelloWorld from './components/HelloWorld'
import loading from './components/loading'
import quizgame from './components/quizgame'
import secretpage from './components/secretpage'
import endingpage from './components/Endingpage'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://yuansen.chengxun.tw/graphql',
  })
  // Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  })
  // Install the vue plugin
Vue.use(VueApollo)
Vue.use(BootstrapVue);
Vue.use(VueRouter)

Vue.config.productionTip = false
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: main },
    { path:'loading',name:'loading',component:loading},
    { path:'/secretpage',component:secretpage},
    { path:'/quizgame',name:'quizgame',component:quizgame},
    { path:'endingpage',name:'endingpage',component:endingpage}

  ]
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
