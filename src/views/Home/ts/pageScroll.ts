import {ref,type Ref, onMounted, onUnmounted} from 'vue';
import {isProd} from "@/ts/global/packMode";

export function pageScrollPublicVar(){
    //是否加载完毕
    const loadDone: Ref<boolean> = ref(false);
    //当前页面
    const currentSection: Ref<number> = ref(-1);
    //页面进度
    const sectionProgress: Ref<HTMLElement | null> = ref(null);

    return{loadDone,currentSection,sectionProgress};
}
//整页滚动
export function pageScroll(
    loadDone: Ref<boolean>,
    currentSection: Ref<number>,
    sectionProgress: Ref<HTMLElement | null>,
    doAnim:(currSect: number, lastSect: number)=>void
) {
    let isScrolling: boolean = false;
    //页面总数
    const allSection: number = 4;
    /**
     * 页面滚动
     * @param pageIndex 滚动至目标索引
     * @param waitTime 切换至目标页面后的强制等待时间，在等待时间内无法进行滚动操作。如果留空或为null则根据目标页面使用其默认值
     */
    function scrollToPage(pageIndex: number, waitTime: number | null = null) {
        if (!loadDone.value) return;
        if (pageIndex < 0 || pageIndex >= allSection) return;
        if (isScrolling) return;
        if (pageIndex > currentSection.value)
            if (!(pageIndex < allSection)) return;
            else if (pageIndex < currentSection.value)
                if (!(pageIndex > 0)) return;
                else return;
        isScrolling = true;

        if (sectionProgress.value) {
            const value: number = ((pageIndex + 1) / allSection) * 100;
            const spsb: HTMLElement | null = sectionProgress.value.querySelector('.progress-bar');
            sectionProgress.value.setAttribute('aria-valuenow', value.toString());
            if (spsb) {
                spsb.style.width = `${value}%`;
                spsb.innerText = `${pageIndex + 1}/${allSection}`;
            }
        }
        doAnim(pageIndex, currentSection.value);
        currentSection.value = pageIndex;

        if (waitTime == null) {
            if (isProd) {
                switch (pageIndex) {//对应各个页面所有动画执行完成的时间
                    case 0:
                        waitTime = 2300;
                        break;
                    case 1:
                        waitTime = 2800;
                        break;
                    case 2:
                        waitTime = 1900;
                        break;
                    case 3:
                        waitTime = 1400;
                        break;
                    default:
                        waitTime = 800;
                        break;//默认使用--section-transition的动画时间
                }
            } else {
                waitTime = 0;
            }
        }
        setTimeout(() => {
            isScrolling = false;
        }, waitTime)
    }

    function onWheel(this: Window, event: WheelEvent): void {
        if ((event.target as Element).closest('[data-allow-wheel]'))
            return;//给需要滚动的元素或其父元素添加标签data-allow-wheel

        event.preventDefault();//阻止默认行为

        const deltaY: number = event.deltaY;
        if (deltaY > 0)
            scrollToPage(currentSection.value + 1);
        else if (deltaY < 0)
            scrollToPage(currentSection.value - 1);
    }

    function onKeydown(this: Window, event: KeyboardEvent): void {
        if ((event.target as Element).closest('[data-allow-keydown]'))
            return;//基本同理于onWheel

        function action(key: string) {
            switch (key) {
                case 'ArrowDown':
                case 'PageDown':
                case ' ':
                    scrollToPage(currentSection.value + 1);
                    break;
                case 'ArrowUp':
                case 'PageUp':
                    scrollToPage(currentSection.value - 1);
                    break;
                case '0':
                    scrollToPage(0);
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                    scrollToPage(Number(key) - 1);
                    break;
                case 'Home':
                    scrollToPage(0);
                    break;
                case 'End':
                    scrollToPage(allSection - 1);
                    break;
            }
        }

        event.preventDefault();
        action(event.key);
    }

    let touchStartY: number = 0;

    function onTouchStart(this: Window, event: TouchEvent): void {
        if (event.touches[0])
            touchStartY = event.touches[0].clientY;
    }

    function onTouchMove(this: Window, event: TouchEvent): void {
        if ((event.target as Element).closest('[data-allow-touch]'))
            return;
        if (!event.touches[0]) return;

        event.preventDefault();
        const currentTouchY: number = event.touches[0].clientY;
        const diff: number = touchStartY - currentTouchY;

        if (Math.abs(diff) > 50) {
            if (diff > 0)
                scrollToPage(currentSection.value + 1);
            else if (diff < 0)
                scrollToPage(currentSection.value - 1);
            touchStartY = currentTouchY;
        }
    }

    onMounted(() => {
        window.addEventListener('wheel', onWheel, {passive: false});
        window.addEventListener('keydown', onKeydown, {passive: true});
        window.addEventListener('touchstart', onTouchStart, {passive: true});
        window.addEventListener('touchmove', onTouchMove, {passive: false});

        onUnmounted(() => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKeydown);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
        });
    });

    return{scrollToPage};
}