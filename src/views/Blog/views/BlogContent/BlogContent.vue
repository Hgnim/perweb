<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref, type Ref} from "vue";
import blogDataBaseUrl from "@/ts/env/blogDataBaseUrl.ts";
import {blogData, blogData_rootPath} from "@/views/Blog/ts/blogData.ts";
import {marked} from "marked";
import {type BlogInfo, BlogInfoTypeLabelDict, CreatorContriLevelDict} from "@/views/Blog/ts/blog.ts";
import {getFormatTime} from "@/utils/date.ts";
import {isClient} from "@vueuse/core";

const route = useRoute();

const blogContent:Ref<HTMLDivElement|null>=ref(null);
const timeText:Ref<HTMLDivElement|null>=ref(null);
const creatorContriLevel:Ref<HTMLDivElement|null>=ref(null);
const blogTypes:Ref<string[]>=ref([]);

//用于在获取到blogInfo实例之前使用的id，未来blogInfo.id的值将与该值一致
const blogId=Number(route.name!.toString().split('-')[1]);

//#region 仅用于预渲染
const buiBlogInfo:BlogInfo|null=(()=>{//仅构建时执行，用于预渲染
  if (!isClient) {
    return JSON.parse(
        blogData[`${blogData_rootPath}/${blogId}/info.json`] as string
    );
  }else{
    return null;
  }
})();

function getLocContent(id:number){
  //批注：如果将内容赋值放在onMounted中时，预渲染将不会将内容渲染至输出的html中
  const locData=blogData[`${blogData_rootPath}/${id}/content.md`] as string|undefined;
  if (locData!=undefined)
    return marked(locData);
  else
    return null;
}
//#endregion

let blogInfo:BlogInfo;
async function blogInfo_init(){
  const locData=blogData[`${blogData_rootPath}/${blogId}/info.json`] as string|undefined;
  if(locData!=undefined){
    blogInfo=JSON.parse(locData);//本地优先
  }
  else{
    const res = await fetch(`${blogDataBaseUrl}/blogs/${blogId}/info.json`);
    if (res.ok) {
      blogInfo=await res.json();//如果本地没有最新数据，则获取远程数据
    }
  }
}

onMounted(async ()=>{
  if (isClient) {//仅在客户端执行
    await blogInfo_init();
    if (blogContent.value) {
      {
        const locContent = await getLocContent(blogInfo.id);
        if (locContent != undefined) {//本地数据优先
          blogContent.value.innerHTML = locContent;
        } else {//如果本地没有最新数据则获取远程的数据
          blogContent.value.innerHTML = await marked(
              await (await fetch(`${blogDataBaseUrl}/blogs/${blogInfo.id}/content.md`)).text()
          );
        }
      }
    }
    if (timeText.value){
      timeText.value.innerText = getFormatTime(blogInfo.time);
    }
    if (creatorContriLevel.value){
      creatorContriLevel.value.style.setProperty('background',`var(--type-box-creator-contribution-level-bg-${blogInfo.creatorContriLevel})`);
      creatorContriLevel.value.innerText=CreatorContriLevelDict[blogInfo.creatorContriLevel] || '';

      blogInfo.type.forEach((t)=>{
        blogTypes.value.push(BlogInfoTypeLabelDict[t]||t);
      })
    }
  }
});
</script>

<template>
  <!--<div>ID：{{blogInfo.id}}</div>-->
  <div class="container">
    <div class="row mt-2">
      <div class="col-10 mx-auto">
        <div class="d-flex">
          <div ref="creatorContriLevel" class="type-box">test</div>
          <div v-for="(bt,index) in blogTypes" :key="index"
               class="type-box">{{bt}}</div>
        </div>
      </div>
    </div>
    <div class="row mt-1">
      <div class="col-10 mx-auto">
        <div ref="blogContent" class="text-start" v-html="(!isClient)?getLocContent(buiBlogInfo!.id):''"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <em><small ref="timeText">{{(!isClient)?getFormatTime(buiBlogInfo!.time):''}}</small></em>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.type-box{
  position: relative;
  padding: .2rem .4rem;
  margin: .2rem;
  background: var(--type-box-bg);
  border-radius: .5rem;
}
</style>
<style scoped lang="scss" src="@/assets/scss/color/view/Blog/BlogContent.scss"></style>