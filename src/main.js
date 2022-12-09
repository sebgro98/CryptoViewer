import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.config.globalProperties.$filters = {
    price_change(value){
        value = value.toString()
        if(value.includes('-')) {
            return value;
        }else {
            return '';
        }
    }
}