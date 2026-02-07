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


export default function () {
    if (isDev) console.info(`[main-spa.ts] 进入`);

    createApp(App).use(router).mount('#app');
}