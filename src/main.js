import { createApp } from 'vue'
import App from './App.vue'
import eventsPart from './components/events.vue'

createApp(App).use(eventsPart).mount('#app')
