import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router'
import Test from './components/Test.vue'
import Student from './components/Student.vue'
import CNNode from './components/CNNode'
import Main from './components/Main'

Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false
const routes = [
  { path: '/test', component: Test },
  { path: '/student', component: Student },
  {path:'/cnnode',component:CNNode},
  {path:'/main',component:Main}
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
