import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// app.config.globalProperties.isFrontendLayout = false;
// app.config.globalProperties.isAdminLayout = false;

app.use(store).use(router).mount('#app')
