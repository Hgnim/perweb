import {blogData, blogData_rootPath} from "@/views/Blog/ts/blogData.ts";
import type {BlogTotalInfo} from "@/views/Blog/ts/blog.ts";
import {isClient} from "@vueuse/core";
import blogDataBaseUrl from "@/ts/env/blogDataBaseUrl.ts";

export default await (async ()=>{
   const br=[
       {
           path: '/blog',
           name: 'blog',
           component: ()=>import('@/views/Blog/Blog.vue'),
       },
   ];

   const bti:BlogTotalInfo= await (async ()=>{
       function locGet(){
           return JSON.parse(blogData[`${blogData_rootPath}/info.json`] as string);
       }
      if (isClient){
          const res = await fetch(`${blogDataBaseUrl}/blogs/info.json`);
          if (res.ok)
              return await res.json();//远程数据优先，因为远程数据中可能包含更加新的博客索引最大值
          else
              return locGet();//如果失败则获取本地数据
      } else return locGet();//如果是构建中，为了兼容预渲染，强制使用本地
   })();
   for (let i=bti.minIndex;i<=bti.maxIndex;i++){//根据博客数量动态添加路由
       br.push({
           path: `/blog/content/${i}`,
           name: `blogContent-${i}`,
           component: ()=>import('@/views/Blog/views/BlogContent/BlogContent.vue'),
       });
   }
   return br;
})();