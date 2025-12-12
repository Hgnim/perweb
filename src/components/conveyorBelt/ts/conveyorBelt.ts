import { defineComponent,ref,PropType } from 'vue';
export default defineComponent({
    name: 'conveyorBelt',
    props: {
        images:{
            type: Array as PropType<string[]>,
            required: true,
            default: []//图片
        },
        style:{
            type: Object,
            required: false,
            default:{
                conveyorBeltWidth:'800px',//传送带宽度
                conveyorBeltHeight:'100px',//传送带高度
                animTime: '16s',//传送带速度。如果waitNextTime为0，则该速度的单位必须使用秒，
            }
        },
        objNumId:{
            type: Number,
            required: false,
            default:0 //添加目标时寻找指定类的元素时的序号ID，用于多个组件
        },
        waitNextTime:{
            type: Number,
            required: false,
            default:0 //释放下一个对象时等待的时间，为0则自动计算时间。单位：毫秒
        }
    },
    methods: {
    },
    computed: {
        styleObject():object {
            return {
                '--conveyorBelt_anim-time': this.style.animTime,
                '--conveyorBeltWidth': this.style.conveyorBeltWidth,
                '--conveyorBeltHeight': this.style.conveyorBeltHeight,
            };
        }
    },
    setup(props) {},
    mounted(){
        {
            function sleep(interval:number) {
                return new Promise((resolve) => {
                    setTimeout(resolve, interval);
                });
            }
            const inputImages:string[]=this.images;
            const objNumId:number=this.objNumId;
            const animTime:string = this.style.animTime;
            const waitNextTime:number =
                this.waitNextTime != 0
                    ? this.waitNextTime
                    : (()=>{
                        return (parseFloat(animTime)*1000)/16;
                    })();
            let imgNum:number=inputImages.length;

            async function AddConveyorObj() {
                imgNum++;
                if (imgNum>=inputImages.length)
                    imgNum=0;

                const conveyorObj = (() => {
                    const element = document.createElement('div');
                    element.className = 'conveyor';
                    return element;
                })();
                conveyorObj.append((() => {
                    const itemE = document.createElement('div');
                    itemE.className = 'item';
                    itemE.append((() => {
                        const imgE = document.createElement('img');
                        imgE.src = inputImages[imgNum];
                        return imgE;
                    })());
                    return itemE;
                })());
                document.querySelectorAll(".conveyor-belt")[objNumId]?.append(conveyorObj);

                function conveyorObj_animOver() {
                    conveyorObj.removeEventListener('animationend', conveyorObj_animOver);
                    conveyorObj.remove();
                }conveyorObj.addEventListener('animationend', conveyorObj_animOver);

                conveyorObj.style.animation = `moveConveyor ${animTime} linear`;

                await sleep(waitNextTime);
                (()=>{
                    AddConveyorObj();
                })();
            }AddConveyorObj();
        }
    }
});