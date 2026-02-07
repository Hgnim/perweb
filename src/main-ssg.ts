import {ViteSSG} from "vite-ssg";
import App from '@/App.vue';
import router from '@/router';
import {isDev} from "@/ts/env/packMode.ts";

import '@/assets/scss/bootstrap/custom.scss';
import  '@/assets/css/unSelect.css';

import 'terminal.css';//改为vite后，postcssPrefixwrap只会处理ts中引用的css，不会处理scss中的@inport，故在此引用
import '@/assets/scss/terminal-custom.scss';
import 'animate.css';
import 'hover.css';


export default function () {
    if (isDev) console.info(`[main-ssg.ts] 进入`);

    const createApp = ViteSSG(
        App,
        router.options,
        ({isClient}) => {
            if (isClient) {
                import('bootstrap').then(() => {
                    if (isDev)
                        console.log('[main-ssg.ts] Bootstrap Js 已动态载入');
                }).catch(err => {
                    if (isDev)
                        console.error('[main-ssg.ts] Bootstrap Js 动态载入失败：', err);
                });
            }
        },
    );

    return {createApp};
}