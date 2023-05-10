import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ResetInput from 'v-reset-input'


createApp(App)

.use(router)
.use(ResetInput)
.mount('#app')
