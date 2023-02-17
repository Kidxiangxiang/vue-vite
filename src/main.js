import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(ElementPlus).use(router).use(createPinia())
app.mount('#app')
