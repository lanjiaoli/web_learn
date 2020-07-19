import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false


router.beforeEach((to,from , next) =>{
  console.log(to.path)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(ElementUI);

