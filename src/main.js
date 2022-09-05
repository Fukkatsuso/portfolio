import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(VueGtag, {
  enabled: process.env.NODE_ENV === 'production',
  config: {
    id: 'G-9T8JG2E4FP'
  },
}, router)
app.mount('#app')
