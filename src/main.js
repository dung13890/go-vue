import Vue from 'vue'
import Keen from 'keen-ui'
import store from './vuex/store'
import App from './App'

Vue.use(Keen)

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App },
})
