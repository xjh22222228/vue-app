// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './scss/global.scss'
import elHeader from './components/common/header'
import elFooter from './components/common/footer'
import elUser from './components/common/user'
import layerTop from './components/ui/layer-top'
import loading from './components/ui/loading'
import correct from './components/ui/correct'
import confirm_cancel from './components/ui/confirm_cancel'

Vue.config.productionTip = false
Vue.component('elHeader', elHeader)
Vue.component('elFooter', elFooter)
Vue.component('elUser', elUser)
Vue.component('elLayerTop', layerTop)
Vue.component('elLoading', loading)
Vue.component('elCorrect', correct)
Vue.component('elConfirmCancel', confirm_cancel)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
