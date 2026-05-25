import {onMounted} from "vue";
import AOS from 'aos';

export default function (){
    onMounted(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: true,
        });
    });
}