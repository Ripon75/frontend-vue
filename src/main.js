import axios from 'axios';
import store from './store'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import globals from './helpers/globals'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

const app = createApp(App)

app.config.globalProperties.showNotification = (type, message) => {
  globals.toastFire(type, message)
}

app.use(store).use(router).mount('#app')