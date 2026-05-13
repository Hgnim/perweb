<script setup lang="ts">
import {useRoute} from "vue-router";
//import {onMounted, ref, type Ref} from "vue";
//import blogDataBaseUrl from "@/ts/env/blogDataBaseUrl.ts";
import {blogData, blogData_rootPath} from "@/views/Blog/ts/blogData.ts";
import {marked} from "marked";
import type {BlogInfo} from "@/views/Blog/ts/blog.ts";
import {getFormatTime} from "@/utils/date.ts";

const route = useRoute();

//const blogContent:Ref<HTMLDivElement|null>=ref(null);

//将内容赋值放在onMounted中时，预渲染将不会将内容渲染至输出的html中
/*onMounted(async ()=>{
  if (blogContent.value){
    blogContent.value.innerText=blogData[`${blogData_rootPath}/${route.name!.toString().split('-')[1]}/content.md`] as string;//await (await fetch(`${blogDataBaseUrl}/blogs/${route.params.id}/content.md`)).text();
  }
});*/

const blogInfo:BlogInfo=
    JSON.parse(
        blogData[`${blogData_rootPath}/${Number(route.name!.toString().split('-')[1])}/info.json`] as string
    );

function getContent(){
  return marked(
      blogData[`${blogData_rootPath}/${blogInfo.id}/content.md`] as string
  );
}
</script>

<template>
  <!--<div>ID：{{blogInfo.id}}</div>-->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="mt-2" v-html="getContent()"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <em><small>{{getFormatTime(blogInfo.time)}}</small></em>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>