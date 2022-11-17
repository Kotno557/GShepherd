import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Gshepherd from './Gshepherd.vue'
import login from './components/page/login/login_page.vue'
import joinPage from './components/page/joinPage/joinPage.vue'
import App from './App.vue'
import dashboard from './components/page/dashboard/dashboard.vue'
import roomdashboard from './components/page/dashboard/roomdashboard.vue'
const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            component: Gshepherd,
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/join/:id',
            component: joinPage
        },
        {
            path: '/dashboard/:id',
            component: dashboard
        },
        {
            path: '/dashboard/:id/:roomId',
            component: roomdashboard
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
            hidden: true
        }
    ]
});
createApp(App)
.use(router)
.mount('#app')
