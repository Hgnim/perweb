import {blogData, blogData_rootPath} from "@/views/Blog/ts/blogData.ts";
import blogDataBaseUrl from "@/ts/env/blogDataBaseUrl.ts";
import {isClient} from "@vueuse/core";

//单个博客信息
export type BlogInfo={
    //博客id
    id:number,
    //博客标题
    title:string,
    //博客概要
    summary:string,
    //博客时间，使用ISO 8601标准的时间字符串，例如：2026-05-13T00:11:10+08:00
    time:string,
};

//所有博客的总信息
export type BlogTotalInfo={
    //最小博客id索引
    minIndex:number,
    //最大博客id索引
    maxIndex:number,
}

export function blogListGeter(){
    //是否已经初始化
    let isInit=false;
    //是否正在进行初始化
    let isInitLoading=false;
    //是否正在加载博客列表
    let isBlogListLoading=false;

    //博客总信息
    let blogTotalInfo:BlogTotalInfo|undefined=undefined;
    //当前博客索引值
    let blogIndex:number = -1;

    //初始化
    async function init(){
        isInitLoading=true;

        {
            function locGet(){
                blogTotalInfo = JSON.parse(blogData[`${blogData_rootPath}/info.json`] as string);
            }
            if (isClient) {
                const res = await fetch(`${blogDataBaseUrl}/blogs/info.json`);
                if (res.ok) {
                    blogTotalInfo = await res.json();//远程数据优先，因为远程数据中可能包含更加新的博客索引最大值
                } else {//如果失败则获取本地数据
                    locGet();
                }
            } else {
                locGet();//如果是构建中，为了兼容预渲染，强制使用本地
            }
        }

        blogIndex=blogTotalInfo!.maxIndex;
        isInit=true;

        isInitLoading=false;
    }

    async function getBlogList(num:number=10):Promise<BlogInfo[]|null>{
        if (isInit && !isBlogListLoading) {
            isBlogListLoading=true;
            const bis:BlogInfo[]=[];
            for (let i = 0; i < num; i++) {
                if (blogIndex<blogTotalInfo!.minIndex){
                    break;
                }

                if (isClient){
                    const bi: BlogInfo | undefined = (() => {
                        const infoData = blogData[`${blogData_rootPath}/${blogIndex}/info.json`] as string | undefined;
                        if (infoData != undefined) {
                            return JSON.parse(infoData);
                        } else {
                            return undefined;
                        }
                    })();
                    if (bi != undefined) {//优先检查本地是否有数据，如果没有则获取远程数据
                        bis.push(bi);
                    } else {
                        const res = await fetch(`${blogDataBaseUrl}/blogs/${blogIndex}/info.json`);
                        if (res.ok) {
                            bis.push(await res.json());
                        }
                    }
                }else{//如果是构建中，为了兼容预渲染，强制使用本地
                    bis.push(JSON.parse(blogData[`${blogData_rootPath}/${blogIndex}/info.json`] as string))
                }

                blogIndex--;
            }
            isBlogListLoading=false;
            return bis;
        }
        else
            return null;
    }

    return{
        isInit,isInitLoading,isBlogListLoading,blogIndex,blogTotalInfo,
        init,getBlogList,
    };
}