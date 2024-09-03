import { createApp } from 'vue'
import App from './App.vue'
import eventsPart from './components/events.vue'
import fieldWar from './components/field.vue'

createApp(App).use(eventsPart).use(fieldWar).mount('#app')
