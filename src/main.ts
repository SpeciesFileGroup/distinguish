import { createApp } from 'vue'
import { createPinia } from 'pinia'
import matricesConfiguration from '@/config/matrices'
import App from './App.vue'
import '@/assets/stylesheets/main.scss'

const app = createApp(App, { 
  ...matricesConfiguration
})

app.use(createPinia())
app.mount('#app')
