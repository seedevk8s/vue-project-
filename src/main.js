import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//import App from './App.vue'
//import App from './App2.vue'
//import App from './App3.vue'
//import App from './App4.vue'
//import App from './App5.vue'
//import App from './App6.vue'
//import App from './App7.vue'
//import App from './App8.vue'
//import App from './App9.vue'
//import App from './App10.vue'
//import App from './App11.vue'
//import App from './App12.vue'
//import App from './App13.vue'
//import App from './App14.vue'
//import App from './App15.vue'
//import App from './App16.vue'
//import App from './App17.vue'
//import App from './App18.vue'
//import App from './App19.vue'
import App from './App20.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
