import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueAnalytics from 'vue-analytics'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')


// Vue.use(VueAnalytics, {
//   id: 'UA-162053243-1',
//   router
// })