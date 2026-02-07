import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import renderMode from "@/ts/env/renderMode.ts";

import Home from '@/views/Home/Home.vue';
import Blog from '@/views/Blog/Blog.vue';

export default createRouter({
    history: (()=>{
        switch (renderMode){
            case 'ssg':
                return import.meta.env.SSR ? createMemoryHistory() : createWebHistory();
            case 'spa':
                return createWebHistory();
            case 'spa-hash':
                return createWebHashHistory();
            default:
                throw new Error(`Unknown RENDER_MODE: ${renderMode}`);
        }
    })(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
        }
    ],
});
