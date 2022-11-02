import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import Gshepherd from './Gshepherd.vue'
import App from './App.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/Gshepherd/',
            component: Gshepherd,
        }
    ]
});
createApp(App)
.use(router)
.mount('#app')
