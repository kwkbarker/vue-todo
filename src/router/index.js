import { createRouter, createWebHistory } from 'vue-router'
// import store from '@/store.js'
import NotFound from '@/pages/NotFound.vue'
import Feed from '@/pages/Feed.vue'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'
import TodoItem from '@/components/TodoItem.vue'

const routes = [
    {
        path: '/',
        name: 'Feed',
        component: Feed
    },
    {
        path: '/TodoItem/:id',
        name: 'TodoItem',
        component: TodoItem,
        props: true,
        // beforeEnter (to, from, next) {
        //     // check if task exists; continue if true and redirect to error if false
        //     const taskExists = store.state.tasks.find(task.id === to.params.id)
        //     if (taskExists) {
        //         next()
        //     } else {
        //         next({
        //             name: 'NotFound',
        //             params: { pathMatch: to.path.substring(1).split('/') }
        //         })
        //     }
        // }
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