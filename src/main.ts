import 'jquery';
import 'popper.js';
import '@/assets/scss/bootstrap/custom.scss';//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import  '@/assets/css/unSelect.css';

import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
createApp(App).use(router).mount('#main');

//import SideNavbar from '@/components/SideNavbar.vue';
//createApp(SideNavbar).mount('#SideNavbar');