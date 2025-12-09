// noinspection JSIgnoredPromiseFromCall

import {defineComponent, ref, Ref, onMounted, onUnmounted} from 'vue';
import conveyorBelt from "@/components/conveyorBelt/conveyorBelt.vue";
export default defineComponent({
    components: {
        conveyorBelt
    },
    setup() {
        //#region 整页滚动
        //当前页面
        const currentSection:Ref<number> = ref(-1);


        let isScrolling:boolean = false;
        const allSection:number = 4;
        function scrollToPage(pageIndex: number) {
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
            event.preventDefault();

            const deltaY:number = event.deltaY;
            if (deltaY > 0)
                scrollToPage(currentSection.value + 1);
            else if (deltaY < 0)
                scrollToPage(currentSection.value - 1);
        }

        function onKeydown(this: Window, event: KeyboardEvent):void {
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
                    case '1':
                    case '2':
                    case '3':
                        scrollToPage(Number(key));break;
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

        const animElem:Ref<(HTMLElement|null)[][]>=ref([[]]);
        const animElem_import=ref((e:HTMLElement|null, index1:number, index2:number) => {
            animElem.value[index1][index2]=e;
        });
        async function doAnim(currSect:number,lastSect:number){
            function cssClassAction(index:number,isLoad:boolean){
                if(animElem.value[0][0]) {
                    animElem.value[0][0].classList.toggle('roll-out-2', !isLoad);
                    animElem.value[0][0].classList.toggle('roll-in-2', isLoad);
                }
                if (animElem.value[0][1]){
                    animElem.value[0][1].classList.toggle('title-unload',!isLoad);
                    animElem.value[0][1].classList.toggle('title-load',isLoad);
                }
                if (animElem.value[0][2]){
                    animElem.value[0][2].classList.toggle('animate__bounceOut',!isLoad);
                    if (isLoad) {
                        animElem.value[0][2].classList.add('animate__delay-1s');
                        animElem.value[0][2].classList.add('animate__bounceIn');
                        setTimeout(() => {
                            if (animElem.value[0][2]) {//动画完成后及时清理，避免影响hover
                                animElem.value[0][2].classList.remove('animate__delay-1s');
                                animElem.value[0][2].classList.remove('animate__bounceIn');
                            }
                        },
                            2000//animate__delay-1s + animate__fast + 200ms容错 = 2000ms
                        );
                    }
                }
                if (animElem.value[0][3]){
                    animElem.value[0][3].classList.toggle('continue-svg-atten',isLoad);
                }
            }
            switch (lastSect){
                case 0:
                    cssClassAction(0,false);
                    break;
            }
            switch (currSect){
                case 0:
                    cssClassAction(0,true);
                    break;
            }
        }
        onMounted(() => {
            function to0(){
                scrollToPage(0);
            }
            if (document.readyState === 'complete') {//如果已加载则直接显示
                to0();
            }
            else {
                window.addEventListener('load', () => {
                    to0();
                }, {once: true/*执行完后解绑*/});
            }
        });

        //#region section0
        function section0Continue_click(){
            scrollToPage(1);
        }
        //#endregion
        return {
            ref, onMounted, onUnmounted,
            currentSection,
            animElem,animElem_import,
            section0Continue_click,
        };
    }
});