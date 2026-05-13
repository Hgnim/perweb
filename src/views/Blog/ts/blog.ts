//import blogDataBaseUrl from "@/ts/env/blogDataBaseUrl.ts";
import {blogData, blogData_rootPath} from "@/views/Blog/ts/blogData.ts";

//单个博客信息
export type BlogInfo={
    //博客id
    id:number,
    //博客标题
    title:string,
    //博客概要
    summary:string,
    //博客时间
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
        blogTotalInfo=JSON.parse(blogData[`${blogData_rootPath}/info.json`] as string);
        blogIndex=blogTotalInfo!.maxIndex;
        isInit=true;
        /*const res=await fetch(`${blogDataBaseUrl}/blogs/info.json`);
        if (res.ok){
            blogTotalInfo=await res.json();
            blogIndex=blogTotalInfo!.maxIndex;
            isInit=true;
        }*/
        isInitLoading=false;
    }

    async function getBlogList(num:number=10):Promise<BlogInfo[]|null>{
        if (isInit && !isBlogListLoading) {
            isBlogListLoading=true;
            const bi:BlogInfo[]=[];
            for (let i = 0; i < num; i++) {
                if (blogIndex<blogTotalInfo!.maxIndex){
                    break;
                }

                /*const res=await fetch(`${blogDataBaseUrl}/blogs/${blogIndex}/info.json`);
                if (res.ok){
                    bi.push(await res.json());
                }*/
                bi.push(JSON.parse(blogData[`${blogData_rootPath}/${blogIndex}/info.json`] as string))
                blogIndex--;
            }
            isBlogListLoading=false;
            return bi;
        }
        else
            return null;
    }

    return{
        isInit,isInitLoading,isBlogListLoading,blogIndex,blogTotalInfo,
        init,getBlogList,
    };
}