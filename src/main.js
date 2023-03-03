import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './style.css'
import App from './App.vue'
import router from './router/index'
import LeeTable from './components/lee-table/index.vue'
import { createPinia } from 'pinia'
import en from './utils/en.js'

const app = createApp(App)

const components = [
  LeeTable
]

components.forEach(component => {
  console.log(component)
  app.component(component.name, component)
})

app.use(ElementPlus, {
  locale: { ...en }
}).use(router).use(createPinia())
app.mount('#app')
