import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/assets/stylesheets/main.scss'

const app = createApp(App, { 
  observationMatrixId: 24,
  apiConfig: {
    baseURL: 'http://localhost:3000/api/v1/',
    projectId: undefined,
    projectToken: '5kshojqRCr83fM3MW7OA9g',
    userToken: undefined
  }
})

app.use(createPinia())
app.mount('#app')
