<script setup lang="ts">
import {useTitle} from "@vueuse/core";
import {type BlogInfo, blogListGeter} from "@/views/Blog/ts/blog.ts";
import {ref, type Ref} from "vue";
import {getFromNowTime} from "@/utils/date.ts";
import {useRoute} from "vue-router";

useTitle('Hagnimik的博客');

const route = useRoute();

const {init:blgInit,getBlogList}=blogListGeter();
blgInit().then(()=>{
  getBL();
});

const blogTypesFilter:string[]=(()=>{
  const q=route.query.types;
  if (q!=undefined){
    return q.toString().split(',');
  }else return ['all'];
})()

function getBL(){
  getBlogList(10,blogTypesFilter).then((val)=>{
    if (val!=null){
      val.forEach((v)=>{
        blogList.value.push(v);//使用push减小性能开销
      });
    }
  });
}

const blogList:Ref<BlogInfo[]>=ref([]);
</script>

<template>
  <div class="container">
    <div class="row mt-1">
      <div class="col-12 text-center">
        <h1>博客</h1>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-10 mx-auto">
        <div class="list-group">
          <router-link v-for="(bi,index) in blogList" :key="index"
                       :to="{ name: `blogContent-${bi.id}` }" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{bi.title}}</h5>
            </div>
            <p class="mb-1">{{bi.summary}}</p>
            <div class="d-flex w-100 justify-content-end">
              <small class="text-body-secondary">{{getFromNowTime(bi.time)}}</small>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>