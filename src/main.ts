import 'jquery';
import '@/assets/scss/bootstrap/custom.scss';
import  '@/assets/css/unSelect.css';

import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
createApp(App).use(router).mount('#app');

//import SideNavbar from '@/components/SideNavbar.vue';
//createApp(SideNavbar).mount('#SideNavbar');