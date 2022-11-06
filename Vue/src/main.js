import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import Gshepherd from './Gshepherd.vue'
import login from './components/page/login/login_page.vue'
import display from './components/page/display/display.vue'
import App from './App.vue'
import dashboard from './components/page/dashboard/dashboard.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/Gshepherd/',
            component: Gshepherd,
        },
        {
            path: '/Gshepherd/login',
            component: login
        },
        {
            path: '/Gshepherd/display/:id',
            component: display
        },
        {
            path: '/Gshepherd/dashboard/:id',
            component: dashboard
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/Gshepherd/',
            hidden: true
        }
    ]
});
createApp(App)
.use(router)
.mount('#app')
