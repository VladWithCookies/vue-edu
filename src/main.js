import Vue from 'vue'
import VueTextareaAutosize from 'vue-textarea-autosize'
import App from './App.vue'
import router from './router.js'
import store from './store'
  
Vue.use(VueTextareaAutosize)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
