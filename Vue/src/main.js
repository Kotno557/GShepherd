import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Gshepherd from './Gshepherd.vue'
import login from './components/page/login/login_page.vue'
import joinPage from './components/page/joinPage/joinPage.vue'
import App from './App.vue'
import dashboard from './components/page/dashboard/dashboard.vue'
import roomdashboard from './components/page/dashboard/roomdashboard.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/GShepherd/',
            component: Gshepherd,
        },
        {
            path: '/GShepherd/login',
            component: login
        },
        {
            path: '/GShepherd/join/:id',
            component: joinPage
        },
        {
            path: '/GShepherd/dashboard/:id',
            component: dashboard
        },
        {
            path: '/GShepherd/dashboard/:id/:roomId',
            component: roomdashboard
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/GShepherd/',
            hidden: true
        }
    ]
});
createApp(App)
.use(router)
.mount('#app')
