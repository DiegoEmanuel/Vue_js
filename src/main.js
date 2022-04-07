import Vue from 'vue'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

import vuetify from './plugins/vuetify'
Vue.use(Vuelidate)
Vue.config.production = false


new Vue ({
  vuetify,
  render: h => h (App)
}).$mount('#app')