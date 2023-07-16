import {createApp} from 'vue'
import App from './components/App/App.vue'
import './registerServiceWorker'
import router from './router'

// eslint-disable-next-line import/extensions,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/order,import/extensions
import AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css'

const app = createApp(App)

app.mount('#app')

AOS.init();

createApp(App).use(router).mount('#app')
