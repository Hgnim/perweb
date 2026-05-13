<script setup lang="ts">
import {useTitle} from "@vueuse/core";
import {type BlogInfo, blogListGeter} from "@/views/Blog/ts/blog.ts";
import {ref, type Ref} from "vue";

useTitle('Hagnimik的博客');

const {init:blgInit,getBlogList}=blogListGeter();
blgInit().then(()=>{
  getBlogList().then((val)=>{
    if (val!=null){
      val.forEach((v)=>{
        blogList.value.push(v);//使用push减小性能开销
      });
    }
  });
});

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
          <a v-for="(bi,index) in blogList" :key="index"
             href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{bi.title}}</h5>
            </div>
            <p class="mb-1">{{bi.summary}}</p>
            <div class="d-flex w-100 justify-content-end">
              <small class="text-body-secondary">{{bi.time}}</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>