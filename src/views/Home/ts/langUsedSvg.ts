import {type Ref, ref} from "vue";
import {isDev} from "@/ts/global/packMode.ts";

export async function loadLangUsedSvg(
    langUsed:Ref<HTMLElement|null>,
    panelLeft:panelType,
    panelRight:panelType
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

        const svgRect=svgEle.getElementsByTagName('rect');
        const svgText=svgEle.getElementsByTagName('text');

        for (let i=1/*从1开始，忽略开头的0*/; i<svgRect.length; i++){
            if (svgRect[i]==undefined || svgText[i]==undefined){
                if (isDev) throw Error('svgRect[i]或svgText[i]不存在');
                else return;
            }
            const newel=document.createElement('div');
            newel.classList=`lang lang-${i-1}`;
            {
                const nel=document.createElement('span');
                nel.classList='lang-txt';
                nel.innerText=svgText[i]!.innerHTML.split(' ')[0]!;
                newel.appendChild(nel);
            }
            let widthVal:string;
            {
                const nel=document.createElement('span');
                nel.classList='lang-val';
                const v=svgText[i]!.innerHTML.split(' ')[1]!;
                widthVal=v.substring(1,v.length-1);
                nel.innerText=widthVal;
                newel.appendChild(nel);
            }
            newel.style.setProperty('--lang-bg-color',svgRect[i]!.getAttribute('fill'))
            {
                const wval=(Number(widthVal.substring(0, widthVal.length - 1)) + 30).toString() + '%';
                //newel.style.width = wval;
                newel.style.setProperty('--lang-width',wval);
            }
            if (i%2==1) {
                //panelLeft.value.appendChild(newel);
                panelLeft.value.child.push({
                    innerHTML: newel.innerHTML,
                    classList: newel.classList.toString(),
                    style: newel.getAttribute('style') || '',
                });
            }
            else{
                //panelRight.value.appendChild(newel);
                panelRight.value.child.push({
                    innerHTML: newel.innerHTML,
                    classList: newel.classList.toString(),
                    style: newel.getAttribute('style') || '',
                });
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