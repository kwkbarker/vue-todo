import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/pages/NotFound'

const routes = [
    {
        path: '/',
        name: 'Feed',
        component: Feed
    },
    {
        path: 'task/:id',
        name: 'Task',
        component: Task,
        props: true,
        beforeEnter (to, from, next) {
            // check if task exists; continue if true and redirect to error if false
            const taskExists = sourceData.tasks.find(thread.id === to.params.id)
            if (taskExists) {
                next()
            } else {
                next({
                    name: 'NotFound',
                    params: { pathMatch: to.path.substring(1).split('/') }
                })
            }
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})