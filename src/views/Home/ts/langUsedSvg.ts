import {type Ref, ref} from "vue";
import {isDev} from "@/ts/env/packMode.ts";

export type loadLangUsedSvg_optType={
    maybeIgnore_name:string[],//也许忽略的目标名，为使结果呈双数，将对也许忽略的项目进行选择性忽略，但尽可能往多的方向进行忽略。
}

export async function loadLangUsedSvg(
    langUsed:Ref<HTMLElement|null>,
    panelLeft:panelType,
    panelRight:panelType,
    opt:loadLangUsedSvg_optType
){
    if (!langUsed.value || !panelLeft.value || !panelRight.value) {
        if (isDev) throw new Error('langUsed未加载？！');
        else return;
    }

    const imgLoader=langUsed.value.querySelector('.img-loader')!;
    //const panelLeft=langUsed.value.querySelector('.panel.left')!;
    //const panelRight=langUsed.value.querySelector('.panel.right')!;

    const resp = await fetch('https://fastly.jsdelivr.net/gh/Hgnim/Hgnim@latest/profile-summary-card-output/transparent/2-most-commit-language.svg');
    if (resp.ok){
        const svgEle = new DOMParser().parseFromString(await resp.text(), 'image/svg+xml').documentElement;
        if (isDev) console.debug(svgEle);

        const svgRect=svgEle.getElementsByTagName('rect');
        const svgText=svgEle.getElementsByTagName('text');

        const allEl:HTMLDivElement[]=[];
        {
            let maybeIgnore_ignoredNum:number=0;
            let maybeIgnore_ignoredDone:boolean=false;
            for (let i = 1/*从1开始，忽略开头的0*/; i < svgRect.length; i++) {
                if (svgRect[i] == undefined || svgText[i] == undefined) {
                    if (isDev) throw Error('svgRect[i]或svgText[i]不存在');
                    else return;
                }
                const newel = document.createElement('div');
                newel.classList = `lang lang-${i - 1 - maybeIgnore_ignoredNum}`;
                {
                    const nel = document.createElement('span');
                    nel.classList = 'lang-txt';
                    nel.innerText = svgText[i]!.innerHTML.split(' ')[0]!;
                    newel.appendChild(nel);

                    if(!maybeIgnore_ignoredDone) {
                        /*
                        * 目前忽略指定语言后其中的百分比数值不会变化
                        * 后续计划添加将忽略的语言项的百分值总和放入一个新的名为Other的项中
                        * 或者根据忽略的语言项的百分值重新计算所有百分值，该方案相对繁琐
                        */
                        let checkPass:boolean=false;
                        const nelName:string = nel.innerText;
                        for(let igName of opt.maybeIgnore_name){
                            if (nelName==igName) {
                                checkPass = true;
                                break;
                            }
                        }
                        if (checkPass) {
                            if ((svgRect.length-1) % 2 == 0) {//检查条件，对可选忽略项（也许忽略项）进行忽略
                                if (maybeIgnore_ignoredNum <
                                    (
                                        (opt.maybeIgnore_name.length % 2 == 0)
                                            ? opt.maybeIgnore_name.length
                                            : opt.maybeIgnore_name.length - 1
                                    )
                                ) {
                                    maybeIgnore_ignoredNum++;
                                    continue;
                                } else maybeIgnore_ignoredDone = true;
                            } else {
                                if (maybeIgnore_ignoredNum <
                                    (
                                        (opt.maybeIgnore_name.length % 2 == 0)
                                            ? opt.maybeIgnore_name.length - 1
                                            : opt.maybeIgnore_name.length
                                    )
                                ) {
                                    maybeIgnore_ignoredNum++;
                                    continue;
                                } else maybeIgnore_ignoredDone = true;
                            }
                        }
                    }
                }
                let widthVal: string;
                {
                    const nel = document.createElement('span');
                    nel.classList = 'lang-val';
                    const v = svgText[i]!.innerHTML.split(' ')[1]!;
                    widthVal = v.substring(1, v.length - 1);
                    nel.innerText = widthVal;
                    newel.appendChild(nel);
                }
                newel.style.setProperty('--lang-bg-color', svgRect[i]!.getAttribute('fill'))
                {
                    const wval = (Number(widthVal.substring(0, widthVal.length - 1)) + 30).toString() + '%';
                    //newel.style.width = wval;
                    newel.style.setProperty('--lang-width', wval);
                }

                allEl.push(newel);
            }
        }
        console.log(allEl)
        if (allEl) {
            for (let i = 0; i < allEl.length; i++) {
                if (allEl[i]) {
                    if (i % 2 == 0) {
                        //panelLeft.value.appendChild(newel);
                        panelLeft.value.child.push({
                            innerHTML: allEl[i]!.innerHTML,
                            classList: allEl[i]!.classList.toString(),
                            style: allEl[i]!.getAttribute('style') || '',
                        });
                    } else {
                        //panelRight.value.appendChild(newel);
                        panelRight.value.child.push({
                            innerHTML: allEl[i]!.innerHTML,
                            classList: allEl[i]!.classList.toString(),
                            style: allEl[i]!.getAttribute('style') || '',
                        });
                    }
                }
            }
        }

        imgLoader.classList.add('loaded');
    }
    else{
        imgLoader.classList.add('error');
    }
}
export type panelType=
    Ref<{
        e: HTMLElement|null,
        child: Array<{
            innerHTML:string,
            classList:string,
            style:string,
        }>
    }>;
export function langUsedSvg(){
    const langUsed:Ref<HTMLElement|null>=ref(null);
    const panelLeft:panelType=ref({e:null, child:[]});
    const panelRight:panelType=ref({e:null, child:[]});
    return {langUsed,panelLeft,panelRight};
}