import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import {isDev} from "@/ts/env/packMode.ts";

import '@/assets/scss/bootstrap/custom.scss';
import 'bootstrap';
import  '@/assets/css/unSelect.css';

import 'terminal.css';//改为vite后，postcssPrefixwrap只会处理ts中引用的css，不会处理scss中的@inport，故在此引用
import '@/assets/scss/terminal-custom.scss';
import 'animate.css';
import 'hover.css';
import 'github-markdown-css/github-markdown.css';//该包必须全局加载，因为markdown的内容是动态生成的html，无法使用scoped

import 'virtual:svg-icons-register';//vite-plugin-svg-icons的虚拟模块


export default function () {
    if (isDev) console.info(`[main-spa.ts] 进入`);

    createApp(App).use(router).mount('#app');
}