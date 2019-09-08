// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import { VueReCaptcha } from 'vue-recaptcha-v3'

// Vue.use(VueReCaptcha, { siteKey: '6Lchm6UUAAAAAOgHxs-ivJHt5SC2sUSWylB7K7qc' })
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.prototype.$ads = require('../static/data/base.xml').biens.bien
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
