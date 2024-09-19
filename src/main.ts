import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/assets/stylesheets/main.scss'
import '@/assets/stylesheets/demo.scss'

const app = createApp(App, {
  observationMatrixId: 227,
  apiConfig: {
    baseURL: 'http://localhost:3000/api/v1/',
    projectId: undefined,
    projectToken: 'ZEJhFp9sq8kBfks15qAbAg',
    userToken: undefined
  }
})

app.use(createPinia())
app.mount('#app')
