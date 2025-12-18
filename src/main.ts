import 'jquery';
import '@/assets/scss/bootstrap/custom.scss';
import 'bootstrap';
import  '@/assets/css/unSelect.css';

import 'terminal.css';//改为vite后，postcssPrefixwrap只会处理ts中引用的css，不会处理scss中的@inport，故在此引用
import '@/assets/scss/terminal-custom.scss';
import 'animate.css';
import 'hover.css';

import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
createApp(App).use(router).mount('#app');

//import SideNavbar from '@/components/SideNavbar.vue';
//createApp(SideNavbar).mount('#SideNavbar');