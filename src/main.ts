import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/stylesheets/main.scss'
import '@/assets/stylesheets/demo.scss'

const app = createApp(App, {
  observationMatrixId: 227,
  //otuId: [],
  apiConfig: {
    baseURL: 'https://sfg.taxonworks.org/api/v1/',
    projectId: undefined,
    projectToken: 'ZEJhFp9sq8kBfks15qAbAg',
    userToken: undefined
  }
})

app.mount('#app')
