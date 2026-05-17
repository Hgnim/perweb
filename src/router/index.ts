import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import renderMode from "@/ts/env/renderMode.ts";
import blogRouter from "@/router/blog.router.ts";

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
            component: ()=>import('@/views/Home/Home.vue'),
        },
        ...blogRouter
    ],
});
