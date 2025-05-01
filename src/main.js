import Vue from 'vue'
import Vuetify from 'vuetify'
//import 'vuetify/src/stylus/app.styl'
import App from './App.vue'

Vue.use(Vuetify)


new Vue({
  render: h => h(App),
}).$mount('#app')
