import { createApp } from 'vue'
import './lib/bc.scss' //css最小影响原则
import './index.scss'
import App from './App.vue'
import Showcodedemo from './components/Showcodedemo.vue'
import { router } from './router';

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Showcodedemo', Showcodedemo)