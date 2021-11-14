import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import router from './router'
import store from './feature/store'

import './assets/index.css'

const eventBus = mitt()
const app = createApp(App)

app.provide('emitter', eventBus);

app.use(router).use(store).mount('#app')
