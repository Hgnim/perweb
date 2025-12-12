// noinspection JSIgnoredPromiseFromCall

import {defineComponent, ref, Ref, onMounted, onUnmounted} from 'vue';
import conveyorBelt from "@/components/conveyorBelt/conveyorBelt.vue";
import {sleep} from "@/ts/global/sleep";
export default defineComponent({
    components: {
        conveyorBelt
    },
    setup() {
        //region _整页滚动

        //是否加载完毕
        const loadDone:Ref<boolean>=ref(false);
        //当前页面
        const currentSection:Ref<number> = ref(-1);

        let isScrolling:boolean = false;
        //页面总数
        const allSection:number = 3;
        function scrollToPage(pageIndex: number) {
            if (!loadDone.value) return;
            if (pageIndex < 0 || pageIndex >= allSection) return;
            if (isScrolling) return;
            if (pageIndex > currentSection.value)
                if (!(pageIndex < allSection)) return;
            else if (pageIndex < currentSection.value)
                if (!(pageIndex > 0)) return;
            else return;
            isScrolling = true;

            doAnim(pageIndex,currentSection.value);
            currentSection.value = pageIndex;
            setTimeout(() => {
                isScrolling = false;
            }, 800)
        }

        function onWheel(this: Window, event: WheelEvent):void {
            if ((event.target as Element).closest('[data-allow-wheel]'))
                return;//给需要滚动的元素或其父元素添加标签data-allow-wheel

            event.preventDefault();//阻止默认行为

            const deltaY:number = event.deltaY;
            if (deltaY > 0)
                scrollToPage(currentSection.value + 1);
            else if (deltaY < 0)
                scrollToPage(currentSection.value - 1);
        }

        function onKeydown(this: Window, event: KeyboardEvent):void {
            if ((event.target as Element).closest('[data-allow-keydown]'))
                return;//基本同理于onWheel

            function action(key:string){
                switch (key){
                    case 'ArrowDown':
                    case 'PageDown':
                    case ' ':
                        scrollToPage(currentSection.value + 1);break;
                    case 'ArrowUp':
                    case 'PageUp':
                        scrollToPage(currentSection.value - 1);break;
                    case '0':
                        scrollToPage(0);break;
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                        scrollToPage(Number(key)-1);break;
                    case 'Home':
                        scrollToPage(0);break;
                    case 'End':
                        scrollToPage(allSection - 1);break;
                }
            }

            event.preventDefault();
            action(event.key);
        }

        let touchStartY:number = 0;
        function onTouchStart(this: Window, event: TouchEvent):void {
            touchStartY = event.touches[0].clientY;
        }

        function onTouchMove(this: Window, event: TouchEvent):void {
            if ((event.target as Element).closest('[data-allow-touch]'))
                return;

            event.preventDefault();
            const currentTouchY:number = event.touches[0].clientY;
            const diff:number = touchStartY-currentTouchY;

            if (Math.abs(diff) > 50) {
                if (diff > 0)
                    scrollToPage(currentSection.value + 1);
                else if (diff < 0)
                    scrollToPage(currentSection.value - 1);
                touchStartY = currentTouchY;
            }
        }

        onMounted(() => {
            window.addEventListener('wheel', onWheel, { passive: false });
            window.addEventListener('keydown', onKeydown, { passive: true });
            window.addEventListener('touchstart', onTouchStart, { passive: true });
            window.addEventListener('touchmove', onTouchMove, { passive: false });

            onUnmounted(() => {
                window.removeEventListener('wheel', onWheel);
                window.removeEventListener('keydown', onKeydown);
                window.removeEventListener('touchstart', onTouchStart);
                window.removeEventListener('touchmove', onTouchMove);
            });
        });
        //#endregion

        const animElem:Ref<(HTMLElement|null)[][]>=ref((():(HTMLElement|null)[][]=>{
            let ref:(HTMLElement|null)[][];
            ref = new Array(3);
            ref[0]=new Array(3+4);//section-1 + section0
            ref[1]=new Array(6);
            ref[2]=new Array(6);
            return ref;
        })());
        const animElem_import=ref((e:HTMLElement|null, index1:number, index2:number) => {
            animElem.value[index1][index2]=e;
        });
        async function doAnim(currSect:number,lastSect:number){
            function cssClassAction(index:number,isLoad:boolean){
                switch (index) {
                    case -1:
                        if (animElem.value[0][4]) {
                            //animElem.value[0][4].classList.toggle('animate__faster', !isLoad);
                            animElem.value[0][4].classList.toggle('animate__bounceOutRight', !isLoad);
                            animElem.value[0][4].classList.toggle('animate__rollIn', isLoad);
                        }
                        if (animElem.value[0][5]) {
                            //animElem.value[0][5].classList.toggle('animate__faster', !isLoad);
                            animElem.value[0][5].classList.toggle('animate__bounceOutLeft', !isLoad);
                            animElem.value[0][5].classList.toggle('animate__jackInTheBox', isLoad);
                        }
                        if (animElem.value[0][6]) {
                            //animElem.value[0][6].classList.toggle('animate__faster', !isLoad);
                            animElem.value[0][6].classList.toggle('animate__rollOut', !isLoad);
                            if (isLoad) {
                                animElem.value[0][6].classList.add('animate__delay-2s');
                                animElem.value[0][6].classList.add('animate__fast');

                                animElem.value[0][6].classList.add('animate__bounceInUp');
                                setTimeout(() => {
                                        if (animElem.value[0][6]) {//动画完成后及时清理，避免影响hover
                                            animElem.value[0][6].classList.remove('animate__delay-2s');
                                            animElem.value[0][6].classList.remove('animate__fast');

                                            animElem.value[0][6].classList.remove('animate__bounceInUp');
                                        }
                                    },
                                    3000//animate__delay-2s + animate__fast(800ms) + 200ms容错 = 3000ms
                                );
                            }
                        }
                        break;
                    case 0:
                        if (animElem.value[0][0]) {
                            animElem.value[0][0].classList.toggle('roll-out-2', !isLoad);
                            animElem.value[0][0].classList.toggle('roll-in-2', isLoad);
                        }
                        if (animElem.value[0][1]) {
                            animElem.value[0][1].classList.toggle('title-unload', !isLoad);
                            animElem.value[0][1].classList.toggle('title-load', isLoad);
                            if (isLoad){
                                const titleText: string = '简于壳，精于核，致力于自由';
                                animElem.value[0][1].innerText='';
                                setTimeout(async () => {
                                    for (let i = 0; i < titleText.length; i++) {
                                        if(currentSection.value==0 && animElem.value[0][1]) {
                                            animElem.value[0][1].innerText += titleText.substring(i, i + 1);
                                            await sleep(100);
                                        }else break;
                                    }
                                }, 2000/*title-load 2s动画时间*/);
                            }
                        }
                        if (animElem.value[0][2]) {
                            animElem.value[0][2].classList.toggle('animate__faster', !isLoad);
                            animElem.value[0][2].classList.toggle('animate__bounceOut', !isLoad);
                            if (isLoad) {
                                animElem.value[0][2].classList.add('animate__delay-1s');
                                animElem.value[0][2].classList.add('animate__fast');
                                animElem.value[0][2].classList.add('animate__bounceIn');
                                setTimeout(() => {
                                        if (animElem.value[0][2]) {//动画完成后及时清理，避免影响hover
                                            animElem.value[0][2].classList.remove('animate__delay-1s');
                                            animElem.value[0][2].classList.remove('animate__fast');
                                            animElem.value[0][2].classList.remove('animate__bounceIn');
                                        }
                                    },
                                    2000//animate__delay-1s + animate__fast + 200ms容错 = 2000ms
                                );
                            }
                        }
                        if (animElem.value[0][3]) {
                            animElem.value[0][3].classList.toggle('continue-svg-atten', isLoad);
                        }
                        break;
                    case 1:
                        if (animElem.value[1][0]) {
                            if (isLoad){
                                //使用--animate-delay变量时需要使用animate__delay-1s类在元素中占位以激活，否则变量不生效
                                animElem.value[1][0].style.setProperty('--animate-delay','.2s');
                            }
                            else {
                                animElem.value[1][0].style.setProperty('--animate-delay','0s');
                            }
                            animElem.value[1][0].classList.toggle('animate__backOutLeft', !isLoad);
                            animElem.value[1][0].classList.toggle('animate__backInLeft', isLoad);
                        }
                        if (animElem.value[1][1]) {
                            if (isLoad){
                                animElem.value[1][1].style.setProperty('--animate-delay','.4s');
                            }
                            else {
                                animElem.value[1][1].style.setProperty('--animate-delay','.1s');
                            }
                            if (getComputedStyle(animElem.value[1][1]).getPropertyValue('--left-or-right-in').toString()=='left') {
                                animElem.value[1][1].classList.remove('animate__backOutRight');
                                animElem.value[1][1].classList.remove('animate__backInRight');
                                animElem.value[1][1].classList.toggle('animate__backOutLeft', !isLoad);
                                animElem.value[1][1].classList.toggle('animate__backInLeft', isLoad);
                            }
                            else{
                                animElem.value[1][1].classList.remove('animate__backOutLeft');
                                animElem.value[1][1].classList.remove('animate__backInLeft');
                                animElem.value[1][1].classList.toggle('animate__backOutRight', !isLoad);
                                animElem.value[1][1].classList.toggle('animate__backInRight', isLoad);
                            }
                        }
                        if (animElem.value[1][2]) {
                            animElem.value[1][2].classList.toggle('card0-unload', !isLoad);
                            animElem.value[1][2].classList.toggle('card0-load', isLoad);
                        }
                        if (animElem.value[1][3]) {
                            animElem.value[1][3].classList.toggle('card1-unload', !isLoad);
                            animElem.value[1][3].classList.toggle('card1-load', isLoad);
                        }
                        if (animElem.value[1][4]) {
                            animElem.value[1][4].classList.toggle('card2-unload', !isLoad);
                            animElem.value[1][4].classList.toggle('card2-load', isLoad);
                        }
                        if (animElem.value[1][5]) {
                            animElem.value[1][5].classList.toggle('card3-unload', !isLoad);
                            animElem.value[1][5].classList.toggle('card3-load', isLoad);
                        }
                        break;
                    case 2:
                        if (animElem.value[2][0]){
                            if (isLoad){
                                animElem.value[2][0].style.setProperty('--animate-delay','.3s');
                            }
                            else {
                                animElem.value[2][0].style.setProperty('--animate-delay','0s');
                            }
                            animElem.value[2][0].classList.toggle('animate__bounceOutLeft', !isLoad);
                            animElem.value[2][0].classList.toggle('animate__bounceInRight', isLoad);
                        }
                        if (animElem.value[2][1]){
                            animElem.value[2][1].classList.toggle('item0-unload', !isLoad);
                            animElem.value[2][1].classList.toggle('item0-load', isLoad);
                        }
                        if (animElem.value[2][2]){
                            animElem.value[2][2].classList.toggle('item1-unload', !isLoad);
                            animElem.value[2][2].classList.toggle('item1-load', isLoad);
                        }
                        if (animElem.value[2][3]){
                            animElem.value[2][3].classList.toggle('item2-unload', !isLoad);
                            animElem.value[2][3].classList.toggle('item2-load', isLoad);
                        }
                        if (animElem.value[2][4]){
                            animElem.value[2][4].classList.toggle('item3-unload', !isLoad);
                            animElem.value[2][4].classList.toggle('item3-load', isLoad);
                        }
                        if (animElem.value[2][5]){
                            if (isLoad){
                                animElem.value[2][5].style.setProperty('--animate-delay','1s');
                            }
                            else {
                                animElem.value[2][5].style.setProperty('--animate-delay','0s');
                            }
                            animElem.value[2][5].classList.toggle('animate__flipOutX', !isLoad);
                            animElem.value[2][5].classList.toggle('animate__flipInY', isLoad);
                        }
                        break;
                }
            }
            cssClassAction(lastSect,false);
            cssClassAction(currSect,true);
        }
        onMounted(() => {
            function to0(){
                if (!loadDone.value) {
                    loadDone.value = true;
                    scrollToPage(0);
                }
            }
            if (document.readyState === 'complete') {//如果已加载则直接显示
                to0();
            }
            else {
                doAnim(-1,-100);
                window.addEventListener('load', () => {
                    to0();
                }, {once: true/*执行完后解绑*/});
            }
        });
        function skipLoadClick(){
            loadDone.value = true;
            scrollToPage(0);
        }

        //region section0
        function section0Continue_click(){
            scrollToPage(1);
        }
        //endregion
        return {
            ref, onMounted, onUnmounted, loadDone, skipLoadClick,
            currentSection,
            animElem,animElem_import,
            section0Continue_click,
        };
    }
});