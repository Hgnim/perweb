// noinspection JSIgnoredPromiseFromCall

import {ref,type Ref, onMounted} from 'vue';
import {sleep} from "@/ts/global/sleep";
import {isProd} from "@/ts/global/packMode";

export function elementAnimationAction(
    currentSection: Ref<number>
){
    const animElem: Ref<(HTMLElement | null)[][]> = ref(((): (HTMLElement | null)[][] => {
        let ref: (HTMLElement | null)[][];
        ref = new Array(4);
        ref[0] = new Array(3 + 4);//section-1 + section0
        ref[1] = new Array(6);
        ref[2] = new Array(5);
        ref[3] = new Array(1);
        return ref;
    })());
    function animElem_import(e: HTMLElement | null, index1: number, index2: number):void{
        if (e instanceof HTMLElement) {
            if (animElem.value[index1])
                animElem.value[index1][index2] = e;
        }
    };

    async function doAnim(currSect: number, lastSect: number) {
        function cssClassAction(index: number, isLoad: boolean) {
            switch (index) {
                case -1:
                    if (animElem.value[0] && animElem.value[0][4]) {
                        //animElem.value[0][4].classList.toggle('animate__faster', !isLoad);
                        animElem.value[0][4].classList.toggle('animate__bounceOutRight', !isLoad);
                        animElem.value[0][4].classList.toggle('animate__rollIn', isLoad);
                    }
                    if (animElem.value[0] && animElem.value[0][5]) {
                        //animElem.value[0][5].classList.toggle('animate__faster', !isLoad);
                        animElem.value[0][5].classList.toggle('animate__bounceOutLeft', !isLoad);
                        animElem.value[0][5].classList.toggle('animate__jackInTheBox', isLoad);
                    }
                    if (animElem.value[0] && animElem.value[0][6]) {
                        //animElem.value[0][6].classList.toggle('animate__faster', !isLoad);
                        animElem.value[0][6].classList.toggle('animate__rollOut', !isLoad);
                        if (isLoad) {
                            if (isProd)
                                animElem.value[0][6].classList.add('animate__delay-2s');
                            animElem.value[0][6].classList.add('animate__fast');

                            animElem.value[0][6].classList.add('animate__bounceInUp');
                            setTimeout(() => {
                                    if (animElem.value[0] && animElem.value[0][6]) {//动画完成后及时清理，避免影响hover
                                        if (isProd)
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
                    if (animElem.value[0] && animElem.value[0][0]) {
                        animElem.value[0][0].classList.toggle('roll-out-2', !isLoad);
                        animElem.value[0][0].classList.toggle('roll-in-2', isLoad);
                    }
                    if (animElem.value[0] && animElem.value[0][1]) {
                        animElem.value[0][1].classList.toggle('title-unload', !isLoad);
                        animElem.value[0][1].classList.toggle('title-load', isLoad);
                        if (isLoad) {
                            const titleText: string = '简于壳，精于核，致力于自由';
                            animElem.value[0][1].innerText = '';
                            setTimeout(async () => {
                                for (let i = 0; i < titleText.length; i++) {
                                    if (currentSection.value == 0 && animElem.value[0] && animElem.value[0][1]) {
                                        animElem.value[0][1].innerText += titleText.substring(i, i + 1);
                                        await sleep(100);
                                    } else break;
                                }
                            }, 2000/*title-load 2s动画时间*/);
                        }
                    }
                    if (animElem.value[0] && animElem.value[0][2]) {
                        animElem.value[0][2].classList.toggle('animate__faster', !isLoad);
                        animElem.value[0][2].classList.toggle('animate__bounceOut', !isLoad);
                        if (isLoad) {
                            animElem.value[0][2].classList.add('animate__delay-1s');
                            animElem.value[0][2].classList.add('animate__fast');
                            animElem.value[0][2].classList.add('animate__bounceIn');
                            setTimeout(() => {
                                    if (animElem.value[0] && animElem.value[0][2]) {//动画完成后及时清理，避免影响hover
                                        animElem.value[0][2].classList.remove('animate__delay-1s');
                                        animElem.value[0][2].classList.remove('animate__fast');
                                        animElem.value[0][2].classList.remove('animate__bounceIn');
                                    }
                                },
                                2000//animate__delay-1s + animate__fast + 200ms容错 = 2000ms
                            );
                        }
                    }
                    if (animElem.value[0] && animElem.value[0][3]) {
                        animElem.value[0][3].classList.toggle('continue-svg-atten', isLoad);
                    }
                    break;
                case 1:
                    if (animElem.value[1] && animElem.value[1][0]) {
                        if (isLoad) {
                            //使用--animate-delay变量时需要使用animate__delay-1s类在元素中占位以激活，否则变量不生效
                            animElem.value[1][0].style.setProperty('--animate-delay', '.2s');
                        } else {
                            animElem.value[1][0].style.setProperty('--animate-delay', '0s');
                        }
                        animElem.value[1][0].classList.toggle('animate__backOutLeft', !isLoad);
                        animElem.value[1][0].classList.toggle('animate__backInLeft', isLoad);
                    }
                    if (animElem.value[1] && animElem.value[1][1]) {
                        if (isLoad) {
                            animElem.value[1][1].style.setProperty('--animate-delay', '.4s');
                        } else {
                            animElem.value[1][1].style.setProperty('--animate-delay', '.1s');
                        }
                        if (getComputedStyle(animElem.value[1][1]).getPropertyValue('--left-or-right-in').toString() == 'left') {
                            animElem.value[1][1].classList.remove('animate__backOutRight');
                            animElem.value[1][1].classList.remove('animate__backInRight');
                            animElem.value[1][1].classList.toggle('animate__backOutLeft', !isLoad);
                            animElem.value[1][1].classList.toggle('animate__backInLeft', isLoad);
                        } else {
                            animElem.value[1][1].classList.remove('animate__backOutLeft');
                            animElem.value[1][1].classList.remove('animate__backInLeft');
                            animElem.value[1][1].classList.toggle('animate__backOutRight', !isLoad);
                            animElem.value[1][1].classList.toggle('animate__backInRight', isLoad);
                        }
                    }
                    if (animElem.value[1] && animElem.value[1][2]) {
                        animElem.value[1][2].classList.toggle('card0-unload', !isLoad);
                        animElem.value[1][2].classList.toggle('card0-load', isLoad);
                    }
                    if (animElem.value[1] && animElem.value[1][3]) {
                        animElem.value[1][3].classList.toggle('card1-unload', !isLoad);
                        animElem.value[1][3].classList.toggle('card1-load', isLoad);
                    }
                    if (animElem.value[1] && animElem.value[1][4]) {
                        animElem.value[1][4].classList.toggle('card2-unload', !isLoad);
                        animElem.value[1][4].classList.toggle('card2-load', isLoad);
                    }
                    if (animElem.value[1] && animElem.value[1][5]) {
                        animElem.value[1][5].classList.toggle('card3-unload', !isLoad);
                        animElem.value[1][5].classList.toggle('card3-load', isLoad);
                    }
                    break;
                case 2:
                    if (animElem.value[2] && animElem.value[2][0]) {
                        if (isLoad) {
                            animElem.value[2][0].style.setProperty('--animate-delay', '.3s');
                        } else {
                            animElem.value[2][0].style.setProperty('--animate-delay', '0s');
                        }
                        animElem.value[2][0].classList.toggle('animate__bounceOutLeft', !isLoad);
                        animElem.value[2][0].classList.toggle('animate__bounceInRight', isLoad);
                    }
                    if (animElem.value[2] && animElem.value[2][1]) {
                        animElem.value[2][1].classList.toggle('item0-unload', !isLoad);
                        animElem.value[2][1].classList.toggle('item0-load', isLoad);
                    }
                    if (animElem.value[2] && animElem.value[2][2]) {
                        animElem.value[2][2].classList.toggle('item1-unload', !isLoad);
                        animElem.value[2][2].classList.toggle('item1-load', isLoad);
                    }
                    if (animElem.value[2] && animElem.value[2][3]) {
                        animElem.value[2][3].classList.toggle('item2-unload', !isLoad);
                        animElem.value[2][3].classList.toggle('item2-load', isLoad);
                    }
                    if (animElem.value[2] && animElem.value[2][4]) {
                        animElem.value[2][4].classList.toggle('item3-unload', !isLoad);
                        animElem.value[2][4].classList.toggle('item3-load', isLoad);
                    }
                    break;
                case 3:
                    if (animElem.value[3] && animElem.value[3][0]) {
                        if (isLoad) {
                            animElem.value[3][0].style.setProperty('--animate-delay', '.4s');
                        } else {
                            animElem.value[3][0].style.setProperty('--animate-delay', '0s');
                        }
                        animElem.value[3][0].classList.toggle('animate__zoomOut', !isLoad);
                        animElem.value[3][0].classList.toggle('animate__zoomIn', isLoad);
                    }
                    if (animElem.value[3] && animElem.value[3][1]) {
                        if (isLoad) {
                            animElem.value[3][1].style.setProperty('--animate-delay', '.6s');

                            animElem.value[3][1].classList.add('animate__fast');

                            animElem.value[3][1].classList.add('animate__flipInY');
                            setTimeout(() => {
                                    if (animElem.value[3] && animElem.value[3][1]) {//动画完成后及时清理，避免影响hover
                                        animElem.value[3][1].classList.remove('animate__fast');

                                        animElem.value[3][1].classList.remove('animate__flipInY');
                                    }
                                },
                                1600//--animate-delay(600ms) + animate__fast(800ms) + 200ms容错 = 1600ms
                            );
                        } else {
                            animElem.value[3][1].style.setProperty('--animate-delay', '0s');
                        }
                        animElem.value[3][1].classList.toggle('animate__faster', !isLoad);
                        animElem.value[3][1].classList.toggle('animate__flipOutX', !isLoad);
                    }
                    break;
            }
        }

        cssClassAction(lastSect, false);
        cssClassAction(currSect, true);
    }

    return{doAnim,animElem_import};
}
export function elementAnimation(
    doAnim:(currSect: number, lastSect: number)=>void,
    loadDone: Ref<boolean>,
    scrollToPage:(pageIndex: number, waitTime?: number | null)=>void
) {


    onMounted(() => {
        function to0() {
            if (!loadDone.value) {
                loadDone.value = true;
                scrollToPage(0);
            }
        }

        if (document.readyState === 'complete') {//如果已加载则直接显示
            to0();
        } else {
            doAnim(-1, -100);
            window.addEventListener('load', () => {
                to0();
            }, {once: true/*执行完后解绑*/});
        }
    });

    function skipLoadClick() {
        loadDone.value = true;
        scrollToPage(0);
    }

    //region section0
    function section0Continue_click() {
        scrollToPage(1);
    }
    //endregion

    return{skipLoadClick,section0Continue_click};
}