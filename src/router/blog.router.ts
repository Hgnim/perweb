import {blogData, blogData_rootPath} from "@/views/Blog/ts/blogData.ts";
import type {BlogTotalInfo} from "@/views/Blog/ts/blog.ts";

export default await (async ()=>{
   const br=[
       {
           path: '/blog',
           name: 'blog',
           component: ()=>import('@/views/Blog/Blog.vue'),
       },
   ];

   const bti:BlogTotalInfo= JSON.parse(blogData[`${blogData_rootPath}/info.json`] as string);
   for (let i=bti.minIndex;i<=bti.maxIndex;i++){//根据博客数量动态添加路由
       br.push({
           path: `/blog/content/${i}`,
           name: `blogContent-${i}`,
           component: ()=>import('@/views/Blog/views/BlogContent/BlogContent.vue'),
       });
   }
   return br;
})();