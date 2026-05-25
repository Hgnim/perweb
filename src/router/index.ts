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
        ...blogRouter,

        {
            path: '/404',//使预渲染工具构建一个404.html以供github page使用
            name: '404',
            component: ()=>import('@/views/404.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: ()=>import('@/views/404.vue'),
        },
    ],
});
