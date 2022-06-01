import devtools from '@vue/devtools'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/css/index.css'

createApp(App).use(createPinia()).mount('#app')

if (process.env.NODE_ENV === 'development') {
  // devtools.connect(/* host, port */)
}
