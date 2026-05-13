<script setup lang="ts">
import {useRoute} from "vue-router";
//import {onMounted, ref, type Ref} from "vue";
//import blogDataBaseUrl from "@/ts/env/blogDataBaseUrl.ts";
import {blogData, blogData_rootPath} from "@/views/Blog/ts/blogData.ts";

const route = useRoute();

//const blogContent:Ref<HTMLDivElement|null>=ref(null);

//将内容赋值放在onMounted中时，预渲染将不会将内容渲染至输出的html中
/*onMounted(async ()=>{
  if (blogContent.value){
    blogContent.value.innerText=blogData[`${blogData_rootPath}/${route.name!.toString().split('-')[1]}/content.md`] as string;//await (await fetch(`${blogDataBaseUrl}/blogs/${route.params.id}/content.md`)).text();
  }
});*/
</script>

<template>
  <div>ID：{{ route.name!.toString().split('-')[1] }}</div>
  <div ref="blogContent">{{blogData[`${blogData_rootPath}/${route.name!.toString().split('-')[1]}/content.md`] as string}}</div>
</template>

<style scoped lang="scss">

</style>